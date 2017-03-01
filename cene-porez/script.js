var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var cenaSaPorezom18;
var cenaSaPorezom8;
for (var i = 0; i < cene.length; i++){

	if(cene[i] < 50)
	{
		cenaSaPorezom18 =cene[i] + (cene[i] / 100 * 18);
					console.log(cenaSaPorezom18);

	}

	else if (cene[i] >= 50)
	{
		cenaSaPorezom8 = cene[i] + (cene[i] / 100 * 8);
					console.log(cenaSaPorezom8);

	}
}