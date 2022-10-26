import { useParams } from "react-router-dom";

const CountryDetails = ({countries}) => {
    const { code } = useParams();

    let name;
    let nativeName;
    let capital;
    let flag;
    let population;
    let borders = [];
    let currencies = [];
    let languages = [];
    let region;
    let subregion;
    let latlng;
    let timezones;

    countries.forEach(country => {
        if (country.alpha3Code === code) {
            name = country.name;
            nativeName = country.nativeName;
            capital = country.capital
            flag = country.flag;
            population =country.population;
            borders = country.borders;
            currencies = country.currencies;
            languages = country.languages;
            region = country.region;
            subregion = country.subregion;
            latlng = country.latlng;
            timezones = country.timezones;
        }
    });


    return (
        <>
            <div className="details">
                <div className="img-detail">
                    <img src={flag} alt='flag' />
                </div>
                <div className="info-detail">
                    <div className="name">
                        <h2 className="mb-3">{`${name} (${timezones})`}</h2>
                    </div>
                    
                    <div className="info">
                        <div className="info-left">
                            <p>Native Name: <span>{nativeName}</span></p>
                            <p>Capital: <span>{capital}</span> </p>
                            <p>Region: <span>{region}</span> </p>
                            <p>Sub-region: <span>{subregion}</span></p>
                        </div>
                        <div className="info-right">
                            <p>Population: <span>{population}</span></p>
                            {currencies.map(currency => (
                                <p>Currency: <span>{`${currency.name} - ${currency.code} (${currency.symbol})`}</span></p>
                            ))}
                            {languages.map(language => (
                                <p>Language: <span>{`${language.name} - ${language.nativeName} (${language.iso639_1})`}</span></p>
                            ))}
                            <p>Lat&Lng: <span>{latlng}</span></p>
                        </div>
                    </div>

                    <h4 className="mt-3">Borders</h4>
                    <div className="borders">
                        {borders.map(border => (
                            <p className="mt-3">{border}</p>
                        ))}
                    </div>
                </div>
                    
            </div>
            
        </>
    )
}

export default CountryDetails;