// Oefening 1: Tijdstip van laden
const now = new Date();
const currentTime = now.toLocaleTimeString();

document.getElementById("oef1").innerText = currentTime;


// Oefening 2: Voetbal uitslagen

function voetbal(ploegen, datum, aantalRodeKaarten) {
    const artikel = document.createElement("article");
    artikel.innerHTML = `<h3>${ploegen}</h3><p>${datum}</p><p>Rode kaarten: ${aantalRodeKaarten}</p>`;

    if (aantalRodeKaarten > 0) {
        artikel.lastElementChild.classList.add("rodeKaart");
    }

    document.getElementById("oef2").append(artikel);
}

voetbal("OHL - Club Brugge", "15/11/2025", 1);
voetbal("OHL - STVV", "22/11/2025", 0);

// Oefening 3: Waterpolo uitslagen
document.getElementById("Leuven-Oostende").remove();
const articleWaterpolo = document.querySelector("#oef3 article");
articleWaterpolo.lastElementChild.remove();
articleWaterpolo.firstElementChild.removeAttribute("style");

// Oefening 4: Getallenvierkant
const zijde = 14; // kan je later aanpassen om grotere of kleinere vierkanten te tekenen
const tabel = document.createElement("table");

createTable(tabel, zijde);

document.querySelector("body").append(tabel);

function createRow(tabel, zijde, startWaarde) {
    const row = document.createElement("tr");

    for (let i = 0; i < zijde; i++) {
        const cell = document.createElement("td");
        cell.innerHTML = `${startWaarde}`;
        addCellClass(cell);
        row.append(cell);
        startWaarde++;
    }

    tabel.append(row);
}

function createTable(tabel, zijde) {
    for (let i = 0; i < zijde; i++) {
        createRow(tabel, zijde, zijde * i);
    }
}

function addCellClass(cell) {
    let waarde = cell.innerHTML;

    if (waarde % 2 == 0) {
        cell.classList.add("even");
    }

    if (waarde % 3 == 0) {
        cell.classList.add("drievoud");
    }

    if (waarde % 5 == 0) {
        cell.classList.add("vijfvoud");
    }
}
