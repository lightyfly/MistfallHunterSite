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
    ["/", "VV: ULTIMATUM"],
    ["/races", "Races Overview"],
    ["/races/shinigami", "Shinigami Guide"],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("server-renders the Chinese routes and MDX article", async () => {
  const response = await render("/zh/races/shinigami");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /死神指南/);
  assert.match(html, /斩魄刀进化/);
  assert.match(html, /中文|EN/);
});
