import express, { Request, Response } from 'express';
import { ScraperService } from './src/services/ScraperService'; 
import { OrderByPoints } from './src/filters/OrderByPoints'; 
import { OrderByComments } from './src/filters/OrderByComments';
import { WordCounter } from './src/utils/WordCounter';

const app = express();
const port = 3000; 

const url: string = "https://news.ycombinator.com/";
const numberOfEntries: number = 30;
const numberOfWords : number = 5;

app.use(express.json());

app.get('/api/entries', async (req: Request, res: Response) => {
    const scraper = new ScraperService(url, numberOfEntries);
    const entries = await scraper.scrapeEntries();

    const lessThanFive = entries.filter(entry => WordCounter.countWords(entry.entryTitle) <= numberOfWords);
    const moreThanFive = entries.filter(entry => WordCounter.countWords(entry.entryTitle) > numberOfWords);

    const filterPoints = new OrderByPoints();
    const filterComments = new OrderByComments();

    const entriesByPoints = filterPoints.order(lessThanFive);
    const entriesByComments = filterComments.order(moreThanFive);

    res.json({
        lessThanFive: entriesByPoints,
        moreThanFive: entriesByComments
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
