import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // To access state passed during redirection
import { FaArrowLeft } from 'react-icons/fa'; // For back button icon
import { Badge, Card, Col, Row, Table } from 'react-bootstrap'; // Bootstrap components

const CompareResultPage = () => {
  const location = useLocation();
  const { countries } = location.state || {}; // Get selected countries from the state

  if (!countries || countries.length !== 2) return <div className="alert alert-danger text-center">Invalid comparison</div>;

  const [country1, country2] = countries;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Country Comparison</h1>

      <Row>
        {/* Country 1 Info Card */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header className="bg-primary text-white">
              <h4>{country1.name}</h4>
            </Card.Header>
            <Card.Body>
              <img src={country1.flag} alt={`${country1.name} flag`} className="img-fluid" style={{ maxWidth: '100px' }} />
              <Table bordered className="mt-4">
                <tbody>
                  <tr>
                    <td><strong>Official Name</strong></td>
                    <td>{country1.officialName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Region</strong></td>
                    <td>{country1.region}</td>
                  </tr>
                  <tr>
                    <td><strong>Population</strong></td>
                    <td>{country1.population.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td><strong>Area (km²)</strong></td>
                    <td>{country1.area.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td><strong>Capital</strong></td>
                    <td>{country1.capital || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Currencies</strong></td>
                    <td>{country1.currencies ? Object.keys(country1.currencies).join(', ') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Timezones</strong></td>
                    <td>{country1.timezones ? country1.timezones.join(', ') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Continent</strong></td>
                    <td>{country1.subregion || 'N/A'}</td>
                  </tr>
                </tbody>
              </Table>
              <a href={country1.maps} target="_blank" rel="noopener noreferrer">
                <Badge pill variant="info">View Map</Badge>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Country 2 Info Card */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header className="bg-success text-white">
              <h4>{country2.name}</h4>
            </Card.Header>
            <Card.Body>
              <img src={country2.flag} alt={`${country2.name} flag`} className="img-fluid" style={{ maxWidth: '100px' }} />
              <Table bordered className="mt-4">
                <tbody>
                  <tr>
                    <td><strong>Official Name</strong></td>
                    <td>{country2.officialName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Region</strong></td>
                    <td>{country2.region}</td>
                  </tr>
                  <tr>
                    <td><strong>Population</strong></td>
                    <td>{country2.population.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td><strong>Area (km²)</strong></td>
                    <td>{country2.area.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td><strong>Capital</strong></td>
                    <td>{country2.capital || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Currencies</strong></td>
                    <td>{country2.currencies ? Object.keys(country2.currencies).join(', ') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Timezones</strong></td>
                    <td>{country2.timezones ? country2.timezones.join(', ') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td><strong>Continent</strong></td>
                    <td>{country2.subregion || 'N/A'}</td>
                  </tr>
                </tbody>
              </Table>
              <a href={country2.maps} target="_blank" rel="noopener noreferrer">
                <Badge pill variant="info">View Map</Badge>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Comparison Table */}
      <Row>
        <Col>
          <h3 className="text-center mt-5">Comparison Table</h3>
          <div className="table-responsive mt-3">
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>Attribute</th>
                  <th>{country1.name}</th>
                  <th>{country2.name}</th>
                  <th>Conclusion</th>
                </tr>
              </thead>
              <tbody>
                {/* Flag Comparison */}
                <tr>
                  <td>Flag</td>
                  <td>
                    <img src={country1.flag} alt={`${country1.name} flag`} style={{ width: '50px' }} />
                  </td>
                  <td>
                    <img src={country2.flag} alt={`${country2.name} flag`} style={{ width: '50px' }} />
                  </td>
                  <td>Flags displayed</td>
                </tr>

                {/* Official Name Comparison */}
                <tr>
                  <td>Official Name</td>
                  <td>{country1.officialName || 'N/A'}</td>
                  <td>{country2.officialName || 'N/A'}</td>
                  <td>
                    {country1.officialName === country2.officialName
                      ? 'Same Official Name'
                      : 'Different Official Names'}
                  </td>
                </tr>

                {/* Region Comparison */}
                <tr>
                  <td>Region</td>
                  <td>{country1.region}</td>
                  <td>{country2.region}</td>
                  <td>
                    {country1.region === country2.region ? 'Same Region' : 'Different Regions'}
                  </td>
                </tr>

                {/* Population Comparison */}
                <tr>
                  <td>Population</td>
                  <td>{country1.population.toLocaleString()}</td>
                  <td>{country2.population.toLocaleString()}</td>
                  <td>
                    {country1.population > country2.population
                      ? `${country1.name} has a larger population.`
                      : `${country2.name} has a larger population.`}
                  </td>
                </tr>

                {/* Area Comparison */}
                <tr>
                  <td>Area (km²)</td>
                  <td>{country1.area.toLocaleString()}</td>
                  <td>{country2.area.toLocaleString()}</td>
                  <td>
                    {country1.area > country2.area
                      ? `${country1.name} is larger in area.`
                      : `${country2.name} is larger in area.`}
                  </td>
                </tr>

                {/* Capital Comparison */}
                <tr>
                  <td>Capital</td>
                  <td>{country1.capital || 'N/A'}</td>
                  <td>{country2.capital || 'N/A'}</td>
                  <td>
                    {country1.capital === country2.capital
                      ? 'Same Capital'
                      : 'Different Capitals'}
                  </td>
                </tr>

                {/* Currencies Comparison */}
                <tr>
                  <td>Currencies</td>
                  <td>{country1.currencies ? Object.keys(country1.currencies).join(', ') : 'N/A'}</td>
                  <td>{country2.currencies ? Object.keys(country2.currencies).join(', ') : 'N/A'}</td>
                  <td>
                    {country1.currencies && country2.currencies
                      ? 'Different currencies'
                      : 'Same or no currency data'}
                  </td>
                </tr>

                {/* Timezones Comparison */}
                <tr>
                  <td>Timezones</td>
                  <td>{country1.timezones ? country1.timezones.join(', ') : 'N/A'}</td>
                  <td>{country2.timezones ? country2.timezones.join(', ') : 'N/A'}</td>
                  <td>
                    {country1.timezones?.toString() === country2.timezones?.toString()
                      ? 'Same Timezone(s)'
                      : 'Different Timezones'}
                  </td>
                </tr>

                {/* Continent Comparison */}
                <tr>
                  <td>Continent</td>
                  <td>{country1.subregion || 'N/A'}</td>
                  <td>{country2.subregion || 'N/A'}</td>
                  <td>
                    {country1.subregion === country2.subregion
                      ? 'Same Continent'
                      : 'Different subregion'}
                  </td>
                </tr>

                {/* Maps Comparison */}
                <tr>
                  <td>Maps</td>
                  <td>
                    <a href={country1.maps} target="_blank" rel="noopener noreferrer" className="text-primary">
                      View Maps
                    </a>
                  </td>
                  <td>
                    <a href={country2.maps} target="_blank" rel="noopener noreferrer" className="text-primary">
                      View Maps
                    </a>
                  </td>
                  <td>View maps for both countries</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Back to List Button */}
      <div className="text-center mt-4">
        <Link to="/compare" className="btn btn-outline-primary btn-lg">
          <FaArrowLeft className="mr-2" /> Back to Compare
        </Link>
      </div>
    </div>
  );
};

export default CompareResultPage;
