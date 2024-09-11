import { OrderByPoints } from '../src/filters/OrderByPoints';
import { Entry } from '../src/models/Entry'; 

describe('OrderByPoints', () => {
    
    test('should order by points in descending order', () => {

        const entries: Entry[] = [
            new Entry(1, 'Title 1', 123, 5),  
            new Entry(2, 'Title 2', 456, 0),   
            new Entry(3, 'Title 3', 789, 10), 
        ];

        const orderByPoints = new OrderByPoints();

        const orderEntries = orderByPoints.order(entries);
        expect(orderEntries).toHaveLength(3); 

        expect(orderEntries[0].entryPoints).toBe(789); 
        expect(orderEntries[1].entryPoints).toBe(456);  
        expect(orderEntries[2].entryPoints).toBe(123);  
    });



    test('entries have the same number of points', () => {
        const entries: Entry[] = [
            new Entry(1, 'Title 1', 12, 5),
            new Entry(2, 'Title 2', 12, 5),
            new Entry(3, 'Title 3', 12, 5)
        ];

        const orderByPoints = new OrderByPoints();
        const orderEntries = orderByPoints.order(entries);

        expect(orderEntries).toHaveLength(3); 
        expect(orderEntries[0].entryPoints).toBe(12); 
        expect(orderEntries[1].entryPoints).toBe(12);
        expect(orderEntries[2].entryPoints).toBe(12);
    });

});
