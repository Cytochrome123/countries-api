import { Card } from 'react-bootstrap' 



const CountryCard = ({name,capital,flag,region,population,show}) => {
    return (
        <div className='country-card' onClick={show}>
            <Card style={{ width: '18rem' }}>
                <div className='flag'><Card.Img variant="top" src={flag} /></div>
                <Card.Body>
                    <Card.Title className='mb-3'>{name}</Card.Title>
                    <Card.Text>
                        <p>Population: <span className='value'>{population}</span> </p> 
                        <p>Region: <span className='value'>{region}</span></p> 
                        <p>Capital: <span className='value'>{capital}</span></p>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CountryCard;