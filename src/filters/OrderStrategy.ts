import { Entry } from "../models/Entry"

export interface OrderStrategy {
    order(entries : Entry []) : Entry[];
}