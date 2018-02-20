const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/////////////////////////////// forEach
companies.forEach(function(company, index, companies){
  console.log(`Company #${index+1}:`, company);
});


////////////////////////////// filter

//Crappy way to filter
const canDrink1 = [];
ages.forEach(function(age){
  if (age >= 21){
    canDrink1.push(age);
  }
});
console.log("Ages that can drink: " , canDrink1);

// better way to filter
const canDrink2 = ages.filter(function(age){
  if (age >= 21){
    return true;
  }
});
console.log("Ages that can drink: " , canDrink2);

//best way to filter
const canDrink3 = ages.filter(age => age >= 21);
console.log("Ages that can drink: " , canDrink3);

const retailCompanies = companies.filter(company => company.category == "Retail");
console.log("Retail Companies: " , retailCompanies);

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log("80's Companies: " , eightiesCompanies);

const lastedTenYears = companies.filter(company => (company.end-company.start >= 10));
console.log("Lasted 10 Years: ", lastedTenYears);



///////////////////////////// maps
// Maps create a new array from a current array vs. filtering an existing one

const companyNames = companies.map(company => company.name);
console.log('Company Names:', companyNames);

const companyNamesAndDates = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log('Company Names & Dates:', companyNamesAndDates);

const agesSquared = ages.map(age => Math.sqrt(age));
console.log("Ages squared: ", agesSquared);

const agesTimesTwo = ages.map(age => (age*2));
console.log("Ages times two: ", agesTimesTwo);

const twoMapFunctions = ages
  .map(age => Math.sqrt(age))
  .map(age => (age*2));

console.log("Two Maps: ", twoMapFunctions);


///////////////////////////// sort
// sort the companies in order of start date using their start property
const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  }
  else {
    return -1;
  }
});
console.log("Sorted Companies", sortedCompanies);

// shorter way
const sortedCompaniesShortForm = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log("Sorted Companies", sortedCompaniesShortForm);

const sortedAgesWrong = ages.sort();
console.log("Sorted ages (incorrectly):", sortedAgesWrong);

const sortedAges = ages.sort((a,b) => (a - b));
console.log("Sorted ages:", sortedAges);


//////////////////////////////// reduce
// lets sum the ages using traditional way
let ageSumTraditional = 0;
ages.forEach(age => (ageSumTraditional += age));
console.log("Sum of ages (traditional):",ageSumTraditional);

// sum using reduce
const ageSum = ages.reduce((total, age) => (total + age), 0);
console.log("Sum of ages (using reduce):",ageSum);

// total life of all companies
const totalCompanyYears = companies.reduce((total, company) => (total + (company.end-company.start)), 0);
console.log("Total years of all companies:",totalCompanyYears);



//////////////////////////////// combine all of the above

const combined = ages
  .map(age => age*2)
  .filter(age => age >= 40)
  .sort((a,b) => b-a)
  .reduce((total,age) => total+age, 0);
console.log("All Methods Combined:", combined);
