import Toggler from '@widgets/toggler/Toggler';
import {useTheme} from './ThemeHook'

const ThemeSwitcher = () => {
    const { toggleThemeValue } = useTheme();

    return <Toggler onToggle={toggleThemeValue}/>;
};

export default ThemeSwitcher