/*
Basic algorithm
*/

// load Data

// Initialise data Matrix
var MatrixA = new Array(trainData.typeRec.length*2)
, MatrixB = new Array(testData.typeRec.length*2)
, score = [ ];
// Read in Data and Initial vectors for processing
for (var j = 0; j < trainData.typeRec.length; j++){ // for all the samples
    MatrixA[j] = [trainData.typeRec[j].f1, trainData.typeRec[j].f2]
}

for (var k = 0; k < testData.typeRec.length; k++){
    MatrixB[k] = [testData.typeRec[k].f1, testData.typeRec[k].f2]
}
// Euclidean distance
function Euclidean (vectorA, vectorB){
	var sum = 0
	for (var n = 0; n < vectorA.length; n++){ // n is the dimension
		sum +=(Math.pow(vectorA[n] - vectorB[n], 2))
	}
	return Math.sqrt(sum)
}
// Score  Object and return ascending order
for (var l = 0; l < testData.typeRec.length; l++){
	for (var m = 0; m < trainData.typeRec.length; m++){
		score.push({'s': Euclidean(MatrixA[m], MatrixB[l]), 'position': m})
	}
	console.log(score.sort(function(a, b){return [a.s - b.s]}))  
	    }

