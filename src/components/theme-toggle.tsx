"use client";

export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light and dark theme" title="Toggle light and dark theme">
      <span className="theme-toggle__dark" aria-hidden="true">☾</span>
      <span className="theme-toggle__light" aria-hidden="true">☀</span>
      <span className="theme-toggle__text theme-toggle__dark">Dark</span>
      <span className="theme-toggle__text theme-toggle__light">Light</span>
    </button>
  );
}
