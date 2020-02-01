var Airtable = require('airtable').base('apprkbgfXPMCZlFFR');

Airtable.configure({
  endpointUrl:
  'https://api.airtable.com',
    apiKey: 'keyLErx2N17rFxZOY'
});

var base = Airtable.base('apprkbgfXPMCZlFFR');

export default base
