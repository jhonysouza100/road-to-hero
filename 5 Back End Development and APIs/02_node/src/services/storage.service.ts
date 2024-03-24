import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerUpload = async (reqBody: Storage) => {
  
  const filename = reqBody.fileName
  const path  = reqBody.path
  const idUser = reqBody.idUser
  
  const response = await StorageModel.create({
    filename,
    path,
    idUser
  })

  return response
}

export { registerUpload}