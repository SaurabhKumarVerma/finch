import { color } from "../theme/color";

export const DarkThemeMode:ReactNavigation.Theme = {
    dark: true,
    colors: {
        primary: color.primary,
        background: color.background,
        card: "",
        text: color.white,
        border: color.pale_gray,
        notification: color.pale_gray
    },
    fonts: {
        regular: {
            fontFamily: "",
            fontWeight: "normal"
        },
        medium: {
            fontFamily: "",
            fontWeight: "500"
        },
        bold: {
            fontFamily: "",
            fontWeight: "bold"
        },
        heavy: {
            fontFamily: "",
            fontWeight: "900"
        }
    }
}

export const LightThemeMode:ReactNavigation.Theme = {
    dark: false,
    colors: {
        primary: color.primary,
        background: color.background,
        card: "",
        text: color.black,
        border: color.pale_gray,
        notification: color.pale_gray
    },
    fonts: {
        regular: {
            fontFamily: "",
            fontWeight: "normal"
        },
        medium: {
            fontFamily: "",
            fontWeight: "500"
        },
        bold: {
            fontFamily: "",
            fontWeight: "bold"
        },
        heavy: {
            fontFamily: "",
            fontWeight: "900"
        }
    }
}