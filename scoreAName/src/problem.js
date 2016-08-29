/*
Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

If you can try and sort the words with your own sort algorithm.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
The letters get their score from their position in the alphabet. For instance C is 3 because it is the third letter.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

To run the tests run npm install and npm test.
*/
fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

var totalNameScores = function(){
  var sum=0;
  var arrayFile=readFile();
  var sort=arrayFile.sort();
  for(var i=0;i<sort.length;i++){
  	var temp=sort[i].split('');
  	var wordSum=0
  	for(var j=1;j<temp.length-1;j++){
  		if(temp[i]!==undefined){
  			var val=temp[i].charCodeAt();
  			wordSum=wordSum+val;}
  		}
  		sum=sum+wordSum*(i+1);
  }
  return sum;
}

module.exports = {totalNameScores};