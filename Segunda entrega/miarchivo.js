
let montoAcambiar = document.getElementById("montoCambiar")
let monedaDeseada = document.getElementById("dMoneda")
let cambioHecho = document.getElementById("montocambio")
let botoncambio = document.getElementById("botoncambio")
let cambioDeMoneda

let operacionesDiarias = []
let tablaCotizaciones = document.getElementById("Moneda")
let ascendente = document.getElementById("asc")
let descendente = document.getElementById("desc")

class transaccionesDiarias {

    constructor( montoI, monedaI, montoC ){
        this.montoI = montoI
        this.monedaI = monedaI
        this.montoC = montoC
    }

}

const monedas = [
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

let arrayDos = monedas.slice(0)

function mostrarTablaCotizaciones(array) {

    tablaCotizaciones.innerHTML = "";

    array.forEach(mon => {

        tablaCotizaciones.innerHTML += `
        <tr>                
        <td id="${mon.id}">${mon.nombre} </td>
        <td>${mon.tasaDeCambio} </td>
        </tr>
        </br>
        `
    })
}

function ordenarDescendente(arrayDos) {

    arrayDos.sort(function (a, b) {
        if (a.tasaDeCambio > b.tasaDeCambio) { return 1; }
        if (a.tasaDeCambio < b.tasaDeCambio) { return -1; }
        return 0;
    })

    return arrayDos;
}

function ordenarAscendente(arrayDos) {

    arrayDos.sort(function (a, b) {
        if (a.tasaDeCambio < b.tasaDeCambio) { return 1; }
        if (a.tasaDeCambio > b.tasaDeCambio) { return -1; }
        return 0;
    })

    return arrayDos;

}

mostrarTablaCotizaciones(monedas)

ascendente.addEventListener('click', () => {
    mostrarTablaCotizaciones(ordenarAscendente(arrayDos))
})

descendente.addEventListener('click', () => {
    mostrarTablaCotizaciones(ordenarDescendente(arrayDos))
})

function calcular() {
    let cambio = monedaDeseada.value

    let moneda = monedas.find(mon => mon.id == cambio)

    let monto = montoAcambiar.value

    let resultado = monto / moneda.tasaDeCambio

    cambioHecho.value = resultado

    const operacion = new transaccionesDiarias( monto , cambio , resultado)

    operacionesDiarias.push(operacion)
    
    console.log(operacionesDiarias)

    sessionStorage.setItem("Operación", JSON.stringify(operacionesDiarias))
}



botoncambio.addEventListener("click", () => {
    calcular()
})






