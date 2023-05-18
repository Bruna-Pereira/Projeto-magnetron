
var img = document.getElementById('moto-example')
var iconPositive = document.getElementById('icon-positive')
var iconNegative = document.getElementById('icon-negative')
var input = document.getElementById('zoomRange')


function openOptions(){
    /** Se o conteudo estiver oculto */
    if(document.getElementById('container-open').style.display == 'none')
{
    /** o conteudo é exibido (ao ser clicado) */
    document.getElementById('container-open').style.display = 'block';
} else {
    /** se ele estiver ja aberto(clicado) ele passa a ser fechado novamente ao clicar */
    document.getElementById('container-open').style.display = 'none';
}   
}

function openOptionsFooter(){
    if (document.getElementById('pecas').style.display == 'none')
    {
        document.getElementById('pecas').style.display = 'block';
    }

    else {
        document.getElementById('pecas').style.display = 'block';
    }
}

function openServiceOrder(){
    /** se o conteudo for oculto  */
    if(document.getElementById('service-order').style.display == 'none')
    {
        /** passa a ser visivel ao clicar */
        document.getElementById('service-order').style.display = 'block'
        document.getElementById('button-stock').style.display = 'none';
        document.getElementById('button-magnetron').style.display = 'none';
        document.getElementById('button-ranking').style.display = 'none';
    } else {
        document.getElementById('service-order').style.display = 'none'
        /** o conteudo é exibido (ao ser clicado) */
        document.getElementById('container-open').style.display = 'block';
        document.getElementById('button-stock').style.display = 'block';
        document.getElementById('button-magnetron').style.display = 'block';
        document.getElementById('button-ranking').style.display = 'block';
    }
}

iconPositive.addEventListener("click", function() {
    // Aumente a largura e a altura da imagem em 20%
    img.style.width = (img.offsetWidth * 1.2) + "px";
    img.style.height = (img.offsetHeight * 1.2) + "px";
    input.value = 3
});

iconNegative.addEventListener("click", function() {
    // Diminua a largura e a altura da imagem em 20%
    img.style.width = (img.offsetWidth * 0.8) + "px";
    img.style.height = (img.offsetHeight * 0.8) + "px";
    input.value = 3
});

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
console.log("js funcionando")
