let menuactive = document.getElementById('Active-menu')
let Menushow = document.getElementById('Menu-show')

menuactive.addEventListener('click', ()=>{

    Menushow.classList.toggle('showactive')
})

let slider = document.querySelector('.slider_inner')
let imgs = slider.querySelectorAll('img')
let index = 1

setInterval(function(){
    let percentage = index * -100
    slider.style.transform = "translatex("+ percentage + "%)"
    if(index > imgs.length - 1){
    index = 0
    }
    index++

}, 1000);

function mostrarImagen(rutaImagen) {
    document.getElementById('imagenCompleta').src = rutaImagen;
    document.getElementById('imagenModal').style.display = 'flex';
}

function cerrarImagen() {
    document.getElementById('imagenModal').style.display = 'none';
}