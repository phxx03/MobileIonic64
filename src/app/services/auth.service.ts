import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app'
//import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ToastController} from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

@Injectable()

export class AuthService {

  user$: Observable<User>;
  user: User;
  auth: any;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController,
    private zone: NgZone
  ) { 
    this.user$ = this.afauth.authState
    .pipe(
      switchMap( user => {
        if (user){
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }//end of constructor

  async signin(email, password){
    const loading = await this.LoadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
      this.afauth.signInWithEmailAndPassword(email, password)
      .then((data)=>{
        if(!data.user.emailVerified){
          loading.dismiss();
          this.toast('Plaese verify your email address!', 'warning');
          this.afauth.signOut();
        } else {
          loading.dismiss();
          this.router.navigate(['/dbhome']);
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    });
  } //end of signin

  async signOut(){
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut()
    .then(()=> {
      loading.dismiss();
      this.router.navigate(['/login'])
    })
  }// end of signOut

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }//end of toast
}
