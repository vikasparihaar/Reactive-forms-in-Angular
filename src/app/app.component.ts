import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm = new FormGroup({
    user:new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    
    address :new FormGroup({
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      postalCode: new FormControl('',[Validators.required,Validators.minLength(6)])

    })
    
  });
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user')
  }
  get userEmail(){
    return this.loginForm.get('userEmail')
  }
  get password(){
    return this.loginForm.get('password')
  }
  
  get city(){
    return this.loginForm.get('city')
  }
  get state(){
    return this.loginForm.get('sate')
  }
  get postalCode(){
    return this.loginForm.get('postalCode')
  }
  
}
