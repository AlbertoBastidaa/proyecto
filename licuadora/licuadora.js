var estadoLicuadora = "off";
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if(estadoLicuadora == "off") {
        estadoLicuadora = "on";
        licuadora.classList.add("active");
        console.log("ON");
    }
    else {
        estadoLicuadora = "off";
        licuadora.classList.remove("active");
        console.log("OFF")
    }
}