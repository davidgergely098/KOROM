import { Product } from "./product.model";

export interface Order {
    documentReference?: string;
    address: string;
    cart: string;
    dateTime: string;
    payment: string;
    statusID: string;
}