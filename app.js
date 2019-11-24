window.addEventListener('load', (event) => {

  var circle = document.getElementsByClassName('circle');
  for (i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", loadChargingStatus);
  }

  function classReset() {
    var circle = document.getElementsByClassName('circle');
    for (i = 0; i < circle.length; i++) {
      circle[i].className = 'circle';
    }
  }

  function loadChargingStatus() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var status = JSON.parse(this.responseText);

        var falcon = status.charging_status.falcon;
        if (falcon > 0) {
          document.getElementsByClassName('circle')[0].classList.add("circle-bg-green");
        }

        var lightsaber = status.charging_status.lightsaber;
        if (lightsaber > 0) {
          document.getElementsByClassName('circle')[1].classList.add("circle-bg-green");
        }

        document.getElementById('Falcon').innerHTML = falcon + 'kW';
        document.getElementById('Lightsaber').innerHTML = lightsaber + 'kW';

        var total_power = falcon + lightsaber;
        document.getElementById('total-power').innerHTML = total_power + 'kW';
     }
    };
    var type;
    if (this.id == 'type-lightsaber'){
      type = 'lightsaber';
    } else if (this.id == 'type-falcon') {
      type = 'falcon';
    }
    classReset();
    this.classList.add("circle-bg-yellow");
    xhttp.open("GET", "https://challenge.codetain.com/api/v1/charging_status?priority="+type, true);
    xhttp.send();
  }
});
