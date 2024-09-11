import { ScraperService } from '../src/services/ScraperService';

describe('ScraperService', () => {

    const url: string = "https://news.ycombinator.com/";
    const numberOfEntries: number = 2;
    test('should scrape entries correctly with Hacker News Website', async () => {

        const scraper = new ScraperService(url,numberOfEntries);
        const entries = await scraper.scrapeEntries();

        expect(entries).toHaveLength(2);

    });

    test('should handle errors gracefully', async () => {
        const invalidUrl = "https://invalid.url/";
        const scraper = new ScraperService(invalidUrl, numberOfEntries);
        const entries = await scraper.scrapeEntries();

        expect(entries).toHaveLength(0);
    });
});
