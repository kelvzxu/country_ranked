import React, { useState } from 'react';

const MainContent = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const itemsPerPage = 12; // Jumlah item per halaman

  // Hitung total halaman
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Tentukan data yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {currentArticles.length === 0 ? (
          <p>No articles available</p>
        ) : (
          currentArticles.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                {article.multimedia && article.multimedia.length > 0 ? (
                  <img
                    src={article.multimedia[0].url}
                    alt={article.title}
                    className="card-img-top"
                  />
                ) : (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '200px', backgroundColor: '#f0f0f0' }}
                  >
                    <span>No Image</span>
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-ellipsis">{article.abstract}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MainContent;
