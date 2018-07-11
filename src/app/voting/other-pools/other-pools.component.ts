import { Component, OnInit } from '@angular/core';
import { Poll, POLLS } from '@app/Model/poll';

@Component({
  selector: 'app-other-pools',
  templateUrl: './other-pools.component.html',
  styleUrls: ['./other-pools.component.scss']
})
export class OtherPoolsComponent implements OnInit {
  polls: Poll[];
  constructor() { }

  ngOnInit() {
    this.getCurrentPolls();
  }

  getCurrentPolls() {
    this.polls = POLLS;
  }
}
