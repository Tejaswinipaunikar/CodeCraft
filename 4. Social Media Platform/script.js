document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Initially show the home section
    sections[0].classList.add('active');

    // Navigation click handler
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => section.classList.remove('active'));
            sections[index].classList.add('active');
        });
    });

    // Swipe Gesture Detection for Mobile Devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const activeIndex = Array.from(sections).findIndex(section => section.classList.contains('active'));
        if (touchEndX < touchStartX) {
            // Swipe left - Go to next section
            if (activeIndex < sections.length - 1) {
                sections[activeIndex].classList.remove('active');
                sections[activeIndex + 1].classList.add('active');
            }
        }
        if (touchEndX > touchStartX) {
            // Swipe right - Go to previous section
            if (activeIndex > 0) {
                sections[activeIndex].classList.remove('active');
                sections[activeIndex - 1].classList.add('active');
            }
        }
    }
});
