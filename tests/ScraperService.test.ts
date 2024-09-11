
import axios from 'axios';
import * as cheerio from 'cheerio';
import { ScraperService } from '../src/services/ScraperService';
import { Entry } from '../src/models/Entry';

// Mock de axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ScraperService', () => {
    const mockHtml = `
        <html>
            <body>
                <tr class="athing" id="1">
                    <td class="title"><span class="titleline"><a href="#">Title 1</a></span></td>
                </tr>
                <tr>
                    <td colspan="2" class="subtext">
                        <span class="score">123 points</span> 
                        <a href="item?id=1">5 comments</a>
                    </td>
                </tr>
                <tr class="athing" id="2">
                    <td class="title"><span class="titleline"><a href="#">Title 2</a></span></td>
                </tr>
                <tr>
                    <td colspan="2" class="subtext">
                        <span class="score">456 points</span> 
                        <a href="item?id=2">10 comments</a>
                    </td>
                </tr>
            </body>
        </html>
    `;

    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({ data: mockHtml });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should scrape entries correctly', async () => {
        const scraper = new ScraperService(2);
        const entries = await scraper.scrapeEntries();

        expect(entries).toHaveLength(2);

        expect(entries[0]).toEqual(new Entry(1, 'Title 1', 123, 5));
        expect(entries[1]).toEqual(new Entry(2, 'Title 2', 456, 10));
    });


});
