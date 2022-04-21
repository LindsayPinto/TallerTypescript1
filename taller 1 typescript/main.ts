import {Serie} from './Serie.js';
import {series} from './data.js';

let tablaSeries: HTMLElement = document.getElementById ("tablaSeries")!;

mostrarSeries(series);

function mostrarSeries (series:Serie[]){
    let cuerpoTabla = document.createElement("tbody");
    let textoSeries = "";
    let suma = 0;
    for (let serie of series){
        textoSeries += `<tr><td> ${serie.numero}</td><td> ${serie.name}</td><td> ${serie.channel}</td><td> ${serie.seasons}</td> </tr>`;
        suma += serie.seasons;
    }
    textoSeries += `<tr><td colspan = "4"> Seasons average: ${suma/series.length} </td></tr>`
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);


    }