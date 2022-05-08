import { Product } from "./product.model";
export interface Cart {
    userID: string;
    products: Product[];
    amount: number;
    documentReference?: string;
}