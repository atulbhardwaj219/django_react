
import { createMuiTheme } from "@material-ui/core/styles";

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const themeColors = {
  white: {
    main: "#FFFFFF",
  },
  black: {
    light: "#12263F",
    main: "#000000",
  },
  transparent: {
    main: "transparent",
  },
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529",
  },
  primary: {
    main: "#5e72e4",
    dark: "#233dd2",
    snackbar: "#7889e8",
    badgeBg: "#eaecfb",
    badgeBgHover: "#2a44db",
    badge: "#2643e9",
  },
  secondary: {
    main: "#f7fafc",
    snackbar: "#f8fbfc",
    badgeBgHover: "#cadeeb",
    btnOutline: "#4385b1",
    btnActive: "#d2e3ee",
  },
  warning: {
    light: "#ffd600",
    main: "#fb6340",
    snackbar: "#fc7c5f",
    badgeBg: "#fee6e0",
    badgeBgHover: "#f93305",
    badge: "#ff3709",
  },
  error: {
    light: "#f3a4b5",
    main: "#f5365c",
    snackbar: "#f75676",
    badgeBg: "#fdd1da",
    badgeBgHover: "#e30b36",
    badge: "#f80031",
    dialogNotification: "#f56036",
  },
  info: {
    main: "#11cdef",
    snackbar: "#37d5f2",
    badgeBg: "#aaedf9",
    badgeBgHover: "#0c9cb7",
    badge: "#03acca",
  },
  background: {
    default: "#f8f9fe",
  },
  text: {
    primary: "#525f7f",
  },
  dark: {
    tableBorder: "#1f3a68",
    tableHeadColor: "#4d7bca",
    tableHeadBgColor: "#1c345d",
    main: "#172b4d",
    dark: "#0b1526",
    snackbar: "#3c4d69",
    badgeBg: "#4172c6",
    badgeBgHover: "#09111e",
  },
  success: {
    main: "#2dce89",
    snackbar: "#4fd69c",
    badgeBg: "#b0eed3",
    badgeBgHover: "#229c68",
    badge: "#1aae6f",
  },
};


const defaultHeaderStyles = {
  marginBottom: ".5rem",
  fontFamily: "inherit",
  fontWeight: 600,
  lineHeight: 1.5,
  color: themeColors.gray[800],
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    ...themeColors,
    buttonLightLabel: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
    sidebarLinks: {
      main: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.5)",
      dark: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.9)",
    },
    adminNavbarSearch: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.6)",
    },
    authNavbarLink: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.65)",
      dark: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
  },
  typography: {
    fontFamily: "Open Sans,sans-serif",
    h1: {
      fontSize: "1.625rem",
      ...defaultHeaderStyles,
    },
    h2: {
      fontSize: "1.25rem",
      ...defaultHeaderStyles,
    },
    h3: {
      fontSize: "1.0625rem",
      ...defaultHeaderStyles,
    },
    h4: {
      fontSize: ".9375rem",
      ...defaultHeaderStyles,
    },
    h5: {
      fontSize: ".8125rem",
      ...defaultHeaderStyles,
    },
    h6: {
      fontSize: ".625rem",
      ...defaultHeaderStyles,
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: "250px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
      },
      docked: {
        width: "250px",
      },
    },
    MuiListItem: {
      root: {
        display: "block",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
        color: themeColors.gray[700],
      },
      gutters: {
        paddingLeft: ".75rem",
        paddingRight: ".75rem",
      },
    },
    MuiMenu: {
      paper: {
        minWidth: "12rem",
        fontSize: "1rem",
        color: themeColors.gray[700],
        textAlign: "left",
        listStyle: "none",
        backgroundColor: themeColors.white.main,
        backgroundClip: "padding-box",
        border: "0 solid rgba(" + hexToRgb(themeColors.black.main) + ",.15)",
        borderRadius: ".4375rem",
        padding: ".5rem 0",
      },
    },
    MuiMenuItem: {
      root: {
        padding: ".5rem 1rem",
        fontSize: ".875rem",
        display: "block",
        width: "100%",
        clear: "both",
        fontWeight: 400,
        color: themeColors.gray[900],
        textAlign: "inherit",
        whiteSpace: "nowrap",
        backgroundColor: "initial",
        border: 0,
        "& i": {
          marginRight: "1rem",
          fontSize: "1rem",
          verticalAlign: "-17%",
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: themeColors.gray[700],
        fontSize: ".875rem",
        fontWeight: "600",
        display: "inline-block",
        marginBottom: ".5rem",
      },
    },
    MuiFormGroup: {
      root: {
        marginBottom: "1.5rem",
      },
    },
    MuiInputBase: {
      input: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + 1.25rem + 2px)",
        padding: ".625rem .75rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: themeColors.gray[600],
        backgroundColor: themeColors.white.main,
        backgroundClip: "padding-box",
        border: "1px solid #cad1d7",
        borderRadius: ".375rem",
        boxShadow: "none",
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        fontSize: ".875rem",
        boxSizing: "border-box",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 15px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: ".625rem .75rem",
        borderTop: "0",
        borderBottom: "0",
        borderLeft: "0",
        "&:not(:last-child)": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          paddingRight: 0,
        },
      },
      root: {
        paddingRight: "0",
      },
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          borderRadius: ".375rem",
          height: "100%",
          border: "2px solid " + themeColors.primary.main,
        },
      },
      multiline: {
        padding: ".625rem .75rem",
      },
      root: {
        border: 0,
        transition: "box-shadow .15s ease",
        borderRadius: ".375rem",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        backgroundColor: themeColors.white.main + "!important",
      },
      input: {
        border: 0,
        boxShadow: "none",
        position: "relative",
        flex: "1 1 auto",
        width: "1%",
        minWidth: 0,
        marginBottom: 0,
        padding: ".625rem .75rem",
        "&:not(:first-child)": {
          borderLeft: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      inputAdornedStart: {
        paddingLeft: ".75rem",
      },
      inputAdornedEnd: {
        paddingRight: ".75rem",
      },
    },
    MuiInputAdornment: {
      root: {
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        display: "flex",
        alignItems: "center",
        padding: ".625rem 0",
        marginBottom: "0",
        fontSize: ".875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: themeColors.gray[500],
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: themeColors.white.main,
        border: "0",
        marginTop: "0!important",
        height: "calc(1.5em + 1.25rem + 2px)",
      },
      positionEnd: {
        paddingLeft: 0,
      },
      positionStart: {
        paddingLeft: 0,
      },
      filled: {
        display: "flex",
        "&$positionStart": {
          marginRight: "-1px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          border: "0",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: themeColors.white.main,
        backgroundClip: "initial",
        border: "0",
        borderRadius: ".375rem",
        overflow: "unset",
      },
    },
    MuiCardHeader: {
      root: {
        padding: "1.25rem 1.5rem",
        marginBottom: "0",
        backgroundColor: themeColors.white.main,
        borderBottom:
          "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        "&:first-child": {
          borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
        },
      },
    },
    MuiCardContent: {
      root: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.5rem",
      },
    },
    MuiCardActions: {
      root: {
        "&:last-child": {
          borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
          padding: "1.25rem 1.5rem",
          backgroundColor: themeColors.white.main,
          borderTop:
            "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        },
      },
    },
    MuiButton: {
      root: {
        position: "relative",
        textTransform: "none",
        transition: "all .15s ease",
        letterSpacing: ".025em",
        fontSize: ".875rem",
        padding: ".625rem 1.25rem",
        willChange: "transform",
        border: "1px solid transparent",
        lineHeight: "1.5",
        borderRadius: ".375rem",
        userSelect: "none",
        display: "inline-block",
        fontWeight: "600",
        textAlign: "center",
        verticalAlign: "middle",
        "&:hover": {
          transform: "translateY(-1px)",
        },
      },
      text: {
        padding: ".625rem 1.25rem",
      },
      containedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
      containedSizeLarge: {
        fontSize: ".875rem",
        lineHeight: 1.5,
        padding: ".875rem 1rem",
        borderRadius: ".4375rem",
      },
      containedPrimary: {
        borderColor: themeColors.primary.main,
      },
      containedSecondary: {
        borderColor: themeColors.secondary.main,
        "&:hover": {
          borderColor: themeColors.gray[200],
          backgroundColor: themeColors.gray[200],
        },
      },
      outlined: {
        padding: ".625rem 1.25rem",
        color: themeColors.dark.main,
        borderColor: themeColors.dark.main,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: themeColors.dark.main,
          color: themeColors.white.main,
        },
      },
      outlinedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
      outlinedSizeLarge: {
        fontSize: ".875rem",
        lineHeight: 1.5,
        padding: ".875rem 1rem",
        borderRadius: ".4375rem",
      },
      outlinedPrimary: {
        color: themeColors.primary.main,
        borderColor: themeColors.primary.main,
        "&:hover": {
          backgroundColor: themeColors.primary.main,
        },
      },
      outlinedSecondary: {
        color: themeColors.secondary.btnOutline,
        borderColor: themeColors.secondary.main,
        backgroundColor: themeColors.transparent.main,
        "&:hover": {
          borderColor: themeColors.secondary.main,
          backgroundColor: themeColors.secondary.main,
          color: themeColors.gray[900],
        },
      },
    },
    MuiContainer: {
      root: {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
      },
      maxWidthXs: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthSm: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthMd: {
        "@media (min-width: 768px)": {
          maxWidth: "720px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 992px)": {
          maxWidth: "960px",
        },
      },
      maxWidthXl: {
        "@media (min-width: 1200px)": {
          maxWidth: "1140px",
        },
      },
    },
    MuiTable: {
      root: {
        width: "100%",
        marginBottom: "1rem",
        color: themeColors.gray[700],
        backgroundColor: themeColors.transparent.main,
        borderCollapse: "collapse",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: ".8125rem",
        whiteSpace: "nowrap",
        padding: "1rem",
        verticalAlign: "top",
        borderTop: "1px solid " + themeColors.gray[200],
        borderBottom: "1px solid " + themeColors.gray[200],
      },
      head: {
        padding: "1rem",
        borderTop: "1px solid " + themeColors.gray[200],
        fontWeight: "600",
        whiteSpace: "nowrap",
        verticalAlign: "bottom",
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
        fontSize: ".65rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        borderBottom: "1px solid " + themeColors.gray[200],
      },
    },
    MuiAvatar: {
      root: {
        color: themeColors.white.main,
        backgroundColor: themeColors.gray[500],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
      },
      img: {
        width: "100%",
        borderRadius: "50%",
        verticalAlign: "middle",
        borderStyle: "none",
      },
    },
  },
});

export default theme;
