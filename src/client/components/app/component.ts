import { GameConfig } from '../../models/game.model';
import { Machine } from '../../models/machine.model';
import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class AppComponent {
    constructor() {
    }

    isGameStarted: boolean = false;

    config: GameConfig = {
        initialMoney: 100,
        initialNumOfMachines: 3,
        machineInitializationCost: 3,
        machineMaintenanceCost: 1,
        machineOrderFillCost: 10,
        machinePrice: 30,
        orderBaseValue: 14
    };

    machines: Machine[];

    startGame() {
        this.isGameStarted = true;
    }

    stopGame() {
        this.isGameStarted = false;
    }
}
