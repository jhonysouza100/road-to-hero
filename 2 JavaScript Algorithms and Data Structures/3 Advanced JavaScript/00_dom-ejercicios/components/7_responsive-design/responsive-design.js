/* **********     Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha     ********** */
const d = document,
w = window
export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mediaQuery)

  const responsive = e => {
    if(e.matches) {
      d.getElementById(id).innerHTML = desktopContent
    } else {
      d.getElementById(id).innerHTML = mobileContent
    }
  }
  breakpoint.addListener(responsive)
  responsive(breakpoint)
}