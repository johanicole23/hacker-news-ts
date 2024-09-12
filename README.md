# Hacker News Data Scraper

## This is the backend for a web scraping application that fetches and processes news entries from Hacker News. It exposes an API that can be consumed by a frontend application to display and filter news entries.

### Functionalities
- **Data Scraping**: Given a URL and number of entries, it extracts information such as title, ID, comments, and points for each news item on Hacker News.
- **Word Count in Titles**: Counts the words in the title, excluding special characters and treating hyphenated words as single words.
- **Descending Ordering**: Orders all entries in descending order by the number of comments or points.
- **API for News Entries**: Provides an API endpoint that returns three different lists of news entries:
  - `normalEntries`: A list of all news entries.
  - `lessThanFive`: News entries with titles containing five or fewer words.
  - `moreThanFive`: News entries with titles containing more than five words.


### Technologies
- **TypeScript**: Implementation of the crawler and scraping functionality.
- **Jest**: Unit testing using Test-Driven Development (TDD).
- **Axios**: HTTP requests.
- **Cheerio**: HTML parsing.
- **Express**: Framework for Node.js.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.

### Commands in Terminal
1. Run `npm install`
2. Run `npm run start`
3. Run `npm test`

### FrontEnd Repository
`https://github.com/johanicole23/hackernews-react.git`
