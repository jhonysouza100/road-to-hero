const main = document.querySelector('main'),
files = document.getElementById('files')

const uploader = (file) => {
  // console.log(file)
  // Instance of XMLHttpRequest Object
  const xml =  new XMLHttpRequest()
  // Create new Object form data
  const formData = new FormData()
  // Add name "file" of element file to formData
  formData.append("file", file)

  // Listen for changes in xml Object
  xml.addEventListener('readystatechange', e => {
    //  READY_STATE_COMPLETE
    if(xml.readyState !== 4) return
    // if request is successful
    if(xml.status >= 200 && xml.status < 300) {
      // console.log(xml.responseText)
      // obtain RESPONSE object
      // let json = xml.responseText // tambien funciona porque desde el server manda la respuesta en formato json
      let res = JSON.parse(xml.responseText)
      // console.log(res)
    } else {
      let message = xml.statusText || "Ocurrio un error!"
      console.error(`Error ${xml.statusText}: ${message}`)
    }
  })

  // Open request to uploader
  xml.open("POST", "server/uploader.php")
  // Set headers
  xml.setRequestHeader("enc-type", "multipart/form-data")
  // Send REQUEST
  xml.send(formData)

}

// function to progress upload progress
const progressUploader = file => {
   const progressBar = document.createElement('progress')
   progressBar.classList.add('mt-4') // tailwindcss: margin-top 1rem/16px
   // set start value of progress bar
   progressBar.value = 0
   // set max value of progress bar 
   progressBar.max = 100
  // insert each progress bar in main element
  main.insertAdjacentElement('beforeend', progressBar)

  const span = document.createElement('span')
  main.insertAdjacentElement('beforeend', span)
  
  // FileReader Object
  const fileReader = new FileReader()
  // read file as data URL
  fileReader.readAsDataURL(file)

  // while fileReader is reading file // mientras lo lee
  fileReader.addEventListener('progress', e => {
    // set value of progress bar
    let progressValue = parseInt((e.loaded * 100) / e.total)
    progressBar.value = progressValue

    span.innerHTML = `<b>${file.name} - ${progressValue}%</b>`
  }
  )

  // after fileReader is end reading // edspues de leerlo
  async function handleFileUpload() {
    await new Promise((resolve) => {
      fileReader.addEventListener('loadend', (e) => {
        // execute function to upload file
        uploader(file)

        resolve()
      })
    })
  
    // Remove progress bar and span from the DOM
    main.removeChild(progressBar) // remove progress bar
    // main.removeChild(span) // remove span
    files.value = "" // clean input file
  }
  
  // call function handleFileUpload
  handleFileUpload();  


}

document.addEventListener('change', e => {
  if(e.target === files) {
    // console.log(e.target.files)
    
    // Convert on iterable object
    const files = Array.from(e.target.files)

    // For each elements in file, execute the callback function
    files.forEach( el => progressUploader(el))
  
  }
})