var expect = require("chai").expect;
var DocumentRedactor = require("../src/DocumentRedactor");

describe("Document Redactor", function() {
  describe("Given keyword in document", function() {
    it("coverts document", function() {
      const result = DocumentRedactor("cheese bread cake", "I love to eat cheese, bread, and cake");
      expect(result).to.equal("I love to eat XXXX, XXXX, and XXXX");
    });
  });
  describe("No keyword in document", function() {
    it("does not covert document", function() {
      const result = DocumentRedactor("carrots french fries eggs", "I love to eat cheese, bread, and cake");
      expect(result).to.equal("I love to eat cheese, bread, and cake");
    });
  });
  describe("Given different seperator values", function() {
    it("seperates by comma and spaces", function() {
      const result = DocumentRedactor("french fries,bread", "I love to eat french fries, bread, and cheesecake");
      expect(result).to.equal("I love to eat XXXX XXXX, XXXX, and cheesecake");
    });
  });

  describe("Give keyword partically document", function() {
    it("covert only exact words document", function() {
      const result = DocumentRedactor("cheese,cake", "I love to eat cheese, CHEESE, and cheesecake");
      expect(result).to.equal("I love to eat XXXX, XXXX, and cheesecake");
    });
  });

  describe("Test Long Test", function() {
    it("convert a large string", function() {
      const result = DocumentRedactor(
        "Lorem,varius,semper", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec elit nec nisl luctus pharetra non blandit justo. Vestibulum pellentesque neque vehicula ipsum malesuada, id pulvinar magna ornare. Fusce viverra odio nec ex tincidunt, ac faucibus tellus venenatis. Nunc id malesuada dolor. Nunc eu gravida neque. In justo nunc, venenatis eget finibus et, pellentesque eget arcu. Curabitur malesuada, metus sit amet vulputate sollicitudin, diam justo dictum mi, vitae rhoncus tortor elit at eros. Aliquam luctus porta ipsum, nec volutpat odio venenatis at. Quisque cursus laoreet ultricies.Vivamus posuere felis at condimentum efficitur. Praesent rutrum id massa id maximus. Nunc elementum tempus odio at ultricies. Mauris at interdum est. Sed bibendum nulla ut dolor tincidunt porta. Nulla in turpis a felis interdum convallis nec non quam. Fusce sed accumsan lorem.Sed vehicula leo quis suscipit auctor. Maecenas porta quis risus in vehicula. Maecenas lacinia mauris a leo feugiat, quis pretium ipsum maximus. Mauris rutrum rhoncus auctor. Aliquam id nulla eu diam aliquet posuere quis ut mauris. Ut commodo a risus at imperdiet. Nam rhoncus eu leo vitae eleifend. Maecenas id molestie erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium, felis non vestibulum imperdiet, libero elit luctus erat, fringilla feugiat elit diam a felis. Aliquam nec lacus a eros vehicula egestas in ac justo. Integer tristique dolor ac elementum sollicitudin. Nunc pellentesque, tellus ac semper pellentesque, mi erat hendrerit odio, non tristique nunc arcu ac risus.Donec tincidunt semper orci, eu semper elit bibendum non. Maecenas lorem augue, semper vitae orci consectetur, hendrerit elementum orci. Vestibulum at quam leo. Integer tincidunt elit ex, vel molestie odio bibendum quis. Nulla aliquet iaculis pellentesque. Vestibulum vel mi vitae felis maximus vestibulum vel vel metus. In hac habitasse platea dictumst. Nunc quam augue, commodo id commodo consequat, dapibus a felis. Phasellus at dignissim diam. Aenean convallis felis nunc, ut aliquam risus semper ut. Sed lobortis pulvinar egestas. Nam rutrum lorem non dui venenatis imperdiet. Fusce ullamcorper lectus ac neque rutrum facilisis. Sed quis mollis dolor, sed congue tellus. Sed facilisis nibh id leo mattis, sit amet volutpat enim consequat. Sed iaculis commodo nisi, non venenatis sapien vehicula ac.Phasellus malesuada dolor ac leo varius aliquam. In placerat hendrerit convallis. Maecenas luctus justo nec eros vestibulum, in rutrum lacus rhoncus. Ut tellus ipsum, molestie vel blandit vitae, mattis sit amet augue. Mauris pretium ultricies metus eu pellentesque. Vivamus iaculis velit a ante tempor laoreet. Quisque aliquet leo non ipsum faucibus, bibendum iaculis orci euismod. Mauris nibh turpis, faucibus sed mauris non, sagittis pharetra ante. Fusce eleifend nisl laoreet, rutrum urna sit amet, venenatis arcu. Etiam volutpat tincidunt ex eget tempus. Ut quis tincidunt tellus. Nam pharetra leo vel mauris suscipit suscipit. Etiam a mauris vitae tellus molestie cursus. Morbi vel orci consequat, dapibus quam vitae, auctor leo. Morbi fermentum tempus dictum."
      );
      expect(result).to.equal("XXXX ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec elit nec nisl luctus pharetra non blandit justo. Vestibulum pellentesque neque vehicula ipsum malesuada, id pulvinar magna ornare. Fusce viverra odio nec ex tincidunt, ac faucibus tellus venenatis. Nunc id malesuada dolor. Nunc eu gravida neque. In justo nunc, venenatis eget finibus et, pellentesque eget arcu. Curabitur malesuada, metus sit amet vulputate sollicitudin, diam justo dictum mi, vitae rhoncus tortor elit at eros. Aliquam luctus porta ipsum, nec volutpat odio venenatis at. Quisque cursus laoreet ultricies.Vivamus posuere felis at condimentum efficitur. Praesent rutrum id massa id maximus. Nunc elementum tempus odio at ultricies. Mauris at interdum est. Sed bibendum nulla ut dolor tincidunt porta. Nulla in turpis a felis interdum convallis nec non quam. Fusce sed accumsan XXXX.Sed vehicula leo quis suscipit auctor. Maecenas porta quis risus in vehicula. Maecenas lacinia mauris a leo feugiat, quis pretium ipsum maximus. Mauris rutrum rhoncus auctor. Aliquam id nulla eu diam aliquet posuere quis ut mauris. Ut commodo a risus at imperdiet. Nam rhoncus eu leo vitae eleifend. Maecenas id molestie erat. XXXX ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium, felis non vestibulum imperdiet, libero elit luctus erat, fringilla feugiat elit diam a felis. Aliquam nec lacus a eros vehicula egestas in ac justo. Integer tristique dolor ac elementum sollicitudin. Nunc pellentesque, tellus ac XXXX pellentesque, mi erat hendrerit odio, non tristique nunc arcu ac risus.Donec tincidunt XXXX orci, eu XXXX elit bibendum non. Maecenas XXXX augue, XXXX vitae orci consectetur, hendrerit elementum orci. Vestibulum at quam leo. Integer tincidunt elit ex, vel molestie odio bibendum quis. Nulla aliquet iaculis pellentesque. Vestibulum vel mi vitae felis maximus vestibulum vel vel metus. In hac habitasse platea dictumst. Nunc quam augue, commodo id commodo consequat, dapibus a felis. Phasellus at dignissim diam. Aenean convallis felis nunc, ut aliquam risus XXXX ut. Sed lobortis pulvinar egestas. Nam rutrum XXXX non dui venenatis imperdiet. Fusce ullamcorper lectus ac neque rutrum facilisis. Sed quis mollis dolor, sed congue tellus. Sed facilisis nibh id leo mattis, sit amet volutpat enim consequat. Sed iaculis commodo nisi, non venenatis sapien vehicula ac.Phasellus malesuada dolor ac leo XXXX aliquam. In placerat hendrerit convallis. Maecenas luctus justo nec eros vestibulum, in rutrum lacus rhoncus. Ut tellus ipsum, molestie vel blandit vitae, mattis sit amet augue. Mauris pretium ultricies metus eu pellentesque. Vivamus iaculis velit a ante tempor laoreet. Quisque aliquet leo non ipsum faucibus, bibendum iaculis orci euismod. Mauris nibh turpis, faucibus sed mauris non, sagittis pharetra ante. Fusce eleifend nisl laoreet, rutrum urna sit amet, venenatis arcu. Etiam volutpat tincidunt ex eget tempus. Ut quis tincidunt tellus. Nam pharetra leo vel mauris suscipit suscipit. Etiam a mauris vitae tellus molestie cursus. Morbi vel orci consequat, dapibus quam vitae, auctor leo. Morbi fermentum tempus dictum.");
    });
  });

  describe("Complex keywords", function() {
    it("handles mutliple cases", function() {
      const result = DocumentRedactor("cheese 'bread cake',love", "I love to eat cheese, and bread cake");
      expect(result).to.equal("I XXXX to eat XXXX, and XXXX");
    });
    it("handles quotes in quotes", function() {
      const result = DocumentRedactor("cheese  \"'bread cake'\" ", "I love to eat cheese, 'bread cake' ");
      expect(result).to.equal("I love to eat XXXX, XXXX ");
    });
  });
});