import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("seasons-average");
renderSeriesInTable(series);
// Agregar series a la tabla
function renderSeriesInTable(series) {
    if (series)
        series.forEach(function (serie) {
            var trElement = document.createElement("tr");
            trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
            seriesTbody.appendChild(trElement);
        });
    var seasonsAverage = calcularPromedioSeasons(series);
    totalCreditElm.innerHTML = "Seasons average: " + seasonsAverage;
}
// Calcular el promedio de temporadas
function calcularPromedioSeasons(series) {
    var seasonsAverage = 0;
    series.forEach(function (serie) {
        seasonsAverage += serie.seasons;
    });
    return seasonsAverage / series.length;
}
