document.getElementById('btnVerifyNumber').onclick = insertNumber;

function createList() {
    
    const numberInserted = parseInt(document.getElementById('txtNumber').value);
    let list = [];
    let numbers = 0;
    
   
    while (numbers <= numberInserted) {
        list.push(numbers)
        numbers++
    }
    return list;
}

function insertNumber() {
    const reverseList = createList().reverse();
    document.getElementById('txtResult').innerHTML = reverseList;
}