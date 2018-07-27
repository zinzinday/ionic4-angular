export interface Ticket {
    id: string;
    type: string;
    lotto: string[];
    amount: number;
    rate: number;
    winning: number;
    createdAt: Date;
    updatedAt: Date;
    status: string;
}
