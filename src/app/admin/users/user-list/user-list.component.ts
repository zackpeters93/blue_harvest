import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() userWasSelected = new EventEmitter<User>();
  users: User[] = [
    new User(1, 'zpeters', 'Zack', 'Peters', 'zachary.peters@mining.komatsu', 'KMC Corporate', null, null, true, true, true, false, false, null),
    new User(1, 'hwalker', 'Herschel', 'Walker', 'herschel.walker@mining.komatsu', 'KMC Corporate', null, null, true, true, true, false, false, null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onUserSelected(user: User) {
   this.userWasSelected.emit(user);
  }

}
