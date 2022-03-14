import { Component, OnInit } from '@angular/core';
import { StudentService } from './StudentService'
import { AlertController, NavController } from '@ionic/angular';
import { Student } from './student'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dbhome',
  templateUrl: './dbhome.page.html',
  styleUrls: ['./dbhome.page.scss'],
})


export class DbhomePage implements OnInit {

  stdobj: any;
  stdid: any;
  searchTerm: string;

  constructor(private apiservice: StudentService, 
    private alertCtrl: AlertController, 
    public navCtrl: NavController,
    private auth: AuthService,
    private router: Router) {
     }

  ngOnInit() {
    this.apiservice.getDataList().subscribe((res) => { 
      this.stdobj = res.map((t) => ({
        getid: t.payload.doc.id,
        getcourse: t.payload.doc.data()['course'.toString()], 
        getfaculty: t.payload.doc.data()['faculty'.toString()], 
        getgraduate: t.payload.doc.data()['graduate'.toString()],   
        getimg: t.payload.doc.data()['img'.toString()], 
        getlink: t.payload.doc.data()['link'.toString()], 
        getNE: t.payload.doc.data()['NE'.toString()],
      })); 
      console.log(this.stdobj); 
      });     
  }
  
  logout(){
    this.auth.signOut();
  }

  openUrl(){ window.open('link', '_system'); }

  gotoProfile(){
    this.router.navigate(['/profile']);
  }

  async presentPrompAdd() {
    const alert = this.alertCtrl.create({
      subHeader: 'Create',
      inputs: [
        {
          name: 'inputname',
          placeholder: 'course'
        },
        {
          name: 'inputage',
          placeholder: 'faculty'
        },
        {
          name: 'inputaddress',
          placeholder: 'graduate'
        },
        {
          name: 'inputimg',
          placeholder: 'img'
        },
        {
          name: 'inputlink',
          placeholder: 'link'
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
            tmpdata['course'.toString()] = data.inputcourse;
            tmpdata['faculty'.toString()] = data.inputfaculty;
            tmpdata['graduate'.toString()] = data.inputgraduate;
            tmpdata['img'.toString()] = data.inputimg;
            tmpdata['link'.toString()] = data.inputlink;
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
          message: 'Now you are editing ' + tmpobj.getcourse,
          inputs: [
            {
              name: 'course',
              placeholder: tmpobj.getcourse
            },
            {
              name: 'faculty',
              placeholder:tmpobj.getfaculty
            },
            {
              name: 'graduate',
              placeholder: tmpobj.getgraduate
            },
            {
              name: 'img',
              placeholder: tmpobj.getimg
            },
            {
              name: 'link',
              placeholder: tmpobj.getlink
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
                updatedata['course'.toString()] = data.course;
                updatedata['faculty'.toString()] = data.faculty;
                updatedata['graduate'.toString()] = data.graduate;
                updatedata['img'.toString()] = data.img;
                updatedata['link'.toString()] = data.link;
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
