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
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];


function sortiranje(ime){
var nizImena = [];
for (var i = 0; i < ime.length; i++){
  nizImena.push(ime[i].name);
}

  console.log(nizImena);

}

sortiranje(people);
