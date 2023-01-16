import { useState } from "react";

import "./App.css";
import earthSVG from "./assets/earth.svg";

import { Nation } from "./interfaces/Nation";

import Form from "./components/Form/Form";
import MessageController from "./components/MessageController/MessageController";
import InferredNationality from "./components/InferredNationality/InferredNationality";

const INITIAL_NATION_STATE: Nation = {
  nationality: "",
  probability: 0,
  flagUrl: "",
  continent: "",
}

const App: React.FC = () => {
  const [nation, setNation] = useState<Nation>(INITIAL_NATION_STATE);
  const [query, setQuery] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const nationalityResponse = await fetch(
        `https://api.nationalize.io?name=${query}`
      );
      if (!nationalityResponse.ok) {
        throw new Error(
          `Nationality API returned ${nationalityResponse.status}`
        );
      }
      const nationalityData = await nationalityResponse.json();
      console.log(nationalityData)
      if (nationalityData.country.length === 0) {
        throw new Error("Could not find a country for the given name");
      }
      const countryID = nationalityData.country[0].country_id;

      const flagResponse = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryID}`
      );
      if (!flagResponse.ok) {
        throw new Error(`Flag API  returned ${flagResponse.status}`);
      }
      const flagData = await flagResponse.json();
      console.log(flagData);
      setError(false);
      const newNation: Nation = {
        nationality: flagData[0].name.common,
        probability: (nationalityData.country[0].probability * 100),
        flagUrl: flagData[0].flags.png,
        continent: flagData[0].continents[0],
      }
      setNation(newNation);
      console.log(newNation)
    } catch (err: any) {
      /*
      Before you judge me, I know adding "any" is not good practice, but after many headaches I could not 
      find another suitable type that does not cause typescript to complain :(
      */
      console.error(err);
      setErrorMessage(err.toString());
      setError(true);
    }
  };

  return (
    <div>
      <div className="earth-container">
        <img className="earth" src={earthSVG} alt="Earth"/>
      </div>
      <h2>Let's me guess your nationality from your name!!</h2>
      <br />
      <MessageController type="warn" condition={showMessage} onCloseHandler={() => setShowMessage(false)}>
        Input only takes one word, please avoid putting full names.
      </MessageController>
      <MessageController type="error" condition={error} onCloseHandler={() => setError(false)}>{errorMessage}</MessageController>
      <Form query={query} setQuery={setQuery} handleQuery={handleQuery}/>
      <InferredNationality nation={nation}/>
    </div>
  );
};

export default App;
