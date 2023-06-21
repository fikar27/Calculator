var displayAngka = ""

function kliktombol(e) {
    if (e == "AC") {
        displayAngka = ""
    } else {
    console.log(e)
    displayAngka = displayAngka + e
}
    document.getElementById("display").value = displayAngka
}