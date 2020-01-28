import React from 'react';

const Money_converter = () => {

  const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    //get data
    const response = await fetch('http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1');
    // console.log(response);

    // convert to object
    const rates = await response.json()

    // get the currency rates
    const rate = await rates.quotes;
    // console.log(rate);
    // console.log(rate[usd+toCurrency]);


    const exchangeRate = rate['USD'+toCurrency] / rate['USD'+fromCurrency];;

    return exchangeRate;
  }
  catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`);
  }
}

const getCountries = async () => {
  try {
    const response = await fetch(`http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e`);
    const data = await response.json();
    // console.log(data.currencies);
    const countries = await data.currencies;

    return countries;
  }
  catch (error) {
    throw new Error(`Unable to get countries that use your currency`);
  }
}

const convertCurrency = async (fromCurrency, toCurrency, amount,countries) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);
  return `${amount} ${fromCurrency} - ${countries[toCurrency]} is worth ${convertedAmount} ${toCurrency} - ${countries[toCurrency]}`;
}

const calculate = async (from,to,amount,countries,root) => {
  convertCurrency(from, to, amount,countries)
    .then((message) => {
      console.log(message);
      let div = document.createElement('DIV');
      div.innerText= message;
      root.appendChild(div);
    })
    .catch((error) => {
      console.log(error.message);
  });
}

const createUI = async () => {
  const rootdiv = document.querySelector('#root2');
  const countries = await getCountries();
  createOptions(rootdiv,countries,'from_currency');
  createOptions(rootdiv,countries,'to_currency');

  let amt = document.createElement('INPUT');
  amt.setAttribute('id','amount');
  amt.setAttribute('placeholder','Amount');
  rootdiv.appendChild(amt);

  let btn = document.createElement('BUTTON');
  btn.setAttribute('id','btn');
  btn.innerText = 'Calculate';

  btn.addEventListener("click", function(event) {
    let fromCurrency = document.querySelector('#from_currency').value;
    let toCurrency = document.querySelector('#to_currency').value;
    let amount = document.querySelector('#amount').value;
    calculate(fromCurrency,toCurrency,amount,countries,rootdiv);
  });
  rootdiv.appendChild(btn);


}

const createOptions = (root, obj, name) => {
  const sel = document.createElement('SELECT');
  sel.setAttribute('id',name);
  sel.setAttribute('name',name);

  let opt = document.createElement('OPTION');
  opt.setAttribute('value','');
  opt.innerText = 'Please Select Currency';
  sel.appendChild(opt);

  Object.entries(obj).forEach(([key, value]) => {
    let opt = document.createElement('OPTION');
    opt.setAttribute('value',`${key}`);
    opt.innerText = `${value}`;
    sel.appendChild(opt);
  });
  root.appendChild(sel);
}

createUI();


  return (
    <div id="root2"></div>
  )
}

export default Money_converter;
