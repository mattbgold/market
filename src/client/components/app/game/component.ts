import { GameConfig } from '../../../models/game.model';
import { Order } from '../../../models/order.model';
import { Machine } from '../../../models/machine.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class GameComponent implements OnInit {
    constructor() {
    }

    @Input() config: GameConfig;

    ngOnInit() {
        this.money = this.config.initialMoney;
        this.orders = this._createNewOrders();
        this.machines = new Array(this.config.initialNumOfMachines).fill(1).map((_, i) => {
            return {
                id: i,
                isRunning: false,
                orderFillCost: this.config.machineOrderFillCost,
                initializationCost: this.config.machineInitializationCost,
                maintenanceCost: this.config.machineMaintenanceCost
            };
        });
    }

    money: number;
    machines: Machine[] = [];
    orders: Order[] = [];

    startNextRound() {
        let runningMachines = this.machines.filter(m => m.isRunning);

        runningMachines.forEach(m => {
            this.money -= m.maintenanceCost;

            if (m.currentOrder) {
                this.money += (m.currentOrder.value - m.orderFillCost);
                m.currentOrder = null;
            }
        });

        this.orders = this._createNewOrders();
    }

    initMachine(machine: Machine) {
        if (machine.isRunning) {
            this.money -= machine.initializationCost;
        }
    }

    fillOrder(machine: Machine) {
        machine.currentOrder = this.orders.shift();
    }

    private _createNewOrders(): Order[] {
        return new Array(Math.round(Math.random()*3)).fill(1).map(_ => {
            return { value: 14 };
        });
    }
}
