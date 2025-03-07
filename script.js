document.addEventListener("DOMContentLoaded", function() {
    const titles = ["Product Head", "Product Consultant", "Tech Support"];
    let index = 0;
    const titleElement = document.getElementById("changing-title");
    
    // Changing title function
    function changeTitle() {
        titleElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }
    
    setInterval(changeTitle, 2000);

    // Dark Mode / Day Mode Toggle
    const themeToggleButton = document.getElementById("theme-toggle");

    // Check for saved theme preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("day-mode");
        themeToggleButton.textContent = "☀️"; // Switch button to sun icon
    } else {
        document.body.classList.add("day-mode");
        document.body.classList.remove("dark-mode");
        themeToggleButton.textContent = "🌙"; // Switch button to moon icon
    }

    themeToggleButton.addEventListener("click", function() {
        // Toggle theme
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("day-mode");

        // Save theme preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggleButton.textContent = "☀️"; // Change to sun icon
        } else {
            localStorage.setItem("theme", "light");
            themeToggleButton.textContent = "🌙"; // Change to moon icon
        }
    });
});
