document.getElementById('btnVerifyWord').onclick = verifyWord;

function verifyWord() {
    const word = document.getElementById('txtWord').value;

    const vowels = /[aáeéêiíoóôuú]/gi;

    const result = word.match(vowels);

    document.getElementById('txtResult').innerHTML = result;
}
