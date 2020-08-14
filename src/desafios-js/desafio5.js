document.getElementById('btnCalc').onclick = shippingValue;

function shippingValue() {
    
    const weight = document.getElementById('txtWeight').value;
    const distance = document.getElementById('txtDistance').value;

    if(!weight || weight == 0 || !distance|| distance == 0) {
       
        alert('preencha os campos com valores válidos');

    } else {

        const calcWeight = weight * (0.0087);

        const calcDistance = distance * (0.325);
    
        const calcShipping =  calcWeight + calcDistance;
    
        if(distance <= 100) {
    
            const shipping = calcShipping.toFixed(2);
            document.getElementById('txtResult').innerHTML = `O valor do frete é R$ ${shipping}`;
    
        } else if(distance > 100 && distance <= 300) {
    
            const shipping = (calcShipping * 1.0678).toFixed(2);
            document.getElementById('txtResult').innerHTML = `O valor do frete é R$ ${shipping}`;
    
        } else if(distance > 300){
    
            const shipping = (calcShipping * 1.1143).toFixed(2);
            document.getElementById('txtResult').innerHTML = `O valor do frete é R$ ${shipping}`;
        }  
        
    }  
}