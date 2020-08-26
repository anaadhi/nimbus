function edit(){
    console.log("yes");
    document.getElementById("i1").style.display = "none";
    document.getElementById("i2").style.display = "none";
    document.getElementById("i3").style.display = "none";
    document.getElementById("i11").style.display = "inline-block";
    document.getElementById("i22").style.display = "inline-block";
    document.getElementById("i33").style.display = "inline-block";
}

document.getElementById("none").addEventListener("click", function(event) {
    if (document.getElementById('i33').value < 1000000000 || document.getElementById('i33').value > 9999999999){
    event.preventDefault();
    }
}, false);