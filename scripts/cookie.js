(function applySavedTheme() {
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

document.addEventListener("DOMContentLoaded", function () {
    const themeOptions = document.querySelectorAll(".__select__input");
    const selectTitle = document.querySelector(".__select__title");
    const customColorPicker = document.querySelector("#customThemePicker");
    const root = document.documentElement;

    function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function setTheme(theme, save = true) {
        if (theme === "system") {
            theme = getSystemTheme();
        }

        if (theme.startsWith("#")) {
            root.style.setProperty("--custom-theme", theme);
            localStorage.setItem("theme", theme);
        } else {
            root.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
            localStorage.setItem("baseTheme", theme);
        }
    }

    let savedTheme = localStorage.getItem("theme") || "system";
    let baseTheme = localStorage.getItem("baseTheme") || "dark";

    setTheme(savedTheme, false);

    themeOptions.forEach(option => {
        if (option.value === savedTheme || (savedTheme === "system" && option.value === "")) {
            option.checked = true;
            if (selectTitle) {
                selectTitle.textContent = option.nextElementSibling.textContent;
            }
        }

        option.addEventListener("change", function () {
            let newTheme = this.value || "system";
            setTheme(newTheme);
            if (selectTitle) {
                selectTitle.textContent = this.nextElementSibling.textContent;
            }
        });
    });

    if (customColorPicker) {
        customColorPicker.addEventListener("input", function () {
            setTheme(this.value);
        });

        if (savedTheme.startsWith("#")) {
            customColorPicker.value = savedTheme;
        }
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (localStorage.getItem("theme") === "system") {
            setTheme("system", false);
        }
    });
});
