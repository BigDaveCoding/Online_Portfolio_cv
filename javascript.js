document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    console.log(gsap);

    name_title_anim_complete = false;

    navLinks = document.querySelectorAll('.nav_link_link');
    // animation for navigation links
    // link slighlty raises y position when hovered over
    // returns to original position when mouse leaves
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            // console.log('hovering over link');
            gsap.to(link, {
                y: -2.5,
                duration: 0.2,
                stagger: 0.05,
                opacity: 1,
                ease: 'power2.inOut'
            });
        });

        link.addEventListener('mouseleave', () => {
            // console.log('leaving link');
            gsap.to(link, {
                y: 0,
                duration: 0.2,
                stagger: 0.05,
                opacity: 0.8,
                ease: 'power2.inOut'
            }); 
        })
    });

    // project_containers = document.querySelectorAll('.project_container');
    // project_containers.forEach((container) => {
    //     container.addEventListener('mouseover', () => {
    //         console.log('hovering over project container');
    //         gsap.to(container, {
    //             scale: 1.1,
    //             duration: 0.5,
    //             ease: 'power2.inOut'
    //         });
    //     });

    //     container.addEventListener('mouseleave', () => {
    //         console.log('leaving project container');
    //         gsap.to(container, {
    //             scale: 1,
    //             duration: 0.5,
    //             ease: 'power2.inOut'
    //         });
    //     });
    // });

    // selecting elements to animate
    let myName = document.querySelector('#name');
    let myTitle = document.querySelector('#title');
    ukTime = document.querySelector('#uk_time');
    ukDate = document.querySelector('#uk_date');
    console.log(myName);

    // function to fade in hero photos
    // Will be called in UpdateHeroSection function
    function fadeInHeroPhotos() {
        hero_pic_1 = document.querySelector('#david_pablo_sand_dunes_img');
        hero_pic_2 = document.querySelector('#hero_photo_1');
        hero_pic_3 = document.querySelector('#hero_photo_3');

        gsap.fromTo(hero_pic_1, {
            opacity: 0,
            y: 500
        }, {
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: 'power2.inOut'
        });

        gsap.fromTo(hero_pic_2, {
            opacity: 0,
            x: -600
        }, {
            opacity: 1,
            x: 0,
            duration: 3.3,
            ease: 'power2.inOut'
        });

        gsap.fromTo(hero_pic_3, {
            opacity: 0,
            y: -1000
        }, {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: 'power2.inOut'
        });

    }

    //animations for name and title
    gsap.to(myName, {
        text: 'DAVID SMITH',
        duration: 1.3,
        ease: 'power2.inOut'
    });
    //returns name_title_anim_complete = true when animation is complete
    gsap.to(myTitle, {
        text: 'SOFTWARE DEVELOPER',
        duration: 1.6,
        ease: 'power2.inOut',
        onComplete: () => {
            name_title_anim_complete = true;
            console.log('name and title animation complete');
            console.log(name_title_anim_complete);
            updateHeroSection();
        }
    });

    // selecting elements to set 0 opacity on page load
    // animation will commence when name_title_anim_complete = true
    let fade_in_navLinks = document.querySelector('#nav_links');
    let hero_photos = document.querySelector('#hero_photos')
    let hero_about_me = document.querySelector('#hero_about_text');
    let hero_latest_projects = document.querySelector('#hero_latest_projects');

    // bool returns false on page load so styles of these elements are set to opacity 0
    if (!name_title_anim_complete) {
        fade_in_navLinks.style.opacity = 0;
        hero_photos.style.opacity = 0;
        hero_about_me.style.opacity = 0;
        hero_latest_projects.style.opacity = 0;
    }

    function updateHeroSection() {
        gsap.to(hero_photos, {
            opacity: 1,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(hero_about_me, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut'
                });
                gsap.to(hero_latest_projects, {
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.inOut',
                });
                gsap.to(fade_in_navLinks, {
                    opacity: 0.8,
                    duration: 1,
                    ease: 'power2.inOut'
                });
            }
        });
        fadeInHeroPhotos();
    }

    // updates the uk time and date every minute
    function updateUKTimeandDate() {
        const ukTimeElement = document.querySelector('#uk_time');
        const ukDateElement = document.querySelector('#uk_date');

        const now = new Date();
        const options = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true };
        const timeString = now.toLocaleTimeString('en-GB', options);
        const dateString = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

        gsap.to(ukTimeElement, {
            text: timeString.toUpperCase(),
            duration: 2,
            ease: 'power2.inOut'
        });
        gsap.to(ukDateElement, {
            text: dateString.toUpperCase(),
            duration: 2,
            ease: 'power2.inOut'
        });

        // ukTimeElement.textContent = timeString.toUpperCase();
        // ukDateElement.textContent = dateString.toUpperCase();
    }
    updateUKTimeandDate();
    setInterval(updateUKTimeandDate, 10000);

    function infoNavBar() {
        const infoNavBar = document.querySelector('#nav_info_link');
        const arrows = document.querySelectorAll('.arrow_animation');
        console.log(arrows);

        infoNavBar.addEventListener('click', () => {
            console.log('clicked info nav link');
            const timeline = gsap.timeline();
            arrows.forEach((arrow, index) => {
                timeline.to(arrow, {
                    y: 5,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.inOut',
                    repeat: 1,
                    yoyo: true
                }, index * 0.6);
            });
        });
    }
    infoNavBar();

    function projectsNavBar() {
        const projectsNavBar = document.querySelector('#nav_projects_link');
        const projects = document.querySelectorAll('.project_container');
        console.log(projects);

        projectsNavBar.addEventListener('click', () => {
            console.log('clicked projects nav link');
            const timeline = gsap.timeline({
                onComplete: () => timeline.reverse(),
            });
            projects.forEach((project, index) => {
                timeline.to(project, {
                    y: -30,
                    duration: 0.6,
                    ease: 'power2.inOut',
                    repeat: 1,
                    yoyo: true
                }, index * 0.2);
            });
        });
    }
    projectsNavBar();

    function openProject(project_section) {
        about_me_text = document.querySelector('#hero_about_text');
        // about_me_text.style.filter = 'blur(10px)';

        gsap.to(project_section, {
            opacity: 1,
            duration: 1
        });
        gsap.to(about_me_text, {
            duration: 1,
            css: {
                filter: 'blur(5px)'
            }
        });

    }
    function closeProject(project_section) {
        about_me_text = document.querySelector('#hero_about_text');
        gsap.to(project_section, {
            opacity: 0,
            duration: 1
        });
        gsap.to(about_me_text, {
            duration: 1,
            css: {
                filter: 'blur(0px)'
            }
        });
    }

    function hoverOverProject() {
        project_containers = document.querySelectorAll('.project_container');

        project_container_map = {'web_dev_container':'#web_dev_section'};

        project_containers.forEach((container) => {
            container.addEventListener('mouseover', () => {
                console.log('hovering over project container');
                gsap.to(container, {
                    scale: 1.1,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
                // if container id is in project_container_map
                // open the corresponding project section
                console.log(container.id);
                console.log(project_container_map[container.id]);
                if (container.id in project_container_map) {
                    openProject(project_container_map[container.id]);
                }
            });

            container.addEventListener('mouseleave', () => {
                console.log('leaving project container');
                gsap.to(container, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
                closeProject(project_container_map[container.id]);
            });
        });
    }
    hoverOverProject();

    // function infoNavLink() {
    //     const infoNavLink = document.querySelector('#nav_info_link');
    //     const infoSection = document.querySelector('#hero_about_text');

    //     infoNavLink.addEventListener('mouseover', () => {
    //         gsap.to(infoSection, {
    //             keyframes: [
    //                 { backgroundColor: 'rgba(0, 0, 0, 0.2)', duration: 0.5 },
    //                 { backgroundColor: 'rgba(0, 255, 0, 0.2)', duration: 0.5 },
    //                 { backgroundColor: 'rgba(0, 0, 255, 0.2)', duration: 0.5 }
    //             ],
    //             repeat: -1
    //         });
    //     });
    //     infoNavLink.addEventListener('mouseleave', () => {
    //         gsap.to(infoSection, {
    //             backgroundColor: 'rgba(0, 0, 0, 0)',
    //             duration: 0.5,
    //             repeat: 0
    //         });
    //     });
    // }
    // infoNavLink();


    // function navLinkHover() {
    //     const linkToIdMap = {
    //         'INFO': '#hero_about_text',
    //         'SKILLS & PROJECTS': '#hero_latest_projects',
    //         'CONTACT': '#contact_section'
    //     }

    //     navLinks.forEach((link) => {

    //         const targetId = linkToIdMap[link.textContent];
    //         const target = document.querySelector(targetId);
    //         link.addEventListener('mouseover', () => {
    //             console.log('big booty bitches');
    //             console.log(target);
    //             gsap.to(target, {
    //                 backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //                 duration: 0.5,
    //                 borderradius: 10
    //             });
    //         });

    //         link.addEventListener('mouseleave', () => {
    //             gsap.to(target, {
    //                 backgroundColor: 'rgba(0, 0, 0, 0)',
    //                 duration: 0.5
    //             });
    //         });
    //     });
    // }
    // navLinkHover();

});

