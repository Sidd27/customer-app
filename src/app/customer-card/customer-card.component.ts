import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../store/models/customer.model';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer;
  constructor() {}

  ngOnInit(): void {}
}
