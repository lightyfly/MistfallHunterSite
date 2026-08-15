"use client";

import { useEffect, useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("vv-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("vv-theme-change", onChange);
  };
}

function getSnapshot() { return window.localStorage.getItem("vv-theme") ?? "dark"; }
function getServerSnapshot() { return "dark"; }

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const light = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  function toggleTheme() {
    const next = !light;
    window.localStorage.setItem("vv-theme", next ? "light" : "dark");
    window.dispatchEvent(new Event("vv-theme-change"));
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">{light ? "☼" : "☾"}</button>;
}
