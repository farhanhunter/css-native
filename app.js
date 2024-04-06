document.addEventListener("DOMContentLoaded", function() {
    const signUpButtons = document.querySelectorAll('.pricing-button');
    
    signUpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "https://www.linkedin.com/in/falan-dirgantara-8029a0285/";
        });
    });
});