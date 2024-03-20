function index() {
    var m = document.getElementById("magas").value;
    m = Number(m);
    var t = document.getElementById("test").value;
    t = Number(t);
    m = m/100;
    var szamol = t/(m*m);
    document.getElementById("kiir").innerHTML = Math.round(szamol * 100) / 100;
}