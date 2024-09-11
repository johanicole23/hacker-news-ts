import { Entry } from "../models/Entry";
import { OrderStrategy } from "./OrderStrategy";

/**
 * Class for order the entries by points
 */
export class OrderByPoints implements OrderStrategy{

    order (entries : Entry[]) : Entry[]{
        return entries
            .sort((a,b)=> b.entryPoints - a.entryPoints)
            
    }
}