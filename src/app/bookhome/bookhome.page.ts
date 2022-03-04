import { Component, OnInit } from '@angular/core';
import { BookService } from './BookService'
import { AlertController, NavController  } from '@ionic/angular';
import { Book } from './book'

@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.page.html',
  styleUrls: ['./bookhome.page.scss'],
})
export class BookhomePage implements OnInit {
  [x: string]: any;

  stdobj : any;

  constructor(private apiservice: BookService, private alertCtrl: AlertController, public navCtrl: NavController) { }

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

}
