(function() {
  'use strict';

  // YOUR CODE HERE
  controls.addEventListener('click', lightSwitch);
  stopButton.addEventListener('mouseenter', logEnter);
  slowButton.addEventListener('mouseenter', logEnter);
  goButton.addEventListener('mouseenter', logEnter);
  stopButton.addEventListener('mouseleave', logExit);
  slowButton.addEventListener('mouseleave', logExit);
  goButton.addEventListener('mouseleave', logExit);

//event.target.textContent.toLowerCase()
  function lightSwitch() {
    switch(event.target) {
      case stopButton:
        stopLight.classList.toggle('stop');
        stopLight.classList.contains('stop')? console.log("stop bulb on"): console.log("stop bulb off");
        break;
      case slowButton:
        slowLight.classList.toggle('slow');
        slowLight.classList.contains('slow')? console.log("slow bulb on"): console.log("slow bulb off");
        break;
      case goButton:
        goLight.classList.toggle('go');
        goLight.classList.contains('go')? console.log("go bulb on"): console.log("go bulb off");
        break;
    }
  }

  function logEnter() {
    console.log(`Entered ${event.target.textContent} button`);
  }

  function logExit() {
    console.log(`Left ${event.target.textContent} button`);
  }
})();
