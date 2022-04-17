let pesos
let cambioDeMoneda


do {

    pesos = parseFloat(prompt("Ingrese Pesos"));

    cambioDeMoneda = prompt("Ingrese moneda a la cual desea cambiar\n- Euros\n- Dólares\n- Pesos Argentinos\n- Libras").toLowerCase();

    if (isNaN(pesos)) {
        alert("Ingrese la cantidad en números")

    }  

} while (isNaN(pesos))



switch (cambioDeMoneda) {
    case "euros":
        document.write(pesos / 47.66)
        break
    case "dolares":
        document.write(pesos / 42.55)
        break
    case "pesos Argentinos":
        document.write(pesos / 0.37)
        break
    case "libras":
        document.write(pesos / 57.95)
        break
    default:
        document.write("Ingrese una de las monedas especificadas.")
        break
}