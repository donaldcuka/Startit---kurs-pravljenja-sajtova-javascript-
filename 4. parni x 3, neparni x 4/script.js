var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

function mnozenjeNizova(niz){
var pomnozeni = [];


for(var i = 0; i < niz.length; i++)
	{
		if(niz[i] % 2 == 0){
			pomnozeni.push(niz[i] * 3);
		}
		else{
			pomnozeni.push(niz[i] * 4);
		}
	}
	return pomnozeni;
}

console.log(mnozenjeNizova(test_niz1));
console.log(mnozenjeNizova(test_niz2));
console.log(mnozenjeNizova(test_niz3));