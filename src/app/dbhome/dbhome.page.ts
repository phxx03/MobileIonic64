import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService'
import { AlertController, NavController } from '@ionic/angular';
import { Student } from './student'

@Component({
  selector: 'app-dbhome',
  templateUrl: './dbhome.page.html',
  styleUrls: ['./dbhome.page.scss'],
})
export class DbhomePage implements OnInit {

  stdobj: any;
  stdid: any;

  constructor(private apiservice: StudentService, private alertCtrl: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
    this.apiservice.getDataList().subscribe((res) => { 
      this.stdobj = res.map((t) => ({
        getid: t.payload.doc.id,
        getname: t.payload.doc.data()['sname'.toString()], 
        getage: t.payload.doc.data()['age'.toString()], 
        getaddress: t.payload.doc.data()['address'.toString()],   
        getimg: t.payload.doc.data()['img'.toString()], 
      })); 
      console.log(this.stdobj); 
      });     
  }

  async presentPrompAdd() {
    const alert = this.alertCtrl.create({
      subHeader: 'Create',
      inputs: [
        {
          name: 'inputname',
          placeholder: 'name'
        },
        {
          name: 'inputage',
          placeholder: 'age'
        },
        {
          name: 'inputaddress',
          placeholder: 'address'
        },
        {
          name: 'inputimg',
          placeholder: 'img'
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
          text: 'Create',
          handler: data => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            const tmpdata = {};
            tmpdata['sname'.toString()] = data.inputname;
            tmpdata['age'.toString()] = data.inputage;
            tmpdata['address'.toString()] = data.inputaddress;
            tmpdata['img'.toString()] = data.inputimg;
            this.apiservice.createStudent(tmpdata); 


          }//handler
        }
      ]
    });
    (await alert).present();
  }
  async presentConfirmDelete(delid: any) {
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

            this.apiservice.deleteUser(delid);
          }
        }
      ]
    });
    (await alert).present();
  }

  // Update
    //async presentPromptEdit(id, name, age, address) {
      async presentPromptEdit(tmpobj) {
        const alert = this.alertCtrl.create({
          subHeader: 'Edit',
          message: 'Now you are editing ' + tmpobj.getname,
          inputs: [
            {
              name: 'name',
              placeholder: tmpobj.getname
            },
            {
              name: 'age',
              placeholder:tmpobj.getage
            },
            {
              name: 'address',
              placeholder: tmpobj.getaddress
            },
            {
              name: 'img',
              placeholder: tmpobj.getimg
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
                const updatedata = {};
                updatedata['sname'.toString()] = data.name;
                updatedata['age'.toString()] = data.age;
                updatedata['address'.toString()] = data.address;
                updatedata['img'.toString()] = data.img;
                ///this.ngFirestore.doc('/Student/'+id).update(updatedata);
                this.apiservice.updateUser(tmpobj.getid, updatedata);
                console.log(updatedata);
              }
            }
          ]
        });
        (await alert).present();
      }
  
      async showModal(item) {
        this.navCtrl.navigateForward('bookhome'); 
        console.log(this.stdid); 
        };  



}
