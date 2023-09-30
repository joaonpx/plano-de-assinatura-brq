function toggleDiv(divId) {
    // Esconde todas as divs
    var divs = document.getElementsByClassName('hidden-div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Mostra a div desejada
    var div = document.getElementById(divId);
    div.style.display = 'block';
}

document.getElementById('button1').addEventListener('click', function() {
    toggleDiv('div1');
});

document.getElementById('button2').addEventListener('click', function() {
    toggleDiv('div2');
});

document.getElementById('button3').addEventListener('click', function() {
    toggleDiv('div3');
});