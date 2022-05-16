function HeadFrac() {
    var flips = document.getElementById("inputnum4").value;
    var heads = Math.floor((Math.random() * flips) + 1);
    var headRatio = heads / flips;
    console.log("this is headratio : " + headRatio.toFixed(2));
    alert("head ratio is :" + headRatio.toFixed(2));
}
