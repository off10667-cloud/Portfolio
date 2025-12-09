document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        updateIcon(true);
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        // Save preference
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateIcon(isDark);
    });

    function updateIcon(isDark) {
        // Simple text change if no icon library, or class toggle if using FontAwesome
        // Assuming we might add FontAwesome or just use text/emoji for now
        if (isDark) {
            themeToggle.innerHTML = "☀️";
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        } else {
            themeToggle.innerHTML = "🌙";
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        }
    }
});
