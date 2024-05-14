import { CustomAttribute, LineItem } from "./shopify";

export interface RowData {
  orderId: string;
  orderNumber: string;
  date: string;
  customer: string;
  status: string;
  totalPrice: string;

}

export interface OrderData {
  orderId: string;
  lineItems: LineItem[];
  customAttributes: [CustomAttribute];
}

export interface OrderCreateFields {
  storeId: string;
  email: string;
  lineItems: LineItem[];
}