export interface Product {
    name: string;
    categoryId: string;
    price: number;
    stock: number;
    base64Img: string;
    documentReference?: string;
}