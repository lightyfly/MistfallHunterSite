import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

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
    ["/codes", "暂无官方可验证兑换码"],
    ["/privacy-policy", "Privacy Policy"],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    if (pathname === "/") {
      assert.match(html, /youtube-nocookie\.com\/embed\/YiMyw3qVnVE/);
      assert.match(html, /autoplay=1&amp;mute=1&amp;controls=0/);
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

  for (const pathname of ["/ru", "/de", "/pt-br", "/ru/classes/overview", "/de/codes", "/pt-br/privacy-policy"]) {
    const localizedResponse = await render(pathname);
    assert.equal(localizedResponse.status, 200, pathname);
  }
});
