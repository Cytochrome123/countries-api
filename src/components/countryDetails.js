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

    {countries.forEach(country => {
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
    })};


    return (
        <>
            <div className="details">
                <div className="img-detail">
                    <img src={flag} alt='flag' />
                </div>
                <div className="info-detail">
                    <div className="name">
                        <h2>{`${name} (${timezones})`}</h2>
                    </div>
                    
                    <div className="info">
                        <div className="info-left">
                            <p>Native Name: <span>{nativeName}</span></p>
                            <p>{capital}</p>
                            <p>{region}</p>
                            <p>{subregion}</p>
                            <p>{subregion}</p>
                        </div>
                        <div className="info-right">
                            <p>{population}</p>
                            {currencies.map(currency => (
                                <p>{`${currency.name} - ${currency.code} (${currency.symbol})`}</p>
                            ))}
                            {languages.map(language => (
                                <p>{`${language.name} - ${language.nativeName} (${language.iso639_1})`}</p>
                            ))}
                            <p>{latlng}</p>
                        </div>
                    </div>

                    <h4>Borders</h4>
                    <div className="border">
                        {borders.map(border => (
                            <p>{border}</p>
                        ))}
                    </div>
                </div>
                    
            </div>
            
        </>
    )
}

export default CountryDetails;