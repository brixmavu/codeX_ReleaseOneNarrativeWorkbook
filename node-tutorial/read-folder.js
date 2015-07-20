var fs = require('fs');
/*in case there is no module: <exports.files>
var folderName = './files/week1';*/

var findFiles = function(folderName){

var files = fs.readdirSync(folderName);
var productList = [];

files.forEach(function(fileName) { //finding files in the folder, for each looping

   var fileContent = fs.readFileSync(folderName + '/' + fileName, 'utf8');//returning conent file name; 
   var products = fileContent.split("\n");
   products.forEach(function (product) {
   	// pushing product in .txt file productList Array
   	productList.push(product);
   });
   
});
//display array on the console
return (productList);

}

exports.linesInFiles = function(folderName){
 
   var productList = findFiles(folderName);

   return productList;

  };

  exports.linesInFilesAsync = function(folderName, callback){
 
   var productList = findFiles(folderName);

   callback(null, productList);

  };