function sliderHandler(value) {
    document.getElementById("sliderNumber").innerHTML = "Number of bins: " + value;
    document.getElementsByClassName("active")[0].click();
}