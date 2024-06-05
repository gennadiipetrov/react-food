import ThemeSwitcher from '@features/theme/theme-switcher/ThemeSwitcher';
import SignInButton from '@features/auth/sign-in/SignInButton';

import '../../../assets/css/main.css';

import styles from "./style.module.css";

import {useContext} from 'react';
import {AuthContext} from '@shared/contexts/AuthContext';


const Header = () => {
  const {userValue} = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
          <div className={styles.header__controls}>
            <ThemeSwitcher/>
            { userValue == null ? <SignInButton/> : `Привет, ${userValue} !`}
          </div>

          <h1 className={styles.header__title}> Отзывы по ресторанам </h1>
      </div>
    </header>
  );
}

export default Header;