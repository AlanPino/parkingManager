function switchDisponibility(number) {
    var div = document.getElementById(number);
    var label = div.querySelector("label");
    var checkbox = label.querySelector("input[type='checkbox']");

    if (checkbox.checked) {
        div.querySelector("h2").innerHTML = "OCUPADO"
    }else{
        div.querySelector("h2").innerHTML = "DISPONIBLE"
    }
}