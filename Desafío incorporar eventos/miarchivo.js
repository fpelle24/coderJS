let pesos
let cambioDeMoneda
let operacionesDiarias = []

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

let tablaCotizaciones = document.getElementById("Moneda")
let arrayDos = monedas.slice(0)
let ascendente = document.getElementById("asc")
let descendente = document.getElementById("desc")

function mostrarTablaCotizaciones(array){

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

ascendente.addEventListener('click' , () => {
    mostrarTablaCotizaciones(ordenarAscendente(arrayDos))
}  )

descendente.addEventListener('click' , () => {
    mostrarTablaCotizaciones(ordenarDescendente(arrayDos))
})




console.log(arrayDos)

function calcular(idMoneda) {

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

