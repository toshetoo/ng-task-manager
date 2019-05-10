import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import UserInterface from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserInterface;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getUserImage() {
    return this.user.picture + '?random=' + this.user.id;
  }

  onDeleteClicked() {
    this.onDelete.emit(this.user.id);
  }

}
