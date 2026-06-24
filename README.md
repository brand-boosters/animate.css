**Preview: https://brand-boosters.github.io/animate.css/**


# Animate.css

This is an fork of https://github.com/animate-css/animate.css, with some animations added.

## Installation 

CDN Url: https://cdn.jsdelivr.net/gh/brand-boosters/animate.css@v4.1.6/animate.min.css

## Animate on intersect 


    window.addEventListener('load', function () {
        // Set up a new observer
        var observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                try {
                    // Is the target in the viewport?
                    if (entry.isIntersecting) {
                        // Get the animation class from the data attribute
                        var animation = entry.target.dataset.animation;
    
                        // Unhide the target
                        entry.target.classList.remove('opacity-0');
    
                        // Add the animation classes to the target
                        entry.target.classList.add('animate__animated');
                        entry.target.classList.add(animation);
                    }
                } catch (error) {
                    console.error(error);
    
                    // If something goes wrong, ensure the element isn't hidden
                    entry.target.classList.remove('opacity-0');
                }
            });
        });
    
        // Get all the targets you want to animate on scroll
        var targets = document.querySelectorAll(".animate__on-intersect");
    
        // Loop through each of the target
        targets.forEach(function (target) {
            try {
                // Add the target to the watcher
                observer.observe(target);
            } catch (error) {
                console.error(error);
    
                // If something goes wrong, ensure the element isn't hidden
                target.classList.remove('opacity-0');
            }
        });
    });
