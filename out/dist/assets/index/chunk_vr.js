import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
const vr = e(b(), 1);
const jJ = [
    {
        name: "default",
        title: "Default",
        deprecated: false,
        themes: [
            {
                name: "default",
                title: "Light",
                colors: {
                    navbar: "hsl(225 6% 78% / 70%)",
                    searchBox: "rgba(255, 255, 255, .8)",
                    bodyBg: "#dcdde0",
                    newButton: "#fff",
                    newButtonBg: "#42c48d",
                    cardHead: "#f9f9f9",
                    cardBg: "#fff"
                }
            },
            {
                name: "default-dark",
                title: "Dark",
                colors: {
                    navbar: "#373b44",
                    searchBox: "#4b4f57",
                    bodyBg: "#202228",
                    newButton: "#fff",
                    newButtonBg: "#46af5d",
                    cardHead: "#2b2e38",
                    cardBg: "#373b44"
                }
            },
            {
                name: "default-minimal",
                title: "Minimal",
                colors: {
                    navbar: "#eeeeef",
                    searchBox: "#fff",
                    bodyBg: "#eeeeef",
                    newButton: "#fff",
                    newButtonBg: "#444",
                    cardHead: "#e2e2e2",
                    cardBg: "#ffffff"
                }
            }
        ]
    },
    {
        name: "paper",
        title: "Paper",
        deprecated: false,
        themes: [
            {
                name: "paper-light",
                title: "Light",
                colors: {
                    navbar: "#9D9B8D",
                    searchBox: "#C0BEAE",
                    bodyBg: "#f0edd8",
                    newButton: "#fff",
                    newButtonBg: "#696758",
                    cardHead: "#E7E3CD",
                    cardBg: "#fff"
                }
            },
            {
                name: "paper-dark",
                title: "Dark",
                colors: {
                    navbar: "#264355",
                    searchBox: "#395666",
                    bodyBg: "#192F3D",
                    newButton: "#fff",
                    newButtonBg: "#192F3D",
                    cardHead: "#294252",
                    cardBg: "#fff"
                }
            },
            {
                name: "paper-dark-dark",
                title: "Dark Dark",
                colors: {
                    navbar: "#264355",
                    searchBox: "#395666",
                    bodyBg: "#192F3D",
                    newButton: "#fff",
                    newButtonBg: "#192F3D",
                    cardHead: "#294252",
                    cardBg: "#395666"
                }
            }
        ]
    },
    {
        name: "stationary",
        title: "Stationary",
        deprecated: false,
        themes: [
            {
                name: "blue",
                title: "Blue",
                colors: {
                    navbar: "#5e7ae0",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#DCDDE0",
                    newButton: "#5e7ae0",
                    newButtonBg: "#fff",
                    cardHead: "#F2F2F3",
                    cardBg: "#fff"
                }
            },
            {
                name: "purple",
                title: "Purple",
                colors: {
                    navbar: "#9471c0",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#DCDDE0",
                    newButton: "#9471c0",
                    newButtonBg: "#fff",
                    cardHead: "#F2F2F3",
                    cardBg: "#fff"
                }
            },
            {
                name: "green",
                title: "Green",
                colors: {
                    navbar: "#5ba56f",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#DCDDE0",
                    newButton: "#5ba56f",
                    newButtonBg: "#fff",
                    cardHead: "#F2F2F3",
                    cardBg: "#fff"
                }
            },
            {
                name: "orange",
                title: "Orange",
                colors: {
                    navbar: "#dba927",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#DCDDE0",
                    newButton: "#dba927",
                    newButtonBg: "#fff",
                    cardHead: "#F2F2F3",
                    cardBg: "#fff"
                }
            },
            {
                name: "red",
                title: "Red",
                colors: {
                    navbar: "#cf554d",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#DCDDE0",
                    newButton: "#cf554d",
                    newButtonBg: "#fff",
                    cardHead: "#F2F2F3",
                    cardBg: "#fff"
                }
            }
        ]
    },
    {
        name: "hacker",
        title: "Hacker",
        deprecated: true,
        themes: [
            {
                name: "hacker1",
                title: "Hacker 1",
                colors: {
                    navbar: "#404651",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#252a30",
                    newButton: "#2585b2",
                    newButtonBg: "#49c4fe",
                    cardHead: "#494d5a",
                    cardBg: "#fff"
                }
            },
            {
                name: "hacker2",
                title: "Hacker 2",
                colors: {
                    navbar: "#445a55",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#092f2c",
                    newButton: "#217c8c",
                    newButtonBg: "#36d6b1",
                    cardHead: "#314a44",
                    cardBg: "#fff"
                }
            }
        ]
    },
    {
        name: "seasons",
        title: "Seasons",
        deprecated: true,
        themes: [
            {
                name: "winter",
                title: "Winter",
                colors: {
                    navbar: "#68707f",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#bfc4cc",
                    newButton: "#a66ef4",
                    newButtonBg: "#fff",
                    cardHead: "#dee4ec",
                    cardBg: "#fff"
                }
            },
            {
                name: "summer",
                title: "Summer",
                colors: {
                    navbar: "#ffd323",
                    searchBox: "rgba(255, 255, 255, .4)",
                    bodyBg: "#2bcbf3",
                    newButton: "#f3595b",
                    newButtonBg: "#fff",
                    cardHead: "#1baacf",
                    cardBg: "#fff"
                }
            },
            {
                name: "spring",
                title: "Spring",
                colors: {
                    navbar: "#02a789",
                    searchBox: "rgba(255, 255, 255, .25)",
                    bodyBg: "#bdd84d",
                    newButton: "#b44a29",
                    newButtonBg: "#f4835f",
                    cardHead: "#e1f68b",
                    cardBg: "#fff"
                }
            },
            {
                name: "autumn",
                title: "Autumn",
                colors: {
                    navbar: "#553f38",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#a68a60",
                    newButton: "#e85328",
                    newButtonBg: "#fbf6ee",
                    cardHead: "#876839",
                    cardBg: "#fbf6ee"
                }
            }
        ]
    },
    {
        name: "tropical",
        title: "Tropical",
        deprecated: true,
        themes: [
            {
                name: "tropical",
                title: "Tropical",
                colors: {
                    navbar: "#02a789",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#fee05e",
                    newButton: "#5e389a",
                    newButtonBg: "#a45aff",
                    cardHead: "#edcb37",
                    cardBg: "#fff"
                }
            }
        ]
    },
    {
        name: "city",
        title: "City",
        deprecated: true,
        themes: [
            {
                name: "kyoto",
                title: "Kyoto",
                colors: {
                    navbar: "#523543",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#cab9a2",
                    newButton: "#73d18b",
                    newButtonBg: "#fff",
                    cardHead: "#b29e83",
                    cardBg: "#fffff2"
                }
            },
            {
                name: "newyork",
                title: "New York",
                colors: {
                    navbar: "#12223b",
                    searchBox: "rgba(255, 255, 255, .15)",
                    bodyBg: "#93c3c0",
                    newButton: "#f47a5d",
                    newButtonBg: "#fff",
                    cardHead: "#e8f0ed",
                    cardBg: "#fff"
                }
            },
            {
                name: "paris",
                title: "Paris",
                colors: {
                    navbar: "#7fd2b2",
                    searchBox: "rgba(255, 255, 255, .3)",
                    bodyBg: "#fc838c",
                    newButton: "#7238cf",
                    newButtonBg: "#fff",
                    cardHead: "#ffe4e6",
                    cardBg: "#fff"
                }
            }
        ]
    },
    {
        name: "game",
        title: "Game",
        deprecated: true,
        themes: [
            {
                name: "mred",
                title: "Red",
                colors: {
                    navbar: "#eb3338",
                    searchBox: "rgba(255, 255, 255, .2)",
                    bodyBg: "#018ee0",
                    newButton: "#fb973d",
                    newButtonBg: "#fadc24",
                    cardHead: "#35b5ff",
                    cardBg: "#fff"
                }
            },
            {
                name: "lgreen",
                title: "Green",
                colors: {
                    navbar: "#4abb0c",
                    searchBox: "rgba(255, 255, 255, .25)",
                    bodyBg: "#436698",
                    newButton: "#fb973d",
                    newButtonBg: "#fadc24",
                    cardHead: "#21416f",
                    cardBg: "#fff"
                }
            }
        ]
    }
];
const GJ = e(ge(), 1);
const qye = a_1(({ error })=>{
    if (error) {
        return vr.default.createElement("div", {
            className: "alert alert-danger"
        }, error);
    }
    return null;
}, "renderError");
const Rye = a_1(()=>vr.default.createElement("svg", {
        className: "checkmark",
        width: "36px",
        height: "36px",
        viewBox: "0 0 36 36"
    }, vr.default.createElement("circle", {
        fill: "#41b059",
        cx: "18",
        cy: "18",
        r: "18"
    }), vr.default.createElement("path", {
        fill: "#fff",
        d: "M15.6921374,18.9176049 L22.9682381,11.8622902 C24.1198257,10.7125699 25.9869181,10.7125699 27.1385057,11.8622902 C28.2900933,13.0120104 28.2900933,14.8760752 27.1208334,16.0431933 L17.7520775,25.1377098 C16.6004899,26.2874301 14.7333975,26.2874301 13.5818099,25.1377098 L8.8636907,20.4272414 C7.7121031,19.2775212 7.7121031,17.4134564 8.8636907,16.2637362 C10.0152783,15.114016 11.8823707,15.114016 13.0339583,16.2637362 L15.6921374,18.9176049 Z"
    })), "renderCheckmark");
const $ye = a_1(({ navbar, searchBox, bodyBg, newButton, newButtonBg, cardHead, cardBg })=>vr.default.createElement("svg", {
        className: "preview",
        width: "105px",
        height: "82px",
        viewBox: "0 0 100 78",
        version: "1.1"
    }, vr.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, vr.default.createElement("g", null, vr.default.createElement("rect", {
        id: "shadow",
        fill: "#c3c5cc",
        x: "0",
        y: "2",
        width: "100",
        height: "76",
        rx: "4"
    }), vr.default.createElement("rect", {
        id: "body",
        fill: bodyBg,
        x: "0",
        y: "0",
        width: "100",
        height: "76",
        rx: "3"
    }), vr.default.createElement("path", {
        d: "M100,19 L0,19 L7.28159498e-17,3 C-5.74179385e-16,1.34314575 1.34314575,3.04359188e-16 3,0 L97,4.4408921e-16 C98.6568542,-3.04359188e-16 100,1.34314575 100,3 L100,19 L100,19 Z",
        id: "navbar",
        fill: navbar
    }), vr.default.createElement("path", {
        d: "M87,76 L87,30 C87,28.8954305 86.1045695,28 85,28 L15,28 C13.8954305,28 13,28.8954305 13,30 L13,76 L87,76 Z",
        id: "card-bg",
        fill: cardBg
    }), vr.default.createElement("circle", {
        id: "new-button-bg",
        fill: newButtonBg,
        cx: "29.5",
        cy: "9.5",
        r: "5.5"
    }), vr.default.createElement("rect", {
        id: "search-box",
        fill: searchBox,
        x: "39",
        y: "4",
        width: "37",
        height: "11",
        rx: "1"
    }), vr.default.createElement("path", {
        d: "M28.5454545,8.54545455 L26.9545455,8.54545455 C26.4273646,8.54545455 26,8.9728191 26,9.5 C26,10.0271809 26.4273646,10.4545455 26.9545455,10.4545455 L28.5454545,10.4545455 L28.5454545,12.0454545 C28.5454545,12.5726354 28.9728191,13 29.5,13 C30.0271809,13 30.4545455,12.5726354 30.4545455,12.0454545 L30.4545455,10.4545455 L32.0454545,10.4545455 C32.5726354,10.4545455 33,10.0271809 33,9.5 C33,8.9728191 32.5726354,8.54545455 32.0454545,8.54545455 L30.4545455,8.54545455 L30.4545455,6.95454545 C30.4545455,6.42736456 30.0271809,6 29.5,6 C28.9728191,6 28.5454545,6.42736456 28.5454545,6.95454545 L28.5454545,8.54545455 Z",
        id: "newButton",
        fill: newButton
    }), vr.default.createElement("path", {
        d: "M86.7324356,45 C86.9026057,44.7058266 87,44.3642871 87,44 L87,30 C87,28.8954305 86.1045695,28 85,28 L15,28 C13.8954305,28 13,28.8954305 13,30 L13,44 C13,44.3642871 13.0973943,44.7058266 13.2675644,45 L86.7324356,45 L86.7324356,45 Z",
        id: "card-head",
        fill: cardHead
    })))), "renderPreview");
export function w7() {
    let [e, setE] = vr.useState("");
    let [r, setR] = vr.useState(false);
    let [error, setError] = vr.useState(null);
    vr.useEffect(()=>{
        let c = Ya.CurrentProject.get();
        setE(c.theme);
    }, []);
    let a = a_1(async (c)=>{
        let theme = c.target.id.substring(6);
        setE(theme);
        c.preventDefault();
        setError(null);
        let f = {
            theme
        };
        try {
            await Ya.CurrentProject.update(f);
            setError(null);
            Ya.Layout.emitChange();
        } catch (err) {
            let v = err.response?.data?.message || err.message || "Can't connect to the servers. Please try again later.";
            setError(v);
            let b = Ya.CurrentProject.get();
            setE(b.theme);
        }
    }, "onChange");
    let l = a_1((c)=>{
        setR(!r);
        c.preventDefault();
    }, "onClickToggleButton");
    return vr.default.createElement("div", {
        className: "project-theme-form"
    }, vr.default.createElement("form", null, qye({
        error
    }), vr.default.createElement("div", {
        className: "category-list"
    }, jJ.map((c)=>{
        if (c.deprecated && !r) {
            return null;
        }
        return vr.default.createElement("div", {
            key: c.name
        }, vr.default.createElement("h4", null, c.title), vr.default.createElement("div", {
            className: "theme-list"
        }, c.themes.map((m)=>{
            let active = e === m.name;
            return vr.default.createElement("div", {
                className: GJ.default({
                    active
                }),
                key: m.name
            }, vr.default.createElement("a", {
                onClick: a,
                id: `theme-${m.name}`
            }, active && Rye(), $ye(m.colors), m.title));
        })));
    })), vr.default.createElement("button", {
        className: "btn btn-default",
        onClick: l
    }, r ? "Collapse classic themes" : "Show classic themes")));
}
