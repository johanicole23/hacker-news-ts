import { Entry } from "../models/Entry";
import { OrderStrategy } from "./OrderStrategy";

export class OrderByComments implements OrderStrategy {
    order(entries: Entry[]) {
        return entries
            .sort((a, b) => b.entryComments - a.entryComments);
    }
}