
var d = new Date();
var month = d.getMonth() + 1;
var html = document.getElementsByTagName('html')[0];

if (month >= 3 && month <= 5) {
    html.classList.add('spring');
}
else if (month >= 6 && month <= 8) {
    html.classList.add('summer');
}
else if (month >= 9 && month <= 11) {
    html.classList.add('autumn');
}
else if (month == 12 || month <= 2) {
    html.classList.add('winter');
}

  /*  <script type="text/javascript" src="background.js"></script>
    <script>
    var html = document.getElementsByTagName('html')[0];
    html.setAttribute('class','spring');
  </script>

    .spring {background-image: url("spring.jpeg");}
    .summer {background-image: url("summer.jpeg");}
    .autumn {background-image: url("autumn.jpeg");}
    .winter {background-image: url("winter.jpeg");}
*/
