import React from 'react';
import ThemeSwitcher from '@features/theme/theme-switcher/ThemeSwitcher';
import SignInButton from '@features/auth/sign-in/SignInButton';

import '../../../assets/css/main.css';
import './style.css';

import {useContext} from 'react';
import {AuthContext} from '@shared/contexts/AuthContext';

const Header = ({onToggleTheme, onSignIn}) => {

  const authContext = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header__box">
          <div className="header__controls">
            <ThemeSwitcher onToggleTheme={onToggleTheme}/>
            { authContext == null ? <SignInButton onSignIn={onSignIn}/> : `Привет, ${authContext} !`}
          </div>

          <h1 className="header__title"> Отзывы по ресторанам </h1>
      </div>
    </header>
  );
}

export default Header;