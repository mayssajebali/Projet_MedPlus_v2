import { Patient } from "./patient";

export class RendezVous {
    constructor(public id_rendez_vous:Number,public startDate:Date,public endDate:Date,public text:String,public patient:Patient){}
    //,public heure:Number
}

