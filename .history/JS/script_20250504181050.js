document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
        alert(`Gracias ${name}, tu mensaje ha sido enviado. Te responderemos a ${email} pronto.`);
        this.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';
    } else {
        header.style.backgroundColor = '#35424a';
    }
});

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

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const loader = document.querySelector('.loader');
    
    if(loader) {
        loader.classList.add('loader-hidden');
    }

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            let isValid = true;
           
            const name = document.getElementById('name');
            if(name.value.trim() === '') {
                document.getElementById('name-error').textContent = 'Por favor ingresa tu nombre';
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }
            
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(email.value.trim() === '') {
                document.getElementById('email-error').textContent = 'Por favor ingresa tu email';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            } else if(!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'Por favor ingresa un email válido';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            const message = document.getElementById('message');
            if(message.value.trim() === '') {
                document.getElementById('message-error').textContent = 'Por favor ingresa tu mensaje';
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }
            
            if(isValid) {
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                
                setTimeout(function() {
                    
                    document.getElementById('form-success').style.display = 'flex';
                    contactForm.reset();
                    
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Enviar Mensaje</span><i class="fas fa-paper-plane"></i>';
                    
                    setTimeout(function() {
                        document.getElementById('form-success').style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
        
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateY(20px)';
            group.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
            
            setTimeout(function() {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.slider-indicators span');
    let currentIndex = 0;
    let autoSlideInterval;
   
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
       
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
       
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
   
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });
   
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();
    slider.parentElement.addEventListener('mouseenter', stopAutoSlide);
    slider.parentElement.addEventListener('mouseleave', startAutoSlide);

    showSlide(currentIndex);
});