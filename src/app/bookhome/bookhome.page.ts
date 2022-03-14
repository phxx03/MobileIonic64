import { Component, OnInit } from '@angular/core';
import { BookService } from './BookService'
import { AlertController, NavController  } from '@ionic/angular';
import { Book } from './book'
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';


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
    public Acroute: ActivatedRoute,
    private router: Router
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

  // uploadURL(){
  //   this.url=this.nameofurl;
  //   localStorage.setItem('url', this.url);
  //   this.router.navigateByUrl('/result');
  // }

  // openURL(){
  
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(localStorage.getItem("url"));
  
  // }
}
