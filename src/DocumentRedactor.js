/**
 * DocumentRedactor
 * Redact keywords from given document text
 * @param  {string} keywords - keywords that will be redacted from document
 * @param  {string} document - text that needs to be redacted
 * @param  {string} seperator - key value that tells the module how to distiguish between keyword
 * @return {string} - modified document with keywords in document replaced by "XXXX"
 */
module.exports = function DoumentRedactor(keywords = "", document = "", seperator = " ") {
  keywords = `\\b(${keywords.replace(new RegExp(seperator,"gi"), "|")})\\b`;
  document = document.replace(new RegExp(keywords,"gi"), "XXXX");
  return document;
};