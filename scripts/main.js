import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("seasons-average");
var preview = document.getElementById('serie-preview');
var h2wBtn = document.getElementById('h2w-btn');
renderSeriesInTable(series);
// Agregar series a la tabla
function renderSeriesInTable(series) {
    if (series)
        series.forEach(function (serie) {
            var trElement = document.createElement("tr");
            trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
            seriesTbody.appendChild(trElement);
            trElement.addEventListener('click', function () { return mostrarPreview(serie); });
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
// Cargar el preview de una serie
function mostrarPreview(serie) {
    preview.style.display = 'block';
    preview.querySelector('h2').textContent = serie.name;
    document.getElementById('serie-description').textContent = serie.description;
    document.getElementById('serie-poster').src = "./img/posters/".concat(serie.poster);
    h2wBtn.querySelector('p').textContent = serie.channel;
    h2wBtn.onclick = function () {
        window.open(serie.url, '_blank');
    };
}
