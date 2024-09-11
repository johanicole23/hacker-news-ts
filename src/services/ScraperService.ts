import { Entry } from '../models/Entry';
import { HttpClientService } from './HttpClientService';
import { ParserService } from './ParserService';

//Service to do the scraping of the Hacker News website.

export class ScraperService {
    private httpClient: HttpClientService;
    private numberOfEntries: number;

    constructor(url: string, numberOfEntries: number) {
        this.httpClient = new HttpClientService(url);
        this.numberOfEntries = numberOfEntries;
    }

    /**
     * Get the first 30 entries from the Hacker News website.
     * @returns an array of 'Entry' or empty array
     */
    async scrapeEntries(): Promise<Entry[]> {
        try {
            const html = await this.httpClient.fetchData();
            return ParserService.parseEntries(html, this.numberOfEntries);
        } catch (error) {
            console.error('Scraping error', error);
            return [];
        }
    }

}
