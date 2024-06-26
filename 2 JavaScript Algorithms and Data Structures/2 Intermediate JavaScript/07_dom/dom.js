/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

console.log(window);
console.log(document);

let texto = 'Hola perro!';
const hablar = (texto) => {  speechSynthesis.speak(new SpeechSynthesisUtterance(texto)) }
// hablar(texto);

/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */

console.log('************ Elementos del Documento ************');
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write(`<br><hr></br>`)
document.write('<h3>Hola Mundo desde el DOM</h3>');


/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// Anteriores selectores
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));
// Anterior selector que se sigue usando
console.log(document.getElementById('menu'));

// Nuevos metodos de selecion de elementos
console.log(document.querySelector('#menu'));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('#menu li'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach(el => console.log(el));

/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

document.documentElement.lang = 'en';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang' , 'es-MX');
console.log(document.documentElement.lang);

// Guardando los selectores del DOM en variables (se antepone el signo $ para hecer referencia a los elementos del dom)
const $linkDOM = document.querySelector('.link-dom');
$linkDOM.setAttribute('target', '_blank');
console.log($linkDOM.hasAttribute('rel'));
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute('href', 'https://gmail.com');

// Data Attributes
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);

$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento')
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = 'Hola Prrooo!'
console.log($linkDOM.dataset.description);


/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

// gregar estilos con slelectores del DOM
$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
// gregar estilos con slelectores del DOM
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log(window.getComputedStyle($linkDOM).getPropertyValue('color'));

// VAriables CSS - Custom Properties
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
  varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', '#000');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
$body.style.setProperty('background-color', varDarkColor)

/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */

// className
// classList .constains, .add, .remove, .toggle. replace
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));


// Añadir una clase desde el  DOM
$card.classList.add('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);

// Eliminar una clase delde el DOM
$card.classList.remove('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);

// Alterna entre los estados. Si el elemento ya tiene la clase especificada, se la quita, y si no la tiene, se la agrega.
$card.classList.toggle('rotate-45');
console.log('$card tiene la clase "rotate-45"?')
console.log($card.classList.contains('rotate-45'));
console.log($card.className);


// Se utiliza para reemplazar una clase existente en un elemento HTML con una nueva clase.
$card.classList.replace('rotate-45', 'rotate-135');

// Añadir varias clases a la vez
$card.classList.add('opacity-80', 'sepia');
// Eliminar varias clases a la vez
$card.classList.remove('opacity-80', 'sepia');
// Alternar  varias clases a la vez
$card.classList.toggle('opacity-80', 'sepia');

/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */

const $whatIsDOM = document.getElementById('que-es');

let text = `
  <p>
    EL Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es una API para
    documentos HTML y XML.
  </p>
  <p>
    Este provee una representacion estructural del documento, permitiendo modificar su contenido y
    persentacion visual mediante codigo JS.
  </p>
  <p>
    <mark> El DOM no es parte de la especificacion de javaScript, es una API para los anvegadores</mark>
  </p>
  `;

  // $whatIsDOM.innerText = text;
  $whatIsDOM.textContent = text;

  // Insertar codigo en html
  $whatIsDOM.innerHTML = text;
  
  // remplaza el elemento del DOM por el contenido
  $whatIsDOM.outerHTML = text;


/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */

console.log('====== DOM Traversing: Recorriendo el DOM ======');
const $cards = document.querySelector('.cards');
console.log($cards);

// Retorna una coleccion de los elementos hijos
console.log($cards.children);

// Retorna un elemento hijo en especifico
console.log($cards.children[2]);

// Retrona el primer nodo
console.log($cards.firstChild);

// Retrona el ultimo nodo
console.log($cards.lastChild);

// Retorna el primer elemento hijo
console.log($cards.firstElementChild);

// Retorna el ultimo elemento hijo
console.log($cards.lastElementChild);

// Retorna el elemento padre
console.log($cards.parentElement);

// Retorna el nodo padre
console.log($cards.parentNode);

// Retorna el primer elemento hermano
console.log($cards.previousElementSibling);

// Retorna el ultimo elemento hermano
console.log($cards.nextElementSibling);

// Busca el ancestro mas cercano
console.log($cards.closest('div'));
console.log($cards.children[3].closest('section'));

/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */

const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaptions = document.createElement('figcaption'),
    $textFig = document.createTextNode('Animals');

// Agregar nodos hijo
$cards.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaptions);
$figcaptions.appendChild($textFig);

//Agregar propriedades a los elementos
$img.setAttribute('src','https://placeimg.com/200/200/animals');
$img.setAttribute('alt','Animals');

// Agregar clase a los elementos
$figure.classList.add('card');


// ====== Agregando otra tarjeta ======
const $figure2 = document.createElement('figure');
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People" />
<figcaption>People</figcaption>
`;
$figure2.classList.add('card');
// Añade el nodo de figure2 al elemento .card
$cards.appendChild($figure2);

// -----------
const estaciones = ['Primavera', 'Veramo', 'Otoño', 'Invierno'],
      $ul = document.createElement('ul');

document.write(`<h3>Estaciones del Año</h3>`);
document.body.appendChild($ul);

estaciones.forEach(el => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $ul.appendChild($li);
})

// -----------
const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'],
$ul2 = document.createElement('ul');

document.write(`<h3>Continentes del Mundo</h3>`);
document.body.appendChild($ul2);
$ul2.innerHTML = ``;
continentes.forEach( el => {
  $ul2.innerHTML += `<li>${el}</li>`
})

// -----------
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      $ul3 = document.createElement('ul'),
      $fragment = document.createDocumentFragment();

meses.forEach(el => {
  const $li = document.createElement('li');
  $li.textContent = el;
  $fragment.appendChild($li);
})
document.write('<h3>Meses del Año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/*
const $template = document.getElementById('template-card').content,
      $fragment2 = document.createDocumentFragment(),
      cardContent = [{title:'Tecnologia', img:'https://placeimg.com/200/200/tech'}, {title:'Animal', img:'https://placeimg.com/200/200/animals'}, {title:'Persona', img:'https://placeimg.com/200/200/people'}, {title:'Arquitectura', img:'https://placeimg.com/200/200/arch'}, {title:'Naturaleza', img:'https://placeimg.com/200/200/nature'}];

      cardContent.forEach( el => {
        $template.querySelector('img').setAttribute('src', el.img);
        $template.querySelector('img').setAttribute('alt', el.title);
        $template.querySelector('figcaption').textContent = el.title;

        // Copia toda la estructura del elemento/nodo
        let $clone = document.importNode($template, true);
        $fragment2.appendChild($clone);
      })

      $cards.appendChild($fragment2);
      */

/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */

const $newCard = document.createElement('figure')
$newCard.innerHTML = `<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>`
$newCard.classList.add('card')

// $cards.replaceChild($newCard, $cards.children[2]) // Inserta en una parte del nodo
// $cards.insertBefore($newCard, $cards.firstElementChild) // Inserta antes del nodo
// $cards.appendChild($newCard) // Inserta al final del nodo
// $cards.removeChild($cards.lastElementChild) // Elimina al final del nodo

// Clonar toda la secion .cards
$cloneCards = $cards.cloneNode(true)
// document.body.appendChild($cloneCards)


/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position,html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterend(hermano siguiente)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
*/

const $newCard2 = document.createElement('figure')
$newCard2.classList.add('card')
let $contentCard = `<img src="http://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>`
$newCard2.insertAdjacentHTML("afterbegin", $contentCard)
$newCard2.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')

// $cards.insertAdjacentElement("beforebegin", $newCard)
// $cards.insertAdjacentElement("afterbegin", $newCard)
// $cards.insertAdjacentElement("beforeend", $newCard)
// $cards.insertAdjacentElement("afterend", $newCard2)

// $cards.append($newCard2) // ultimo hijo
// $cards.prepend($newCard2) // primer hijo
// $cards.before($newCard2) // hermano anterior
$cards.after($newCard2) // hermano siguiente

/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha ********** */

function mensaje() {
  alert('Hola Mundo')
  console.log(event)
}

// Solo se puede asociar una funcion de evento|
const $eventoSemantico = document.getElementById('evento-semantico')
$eventoSemantico.onclick = mensaje
$eventoSemantico.onclick = function(el) {
  alert('Hola manejador de eventos semanticos')
  console.log(el)
  console.log(event)
}

// Puedes asociar multiples eventos simultaneos
const $eventoMultiple = document.getElementById('evento-multiple')
$eventoMultiple.addEventListener("click", mensaje)
$eventoMultiple.addEventListener("click", (e) => {
  alert('Hola manejador de eventos Multiples')
  console.log(e)
  console.log(e.type)
  console.log(e.target)
})


/* ********** Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */

function saludar(nombre = 'desconocido') {
  alert(`Hola ${nombre}`)
}
const $multyEvent = document.getElementById('multy-event')
$multyEvent.addEventListener('click', () => saludar('Jon'))


// Remover Eventos con manejadores multiples
const $removeEvent = document.getElementById('remove-event'),
      removeDobleClick = (e) => {
        console.log(e)
        $removeEvent.removeEventListener('dblclick', removeDobleClick)
        $removeEvent.disabled = true
      }
      
      $removeEvent.addEventListener('dblclick', removeDobleClick)

/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */

/* const $divEventos = document.querySelectorAll('.flujo_eventos div')
function flujoEventos(el) { console.log(`Hola te saluda ${this.className}, el click lo origino en ${el.target.className}`) }
$divEventos.forEach( el => {
  // Fase de burbuja
  // el.addEventListener('click', flujoEventos)
  // el.addEventListener('click', flujoEventos, false)
  // Face de captura
  // el.addEventListener('click', flujoEventos, true)
  el.addEventListener('click', flujoEventos, {
    capture: false,
    once: true})
})
*/
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
/*
const $linkEventos = document.querySelector('.flujo_eventos a')
function paraPropagacion(el) { 
  console.log(`Hola te saluda ${this.className}, el click lo origino en ${el.target.className}`) 
  el.stopPropagation()
}

$divEventos.forEach( el => {
  // Fase de burbuja
  el.addEventListener('click', paraPropagacion)
  // Fase de captura
  // el.addEventListener('click', paraPropagacion, true)

})

$linkEventos.addEventListener('click', (e) => {
  alert('Hola soy un evento click')
  el.preventDefault()
})
*/
/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */

function delegacionEventos(e) {
  console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
  e.stopPropagation()
}
document.addEventListener('click', e => {
  console.log(`Click en ${e.target}`)
  if(e.target.matches('.flujo_eventos div')) {
    delegacionEventos(e)
  }
  if(e.target.matches('.flujo_eventos a')) {
    alert(`Hola soy un enlace`)
    e.preventDefault()
  }
})
 
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
window.addEventListener('resize', e => {
  console.clear()
  console.log('****** Evento Resize ******')
  console.log(window.innerWidth)
  console.log(window.innerHeight)
  console.log(window.outerWidth)
  console.log(window.outerHeight)
 
  console.log(e)
})

window.addEventListener('scroll', e => {
  console.clear()
  console.log('****** Evento Scroll ******') 
  console.log(window.scrollX)
  console.log(window.scrollY)
  
  console.log(e)
})

window.addEventListener('load', e => { // espera a que se cargue todo el documento para ejecutarse
  // console.clear()
  console.log('****** Evento Load ******') 
  console.log(window.screenX)
  console.log(window.screenY)

  console.log(e)
})

document.addEventListener('DOMContentLoaded', e => { // se ejecuta inmediatamente
  // console.clear()
  console.log('****** Evento DOMContentLoaded ******') 
  console.log(window.screenX)
  console.log(window.screenY)
  
  console.log(e)
  })

/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
// window.alert('Alerta')
// window.confirm('Confirmacion')
// window.prompt('Input')

// alert('Alerta')
// confirm('Confirmacion')
// prompt('Input')

const $abrirVentana = document.getElementById('abrir-ventana'),
      $cerrarVentana = document.getElementById('cerrar-ventana'),
      $imprimirVentana = document.getElementById('imprimir-ventana')
      
let ventana

$abrirVentana.addEventListener('click', e => { ventana = window.open('http://google.com/')})

$cerrarVentana.addEventListener('click', e => { ventana.close() })

$imprimirVentana.addEventListener('click', e => { window.print() })

/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
console.clear()
console.log('****** Object URL (location) ******')
console.log(location)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.search)
console.log(location.pathname)

console.log('****** Object Historial (history) ******')
console.log(history)
console.log(history.length) // guarda la cantidad de paginas visitadas
// history.back(3) // cuantas paginas quieres ir hacia atras
// history.forward(3) // cuantas paginas quieres ir hacia adelante
// history.go(-3) // indicas hacia donde quieres ir - = atras, + = adelante

console.log('****** Object Navegador (navigator) ******')
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.online)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)
