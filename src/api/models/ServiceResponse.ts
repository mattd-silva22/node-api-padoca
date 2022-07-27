import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2"

export class ServiceResponse {
    data? : string | RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader | Array<{}>
    sucess: boolean
    httpCode : number
    message? : string
    static data: any
}