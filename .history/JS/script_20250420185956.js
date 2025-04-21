// Función para manejar el envío del formulario
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validación simple
    if (name && email && message) {
        alert(`Gracias ${name}, tu mensaje ha sido enviado. Te responderemos a ${email} pronto.`);
        this.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

// Cambiar el color del encabezado al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#35424a';
    }
});

// Resaltar el enlace de la página actual
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.color = '#ff9900';
        }
    });
});