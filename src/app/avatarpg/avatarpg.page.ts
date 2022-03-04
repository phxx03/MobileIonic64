import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avatarpg',
  templateUrl: './avatarpg.page.html',
  styleUrls: ['./avatarpg.page.scss'],
})
export class AvatarpgPage implements OnInit {
  //countrylist: any;
  //countrylist = ['Thailand', 'Vietnam', 'Malasia', 'Singapore'];
  countrylist = [
     {icon: 'bag-handle',
      name: 'Thailand',
      capital: 'BKK'} ,
      { icon: 'airplane',
      name: 'Vietnam',
      capital: 'Hanoi'
      },
      { icon: 'alarm',
      name: 'Singapore',
      capital: 'Singapore'
      }
  ];

  constructor(public myrouter: Router,
    public alertCtrl: AlertController) {


  }

  showinfo(tmpitem: any){
    const data = JSON.stringify(tmpitem);
    this.myrouter.navigate(['avatarresult', data]);
  }

  async presentConfirmDEL(item: any) {
    const alert = this.alertCtrl.create({
      subHeader: 'Delete', // Header
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            //console.log('Buy clicked');

            this.removeItem(item);
          }
        }
      ]
    });
    (await alert).present();
  }

  removeItem(item) {
    for (let i = 0; i < this.countrylist.length; i++) {
      if (this.countrylist[i] === item) {
        this.countrylist.splice(i, 1);
      }
    }
  }

  async presentPromptEdit(getcontryname:string) {
    const alert = this.alertCtrl.create({
      subHeader: 'Edit',
      inputs: [
        {
          name: 'inputcountry',
          placeholder: 'country name'
        },
        {
          name: 'inputcapital',
          placeholder: 'capital'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i=0; i<this.countrylist.length; i++){
               if (this.countrylist[i].name === getcontryname) {//found
                  this.countrylist[i].name = data.inputcountry;
                  this.countrylist[i].capital = data.inputcapital;
               }//if
            }//for
          }//handler
        }
      ]
    });
    (await alert).present();
  }



  ngOnInit() {
  }

}
