import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private readonly loadingCtrl: LoadingController,
    private firebase: FirebaseService,  
    private router: Router
  ) { }


  ngOnInit() {
  }

  edadForm: string;
  emailForm: string;
  nombreUsuarioForm: string;
  passwordForm: string;
  telefonoForm: string;

  async registrarUsuario(){
    const loading = await this.loadingCtrl.create();
    let usuario = {
      edad: this.edadForm, 
      email: this.emailForm, 
      nombreUsuario: this.nombreUsuarioForm, 
      password: this.passwordForm, 
      telefono: this.telefonoForm
    }
    let path = "usuarios" + this.emailForm 
    this.firebase.setDocument(path, usuario)
      .then(
        () => {
          loading.dismiss().then(() => {
            /* this.router.navigateByUrl(''); */
            console.log("PENE");
            
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
          });
        }
      );
  }
}
