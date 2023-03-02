import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { allCountries } = props;
  return (
    <div>
      <h4>CountriesList</h4>
      {allCountries.map((cadaPais) => {
        return (
          <div key={cadaPais.name.official}>
            <Link to={`/country-details/${cadaPais.alpha3Code}`}>
              {cadaPais.name.official}
            </Link>
            <br />
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${cadaPais.alpha2Code.toLowerCase()}.png`}
              alt="bandera"
            />
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
