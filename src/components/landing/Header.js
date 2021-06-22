import React from 'react';
import './Header.css';
import { TranslationContext, translations } from '../../contexts/translation/TranslationContext'

function Header() {
    const translation = React.useContext(TranslationContext);
    console.log(translation, translation.title)
  return (
    <h1 className="header-title">{translation.title}</h1>
  );
}

export default Header;
