window.addEventListener('load', (event) => {
  
  var circle = document.getElementsByClassName('circle');
  for (i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", clickCircle);
  }
  
  function clickCircle() {
    
    
    if(this.className.includes('circle-bg-green')) {
      classReset();
      this.className = 'circle';
    } else {
      classReset();
      this.className = 'circle circle-bg-green';
    }
    LightsaberRand();
  }
  
  function classReset() {
    var circle = document.getElementsByClassName('circle');
    for (i = 0; i < circle.length; i++) {
      circle[i].className = 'circle';
    }
  }
  
  function LightsaberRand() {
    var total_power = Math.floor((Math.random() * 7) + 1);
    var LightsaberRand = Math.floor((Math.random() * total_power) + 1);
    document.getElementById('total-power').innerHTML = total_power + 'kW';
    
    document.getElementById('Lightsaber').innerHTML = LightsaberRand+0 + 'kW';
    document.getElementById('Falcon').innerHTML = total_power-LightsaberRand + 'kW';
  }
});

