import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/newsContent';
import Footer from '../components/Footer';
import { fetchNews } from '../store/newsSlice';
import "./styles/NewsPage.css";

const NewsPage = () => {
  const { category } = useParams(); // Ambil parameter category dari URL
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(state => state.news);

  useEffect(() => {
    // Dispatch action fetchNews ketika category berubah
    dispatch(fetchNews(category || 'home')); // Default ke 'home' jika tidak ada category
  }, [category, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="d-flex">
        <Sidebar /> {/* Sidebar di sebelah kiri */}
        <div className="flex-grow-1"> {/* Konten utama mengambil sisa ruang */}
          <MainContent articles={articles} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
