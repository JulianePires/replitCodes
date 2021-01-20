var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = lines.shift();
var aux = 0;
var num_calls = 0;
var result = 0;

while (aux < n){
	var x = lines.shift();
	result = fibonacci(x);
	console.log("fib("+ x +") = "+ ( num_calls-1 ) +" calls = "+ result );
	num_calls = 0;
	result = 0;
	aux++;
}

function fibonacci( num ){
	num_calls++;
	if( num < 2 ) return num;
	return  fibonacci( num - 1 ) + fibonacci( num - 2 );
}