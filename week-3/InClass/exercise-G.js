const currentYear = 2021;
const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const olders = years.filter(year => currentYear-year >= 17);
console.log(`These are the birth years of people who can drive: ${olders}`)
