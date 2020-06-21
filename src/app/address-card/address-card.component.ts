import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../store/models/address.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() address: Address;
  constructor() {}

  ngOnInit(): void {}
}
