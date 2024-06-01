import React from 'react';
import ThemeSwitcher from '@features/theme/theme-switcher/ThemeSwitcher';

import '../../../assets/css/main.css';
import './style.css';

const Header = ({onToggleTheme}) => {
  return (
    <header className="header">
      <div className="header__box">
          <ThemeSwitcher onToggleTheme={onToggleTheme}/>
          <h1 className="header__title"> Отзывы по ресторанам </h1>
      </div>
    </header>
  );
}

export default Header;