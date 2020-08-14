document.getElementById('btnVerifyNumber').onclick = verifyNumber;

function verifyNumber() {
    const code = document.getElementById('txtCode').value;

    if(code == parseInt(1)) {
        document.getElementById('txtResult').innerHTML = `
        Roteador: dispositivo que encaminha pacotes de dados entre redes de computadores.
        `
    } else if(code == parseInt(2)) {
        document.getElementById('txtResult').innerHTML = `
        Adaptador de Rede Ethernet: periféricos usados ​​para transferir dados em uma rede.
        `
    } else if(code == parseInt(3)) {
        document.getElementById('txtResult').innerHTML = `
        Adaptador de Rede Wifi: dispositivo que conecta seu computador a uma rede sem fio.
        `
    } else if(code == parseInt(4)) {
        document.getElementById('txtResult').innerHTML = `
        Servidor HTTP: software que processa pedidos via HTTP.
        `
    } else if(code == parseInt(5)) {
        document.getElementById('txtResult').innerHTML = `
        Servidor DNS: localiza e traduz para números IP os endereços dos sites acessados.
        `
    } else {
        document.getElementById('txtResult').innerHTML = `
        Código Inválido!
        `
    }
}