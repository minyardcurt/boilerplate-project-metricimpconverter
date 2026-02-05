function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let num = input.match(/^[\d/.]+/);

    if (!num) return 1;

    num = num[0];

    if (num.split('/').length > 2) {
      return 'invalid number';
    }

    if (num.includes('/')) {
      let [numerator, denominator] = num.split('/');
    result = parseFloat(numerator) / parseFloat(denominator);
  } else {
    result = parseFloat(num);
  }
  return result;
  };
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-zA-Z]+$/);
    if (!unit) return 'invalid unit';
    unit = unit[0].toLowerCase();
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    if (!validUnits.includes(unit))return 'invalid unit';
    return unit === 'l' ? 'L' : unit;
  };
  
  this.getReturnUnit = function(initUnit) {
   const map = {
    gal: 'L',
    L: 'gal',
    mi: 'km',
    km: 'mi',
    lbs: 'kg',
    kg: 'lbs'
  };
    
    return map[initUnit];
  };

  this.spellOutUnit = function(unit) {
  const map = {
    gal: 'gallons',
    L: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  };

  return map[unit];
  };
  
  this.convert = function(initNum, initUnit) {
  const rates = {
    gal: 3.78541,
    lbs: 0.453592,
    mi: 1.60934
  };

    let result;

  if (initUnit === 'gal') result = initNum * rates.gal;
  if (initUnit === 'L') result = initNum / rates.gal;
  if (initUnit === 'lbs') result = initNum * rates.lbs;
  if (initUnit === 'kg') result = initNum / rates.lbs;
  if (initUnit === 'mi') result = initNum * rates.mi;
  if (initUnit === 'km') result = initNum / rates.mi;

  return Number(result.toFixed(5));
};
  
this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
};

  
}

module.exports = ConvertHandler;
