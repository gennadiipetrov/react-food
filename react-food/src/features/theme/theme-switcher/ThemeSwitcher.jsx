import Toggler from '@widgets/toggler/Toggler';

const ThemeSwitcher = ({ onToggleTheme }) => {
    return <Toggler onToggle={onToggleTheme}/>;
};

export default ThemeSwitcher