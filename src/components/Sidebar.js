import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import ikon dari react-icons
import { FaGlobe, FaFlag, FaBriefcase, FaLaptop, FaFlask, FaHeart, FaPalette, FaComments, FaFutbol, FaBook, FaPaintBrush } from 'react-icons/fa';

const Sidebar = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const availableSections = [
      { name: 'world', icon: <FaGlobe /> },
      { name: 'politics', icon: <FaFlag /> },
      { name: 'business', icon: <FaBriefcase /> },
      { name: 'technology', icon: <FaLaptop /> },
      { name: 'science', icon: <FaFlask /> },
      { name: 'health', icon: <FaHeart /> },
      { name: 'arts', icon: <FaPalette /> },
      { name: 'opinion', icon: <FaComments /> },
      { name: 'sports', icon: <FaFutbol /> },
      { name: 'education', icon: <FaBook /> },
      { name: 'style', icon: <FaPaintBrush /> }
    ];

    setSections(availableSections);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading sections...</div>;

  return (
    <div className="sidebar p-4 shadow-lg">
      <h4 className="text-center mb-4 font-weight-bold">Categories</h4>
      <ul className="list-unstyled">
        {sections.map((section) => (
          <li key={section.name} className="mb-3">
            <Link
              to={`/category/${section.name}`}
              className="category-link d-flex align-items-center py-2 px-3 rounded hover-category"
            >
              <span className="mr-3">{section.icon}</span>
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
            </Link>
          </li>
        
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
