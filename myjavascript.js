
// stopwatch timer 
const usersDiv = document.getElementById("stopwatch1");
    const coursesDiv = document.getElementById("stopwatch2");
    const revenueDiv = document.getElementById("stopwatch3");

    const endValues = [11043, 543, 1103];
    const duration = 5000; // 3 seconds

    function updateDiv(div, value) {
      div.textContent = Math.floor(value);
    }

    function animateDiv(div, endValue, duration) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const value = Math.min(progress / duration * endValue, endValue);
        updateDiv(div, value);
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }

    function animateStopwatch() {
      animateDiv(usersDiv, endValues[0], duration);
      animateDiv(coursesDiv, endValues[1], duration);
      animateDiv(revenueDiv, endValues[2], duration);
    }

    animateStopwatch();

    // stopwatch timer ends 



    //animation on scroll code

