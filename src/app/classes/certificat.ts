export class Certificat {
    constructor(
        public code_certificat: number,
        public nbr_jour_repos: number,
        public date_repos: Date,
        public date_creation :Date,
        public commentaire: string,
      ) {}
}
