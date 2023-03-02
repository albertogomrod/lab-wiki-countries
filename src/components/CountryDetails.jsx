import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function CountryDetails() {
  const params = useParams();
  // console.log(params);
  const { country } = params;

  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    getData();
  }, [country]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${country}`
      );

      setCountryDetails(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (countryDetails === null) {
    return <h4>Cargando...</h4>;
  }

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
        alt="bandera"
      />
      <br />
      <h3>{countryDetails.name.official}</h3>
      <h5>Capital: {countryDetails.capital}</h5>
      <h5>Area: {countryDetails.area} km2</h5>
    </div>
  );
}

export default CountryDetails;
