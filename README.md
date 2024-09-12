# Web Crawler for Hacker News

## This project is a web crawler designed to extract and filter the first 30 entries from the Hacker News website. It was implemented using TypeScript.

### Functionalities
- **Data Scraping**: Given a URL and number of entries, it extracts information such as title, ID, comments, and points for each news item on Hacker News.
- **Word Count in Titles**: Counts the words in the title, excluding special characters and treating hyphenated words as single words.
- **Descending Ordering**: Orders all entries in descending order by the number of comments or points.

### Technologies
- **TypeScript**: Implementation of the crawler and scraping functionality.
- **Jest**: Unit testing using Test-Driven Development (TDD).
- **axios**: HTTP requests.
- **cheerio**: HTML parsing.
- **express**: Framework for Node.js.

### Installation
1. Run `npm install`
