import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const keywordArticles = [
  ...JSON.parse(fs.readFileSync(new URL("../lib/keyword-pages.json", import.meta.url), "utf8")).articles,
  ...JSON.parse(fs.readFileSync(new URL("../lib/keyword-pages-extra.json", import.meta.url), "utf8")).articles,
];

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the requested core routes", async () => {
  const routes = [
    ["/", "Mistfall Hunter"],
    ["/classes", "Classes Overview"],
    ["/classes/overview", "Six Playable Classes"],
    ["/classes/builds", "Class Builds"],
    ["/beginner-guide", "Beginner Guide"],
    ["/extraction", "How Extraction Works"],
    ["/bosses", "Mist Lords"],
    ["/codes", "暂无官方可验证兑换码"],
    ["/maps-and-loot", "Maps, Bosses"],
    ["/tier-list", "Tier List"],
    ["/updates", "Official Updates"],
    ["/community", "Official Community"],
    ["/privacy-policy", "Privacy Policy"],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    if (pathname === "/") {
      assert.match(html, /pst-2607\.mp4/);
      assert.match(html, /autoPlay/);
    }
  }
});

test("server-renders multilingual routes and MDX article", async () => {
  const response = await render("/zh/classes/overview");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /6 个可玩职业/);
  assert.match(html, /已确认信息/);
  assert.match(html, /Mistfall Hunter/);

  for (const pathname of [
    "/ru",
    "/de",
    "/pt-br",
    "/ru/classes/overview",
    "/de/codes",
    "/pt-br/privacy-policy",
    "/zh/guides",
    "/zh/beginner-guide",
    "/zh/extraction",
    "/zh/bosses",
    "/zh/codes",
    "/zh/tier-list",
    "/zh/updates",
    "/zh/community",
    "/zh/maps-and-loot",
  ]) {
    const localizedResponse = await render(pathname);
    assert.equal(localizedResponse.status, 200, pathname);
  }
});

test("server-renders keyword index, article pages, and localized keyword pages", async () => {
  assert.equal(keywordArticles.length, 20);
  for (const article of keywordArticles) {
    assert.ok(article.title.length >= 40 && article.title.length <= 60, article.slug);
    assert.ok(article.description.length >= 140 && article.description.length <= 160, article.slug);
    assert.match(article.description.toLowerCase(), new RegExp(article.keyword.toLowerCase()), article.slug);
  }

  for (const pathname of ["/guides", "/guides/mistfall-hunter-guide", "/guides/mistfall-hunter-codes", "/guides/mistfall-hunter-review", "/zh/guides/mistfall-hunter-codes"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, /Mistfall Hunter/);
    assert.match(html, /待确认|暂无/);
  }

  for (const article of keywordArticles) {
    for (const pathname of [`/guides/${article.slug}`, `/zh/guides/${article.slug}`]) {
      const response = await render(pathname);
      assert.equal(response.status, 200, pathname);
    }
  }
});
