const meds = [];

functiona addMed() {
    event.preventDefault();
    const newMed = {
        name: document.getElementById('fname'),
        qnt: document.getElementById('fqnt'),
        classMed: document.getElementById('fclass'),
        };
        meds.push(newMed);
}

function renderTable() {
    
}