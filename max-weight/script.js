var weight1 = 150;
var weight2 = 3;
var maxWeight = 300;

	if(weight1 + weight2 > maxWeight && weight1 < maxWeight && weight2 > maxWeight){
	console.log ('mozes poneti samo prvi predmet');
	}

	
	else if (weight1 + weight2 > maxWeight && weight2 < maxWeight && weight1 > maxWeight){
	console.log  ('mozes poneti samo drugi predmet');
	}


	else if (weight1 + weight2 > maxWeight && weight2 < maxWeight && weight1 < maxWeight && weight2 < maxWeight){
	console.log  ('mozes da poneses samo jedan premet');
	}

	else if (weight1 + weight2 < maxWeight){
	console.log  ('mozes da poneses oba predmeta');
	}

	else if (weight1 = NaN || weight2 = NaN || maxWeight = NaN){
		console.log ('pogresan unos');
	}


