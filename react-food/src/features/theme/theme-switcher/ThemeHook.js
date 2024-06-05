import {useContext} from 'react';
import {ThemeSwitcherContext} from '@shared/contexts/ThemeSwitcherContext'

export const useTheme = () => {
    return useContext(ThemeSwitcherContext);
}