const request = require("request-promise");
const cheerio = require("cheerio");

// Craigslist url
const url = "https://dublin.craigslist.org/search/jjj";

// Example scrape result
const scrapeResult = {
    title: 'Teaching',
    description: 'Text about the job position',
    datePosted: '2019-08-06',
    url: 'https://dublin.craigslist.org/edu/d/teaching-job-opportunity-online/6950906081.html',
    compensation: '21-26 per hour'
}

// Async is from ES7, it provides asynchronous functionality
// similar to promises, callbacks etc, the await keyword is 
// used when a function has been declared async
async function scrapeJobHeader(){
    try{
        const htmlResult = await request.get(url);

        // This will return the html from the url in string format
        // console.log(htmlResult);

        // This will allow selecting elements using css selectors
        // Using the dollar sign allows to use the same code as the
        // page jquery is using
        const $ = await cheerio.load(htmlResult);

        // Getting job titles
        $(".result-info").each((index, element) => {
            const resultTitle = $(element).children(".result-title");
            const title = resultTitle.text();
            const url = resultTitle.attr("href");
            const datePosted = new Date(
              $(element)
                .children("time")
                .attr("datetime")
            );
            const hood = $(element)
              .find(".result-hood")
              .text();
            const scrapeResult = { title, url, datePosted, hood };
            scrapeResults.push(scrapeResult);
        });

        return scrapeResults;
    } catch(err){
        console.error(err);
    }
}

async function scrapeDescription(jobsWithHeaders) {
    return await Promise.all(
        jobsWithHeaders.map(async job => {

        })
    )
}

// Method call for the scrapeCraigsList function
scrapeCraigsList();