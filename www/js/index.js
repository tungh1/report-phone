  function start() {
    fetch('/api/farm-group2/otp/report?farm=g2')
    .then(response=> response.text())
      .then(text=> {
          fill_data(text);
          setTimeout(reload, 5000);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  function reload() {
    start();
  }

  function fill_data(data) {
    var mainContainer = document.getElementById('g-location');
    mainContainer.innerHTML = data;
  }

  reload();