document.getElementById('btnInsert').onclick = insertNumber;
document.getElementById('btnTransform').onclick = transformNumber;

const numbersList = [];

function insertNumber() {

    const inserted = document.getElementById('txtNumber').value;

    if(!inserted) {
        alert('Informe um valor!')
    } else {

        numbersList.push(inserted);
    }
    
    if(numbersList[14]){
        alert('você inseriu 15 valores!')
    }
    const insertedNumbers = numbersList.slice(0,15);

    document.getElementById('txtInsertedNumbers').innerHTML = `${insertedNumbers}`;
}

function transformNumber() {
    for(i = 0; i <= numbersList.length; i++) {
        if(numbersList[i] < 0) {
            numbersList[i] = 0
        }
    }

    document.getElementById('txtTransformNumbers').innerHTML = `${numbersList}`;
    const clean = numbersList.splice(0)
}