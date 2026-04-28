function onSectionStable(id: string) {
  if (window.location.hash === `#${id}`) {
    const el = document.getElementById(id);
    if (!el) return;

    // Wait one more frame for safety
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }
}

export { onSectionStable };
