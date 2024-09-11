import { each } from 'cheerio/dist/commonjs/api/traversing';
import { ScraperService } from './services/ScraperService';
import { OrderStrategy } from './filters/OrderStrategy';
import { WordCounter } from './utils/WordCounter'
import { OrderByPoints } from './filters/OrderByPoints';
import { OrderByComments } from './filters/OrderByComments';

const url: string = "https://news.ycombinator.com/";
const numberOfEntries: number = 30;
/**
 * Principal Method to manage the scraping and filters
 */
(async () => {
    const scraper = new ScraperService(url, numberOfEntries);
    const entries = await scraper.scrapeEntries();

    const lessThanFive = entries.filter(entry => WordCounter.countWords(entry.entryTitle) <= 5);
    const moreThanFive = entries.filter(entry => WordCounter.countWords(entry.entryTitle) > 5);

    const filterPoints = new OrderByPoints();
    const filterComments = new OrderByComments();

    const entriesByPoints = filterPoints.order(lessThanFive);
    const entriesByComments = filterComments.order(moreThanFive);

    console.log('======================************LESS THAN OR EQUAL TO FIVE WORDS************======================');
    entriesByPoints.forEach(entry => {
        console.log(entry.showStatement());
    });

    console.log('======================******************MORE THAN FIVE WORDS*****************=======================');
    entriesByComments.forEach(entry => {
        console.log(entry.showStatement());
    });
})();
