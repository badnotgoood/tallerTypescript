import { Serie } from './serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const totalCreditElm = document.getElementById("seasons-average")!;
const preview = document.getElementById('serie-preview')!;
const h2wBtn = document.getElementById('h2w-btn')!;


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
        trElement.addEventListener('click', () => mostrarPreview(serie));
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

// Cargar el preview de una serie
function mostrarPreview(serie: Serie): void {
    preview.style.display = 'block';
    preview.querySelector('h2')!.textContent = serie.name;
    document.getElementById('serie-description')!.textContent = serie.description;
    (document.getElementById('serie-poster')! as HTMLImageElement).src = `./img/posters/${serie.poster}`; 
    h2wBtn.querySelector('p')!.textContent = serie.channel;
    h2wBtn.onclick = function() {
        window.open(serie.url, '_blank'); 
    };
}

