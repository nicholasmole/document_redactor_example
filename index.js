var DoumentRedactor = require('./src/DocumentRedactor');

const given_arguments = {
  keywords: null,
  document: null,
  seperator: " ",
};

process.argv.forEach(function (val) {
  const arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] in given_arguments){
      given_arguments[arg[0]] = arg[1];
    }
  }
});

if (given_arguments.keywords && given_arguments.document) {
  console.log(DoumentRedactor(
    given_arguments.keywords,
    given_arguments.document, 
    given_arguments.seperator)
  );
}

module.exports = DoumentRedactor;