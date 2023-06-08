var totalOtp = 0;
var stotal_otp = document.getElementById("total_otp");
var isTotal = false;
var intTotal0 = 0;
var intTotal0_10000 = 0;
var intTotal2 = 0;
var intTotal3 = 0;
var intTotal4 = 0;
var intTotal5 = 0;

  function loadFarm0() {
    fetch('/api/farm-1/otp/report')
    .then(response=> response.text())
      .then(text=> { 
            appendData(text, "farm-1");
            const farm0 = document.getElementById("farm1");
            const totalFarm0 = farm0.getAttribute("total");
            totalOtp = totalOtp - intTotal0;
            totalOtp += parseInt(totalFarm0);
            intTotal0 = parseInt(totalFarm0);
            var stotal_otp = document.getElementById("total_otp");
            stotal_otp.innerHTML = totalOtp;        
            loadFarm0_10000();
            console.log(totalOtp);
        })
      .catch(function (err) {
        console.log(err);
    });
  }

  function loadFarm0_10000() {
    fetch('/api/farm-0/otp/report')
    .then(response=> response.text())
      .then(text=> {
          appendData(text, "farm-0");
          const farm0_10 = document.getElementById("farm0");
          const totalFarm0_10 = farm0_10.getAttribute("total");
          totalOtp = totalOtp - intTotal0_10000;
          totalOtp += parseInt(totalFarm0_10);
          intTotal0_10000 = parseInt(totalFarm0_10);
          var stotal_otp = document.getElementById("total_otp");
          stotal_otp.innerHTML = totalOtp;
          loadFarm2();
          console.log(totalOtp);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  function loadFarm2() {
    fetch('/api/farm-2/otp/report?farm=g2')
    .then(response=> response.text())
      .then(text=> {
          appendData(text, "farm-2");
          const farm2 = document.getElementById("farm2");
          const totalFarm2 = farm2.getAttribute("total");
          totalOtp = totalOtp - intTotal2;
          totalOtp += parseInt(totalFarm2);
          intTotal2 = parseInt(totalFarm2);
          var stotal_otp = document.getElementById("total_otp");
          stotal_otp.innerHTML = totalOtp;  
          loadFarm4()
          console.log(totalOtp);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  function loadFarm4() {
    fetch('/api/farm-4/otp/report?farm=g2')
    .then(response=> response.text())
      .then(text=> {
          appendData(text, "farm-4");
          const farm4 = document.getElementById("farm4");
          const totalFarm4 = farm4.getAttribute("total");
          totalOtp = totalOtp - intTotal4;
          totalOtp += parseInt(totalFarm4);
          intTotal4 = parseInt(totalFarm4);
          var stotal_otp = document.getElementById("total_otp");
          stotal_otp.innerHTML = totalOtp;  
          loadFarm5()
          console.log(totalOtp);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  function loadFarm5() {
    fetch('/api/farm-5/otp/report?farm=g2')
    .then(response=> response.text())
      .then(text=> {
          appendData(text, "farm-5");
          const farm5 = document.getElementById("farm5");
          const totalFarm5 = farm5.getAttribute("total");
          totalOtp = totalOtp - intTotal5;
          totalOtp += parseInt(totalFarm5);
          intTotal5 = parseInt(totalFarm5);
          var stotal_otp = document.getElementById("total_otp");
          stotal_otp.innerHTML = totalOtp;  
          loadFarm3()
          console.log(totalOtp);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  function loadFarm3() {
    isTotal = true;
    fetch('/api/farm-3/otp/report?farm=g2')
      .then(response=> response.text())
        .then(text=> { 
            appendData(text, "farm-3");
            const farm3 = document.getElementById("farm3");
            const totalFarm3 = farm3.getAttribute("total");
            totalOtp = totalOtp - intTotal3;
            totalOtp += parseInt(totalFarm3);
            intTotal3 = parseInt(totalFarm3);


            //Son
            var total_apple_son = document.getElementById("apple_son");
            //var total_apple_farm_0 = document.getElementById("apple_0");
            var total_apple_farm_3 = document.getElementById("apple_3");
            var total_apple_farm_5 = document.getElementById("apple_5");
            var total_apple_farm_4 = document.getElementById("apple_4");
            total_apple_son.innerHTML = parseInt(total_apple_farm_3.innerText) + parseInt(total_apple_farm_5.innerText);

            var total_kucoin_son = document.getElementById("kucoin_son");
            var total_kucoin_farm_3 = document.getElementById("kucoin_3");
            total_kucoin_son.innerHTML = parseInt(total_kucoin_farm_3.innerText);

            var total_linkedin_son = document.getElementById("linkedin_son");
            var total_linkedin_farm_3 = document.getElementById("linkedin_3");
            var total_linkedin_farm_5 = document.getElementById("linkedin_5");
            total_linkedin_son.innerHTML = parseInt(total_linkedin_farm_3.innerText) + parseInt(total_linkedin_farm_5.innerText);

            var total_google_son = document.getElementById("google_son");
            var total_google_farm_3 = document.getElementById("google_3");
            var total_google_farm_5 = document.getElementById("google_5");

            var total_viber_son = document.getElementById("viber_son");
            var total_viber_farm_3 = document.getElementById("viber_3");
            var total_viber_farm_5 = document.getElementById("viber_5");
            total_viber_son.innerHTML = parseInt(total_viber_farm_3.innerText) + parseInt(total_viber_farm_5.innerText);


            //var total_facebook_son = document.getElementById("facebook_son");
            //total_facebook_son.innerHTML = parseInt(total_facebook_farm_0.innerText) + parseInt(total_facebook_farm_4.innerText)


            //Thang
            var total_apple_thang = document.getElementById("apple_thang");
            var total_apple_farm_2 = document.getElementById("apple_2");
            total_apple_thang.innerHTML = parseInt(total_apple_farm_2.innerText) + parseInt(total_apple_farm_4.innerText);

            var total_kucoin_thang = document.getElementById("kucoin_thang");
            var total_kucoin_farm_2 = document.getElementById("kucoin_2");
            total_kucoin_thang.innerHTML = parseInt(total_kucoin_farm_2.innerText);

            var total_linkedin_thang = document.getElementById("linkedin_thang");
            var total_linkedin_farm_2 = document.getElementById("linkedin_2");
            var total_linkedin_farm_4 = document.getElementById("linkedin_4");
            total_linkedin_thang.innerHTML = parseInt(total_linkedin_farm_2.innerText) + parseInt(total_linkedin_farm_4.innerText);

            var total_google_thang = document.getElementById("google_thang");
            var total_google_farm_2 = document.getElementById("google_2");
            var total_google_farm_4 = document.getElementById("google_4");
            total_google_thang.innerHTML = parseInt(total_google_farm_2.innerText) + parseInt(total_google_farm_4.innerText);

            var total_viber_thang = document.getElementById("viber_thang");
            var total_viber_farm_2 = document.getElementById("viber_2");
            total_viber_thang.innerHTML = parseInt(total_viber_farm_2.innerText);

            //var total_facebook_thang = document.getElementById("facebook_thang");
            var total_facebook_farm_3 = document.getElementById("facebook_3");
            var total_facebook_farm_2 = document.getElementById("facebook_2");
            //total_facebook_thang.innerHTML = parseInt(total_facebook_farm_1.innerText) + parseInt(total_facebook_farm_2.innerText) + parseInt(total_facebook_farm_3.innerText) + parseInt(total_facebook_farm_5.innerText)
            total_google_son.innerHTML = parseInt(total_google_farm_3.innerText) + parseInt(total_google_farm_5.innerText);

            var stotal_otp = document.getElementById("total_otp");
            stotal_otp.innerHTML = totalOtp;
            const total_thang = document.getElementById("total_thang");
            total_thang.innerHTML =  intTotal2 + intTotal4; //+ parseInt(total_facebook_farm_2.innerText);

            const total_son_hieu = document.getElementById("total_son_hieu");
            total_son_hieu.innerHTML = intTotal3 + intTotal5; // + intTotal4 - parseInt(total_facebook_farm_2.innerText) + parseInt(total_google_farm_5.innerText);  

            setTimeout(intervalFunc, 5000);
            console.log(totalOtp);
        })
        .catch(function (err) {
            console.log(err);
        });
  }

  function intervalFunc() {
    loadFarm2();
  }

  function appendData(data, strDiv) {
    var mainContainer = document.getElementById(strDiv);
    mainContainer.innerHTML = data;
  }

  intervalFunc();

  document.onreadystatechange = function(){
    var stotal_otp = document.getElementById("total_otp");
    stotal_otp.innerHTML = totalOtp;

    if(document.readyState === 'complete'){
        var stotal_otp = document.getElementById("total_otp");
        stotal_otp.innerHTML = totalOtp;
    }
  }
