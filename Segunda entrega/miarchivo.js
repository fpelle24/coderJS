class transaccionesDiarias {
    constructor(montoI, monedaI, montoC) {
        this.montoI = montoI
        this.monedaI = monedaI
        this.montoC = montoC
    }
}

let pesosBase = 10000000
let montoAcambiar = document.getElementById("montoCambiar")
let monedaDeseada = document.getElementById("dMoneda")
let cambioHecho = document.getElementById("montocambio")
let botoncambio = document.getElementById("botoncambio")

let tablaCotizaciones = document.getElementById("Moneda")
let ascendente = document.getElementById("asc")
let descendente = document.getElementById("desc")

let operacionDiaria = document.getElementById("operaciondiaria")

let operacionesDiarias = [] || JSON.stringify(localStorage.getItem("Operación"))

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

function comboboxDinamico() {

    monedaDeseada.innerHTML = ""

    monedas.forEach((mone) => {

        monedaDeseada.innerHTML += `
        
        <option value="${mone.id}">${mone.nombre}</option>
        `
    })
}

comboboxDinamico(monedas)

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

console.log(pesosBase)

function mostrarOperacionesDiarias() {

    let transaccionesdiarias = JSON.parse(localStorage.getItem("Operación"))

    operacionDiaria.innerHTML = ""


    transaccionesdiarias.forEach((eve) => {

        operacionDiaria.innerHTML += `
                <tr>
                  <td>${eve.montoI}  </td>
                  <td> ${eve.monedaI} </td>
                  <td> ${eve.montoC} </td>
                </tr>
                  `

    })
}


botoncambio.addEventListener("click", () => {

    let cambio = monedaDeseada.value

    let moneda = monedas.find(mon => mon.id == cambio)

    let monto = montoAcambiar.value

    pesosBase -= monto

    let resultado = monto / moneda.tasaDeCambio

    cambioHecho.value = resultado

    const operacion = new transaccionesDiarias(monto, cambio, resultado)

    operacionesDiarias.push(operacion)

    console.log(operacionesDiarias)

    localStorage.setItem("Operación", JSON.stringify(operacionesDiarias))


    console.log(pesosBase)

    mostrarOperacionesDiarias()
})


console.log(JSON.parse(localStorage.getItem("Operación")))