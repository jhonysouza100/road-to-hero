// "Cragador dinamico de Rutas"
import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

const router = Router()

/**
 * 
 * index.ts items.ts => index.ts items
 * @returns 
 */

const cleanFileName = (filename: string) => {
  const file = filename.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename)
  if(cleanName !== 'index') {
    import(`./${cleanName}.routes`).then((moduleRouter) => {
      console.log(cleanName) // items
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }