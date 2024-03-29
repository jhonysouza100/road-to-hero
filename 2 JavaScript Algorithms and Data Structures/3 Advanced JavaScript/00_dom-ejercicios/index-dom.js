import hamburgerBtn from "./components/1_hamburger_btn/hamburger_btn.js"
import {digitalClock, alarm} from "./components/2_reloj/reloj.js"
import {shortcuts, moveBall} from "./components/3_teclado/teclado.js"
import countdown from "./components/4_countdown/countdown.js"
import scrollTop from "./components/5_scroll-top/scroll-top.js"
import darkTheme from "./components/6_dark-theme/dark-theme.js"
import responsiveMedia from "./components/7_responsive-design/responsive-design.js"
import responsiveTester from "./components/8_responsive-tester/responsive-tester.js"
import userDeviceInfo from "./components/9_deteccion-dispositivos/deteccion-dispositivos.js"
import networkStatus from "./components/10_deteccion-red/deteccion-red.js"
import userWebcam from "./components/11_deteccion-webcam/deteccion-webcam.js"
import getLocation from "./components/12_geolocalizacion/geolocalizacion.js"
import serachFilters from "./components/13_filtros-busqueda/filtros-busqueda.js"
import draw from "./components/14_sorteo/sorteo.js"
import slider from "./components/15_carrusel/carrusel.js"
import scrollSpy from "./components/16_scrollSpy/scroll-spy.js"
import smartVideo from "./components/17_video-inteligente/video-inteligente.js"
import contactFormValidations from "./components/18_validaciones-formulario/validaciones-formulario.js"
import speechReader from "./components/19_narrador/narrador.js"

const d = document
d.addEventListener("DOMContentLoaded", e => {
  hamburgerBtn('.hamburger', '.panel', '.menu a')
  digitalClock('#reloj', '#activar-reloj', '#detener-reloj')
  alarm('assets/alarma.mp3', '#activar-alarma', '#detener-alarma')
  countdown('countdown', 'Oct 01, 2023', 'Feliz Cumpleaños')
  scrollTop('.scroll-top')

  responsiveMedia('youtube', '(min-width: 1024px)',
    '<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank">Ver Curso JavaScript: 90</a>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  )

  responsiveMedia('gmaps', '(min-width: 1024px)',
    '<a href="https://goo.gl/maps/Q8jxYM4ePxmAsSHbA" target="_blank">Ver mi Ciudad</a>',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7191.296780443223!2d-54.45853368057674!3d-25.682947849452727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea41eb9d9119%3A0x2ab8d74e979dc0a2!2s%C3%81rea%20Cataratas%20%7C%20Parque%20Nacional%20Iguaz%C3%BA!5e0!3m2!1ses!2sar!4v1681193537032!5m2!1ses!2sar" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  )

  responsiveTester('responsive-tester')
  userDeviceInfo('user-device')
  userWebcam('web-cam')
  getLocation('location')
  serachFilters('.card-filter', '.card')
  draw('#sort-btn', '.player')
  slider()
  scrollSpy()
  smartVideo()
  contactFormValidations()

} )

darkTheme('.dark-theme', 'dark-mode')
networkStatus()
speechReader()


d.addEventListener('keydown', e => {
  // keydown
  // keyup
  // keypress
  shortcuts(e)

  moveBall(e, '.ball', '.stage')
})