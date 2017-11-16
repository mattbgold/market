import { Order } from '../../../../models/order.model';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class OrderComponent {
    constructor() {
    }

    @Input() order: Order;
}
