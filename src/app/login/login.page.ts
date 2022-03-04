import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { hasShadowDom } from '@ionic/core/dist/types/utils/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public name: string;
  public age: string;
  public course: number;

  constructor(public toastCtrl: ToastController, public myroute: Router) { }

  ngOnInit() {
  }

  go(){
    const dataobj = { 
      myname: this.name,
      mypwd: this.age,
      mytype: this.course
    };
    const sentobj = JSON.stringify(dataobj);
    this.myroute.navigate(['loginresult', sentobj]);
  }

  async openToast() { 
    const toast = await this.toastCtrl.create({ 
    /*message: 'It is a Toast Notification',
    showCloseButton: true,
    closeButtonText: 'hide', */
    message: 'message here…', 
    duration: 5000, 
    }); 
    toast.present(); 
    }
  

}
