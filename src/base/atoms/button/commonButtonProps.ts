import { buttonSizes, buttonTypes } from "./buttonConstant";

// const outlineBtnCommonProps = {
//     border: "1px",
//     h: "36px",
//     w: "1px",
// }

//FILLED BUTTONS
const fillButtonProps = {
    [buttonTypes.primary]: {
        // bg: "#1677ff",
        bg: "#0486E6",
        color: "#fff",
        _hover: {
            bg: "#4096ff",
            color: "white",
        }
    },
    [buttonTypes.secondary]: {
        bg: "#f8f9fa",
        color: "#212529",
        borderColor: "#f8f9fa",
        _hover: {
            bg: "#e2e6ea",
            color: "#252525",
            borderColor: "#dae0e5",
        }
    },
    [buttonTypes.danger]: {
        bg: "#ff4d4f",
        color: "#fff",
        _hover: {
            bg: "#ff7875",

        }
    },
    [buttonTypes.warning]: {
        bg: "#ffe08a",
        color: "#414549",
        _hover: {
            bg: "#f2d584",

        }
    },
    [buttonTypes.success]: {
        bg: "#48c78e",
        color: "#fff",
        _hover: {
            bg: "#5ed09d",

        }
    },


    [buttonTypes.dark]: {
        bg: "#494949",
        color: "#fff",
        _hover: {
            bg: "#2f2f2f",

        }
    },
}


//OUTLINED BUTTONS
const outlineButtonProps = {
    [buttonTypes['outline-primary']]: {
        borderColor: "#1677ff",
        color: "#1677ff",
        _hover: {
            background: "#1677ff",
            color: "#fff",
        }

    },
    [buttonTypes['outline-secondary']]: {
        borderColor: "#d1d1d1",
        color: "rgba(0,0,0,.75)",

        _hover: {
            borderColor: "#d1d1d1",
            color: "rgba(0,0,0,.88)",
            background: "#f6f6f6",
        }
    },
    [buttonTypes['outline-danger']]: {
        borderColor: "#ff4d4f",
        color: "#ff4d4f",
        _hover: {
            background: "#ff4d4f",
            color: "#fff",
        }

    },
    [buttonTypes['outline-warning']]: {
        borderColor: "#ffe08a",
        color: "#ffe08a",
        _hover: {
            background: "#ffe08a",
            color: "#414549",
        }
    },
    [buttonTypes['outline-success']]: {
        borderColor: "#48c78e",
        color: "#48c78e",
        _hover: {
            background: "#48c78e",
            color: "#fff",
        }

    },
    [buttonTypes['outline-dark']]: {
        borderColor: "#3f3f3f",
        color: "#3f3f3f",
        _hover: {
            background: "#505050",
            color: "#fff",
        }
    },
    [buttonTypes['outline-light']]: {
        borderColor: "#E1E6EA",
        backgroundColor: "#fff",
        color: "#727272",
        _hover: {
            background: "#E1E6EA",
        }
    },

}

//GHOSTS BUTTONS
const ghostButtonProps = {
    [buttonTypes['ghost-primary']]: {
        bg: "rgba(22,119,255,0.085)",
        color: "#1677ff",
        _hover: {
            bg: "rgba(22,119,255,0.2)"
        }
    },
    [buttonTypes['ghost-secondary']]: {
        bg: "#f6f6f6",
        color: "#252525",
        _hover: {
            bg: "#ededed",
            color: "#252525",
        }
    },
    [buttonTypes['ghost-danger']]: {
        bg: "rgba(255,77,79,0.08)",
        color: "#ff4d4f",
        _hover: {
            bg: "rgba(255,77,79,0.2)"
        }
    },
    [buttonTypes['ghost-warning']]: {
        bg: "rgba(255,225,138,0.35)",
        color: "#414549",
        _hover: {
            bg: "rgba(255,225,138,0.55)"
        }
    },
    [buttonTypes['ghost-success']]: {
        bg: "rgba(72,199,142,0.08)",
        color: "#48c78e",
        _hover: {
            bg: "rgba(72,199,142,0.2)",
        }
    },


    [buttonTypes['ghost-dark']]: {
        bg: "rgba(63,63,63,0.09)",
        color: "#3f3f3f",
        _hover: {
            bg: "rgba(63,63,63,0.28)",

        }
    },

}



//STROKED BUTTONS
const strokedButtonProps = {
    [buttonTypes['stroked-primary']]: {
        borderColor: "#1677ff",
        color: "#1677ff",
        _hover: {
            borderColor: "#8fc1ff",
            color: "#4794ff",
        }

    },
    [buttonTypes['stroked-secondary']]: {
        borderColor: "#b2b2b2",
        color: "rgba(0,0,0,.8)",

        _hover: {
            borderColor: "#d7d7d7",
            color: "rgba(0,0,0,.65)",

        }
    },
    [buttonTypes['stroked-danger']]: {
        borderColor: "#ff4d4f",
        color: "#ff4d4f",
        _hover: {
            borderColor: "#ff999b",
            color: "#fd7173",
        }

    },
    [buttonTypes['stroked-warning']]: {
        borderColor: "#ffe08a",
        color: "#dcb64e",
        _hover: {
            borderColor: "#ffe8a9",
            color: "#edcd76",
        }
    },
    [buttonTypes['stroked-success']]: {

        borderColor: "#48c78e",
        color: "#48c78e",

        _hover: {
            borderColor: "#6ce2ad",
            color: "#5ad49d",
        }
    },
    [buttonTypes['stroked-dark']]: {
        borderColor: "#9d9d9d",
        color: "#262626",

        _hover: {
            borderColor: "#adadad",
            color: "#565656",
        }
    },

}

//Link BUTTONS
const linkButtonProps = {
    [buttonTypes['link-primary']]: {
        bg: " transparent",
        color: "#1677ff",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#4096ff",

        }
    },
    [buttonTypes['link-secondary']]: {
        bg: "transparent",
        color: "rgba(0,0,0,.75)",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#6b6b6b",


        }
    },
    [buttonTypes['link-danger']]: {
        bg: "transparent",
        color: "#ff4d4f",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#ff7875",

        }
    },
    [buttonTypes['link-warning']]: {
        bg: "transparent",
        color: "#ffc107",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#efcd70",

        }
    },
    [buttonTypes['link-success']]: {
        bg: "transparent",
        color: "#36b27a",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#53cf96",

        }
    },


    [buttonTypes['link-dark']]: {
        bg: "transparent",
        color: "#494949",
        padding: "0",
        _hover: {
            textDecoration: "underline",
            color: "#727272",

        }
    },

}
export const commonButtonProps = {
    ...fillButtonProps,
    ...outlineButtonProps,
    ...ghostButtonProps,
    ...strokedButtonProps,
    ...linkButtonProps
}

export const commonButtonSizeProps = {

    [buttonSizes.sm]: {
        h: "30px",
        p: "0 10px",
        fontSize: "14px"
    },
    [buttonSizes.md]: {
        h: "36px",
        p: "0 12px"

    },
    [buttonSizes.lg]: {
        h: "40px",
        p: "0 16px",
        fontSize: "18px"
    },
    [buttonSizes.full]: {
        h: "44px",
        w: "100%",
        p: "0 20px",
        fontSize: "21px"
    },
}
