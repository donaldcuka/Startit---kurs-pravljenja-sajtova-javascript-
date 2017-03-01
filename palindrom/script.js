var palindrom = 'anavolimilovana';
var palindromLow = palindrom.toLowerCase();

for(var i = 0; i < palindromLow.length/2; i++)
{
	if(palindromLow[i] == palindromLow[palindromLow.length - 1 - i])
	{
		console.log('jeste palindrom');
	}

	else
	{
		console.log('nije palindrom');
	}
}