import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificat } from 'src/app/classes/certificat';
import { CertificatService } from 'src/app/services/certificat.service';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit{  
  certificats: Certificat[] = [];
  searchDate: Date = new Date();
  id !:number;
  id_dossier_medical!:any
  constructor(private certificatService: CertificatService, private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getCertificatsByPatients(this.id);
    });

   

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

}
