let indiceSlide = 0;

function cambiarSlide(n) {
    mostrarSlide(indiceSlide += n);
}

function mostrarSlide(n) {
    let slides = document.querySelectorAll('.carousel img');
    
    if (n >= slides.length) {
        indiceSlide = 0;
    }
    if (n < 0) {
        indiceSlide = slides.length - 1;
    }

    let translation = -indiceSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${translation}%)`;
}
mostrarSlide(indiceSlide);
setInterval(() => cambiarSlide(1), 5000);

let indiceActual = 0;
const diapositivas = document.querySelectorAll('.diapositiva');

function cambiarDiapositiva(n) {
  indiceActual += n;
  if (indiceActual < 0) {
    indiceActual = diapositivas.length - 1;
  } else if (indiceActual >= diapositivas.length) {
    indiceActual = 0;
  }

  diapositivas.forEach((diapositiva, index) => {
    diapositiva.classList.remove('activa');
    if (index === indiceActual) {
      diapositiva.classList.add('activa');
    }
  });

  const valorTransformacion = -indiceActual * 100;
  document.querySelector('.carrusel').style.transform = `translateX(${valorTransformacion}%)`;
}
