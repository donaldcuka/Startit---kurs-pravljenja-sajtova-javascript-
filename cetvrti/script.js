var pare = Number(prompt ('koliko imas para?'));
var cena = Number(prompt ('koliko kosta proizvod'));
var komada = 0;


while (pare > 0){;
	 pare = pare - cena;
	 komada++;
}

	 document.write (komada);
