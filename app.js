// https://calculator.swiftutors.com/percentage-error-calculator.html
// not complete

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const percentErrorRadio = document.getElementById('percentErrorRadio');
const exactValueRadio = document.getElementById('exactValueRadio');
const approximateValueRadio = document.getElementById('approximateValueRadio');

let percentError;
let exactValue = v1;
let approximateValue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

percentErrorRadio.addEventListener('click', function() {
  variable1.textContent = 'Exact Value';
  variable2.textContent = 'Approximate Value';
  exactValue = v1;
  approximateValue = v2;
  result.textContent = '';
});

exactValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Error (%)';
  variable2.textContent = 'Approximate Value';
  percentError = v1;
  approximateValue = v2;
  result.textContent = '';
});

approximateValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Percent Error (%)';
  variable2.textContent = 'Exact Value';
  percentError = v1;
  exactValue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(percentErrorRadio.checked)
    result.textContent = `Percent Error = ${computePercentError().toFixed(2)} %`;

  else if(exactValueRadio.checked)
    result.textContent = `Exact Value = ${computeExactValue().toFixed(2)}`;

  else if(approximateValueRadio.checked)
    result.textContent = `Approximate Value = ${computeApproximateValue().toFixed(2)}`;
})

// calculation

function computePercentError() {
  return Math.abs(((Number(exactValue.value) - Number(approximateValue.value)) / Number(exactValue.value)) * 100);
}

function computeExactValue() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeApproximateValue() {
  return Number(exactValue.value) - ((Number(percentError.value) / 100) * Number(exactValue.value));
}