document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    console.log(gsap);

    navLinks = document.querySelectorAll('.nav_link_link');
    // animation for navigation links
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            console.log('hovering over link');
            gsap.to(link, {
                y: -2.5,
                duration: 0.2,
                stagger: 0.05,
                opacity: 1,
                ease: 'power2.inOut'
            });
        });

        link.addEventListener('mouseleave', () => {
            console.log('leaving link');
            gsap.to(link, {
                y: 0,
                duration: 0.2,
                stagger: 0.05,
                opacity: 0.8,
                ease: 'power2.inOut'
            }); 
        })
    });

    //animation for name and title
    myName = document.querySelector('#name');
    myTitle = document.querySelector('#title');
    console.log(myName);

    gsap.to(myName, {
        text: 'DAVID SMITH',
        duration: 2,
        ease: 'power2.inOut'
    });

    gsap.to(myTitle, {
        text: 'SOFTWARE DEVELOPER',
        duration: 3,
        ease: 'power2.inOut'
    });

    function updateUKTimeandDate() {
        const ukTimeElement = document.querySelector('#uk_time');
        const ukDateElement = document.querySelector('#uk_date');

        const now = new Date();
        const options = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = now.toLocaleTimeString('en-GB', options);
        const dateString = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

        ukTimeElement.textContent = timeString.toUpperCase();
        ukDateElement.textContent = dateString.toUpperCase();
    }
    updateUKTimeandDate();
    setInterval(updateUKTimeandDate, 60000);
});

