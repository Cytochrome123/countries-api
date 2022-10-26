import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { InputGroup, Form } from 'react-bootstrap';

import CountryCard from './countryCard';

import './countries.css'


const Countries = ({countries, setCountries, fetch}) => {
    

    const navigate = useNavigate();
    const [ search, setSearch ] = useState('');
    // const ref = useRef(true)
    const refInput = useRef()
    const filterInput = useRef();
    
    
    const show = (code) => {
        navigate(`${code}/details`)
    }
    
    const searchCountries = (event) => {
        try {
            console.log(event.target.value)
            setSearch(event.target.value);

            if(search.trim()) {
                const sear = async () => {
                    await axios.get(`https://restcountries.com/v2/name/${search}`)
                    // setCountries(response.data)
                    .then(res => {
                        console.log(res)
                        setCountries(res.data)
                    })
                    .catch(e => {
                        console.log('errorrorr')
                        console.log(e)
                        setCountries([e.response.data])
                    })
                }
                // console.log(ref)
                sear();
                // ref.current = false
            } else {
                fetch()
            }
        } catch (err) {
            throw err
            // console.log(err)
        }
    }
    console.log(search);
    console.log(countries);

    const SC = () => {
        try {
            const searchValue = refInput.current.value
            if (searchValue) {
                console.log(searchValue)
                const sear = async () => {
                    await axios.get(`https://restcountries.com/v2/name/${searchValue}`)
                    .then(res => {
                        console.log(res)
                        setCountries(res.data)
                    })
                    .catch(e => {
                        console.log('errorrorr')
                        console.log(e)
                        setCountries([e.response.data])
                    })
                    // setCountries(response.data)
                }
                sear();
            } else {
                fetch()
            }
        } catch (err) {
            throw err;
        }
    }

    const filter = () => {
        const region = filterInput.current.value;
        switch (region) {
            case 'Africa':
                const africa = async () => {
                    await axios.get(`https://restcountries.com/v2/region/africa`)
                    .then(res => {
                        setCountries(res.data)
                    })
                    .catch(e => {
                        setCountries(e.data.message)
                    })
                }
                africa();
                break;
            case 'America':
                const america = async () => {
                    const response = await axios.get(`https://restcountries.com/v2/region/americas`)
                    setCountries(response.data)
                }
                america();
                break;
            case 'Asia':
                const asia = async () => {
                    const response = await axios.get(`https://restcountries.com/v2/region/africa`)
                    setCountries(response.data)
                }
                asia();
                break;
            case 'Europe':
                const europe = async () => {
                    const response = await axios.get(`https://restcountries.com/v2/region/europe`)
                    setCountries(response.data)
                }
                europe();
                break;
            case 'Oceania':
                const oceania = async () => {
                    const response = await axios.get(`https://restcountries.com/v2/region/oceania`)
                    setCountries(response.data)
                }
                oceania();
                break;
            default:
                fetch();
                break;
        }
    }
    
    console.log(countries);
    return (
        <div>
            <div className='filter'>
                {/* <input type='text' ref={refInput} onChange={SC}/> */}
                <div className='search'>
                    <InputGroup className="mb-3 input">
                        <InputGroup.Text id="basic-addon1" size="sm">@</InputGroup.Text>
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                // value={search}
                                name='search'
                                // onChange={searchCountries}
                                onChange={SC}
                                ref={refInput}
                            />
                    </InputGroup>
                </div>
                <div className='region'>
                    <Form.Select size="sm" ref={filterInput} onChange={filter}>
                        <option>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='America'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </Form.Select>
                </div>
                
            </div>
            <div className="countries">
                {countries.length === 0  ? 
                    <div>Not Available</div> : 
                    countries[0].message ? 
                        <div>{countries[0].message}</div> : (
                            countries.map(country => (
                                <CountryCard 
                                key={country.alpha3Code}
                                name={country.name}
                                capital={country.capital}
                                flag={country.flag}
                                region={country.region}
                                population={country.population}
                                show={() => show(country.alpha3Code)}
                                />
                            )
                ))}
            </div> 
        </div>
        
    );
}

export default Countries;