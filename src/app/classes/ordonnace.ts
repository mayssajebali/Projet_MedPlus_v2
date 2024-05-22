import { DossierMedical } from "./dossier-medical";
import { Medicament } from "./medicament";

export class Ordonnace {
    constructor(
        public id: number,
        public date_creation: Date,
        public medicaments: Medicament[] = [] // Initialisation de la liste des médicaments

    ) {}
}
