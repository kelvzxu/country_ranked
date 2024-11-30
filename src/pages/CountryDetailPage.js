import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // For back button icon

const CountryDetailPage = () => {
  const { name } = useParams();
  const country = useSelector((state) =>
    state.countries.data.find((c) => c.name === name)
  );

  if (!country) return <div>Country not found!</div>;

  // Extracting country details
  const {
    flag,
    region,
    code,
    officialName,
    currencies,
    capital,
    subregion,
    maps,
    timezones,
    population,
    area,
    symbol, 
    phonecode,
    languages,
  } = country;

  // Converting currencies into an array to display in a table
  const currencyList = currencies ? Object.entries(currencies) : [];
  const countrySymbol = symbol ? symbol.png : false;

  console.log(phonecode)

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded-lg">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            {/* Country Name in the center */}
            <h1 className="mx-auto">{country.name}</h1>

            {/* Symbol on the right */}
            {countrySymbol && (
              <img
                src={countrySymbol}
                alt={`${country.name} symbol`}
                className="img-fluid"
                style={{ maxWidth: '50px', marginLeft: '20px' }} // Adjust the spacing as needed
              />
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src={flag}
                alt={`${country.name} flag`}
                className="img-fluid border rounded-lg shadow"
                style={{ width: '100%', maxWidth: '300px' }}
              />
            </div>
            <div className="col-md-8">
              <dl className="row">
                <dt className="col-sm-4 font-weight-bold">Official Name:</dt>
                <dd className="col-sm-8">{officialName || 'N/A'}</dd>

                <dt className="col-sm-4 font-weight-bold">Code:</dt>
                <dd className="col-sm-8">{code}</dd>

                <dt className="col-sm-4 font-weight-bold">Capital:</dt>
                <dd className="col-sm-8">{capital || 'N/A'}</dd>

                <dt className="col-sm-4 font-weight-bold">Region:</dt>
                <dd className="col-sm-8">{region}</dd>

                <dt className="col-sm-4 font-weight-bold">Sub Region:</dt>
                <dd className="col-sm-8">{subregion || 'N/A'}</dd>

                <dt className="col-sm-4 font-weight-bold">Timezones:</dt>
                <dd className="col-sm-8">{timezones ? timezones.join(', ') : 'N/A'}</dd>

                <dt className="col-sm-4 font-weight-bold">Languages:</dt>
                <dd className="col-sm-8">
                  {languages
                    ? Object.values(languages).join(', ')
                    : 'N/A'}
                </dd>

                <dt className="col-sm-4 font-weight-bold">Phone Code:</dt>
                <dd className="col-sm-8">{phonecode ? `${phonecode.root}${phonecode.suffixes}`: 'N/A'}</dd>

                <dt className="col-sm-4 font-weight-bold">Population:</dt>
                <dd className="col-sm-8">{population.toLocaleString()}</dd>
              
                <dt className="col-sm-4 font-weight-bold">Area (km²):</dt>
                <dd className="col-sm-8">{area.toLocaleString()}</dd>

                <dt className="col-sm-4 font-weight-bold">Maps:</dt>
                <dd className="col-sm-8">
                  <a href={maps} target="_blank" rel="noopener noreferrer" className="text-primary">
                    View Maps
                  </a>
                </dd>
                
              </dl>

              {/* Currency Table */}
              <h4 className="mt-4">Currency</h4>
              {currencyList.length > 0 ? (
                <table className="table table-striped table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Currency Name</th>
                      <th scope="col">Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currencyList.map(([code, { name, symbol }], index) => (
                      <tr key={index}>
                        <td>{code}</td>
                        <td>{name}</td>
                        <td>{symbol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No currency data available.</p>
              )}
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <Link to="/" className="btn btn-outline-primary btn-lg">
            <FaArrowLeft className="mr-2" /> Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
