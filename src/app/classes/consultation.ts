export class Consultation {
    constructor(
        public id_consultation: number,
        public date_consultation: Date,
        public diagnostic: string,
        public patient_id:number
      ) {}
}
