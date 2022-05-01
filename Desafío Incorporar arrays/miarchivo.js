let pesos
let cambioDeMoneda
const monedas =[
    { 
        id: 1,
        nombre: "Euros",
        tasaDeCambio: 47.66
    },
    {
        id: 2,
        nombre: "Dólares",
        tasaDeCambio: 42.55
    },
    {
        id: 3,
        nombre: "Pesos Argentinos",
        tasaDeCambio: 0.37,
    },
    {
        id: 4,
        nombre: "Libras",
        tasaDeCambio: 57.95
    }
]

function calcular(idMoneda){
    
    let moneda = monedas.find(mon => mon.id == idMoneda)
    let resultado = pesos / moneda.tasaDeCambio
    return resultado.toFixed(2)
}


do {

    pesos = parseFloat(prompt("Ingrese Pesos"));

    cambioDeMoneda = prompt("Ingrese el número de la moneda a la cual desea cambiar\n 1 - Euros\n 2 - Dólares\n 3 - Pesos Argentinos\n 4 - Libras").toLowerCase();

    if (isNaN(pesos) || isNaN(cambioDeMoneda)) {
        alert("Ingrese ambas opciones en número")

    }  

} while (isNaN(pesos) || isNaN(cambioDeMoneda))


document.write(calcular(parseInt(cambioDeMoneda)))

