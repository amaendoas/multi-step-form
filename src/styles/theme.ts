import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
    DARK_800: string,
    DARK_700: string,
    DARK_600: string,
    DARK_500: string,

    WHITE: string,
    PRIMARY: string,
    BG_PRIMARY: string,
    SECONDARY: string,

    LIGHT_400: string,
    LIGHT_300: string,

    RED: string,
    ORANGE: string,
    GREEN: string
    }
  }
}

export const theme: any = {
  COLORS: {
    DARK_800: "#14142B",
    DARK_700: "#4E4B66",
    DARK_600: "#6E7191",
    DARK_500: "#A0A3BD",

    WHITE: "#FFFFFF",
    PRIMARY: "#8752F3",
    BG_PRIMARY: "rgba(135, 82, 243, .15)",
    SECONDARY: "#F3F1FF",

    LIGHT_400: "#D9DBE9",
    LIGHT_300: "#EFF0F7",

    RED: "#AB222E",
    ORANGE: "#FBA94C",
    GREEN: "#04D361"
  }
}