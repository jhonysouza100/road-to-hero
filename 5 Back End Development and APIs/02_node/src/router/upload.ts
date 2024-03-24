import { Router } from 'express'
import { getFile } from '../controllers/upload.controller'
import { checkJWT } from '../middlewares/session'
import { file } from '../middlewares/file'

const router = Router()

router.post('/', checkJWT, file.single('myfile'), getFile)

export { router }