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
  public book: Book;

  constructor(private apiservice: BookService,
    private alertCtrl: AlertController, public navCtrl: NavController,
    public Acroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.Acroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getbook();

  }

  getbook(){
    this.apiservice.getOne(this.id).subscribe(book => {
    this.book = book;
    console.log(this.book);
    });   
  } 
}
