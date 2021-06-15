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
 * @param  {string} seperator - key value that tells the module how to distiguish between keyword
```

If the seperator is not provided the keywords will be seperated by a white spaces.

If you are running the module in node cli you supply the variables
```
node . keywords="hi,bye" seperator="," document="hi and goodbye"
```


## Usage
---
`DocumentRedactor` is created to swiftly remove keywords or phrases from a given string. However, the module is setup to get the exact keywords only! This means you provide the keyword "bye", the words "goodbye" would not be redacted from the given string.

This application is not case senitive. So if you provide the word "bye", both "bye" and "BYE" would both be redacted.

## Usage Example
---
This application is built so you can either import the library or run
it with in node cli.

If you would like to run the module using node, open up the unix terminal and provided the keywords, document. (seperator is optional: defaults to " ")

```
>>node . keywords="cheese,bread,cake" document="I love to eat cheese, bread, and cake" seperator=","

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