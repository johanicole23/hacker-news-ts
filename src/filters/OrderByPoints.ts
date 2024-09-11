import { Entry } from "../models/Entry";
import { OrderStrategy } from "./OrderStrategy";

export class OrderByPoints implements OrderStrategy{

    order (entries : Entry[]) : Entry[]{
        return entries
            .sort((a,b)=> b.entryPoints - a.entryPoints)
            
    }
}