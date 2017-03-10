var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];


function calc(p) {
   countIT = 0;
   countMng = 0;
   countEng = 0;
   for ( var i = 0; i < people.length; i++ ) {
     if( people[i].department === 'IT'){
       countIT+=1;
     }

     else if (people[i].department === 'Management'){
       countMng += 1;
     }

     else if (people[i].department === 'Engineering'){
       countEng += 1;
     }
   }

	var noviNiz = {
		"IT"  : countIT,
		"MNG" : countMng,
		"ENG" : countEng
	};
	
   return noviNiz;
}

 var niz = calc(people);
 console.log(niz);

