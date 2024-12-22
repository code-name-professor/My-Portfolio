document.addEventListener("DOMContentLoaded", () => {
    const cvButton = document.getElementById("cv-button");
    const projectsButton = document.getElementById("projects-button");
    const cvSection = document.getElementById("cv-section");
    const projectsSection = document.getElementById("projects-section");

    // Show CV section by default
    cvSection.classList.add("active");

    cvButton.addEventListener("click", () => {
        cvSection.classList.add("active");
        projectsSection.classList.remove("active");
    });

    projectsButton.addEventListener("click", () => {
        projectsSection.classList.add("active");
        cvSection.classList.remove("active");
    });
});
