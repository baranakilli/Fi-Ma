import { Fragment, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import SearchBox from '../../SearchBox/SearchBox';
import WhatsappLink from '../../WhatsappLink/WhatsappLink';
import './Navigation.css';

const Navigation = ({ onSearchChange, searchField }) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  useEffect(() => {
    const whatsappLogo = document.getElementById('whatsapp-logo-box');
    const navbar = document.querySelector('nav');

    const handleScroll = () => {
      if (window.scrollY >= 400 && location.pathname === '/') {
        whatsappLogo.style.display = 'flex';
        if (window.scrollY >= 800) {
          navbar.classList.remove('transparent-navbar');
        } else {
          navbar.classList.add('transparent-navbar');
        }
      } else {
        whatsappLogo.style.display = 'none';
      }
    };

    if (location.pathname === '/') {
      whatsappLogo.style.display = 'none';
      navbar.classList.add('transparent-navbar');
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      whatsappLogo.style.display = 'flex';
      navbar.classList.remove('transparent-navbar');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <Fragment>
      <nav id="navbar">
        <div id="navbar-left-container">
          <SearchBox
            onSearchChange={onSearchChange}
            searchField={searchField}
          />
        </div>
        <Link to="/" onClick={handleLinkClick}>
          <h1 id="logo">Fi-MA</h1>
        </Link>
        <div id="navbar-right-container">
          <Link to="/allproducts" onClick={handleLinkClick}>
            Tüm Ürünler
          </Link>
          {/* <Link onClick={handleLinkClick}>Hakkımızda</Link>
          <Link onClick={handleLinkClick}>İletişim</Link>
          <Link onClick={handleLinkClick}></Link> */}
        </div>
        <WhatsappLink />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
