const url = require('url');

const addr = 'https://www.behance.net/search/projects?tools=136628273';

const parsedUrl = url.parse(addr);

console.log(parsedUrl.hostname);
// console.table(parsedUrl.query.tools)

module.exports=parsedUrl