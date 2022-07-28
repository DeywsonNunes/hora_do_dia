
function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 10;
    var minutos = data.getMinutes();
    msg.innerHTML="<strong>Agora são " +hora+ " horas e "+ minutos+" Minutos</strong>";

    if(hora >=0 && hora < 12){
        //bom dia
        img.src="imagens/dia300.png";
        document.body.style.background = "#a6ec96";
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src="imagens/tarde300.png";
        document.body.style.background = "#fbdc89";
    }else{
        //boa noite
        img.src="imagens/noite300.png";
        document.body.style.background = "#5c4976";
    }
}