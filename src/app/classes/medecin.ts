export class Medecin {
    constructor(
        public id_medecin:number,
        public nom_medecin:string,
        public prenom_medecin:string,
        public adresse_medecin: string,
        public telephone_medecin: string,
        public mail_medecin:string,
        public mot_de_passe_medecin: string,
        public id_calendrier : number
    ){}
}
