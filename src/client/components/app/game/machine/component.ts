import { Machine } from '../../../../models/machine.model';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'machine',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class MachineComponent {
    constructor() {
    }

    @Input() machine: Machine;
    @Output() runningChanged: EventEmitter<boolean> = new EventEmitter();
    @Output() order: EventEmitter<any> = new EventEmitter();

    start() {
        this.machine.isRunning = true;
        this.runningChanged.emit(true);
    }

    stop() {
        this.machine.isRunning = false;
        this.runningChanged.emit(false);
    }

    claimOrder() {
        this.order.emit();
    }
}
