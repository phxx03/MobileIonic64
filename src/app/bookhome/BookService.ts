import { Injectable } from '@angular/core';
import { Book } from './book';
import { AngularFireDatabase, AngularFireList, AngularFireObject }
 from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  stdList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private ngFirestore: AngularFirestore) { }

  getDataList() {
      return this.ngFirestore.collection('student').snapshotChanges();
  }
  // Create
  
  createStudent(tmpstd: any) {
    return this.ngFirestore.collection('student').add(tmpstd);
  }
  /*
  // Get single object
  getUser(id: string) {
    this.userRef = this.db.object('/user/' + id);
    return this.userRef;
  }
  */
/*
  // Get List
  getUserList() {
    this.stdList = this.db.list('/student');
    return this.stdList;
  }

  
  // Update
  updateUser(id, user: User) {
    return this.userRef.update({
      name: user.name,
      email: user.email,
      mobile: user.mobile
    })
  }
  */
  // Delete
  deleteUser(delid) {
    return this.ngFirestore.doc('student/'+delid).delete();
  }
  updateUser(getid, updatedata: any) {
    return this.ngFirestore.doc('student/'+getid).update(updatedata);
  }
  
}