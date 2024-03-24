import { NextFunction, Response } from "express"
import { RequestExt } from "../interfaces/request.extend.interface"
import { verifyToken } from "../utils/jwt.handle"

type CleanToken = string

const checkJWT =(req: RequestExt, res: Response, next: NextFunction ) => {

  try {

    const reqToken = req.headers.authorization || ''

    const cleanToken: CleanToken = reqToken.split(' ').pop() as CleanToken // ['Bearer', '*****'] 

    const token = verifyToken(cleanToken) as {id: string}
    if(!token) {

      res.status(401).send("INVALID_SESSION")
      
    } else {

      req.user = token

      next()
    }
    
  } catch (error) {
    res.status(400).send("INVALID_TOKEN")
  }

}

export { checkJWT }