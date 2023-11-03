import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailForm: string;
  passwordForm: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  firebaseServ = inject(FirebaseService)

  
  
  async iniciarSesion(){
    try {
      const userCredential = await this.firebaseServ.sigIn(this.emailForm, this.passwordForm);

      // Verifica si userCredential.user no es nulo antes de acceder a sus propiedades
      if (userCredential.user) {
        const user = userCredential.user;
        
        // Verifica si el usuario es "admin@admin.admin"
        if (user.email === 'admin@admin.admin') {
          // El usuario tiene credenciales de administrador
          // Puedes realizar acciones específicas para el administrador aquí si es necesario.
          console.log("SOY ADMIN");
        }else{
          console.log("no soy admin :c");
        }

        return user;
      } else {
        throw new Error('El usuario no está autenticado correctamente.');
      }
    } catch (error) {
      throw error;
    }
  }

}


