import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import style from "./Country.module.css"

export default function Country() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  function onChange(){
    fetch("https://restcountries.com/v3.1/all?fields={region}")
    .then((res) => res.json())
    .then((res) => setData(res));
  }

  return (
    <div>
<div>
    <select onChange={onChange}>
    <option> filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Americas">Americas</option>
   
    </select>
   
</div>
    <div className={style.main}>


      {data.map((el,index) => {
        return (
            <div key={index}>
          <CountryCard
          key={index}
          img={el.coatOfArms.png}
            name={el.name.common}
            capital={el.capital}
            population={el.population}
            continent={el.region}
            nativename={el.name.official}
            subregion={el.subregion}
            currency={el.currencies}
            language={el.languages}
            border={el.borders}
          />
        </div>
        );
      })}
    </div>
    </div>
  );
}
