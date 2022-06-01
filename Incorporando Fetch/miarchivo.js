class transaccionesDiarias {
    constructor(monto, cambio, resultado) {
        this.monto = monto
        this.cambio = cambio
        this.resultado = resultado
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

let operacionesDiarias = JSON.parse(localStorage.getItem("Operación")) ?? []
let monedas;
let borrarTablas = document.getElementById("botonBorrar")

// Cuando se carga el documento muestra las funciones diarias.
//Al cargar el documento también se carga el array monedas desde el fetch
window.addEventListener('load', () => {
    mostrarOperacionesDiarias();
    getJSONData('monedas.json').then(function (resultObj) {

        if (resultObj.status === "ok") {
            monedas = resultObj.data;

            comboboxDinamico(monedas)
            let arrayDos = monedas.slice(0)
            mostrarTablaCotizaciones(arrayDos)

            ascendente.addEventListener('click', () => {
                mostrarTablaCotizaciones(ordenarAscendente(arrayDos))
            })

            descendente.addEventListener('click', () => {
                mostrarTablaCotizaciones(ordenarDescendente(arrayDos))
            })
        }
    });
});

var getJSONData = function (url) {
    var result = {};

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

function comboboxDinamico() {

    monedas.forEach((mone) => {

        monedaDeseada.innerHTML += `
        <option value="${mone.id}">${mone.nombre}</option>
        `
    })
}

function mostrarTablaCotizaciones(array) {

    tablaCotizaciones.innerHTML = "";

    array.forEach(mon => {

        tablaCotizaciones.innerHTML += `
        <tr>                
        <td id="${mon.id}">${mon.nombre} </td>
        <td>${mon.tasaDeCambio} </td>
        </tr>
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

console.log(pesosBase)

function mostrarOperacionesDiarias() {

    operacionesDiarias.forEach((eve) => {

        operacionDiaria.innerHTML += `
                <tr>
                  <td>${eve.monto}  </td>
                  <td> ${eve.cambio} </td>
                  <td> ${eve.resultado} </td>
                </tr>
                  `

    })

}

function alertaCambio(mensaje, estado) {

    Swal.fire({
        position: 'top-center',
        icon: estado,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    })
}

botoncambio.addEventListener("click", () => {

    let cambio = monedaDeseada.value

    let moneda = monedas.find(mon => mon.id == cambio)

    let monto = montoAcambiar.value

    pesosBase -= monto

    let resultado = (monto / moneda.tasaDeCambio).toFixed(2)

    cambioHecho.value = resultado

    if (monto == "") {
        alertaCambio("Ingrese monto a cambiar", 'error')
    } else {
        alertaCambio("Cambio realizado correctamente", 'success')

        const operacion = new transaccionesDiarias(monto, cambio, resultado)

        operacionesDiarias.push(operacion)

        console.log(operacionesDiarias)

        localStorage.setItem("Operación", JSON.stringify(operacionesDiarias))

        operacionDiaria.innerHTML += `
                <tr>
                  <td>${monto}  </td>
                  <td> ${cambio} </td>
                  <td> ${resultado} </td>
                </tr>
                  `
    }
})

borrarTablas.addEventListener('click', () => {
    localStorage.clear();
    operacionDiaria.innerHTML = " ";
});
