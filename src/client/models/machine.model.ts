import { Order } from './order.model';

export interface Machine {
    id: number;
    isRunning: boolean;
    maintenanceCost: number;
    initializationCost: number;
    orderFillCost: number;

    currentOrder?: Order;
}
