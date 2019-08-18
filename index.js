const request = require("request-promise");
const cheerio = require("cheerio");

// Craigslist url
const url = "https://dublin.craigslist.org/search/jjj";

// Async is from ES7, it provides asynchronous functionality
// similar to promises, callbacks etc, the await keyword is 
// used when a function has been declared async
async function scrapeCraigsList(){
    try{
        const htmlResult = await request.get(url);

        // This will return the html from the url in string format
        console.log(htmlResult);
    } catch(err){
        console.error(err);
    }
}

// Method call for the scrapeCraigsList function
scrapeCraigsList();