# Document Redact Project

Redact given documents string, with given keywords

## Description
---

This package works independently or as a importable module.

Redact keywords from a given string replacing the given keywords with the text "XXXX". The module `DocumentRedactor` can redact multiple keywords at once from a given document.

## Run Tests
---
If using yarn
```
yarn test
```

If using npm
```
npm run test
```

## Parameters
---
The follow parameters can be used as input for the `DocumentRedactor`.
```
 * @param  {string} keywords - keywords that will be redacted from document
 * @param  {string} document - text that needs to be redacted
```

If you are running the module in node cli you supply the variables
```
node . keywords="hi,bye" document="hi and goodbye"
```

## In depth understading of how 'keywords' parameter in handled

This is a brief explanation of how the 'keywords' parameter is seperated from a single string input to keywords and phrases.

The keywords parameter goes through several changes in order to capture all possible alternative separators.

First the module will try to capture all spaces, and commas outside of quotes, and transform these into pipes.
Second, and third the module will replace all quotes with other quotes to a "key" value.
Fourth the module will transform all the remaining quotes to pipes.
Fifth, and sixth the module will transform all single and double quotes that were transformed into "key" values, back into single and double quotes. 
Seventh the module will trim any excess spaces.
Eighth the module will remove leading and ending pipes (removing an issue where this pipes would capture all spaces in the find and replace.)
Finally, the keywords and phrases are all between word boundaries to make sure partial matches are not replaced. 




## Usage
---
`DocumentRedactor` is created to swiftly remove keywords or phrases from a given string. However, the module is setup to get the exact keywords only! This means you provide the keyword "bye", the words "goodbye" would not be redacted from the given string.

This application is not case senitive. So if you provide the word "bye", both "bye" and "BYE" would both be redacted.

## Usage Example
---
This application is built so you can either import the library or run
it with in node cli.

If you would like to run the module using node, open up the unix terminal and provided the keywords, document.

```
>>node . keywords="cheese,bread,cake" document="I love to eat cheese, bread, and cake"

I love to eat XXXX, XXXX, and XXXX
```

Running the module in javascript can be done as shown below.
```

const result = DocumentRedactor("hi bye", "hi and goodbye");

console.log(result);
>> XXXX and goodbye
```

## Author
---
Nicholas Mole

* github: [@nicholasmole](https://github.com/users/nicholasmole)
* how I did it!: [click here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
* adorable kitten: [1](https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-29-57b30ad229af3__605.jpg) [2](https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg) [3](https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg)