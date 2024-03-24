import { Response } from 'express'
import { RequestExt } from '../interfaces/request.extend.interface'
import { handleHTTP } from '../utils/error.handle'
import { registerUpload } from '../services/storage.service'
import { Storage } from '../interfaces/storage.interface'

const getFile = async (req: RequestExt, res: Response) => {
  try {

    const { user, file } = req

    const dataToRegister: Storage = { 
      idUser: `${user?.id}`,
      fileName: `${file?.filename}`,
      path: `${file?.path}`
    }

    const response = await registerUpload(dataToRegister)

    res.send(response)

  } catch (error) {
    handleHTTP(res, "ERROR_GET_FILE")
  }
}

export { getFile }