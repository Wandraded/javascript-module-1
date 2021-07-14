const currentYear = 2021;
const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const drive = (arr) => arr.forEach( year => ( currentYear-year >= 17 ) ? console.log(`Born in ${year} can drive.`) : console.log(`Born in ${year} can drive in ${17-(currentYear-year)} years.`));
drive(years);