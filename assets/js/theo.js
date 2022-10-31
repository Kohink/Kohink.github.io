function changeImage() {
    if (document.getElementById("imgClickAndChange").src = "../assets/images/theo2.jpg"){
        document.getElementById("imgClickAndChange").src = "../assets/images/theo.jpg";
    } 
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + r + "," + g + "," + b + ")";
      console.log(bgColor);
      document.body.style.background = bgColor;
    // else 
    // {
    //     document.getElementById("imgClickAndChange").src = "../assets/images/theo.jpg";
    // }
}