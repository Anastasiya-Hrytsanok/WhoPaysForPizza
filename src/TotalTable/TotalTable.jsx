import React from "react";
import { convertToByn, roundNumber, splitPrice } from "../utils";
import "./component.css";
import TableTotalRow from "./TableTotalRow/TableTotalRow";

const TotalTable = ({ pizzaEaters, currencyExchangeRates, orderDetails, onPayClick, diets }) => {
  const { amount, currency } = splitPrice(orderDetails.price);
  const BYNprice = roundNumber(convertToByn(currency, amount, currencyExchangeRates));
  const sumPerPerson = roundNumber(BYNprice / pizzaEaters.length);

  return (
    <table>
      <thead>
        <tr>
          <th className='col1'>Name</th>
          <th className='col2'>Share to pay</th>
          <th className='col3'>Pay</th>
        </tr>
      </thead>
      <tbody>
        {pizzaEaters.map(({ name, isVegan, hasPaid }) => (
          <tr key={name}>
            <td className={isVegan ? "vegan" : ""}>{name}</td>
            <td>{hasPaid ? 0 : sumPerPerson} BYN</td>
            <td>
              <button disabled={hasPaid} onClick={() => onPayClick(name)}>{hasPaid ? 'Paid' : 'Pay'}</button>
            </td>
          </tr>
        ))}
        <TableTotalRow name={"Total order"} amount={roundNumber(sumPerPerson * pizzaEaters.length)} />
        <TableTotalRow name={"Money to collect"} amount={roundNumber(sumPerPerson * diets.filter((item) => !item.hasPaid).length)} />
        <TableTotalRow name={"Money collected"} amount={roundNumber(sumPerPerson * diets.filter((item) => item.hasPaid).length)} />
      </tbody>
    </table>
  );
};

export default TotalTable;
