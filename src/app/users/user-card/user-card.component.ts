import { Component, OnInit, Input } from '@angular/core';
import UserInterface from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserInterface;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  getUserImage() {
    return this.user.picture + "?random=" + this.index;
  }

}
