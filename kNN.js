/*
Basic algorithm
*/

// load Data, do it Synchronously
var fs = require('fs') 
    trainData = JSON.parse(fs.readFileSync('train.txt','utf8'))
    testData = JSON.parse(fs.readFileSync('test.txt','utf8'))

// Initialise data Matrix
var MatrixA = new Array(trainData[0].typeRec.length*2)
  , MatrixB = new Array(testData[0].typeRec.length*2)
  , score = [ ];

// Read in Data and Initial vectors for processing
for (var j = 0; j < trainData[0].typeRec.length; j++){ // for all the samples
    MatrixA[j] = [trainData[0].typeRec[j].f1, trainData[0].typeRec[j].f2]
}

for (var k = 0; k < testData[0].typeRec.length; k++){
    MatrixB[k] = [testData[0].typeRec[k].f1, testData[0].typeRec[k].f2]
}

console.log(NearestNeighbour(MatrixA,MatrixB))
// Euclidean distance
function Euclidean (vectorA, vectorB){
	var sum = 0
	for (var n = 0; n < vectorA.length; n++){ // n is the dimension
		sum +=(Math.pow(vectorA[n] - vectorB[n], 2))
	}
	return Math.sqrt(sum)
}

// Score  Object and return ascending order
function NearestNeighbour(MatrixA,MatrixB){
	for (var l = 0; l < testData[0].typeRec.length; l++){
		for (var m = 0; m < trainData[0].typeRec.length; m++){
			score.push({'s': Euclidean(MatrixA[m], MatrixB[l]), 'position': m})
		}
		return score.sort(function(a, b){return [a.s - b.s]})
	}
}
