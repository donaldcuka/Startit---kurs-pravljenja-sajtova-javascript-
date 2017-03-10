var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,     // <5 = newbie
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,                //<7 amateur
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,           // 10 => expert
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,              //<10 pro
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];


function statistika(objekat){
  var newbie = [];
  var amateur = [];
  var pro = [];
  var expert = [];

  for( var i = 0; i<people.length; i++ ){
    if (people[i].yearsExperience < 5){
      newbie.push(people[i].name);
    }
    else if (people[i].yearsExperience < 7){
      amateur.push(people[i].name);
    }
    else if (people[i].yearsExperience < 10){
      pro.push(people[i].name);
    }
    else if (people[i].yearsExperience >= 10){
      expert.push(people[i].name);
    }
  }

var sortiranje = {
    AMATEUR: amateur,
    EXPERT: expert,
    NEWBIE: newbie,
    PRO: pro
};
return sortiranje;
}

var ispis = statistika(people);
console.log(ispis);