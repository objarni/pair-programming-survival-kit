import { useState, useEffect } from 'react';
import './App.css';
import {hints} from './hints.ts'
import {Translation} from './types.ts'


const appName: Translation = {
  sv: "Parprogrammering - ett överlevnadskit",
  en: "Pair Programming Survival Kit"
}

export default function App() {
  const [page, setPage] = useState<number>(0);
  const [language, setLanguage] = useState<'sv' | 'en'>(() => {
    return (localStorage.getItem('language') as 'sv' | 'en') || 'sv';
  });

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'sv' ? 'en' : 'sv';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const nextPage = () => {
    setPage(prevPage => prevPage < texts.length - 1 ? prevPage + 1 : prevPage);
  };

  const prevPage = () => {
    setPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextPage();
      } else if (event.key === 'ArrowLeft') {
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app">
      <div className="language-toggle">
        <button onClick={toggleLanguage} className="lang-button interactive">
          {language === 'sv' ? 'EN' : 'SV'}
        </button>
      </div>
      <h2>{appName[language]}</h2>
      <div className="container">
        {page > 0 && (
          <div className="sidebar interactive" onClick={prevPage}>
            {language === 'sv' ? 'Förra!' : 'Previous!'}
          </div>
        )}
 
        <div className="content">
          <div>
            <h3>{language === 'sv' ? 'Tips' : 'Hint'} {page+1}</h3>
            <div>{hints[page][language]}</div>
          </div>
        </div>

        {page < hints.length-1 && (
          <div className="sidebar interactive" onClick={nextPage}>
            {language === 'sv' ? 'Nästa!' : 'Next!'}
          </div>
        )}
      </div>
    </div>
  )
}