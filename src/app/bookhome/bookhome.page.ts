import { Component, OnInit } from '@angular/core';
import { BookService } from './BookService'
import { AlertController, NavController  } from '@ionic/angular';
import { Book } from './book'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.page.html',
  styleUrls: ['./bookhome.page.scss'],
})
export class BookhomePage implements OnInit {
  [x: string]: any;

  stdobj : any;
  id;
  single_data;

  constructor(private apiservice: BookService,
    private alertCtrl: AlertController, public navCtrl: NavController,
    public Acroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.Acroute.snapshot.paramMap.get('id');
    console.log(this.id);

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
      // this.apiservice.getOnething(this.id).toPromise().then( 
      //   res => this.single_data = res 
      //   );
      this.getbook();


  }
  getbook(){
    this.apiservice.getTwo(this.id).toPromise().then(data =>
      this.single_data = data
    );
    console.log(this.single_data);

  }

}
