export const splitPrice = (price) => {
  const values = price.split(" ");
  return { amount: Number(values[0]), currency: values[1] };
};

export const convertToByn = (currency, amount, currencyExchangeRates) => {
  switch (currency) {
    case "USD": {
      return amount * currencyExchangeRates.USD;
    }
    case "EUR": {
      return amount * currencyExchangeRates.EUR;
    }
    default:
      return amount;
  }
};

export const roundNumber = (number) => Math.floor(number * 10) / 10;
