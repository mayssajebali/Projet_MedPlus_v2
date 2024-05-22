export class Medicament {
    constructor(
        public id: number,
        public nom_medicament: string,
        public dosage_medicament: number,
        public nbr_fois_par_jour: number,
        public duree: number,
        public ordonnance:number
    ) {}
}
