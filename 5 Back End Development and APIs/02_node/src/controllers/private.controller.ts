import { Request, Response } from "express"
import { findMany } from "../services/private.service"
import { handleHTTP } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken"
import { RequestExt } from "../interfaces/request.extend.interface"


const getUsers = async (req: RequestExt, res: Response) => {
  try {

    const response = await findMany()
    
    res.send({...response, observer: req?.user})

  } catch (eror) {
    handleHTTP(res, 'ERROR_GET_ITEMS')
  }
}

export { getUsers }