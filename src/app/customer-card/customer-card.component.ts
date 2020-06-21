import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  @Input() details: any;
  constructor() {}

  ngOnInit(): void {}
}
