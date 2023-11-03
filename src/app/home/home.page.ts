import { Component, inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  firebaseServ = inject(FirebaseService);

  ngOnInit(){
    console.log("hola");
    
  }

  mensaje(){
    
    let email = "adoo@yopmail.com"
    let  password = "sam1210"
    
    this.firebaseServ.sigIn(email, password).then(res => {
      console.log(res);
      
    }) 
  }
}
