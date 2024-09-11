import { OrderByComments } from '../src/filters/OrderByComments';
import { Entry } from '../src/models/Entry'; 
describe('OrderByComments', () => {
    
    test('should order by comments in descending order', () => {

        const entries: Entry[] = [
            new Entry(1, 'Title 1', 123, 5),  
            new Entry(2, 'Title 2', 456, 2),   
            new Entry(3, 'Title 3', 789, 10), 
        ];

        const orderByComments = new OrderByComments();

        const orderEntries = orderByComments.order(entries);
        expect(orderEntries).toHaveLength(3); 

        expect(orderEntries[0].entryComments).toBe(10); 
        expect(orderEntries[1].entryComments).toBe(5);  
        expect(orderEntries[2].entryComments).toBe(2);  
    });



    test('entries have the same number of comments', () => {
        const entries: Entry[] = [
            new Entry(1, 'Title 1', 123, 5),
            new Entry(2, 'Title 2', 456, 5),
            new Entry(3, 'Title 3', 789, 5)
        ];

        const orderByComments = new OrderByComments();
        const orderEntries = orderByComments.order(entries);

        expect(orderEntries).toHaveLength(3); 
        expect(orderEntries[0].entryComments).toBe(5); 
        expect(orderEntries[1].entryComments).toBe(5);
        expect(orderEntries[2].entryComments).toBe(5);
    });

});