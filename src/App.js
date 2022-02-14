import React, { useEffect } from "react";
import Header from "./Header/Header";
import "./component.css";
import LoadButton from "./LoadButton/LoadButton";
import Pizza from "./Pizza/Pizza";
import { useState } from "react";
import Description from "./Description/Description";

export default function App() {
  const [pizzaEatersCount, setPizzaEatersCount] = useState(0);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [allPeople, setAllPeople] = useState(0);
  const [pizzaEaters, setPizzaEaters] = useState([]);
  const [vegeterians, setVegeterians] = useState([]);
  const [onceLoaded, setOnceLoaded] = useState(false);

  const fetchGuestsAsync = async () => {
    const response = await fetch(
      "https://gp-js-test.herokuapp.com/pizza/guests"
    );
    const data = await response.json();
    return data.party;
  };

  const fetchDietsAsync = async (people) => {
    const peopleNamesEncoded = people.map(({ name }) =>
      encodeURIComponent(name)
    );
    const response = await fetch(
      `https://gp-js-test.herokuapp.com/pizza/world-diets-book/${peopleNamesEncoded.join()}`
    );
    const data = await response.json();
    return data.diet;
  };

  // create a file with URL constants
  const fetchPizzaOrderAsync = async (pizzaType, sliceCount) => {
    try {
      const response = await fetch(
        `https://gp-js-test.herokuapp.com/pizza/order/${pizzaType}/${sliceCount}`
      );
      return await response.json();
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  const fetchCurrencyExchangeRatesAsync = async () => {
    try {
      const response = await fetch(
        "https://gp-js-test.herokuapp.com/pizza/currency"
      );
      return await response.json();
    } catch (error) {
      setError(error);
      throw error;
    }
  };

  const handleClick = async () => {
    setIsLoading(true);

    const guests = await fetchGuestsAsync();
    const pizzaEaters = guests.filter((element) => element.eatsPizza);
    setPizzaEaters(pizzaEaters);

    const diets = await fetchDietsAsync(pizzaEaters);
    setVegeterians(diets.filter((element) => element.isVegan));

    const [ orderDetails, currencyExchangeRates ] = await Promise.all([
      fetchPizzaOrderAsync("vegan", 12),
      fetchCurrencyExchangeRatesAsync(),
    ]);

    console.log('orderDetails', orderDetails);
    console.log('currencyExchangeRates', currencyExchangeRates);


    fetch("https://gp-js-test.herokuapp.com/pizza")
      .then((response) => response.json())
      .then((result) => {
        setPizzaEatersCount(
          result.party.filter((element) => element.eatsPizza).length
        );
        setAllPeople(result.party.length);
        //   setIsLoaded(true);
        // },
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        setIsLoading(false);
        if (!onceLoaded) {
          setOnceLoaded(true);
        }
      });
  };

  return (
    <div>
      <Header />
      <LoadButton onClick={handleClick} />
      {isLoading ? (
        <p> Waiting... </p>
      ) : (
        onceLoaded && <Pizza pizzaEatersPersonsCount={pizzaEatersCount} />
      )}
      {isLoading ? (
        <p> </p>
      ) : (
        onceLoaded && (
          <Description
            allPeople={allPeople}
            pizzaEatersPersonsCount={pizzaEatersCount}
          />
        )
      )}
    </div>
  );
}
