let button = document.getElementById('resultButton');

let equasion = document.getElementById('equasion');
let a = document.getElementById('interval1');
let b = document.getElementById('interval2');
let accuracy = document.getElementById('accuracy');

button.onclick = function() {
    alert(equasion.value);
    alert(a.value);
    alert(b.value);
    alert(accuracy.value);
}