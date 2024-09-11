import { each } from 'cheerio/dist/commonjs/api/traversing';
import { ScraperService } from './services/ScraperService';
import { WordCounter } from './utils/WordCounter'

/**
 * Principal Method to manage the scraping and filters
 */
(async () => {
    const scraper = new ScraperService(3);
    try {
        const entries = await scraper.scrapeEntries();

        entries.forEach(entry => {
            console.log(entry.showStatement());
        });


    } catch (error) {
        console.error('Error occurred during scraping:', error);
    }
})();
