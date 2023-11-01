function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll('.skills-bar div');
    skills.forEach(skill => {
        const targetWidth = parseInt(skill.getAttribute('data-width'));
        skill.style.width = '0px';
        let width = 0;
        const id = setInterval(frame, 10);

        function frame() {
            if (width >= targetWidth) {
                clearInterval(id);
            } else {
                width++;
                skill.style.width = width + '%';
                skill.innerText = width + '%';
            }
        }
    });
});