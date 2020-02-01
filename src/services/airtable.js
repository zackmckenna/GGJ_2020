var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyLErx2N17rFxZOY'}).base('apprkbgfXPMCZlFFR');

let parts = []

base('Parts').select({}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log(record)
        parts.concat(record.get('Name'))
    });
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});

