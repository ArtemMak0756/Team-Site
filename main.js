const burger = document.getElementById('burger');
const nav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// --------------

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("contactPopup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("contactPopup").style.display = "none";
    document.getElementById("contactForm").reset();
});

// --------------

function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 800; // скорость (800 мсек)
    const step = target / (duration / 30);

    let count = 0;
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";

    const updateCounter = setInterval(() => {
        count += step;
        if (count >= target) {
            clearInterval(updateCounter);
            counter.innerText = prefix + target.toLocaleString() + suffix;
        } else {
            counter.innerText = prefix + Math.floor(count).toLocaleString() + suffix;
        }
    }, 30);
}

const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));




