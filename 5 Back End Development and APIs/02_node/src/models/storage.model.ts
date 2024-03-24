import { Schema, model } from 'mongoose'
import { Storage } from '../interfaces/storage.interface'

const StorageSchema = new Schema<Storage>(
  {
    fileName: {type: String},
    path: {type: String},
    idUser: {type: String}
  },
  {
    timestamps: true,
    versionKey: false,
  },

) 

const StorageModel = model("storage", StorageSchema)

export default StorageModel