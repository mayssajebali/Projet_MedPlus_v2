export class Patient {
    constructor(
        public id_patient:number,
        public cin: string,
        public nom: string,
        public prenom: string,
        public email  :  string,
        public mot_de_passe : string,
        public date_de_naissance : Date,
        public adresse : string,
        public telephone : string,
        public sexe : string){
    }

}
