function selectLeague() {
    const sport = document.getElementById('sport');
    const form = document.getElementById('addForm');
    const insertPosition = document.getElementById('imageUrlBox');

    if (sport.value == 'ФУТБОЛ СВЯТ') {
        const div = document.createElement('div');
        div.className = 'input';
        div.id = 'leagueName';
        const label = document.createElement('label');
        label.textContent = 'Лига';
        const leagueSelect = document.createElement('select');
        leagueSelect.name = 'league';
        leagueSelect.id = 'league';
        const optEng = document.createElement('option');
        optEng.textContent = 'Англия';
        optEng.value = 'Англия';
        const optEsp = document.createElement('option');
        optEsp.textContent = 'Испания';
        optEsp.value = 'Испания';
        const optIt = document.createElement('option');
        optIt.textContent = 'Италия';
        optIt.value = 'Италия';
        const optGer = document.createElement('option');
        optGer.textContent = 'Германия';
        optGer.value = 'Германия';
        const optFr = document.createElement('option');
        optFr.textContent = 'Франция';
        optFr.value = 'Франция';
        const optCL = document.createElement('option');
        optCL.textContent = 'ШЛ';
        optCL.value = 'ШЛ';
        const optLE = document.createElement('option');
        optLE.textContent = 'Лига Европа';
        optLE.value = 'Лига Европа';
        const optLC = document.createElement('option');
        optLC.textContent = 'Лига на конференциите';
        optLC.value = 'Лига на конференциите';
        const optNT = document.createElement('option');
        optNT.textContent = 'Национални отбори';
        optNT.value = 'Национални отбори';
        const optOthers = document.createElement('option');
        optOthers.textContent = 'Други';
        optOthers.value = 'Други';

        leagueSelect.appendChild(optEng);
        leagueSelect.appendChild(optEsp);
        leagueSelect.appendChild(optIt);
        leagueSelect.appendChild(optGer);
        leagueSelect.appendChild(optFr);
        leagueSelect.appendChild(optCL);
        leagueSelect.appendChild(optLE);
        leagueSelect.appendChild(optLC);
        leagueSelect.appendChild(optNT);
        leagueSelect.appendChild(optOthers);

        div.appendChild(label);
        div.appendChild(leagueSelect);
        form.insertBefore(div, insertPosition);
    } else {
        if (form.children[1].id == 'leagueName') {
            const toRemove = document.getElementById('leagueName');
            form.removeChild(toRemove);
        }
    }
}