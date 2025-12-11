document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Mobile Menu Logic
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", () => {
            mobileBtn.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                mobileBtn.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

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
        if (isDark) {
            themeToggle.innerHTML = "☀️";
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        } else {
            themeToggle.innerHTML = "🌙";
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        }
    }
});
