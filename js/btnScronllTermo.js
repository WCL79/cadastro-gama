//pegar botão
let btnScroll = document.getElementById("btnScroll");

//quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function () { funcaoScroll() };

function funcaoScroll() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 2) {
        btnScroll.style.display = "block";
    } else {
        btnScroll.style.display = "none";
    }
}

//quando clicar no botão, a página rola para o topo do documento
function funcaoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}