
function foo(a , b) {

    var d = new Date();
    var n = d.getHours();

    if (n%2 == 1){
        document.getElementById('ride').innerHTML = n + 1;
        n = n + 1;
    } else {
        document.getElementById('ride').innerHTML = n + 2;
        n = n + 2;
    }

    a = document.getElementById('first').value;
    b = document.getElementById('second').value;

    if (Math.abs(a - b) != 0){
        a = Math.abs(a - b);
        var f = a*3;
        console.log(f);
        if (f > 9){
        document.getElementById('cost').innerHTML = a*20 + "inr";
        document.getElementById('min').innerHTML = n + ":" + a*3; 
        } else { 
        document.getElementById('cost').innerHTML = a*20 + "inr";
        document.getElementById('min').innerHTML = n + ":0" + a*3; 
        }
    } else {
        document.getElementById('cost').innerHTML = "--";
    }

    var d = new Date();
    var n = d.getHours();

    

    setTimeout(foo, 1000);
}

foo();

console.log("yes");