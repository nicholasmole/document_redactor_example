/**
 * DocumentRedactor
 * Redact keywords from given document text
 * @param  {string} keywords - keywords that will be redacted from document
 * @param  {string} document - text that needs to be redacted
 * @param  {string} seperator - key value that tells the module how to distiguish between keyword
 * @return {string} - modified document with keywords in document replaced by "XXXX"
 */
module.exports = function DocumentRedactor(keywords = "", document = "", seperator = " ") {

  const SINGLE_QUOTES_REPLACEMENT = "SINGLE_QUOTES_REPLACEMENT";
  const DOUBLE_QUOTES_REPLACEMENT = "DOUBLE_QUOTES_REPLACEMENT";
  const REGEX_GET_SINGLE_QUOTES = new RegExp(/\'(?=[^"]*"[^"]*(?:"[^"]*"[^"]*)*$)/,"gi");
  const REGEX_GET_DOUBLE_QUOTES = new RegExp(/\"(?=[^']*'[^']*(?:'[^']*'[^']*)*$)/,"gi");
  const REGEX_GET_SPACES_AND_COMMAS_OUTSIDE_OF_QUOTES = new RegExp(/(\s+|,)(?=(?:[^("|')]|("|')[^("|')]*("|'))*$)/, "gi");
  const REGEX_ALL_QUOTES = new RegExp(/('|")(?:\|)|(?:\|*)('|")/,"g");
  const REGEX_CHECK_FOR_LEADING_OR_ENDING_PIPES = new RegExp(/^\||(\|)$/,"g");

  keywords = keywords.replace(REGEX_GET_SINGLE_QUOTES, SINGLE_QUOTES_REPLACEMENT)
              .replace(REGEX_GET_DOUBLE_QUOTES, DOUBLE_QUOTES_REPLACEMENT)
              .replace(REGEX_GET_SPACES_AND_COMMAS_OUTSIDE_OF_QUOTES, "|")
              .replace(REGEX_ALL_QUOTES, "|")
              .replace(new RegExp(SINGLE_QUOTES_REPLACEMENT,"gi"),"'")
              .replace(new RegExp(DOUBLE_QUOTES_REPLACEMENT,"gi"),'"')
              .trim()
              .replace(new RegExp(REGEX_CHECK_FOR_LEADING_OR_ENDING_PIPES,"gi"),"");

  document = document.replace(new RegExp(`\\B(${keywords})\\B|\\b(${keywords})\\b`,"gi"), "XXXX");
  return document;
};