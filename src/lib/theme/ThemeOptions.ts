// https://mui.com/material-ui/customization/theming/
import { ThemeOptions, Theme } from '@mui/material/styles';

export interface ExtendsThemeOptions {
    font?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
        sneak?: string;
    };
    global?: {
        background: string;
    };

}
export type MixThemeOptions = ExtendsThemeOptions & ThemeOptions;

export type MixTheme = ExtendsThemeOptions & Theme;
