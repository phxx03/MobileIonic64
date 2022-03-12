import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { hasShadowDom } from '@ionic/core/dist/types/utils/helpers';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private toastr: ToastController
    ) { }

  ngOnInit() {
  }

  login(){
    if(this.email && this.password){
      this.auth.signin(this.email,this.password);
    } else {
      this.toast('Plz enter Ur email and password', 'warning');
    }
  }

  async toast(message, status) { 
    const toast = await this.toastr.create({
    message: message,
    color: status,
    position: 'top', 
    duration: 2000, 
    }); 
    toast.present(); 
    }
  

}
