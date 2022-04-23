let pesos
let cambioDeMoneda

const euros = (montoEnPesos) => montoEnPesos / 47.66
const dolares = (montoEnPesos) => montoEnPesos / 42.55
const pesosArgentinos = (montoEnPesos) => montoEnPesos / 0.37
const libras = (montoEnPesos) => montoEnPesos/ 57.95 

do {

    pesos = parseFloat(prompt("Ingrese Pesos"));

    cambioDeMoneda = prompt("Ingrese moneda a la cual desea cambiar\n- Euros\n- Dólares\n- Pesos Argentinos\n- Libras").toLowerCase();

    if (isNaN(pesos)) {
        alert("Ingrese la cantidad en números")

    }  

} while (isNaN(pesos))



switch (cambioDeMoneda) {
    case "euros":
        alert(euros(pesos))
        break
    case "dolares":
        alert(dolares(pesos))
        break
    case "pesos Argentinos":
        alert(pesosArgentinos(pesos))
        break
    case "libras":
        alert(libras(pesos))
        break
    default:
        document.write("Ingrese una de las monedas especificadas.")
        break
}
