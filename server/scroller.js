/* ===== ONE PAGE SCROLLER - Gemaakt met AI ===== */
/* Dit script zorgt dat de smooth scroll naar de juiste secties gaat */

document.addEventListener('DOMContentLoaded', function() {
    
    // Alle navigatie links selecteren
    const navLinks = document.querySelectorAll('.navbar a, .footer-navbar a');
    
    // Voor elke link een event listener toevoegen
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get de href (bijv. #about)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Smooth scroll naar de element
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
