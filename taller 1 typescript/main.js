import { series } from './data.js';
var tablaSeries = document.getElementById("tablaSeries");
mostrarSeries(series);
function mostrarSeries(series) {
    var cuerpoTabla = document.createElement("tbody");
    var textoSeries = "";
    var suma = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        textoSeries += "<tr><td> ".concat(serie.numero, "</td><td> ").concat(serie.name, "</td><td> ").concat(serie.channel, "</td><td> ").concat(serie.seasons, "</td> </tr>");
        suma += serie.seasons;
    }
    textoSeries += "<tr><td colspan = \"4\"> Seasons average: ".concat(suma / series.length, " </td></tr>");
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);
}
