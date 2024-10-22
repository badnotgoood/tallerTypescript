import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
var totalCreditElm = document.getElementById("seasons-average")!;

renderSeriesInTable(series);

// Agregar series a la tabla
function renderSeriesInTable(series: Serie[]): void {
    if (series)
    series.forEach((serie) => { 
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
    let seasonsAverage = calcularPromedioSeasons(series);
    totalCreditElm.innerHTML = "Seasons average: " + seasonsAverage;
  }

// Calcular el promedio de temporadas
  function calcularPromedioSeasons(series: Serie[]): number {
    let seasonsAverage = 0;
    series.forEach((serie) => { 
        seasonsAverage += serie.seasons;
    });
    return seasonsAverage / series.length;
}