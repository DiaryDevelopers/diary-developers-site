(function() {
    const savedTheme = localStorage.getItem("theme") || "system";
    const root = document.documentElement;

    if (savedTheme.startsWith("#")) {
        root.style.setProperty("--custom-theme", savedTheme);
        root.setAttribute("data-theme", localStorage.getItem("baseTheme") || "dark");
    } else {
        const theme = savedTheme === "system"
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            : savedTheme;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("baseTheme", theme);
    }
})();