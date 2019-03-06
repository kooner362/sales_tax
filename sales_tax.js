var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {};
  for (var x of salesData) {
    var sum = sumOfSales(x.sales);
    var taxRate = salesTaxRates[x.province];
    var tax = calculateTax(sum, taxRate);
    if (results[x.name] === undefined) {
      results[x.name] = {'totalSales': sum, 'totalTaxes': tax};
    }
    else{
      results[x.name].totalSales += sum;
      results[x.name].totalTaxes += tax;
    }
  }
  return results;
}

function sumOfSales (salesArr) {
  var sum = 0;
  for (var i = 0; i < salesArr.length; i++){
    sum += salesArr[i];
  }
  return sum;
}

function calculateTax(sales, tax) {
  return sales * tax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
