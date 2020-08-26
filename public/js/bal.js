document.getElementById("submit").addEventListener("click", function(event) {
    if (document.getElementById('number').value < 1000000000 || document.getElementById('number').value > 9999999999){
    event.preventDefault();
    }
}, false);