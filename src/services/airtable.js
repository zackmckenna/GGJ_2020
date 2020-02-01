var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyLErx2N17rFxZOY'}).base('apprkbgfXPMCZlFFR');
const airtableService = require('express').Router();

airtableService.get('/parts', async (request, response) => {
  let parts = []
  await base('Parts').select({}).eachPage(function page(records, fetchNextPage) {
    records.map(function(record) {
        const newPart = {...record.fields, id: record.id };
        // console.log(record)
        parts = parts.concat(newPart)
        // console.log(parts)
    });
    response.status(200).json(parts.map(part => part))
    fetchNextPage();
  }, function done(err) {
    if (err) { console.error(err); return; }
    return parts
  });
})

airtableService.get('/components', async (request, response) => {
  let parts = []
  await base('Components').select({}).eachPage(function page(records, fetchNextPage) {
    records.map(function(record) {
        const newComponent = {...record.fields, id: record.id };
        // console.log(record)
        parts = parts.concat(newComponent)
        // console.log(parts)
    });
    response.status(200).json(parts.map(part => part))
    fetchNextPage();
  }, function done(err) {
    if (err) { console.error(err); return; }
    return parts
  });
})

module.exports = airtableService



// base('Parts').select({}).eachPage(function page(records, fetchNextPage) {
//     records.forEach(function(record) {
//         console.log(record)
//         parts.concat(record.get('Name'))
//     });
//     fetchNextPage();
// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

