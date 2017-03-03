var niz = [3, 6, 7, 8, 5, 9, 1, 4, 2];

for( var i = 0; i < niz.length; i++)
{
	for( var j =0; j < niz.length; j++)
	{
		if( i != j && niz[i] == niz[j])
		{
			console.log('true');
			break
		}
		
	
		else
		{
			console.log('false');
			break
		}
	}	
}
