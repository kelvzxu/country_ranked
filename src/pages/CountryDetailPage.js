import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

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
    continents,
    maps,
    timezones,
    population,
  } = country;

  // Converting currencies into an array to display in a table
  const currencyList = currencies ? Object.entries(currencies) : [];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h1>{country.name}</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={flag}
                alt={`${country.name} flag`}
                className="img-fluid border"
                style={{ width: '100%', maxWidth: '200px' }}
              />
            </div>
            <div className="col-md-8">
              <dl className="row">
                <dt className="col-sm-4">Region:</dt>
                <dd className="col-sm-8">{region}</dd>

                <dt className="col-sm-4">Code:</dt>
                <dd className="col-sm-8">{code}</dd>

                <dt className="col-sm-4">Official Name:</dt>
                <dd className="col-sm-8">{officialName || 'N/A'}</dd>

                <dt className="col-sm-4">Capital:</dt>
                <dd className="col-sm-8">{capital || 'N/A'}</dd>

                <dt className="col-sm-4">Continents:</dt>
                <dd className="col-sm-8">{continents || 'N/A'}</dd>


                <dt className="col-sm-4">Maps:</dt>
                <dd className="col-sm-8">
                  <a href={maps} target="_blank" rel="noopener noreferrer">View Maps</a>
                </dd>

                <dt className="col-sm-4">Timezones:</dt>
                <dd className="col-sm-8">{timezones ? timezones.join(', ') : 'N/A'}</dd>

                <dt className="col-sm-4">Population:</dt>
                <dd className="col-sm-8">{population.toLocaleString()}</dd>
              </dl>

              {/* Currency Table */}
              <h4 className="mt-4">Currency</h4>
              {currencyList.length > 0 ? (
                <table className="table table-striped table-bordered">
                  <thead>
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
          <Link to="/" className="btn btn-primary">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
