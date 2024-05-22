export class Discussion {
    constructor(
        public id_discussion:number,
        public message:String,
        public date_discussion:String,
        public medecin_id:number,
        public patient_id:number,
        public id_expediteur:number,
        public id_recepteur:number
    ){}
}
