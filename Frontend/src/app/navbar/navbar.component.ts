import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {  AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
class User{
  name:string;
  NIC:string;
  Email:string;

}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  users:any;
  constructor(private db:AngularFireDatabase) {
    // console.log("hello");
    // this.users = db.list('/user');
    // db.list('/user').snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // ).subscribe(users => {
    //   this.users = users;
    //   console.log(this.users);
    // })
    
    
   }


  ngOnInit() {
  //   "this.db.list('/user').snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   )
  //   .subscribe(users=>{
  //     this.users=users;
  //     console.log(this.users);
  //   }

  //   );
    
  }
}
