window.onload = function () {
  // Set up a new observer
  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      try {
        // Is the target in the viewport?
        if (entry.isIntersecting) {
          // Optional duration data attribute
          var duration = entry.target.dataset.duration;

          // Get the animation class from the data attribute
          var animation = entry.target.dataset.animation;

          // Set the duration property.
          if (duration) {
            entry.target.style.setProperty('--animate-duration', duration);
          }

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
};
