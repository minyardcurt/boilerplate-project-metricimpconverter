function ConvertHandler() {

this.getNum = function (input) {
  const result = input.match(/^[\d/.]+/);

  if (!result) return 1;

  const num = result[0];

  if (num.split('/').length > 2) return 'invalid number';

  let value;
  if (num.includes('/')) {
    const [numerator, denominator] = num.split('/');
    value = parseFloat(numerator) / parseFloat(denominator);
  } else {
    value = parseFloat(num);
  }

  if (isNaN(value)) return 'invalid number';

  return value;
};


  this.getUnit = function (input) {
    const result = input.match(/[a-zA-Z]+$/);
    if (!result) return 'invalid unit';

    const unit = result[0].toLowerCase();
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    if (!validUnits.includes(unit)) return 'invalid unit';

    return unit === 'l' ? 'L' : unit;
  };

  this.getReturnUnit = function (initUnit) {
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

  this.spellOutUnit = function (unit) {
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

  this.convert = function (initNum, initUnit) {
    const rates = {
      gal: 3.78541,
      L: 1 / 3.78541,
      mi: 1.60934,
      km: 1 / 1.60934,
      lbs: 0.453592,
      kg: 1 / 0.453592
    };

    const result = initNum * rates[initUnit];
    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;

