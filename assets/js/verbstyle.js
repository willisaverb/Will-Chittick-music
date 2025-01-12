document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (!hamMenu || !offScreenMenu) {
        console.error("One or both elements are missing from the DOM");
        return;
    }

    const toggleMenu = () => {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    };

    hamMenu.addEventListener("click", toggleMenu);
    hamMenu.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevents accidental double triggers on some devices
        toggleMenu();
    });
});
