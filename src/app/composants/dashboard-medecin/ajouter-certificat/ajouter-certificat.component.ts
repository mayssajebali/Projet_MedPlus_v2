import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificat } from 'src/app/classes/certificat';
import { CertificatService } from 'src/app/services/certificat.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajouter-certificat',
  templateUrl: './ajouter-certificat.component.html',
  styleUrls: ['./ajouter-certificat.component.css']
})
export class AjouterCertificatComponent implements OnInit {
  certificats: Certificat[] = [];
  searchDate: Date = new Date();
  id !:number;
  id_dossier_medical!:any
  CertificatForm!:FormGroup;
  constructor(private certificatService: CertificatService, private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,private fb:FormBuilder) { 
      this.CertificatForm = this.fb.group({
        nbr_jour_repos: [''],
        date_repos: [''],
        date_creation: [''],
        commentaire: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    if (this.route.parent) {
      this.route.parent.paramMap.subscribe(params => {
        this.id_dossier_medical = params.get('id');
         this.getCertificatsByPatients(this.id_dossier_medical);
      });
    }

  }



  getCertificatsByPatients(id:number): void {
    this.certificatService.getCertificatsByPatients(id)
      .subscribe(certificats => this.certificats = certificats);
  }


  searchCertificats(): void {
    if (this.searchDate) {
      this.certificatService.searchCertificatsByDate(this.searchDate,this.id)
        .subscribe(certificats => this.certificats = certificats);
    } else {
      this.getCertificatsByPatients(this.id_dossier_medical);
    }
  }

  imprimerCertificat(certificatId: number): void {
    const certificatContentId = 'ordonnanceContent_' + certificatId;
    const contenu = document.getElementById(certificatContentId);

    if (contenu) {
      const fenetreImpression = window.open('', '', 'height=600,width=800');

      if (fenetreImpression) {
        fenetreImpression.document.write('<html><head><title>Imprimer Ordonnance</title>');
        fenetreImpression.document.write('</head><body>');
        fenetreImpression.document.write(contenu.innerHTML);
        fenetreImpression.document.write('</body></html>');
        fenetreImpression.document.close();
        fenetreImpression.print();
      } else {
        console.error("La fenêtre d'impression n'a pas pu être ouverte.");
      }
    } else {
      console.error("L'élément d'ordonnance n'a pas été trouvé.");
    }
  }

 
  AjouterCertificat(){
    const newCertificat:Certificat={
      code_certificat:0,
      nbr_jour_repos:this.CertificatForm.get("nbr_jour_repos")?.value,
      date_repos:this.CertificatForm.get("date_repos")?.value,
      date_creation:new Date(),
      commentaire:this.CertificatForm.get("commentaire")?.value
    }
    this.certificatService.addCertificat(newCertificat,this.id_dossier_medical).subscribe();
  }
  deleteCertificat(certificatId: number): void {
    this.certificatService.deleteCertificat(certificatId).subscribe(
      () => {
        console.log('Certificat supprimé avec succès');
        alert('Certificat supprimé avec succès');
        this.certificats = this.certificats.filter(c => c.code_certificat!== certificatId);
      },
      (error) => {
        console.error('Error deleting certificat', error);
      }
    );
  }
}
