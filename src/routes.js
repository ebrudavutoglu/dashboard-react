import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/uielements/Calendar";

//UI Elements
import AlertPage from "./pages/uielements/Alert";
import ButtonsPage from "./pages/uielements/Buttons";
import CardsPage from "./pages/uielements/Cards";
import CarouselPage from "./pages/uielements/Carousel";
import DropdownPage from "./pages/uielements/Dropdowns";
import GridPage from "./pages/uielements/Grid";
import ImagesPage from "./pages/uielements/Images";
import LightboxPage from "./pages/uielements/Lightbox";
import RangeSliderPage from "./pages/uielements/Rangeslider";
import SessionTimeoutPage from "./pages/uielements/Sessiontimout";
import ProgressBarPage from "./pages/uielements/Progressbar";
import SweetAlertPage from "./pages/uielements/Sweetalert";
import TabsPage from "./pages/uielements/Tabs";
import TypographyPage from "./pages/uielements/Typography";
import ModalsPage from "./pages/uielements/Modals";

const routes = [
    {
        path: "/dashboard",
        name:"Dashboard",
        icon:"icon-home",
        component:Dashboard,
        layout:"/admin",
        badge:"3",
    },
    {
        path: "/calendar",
        name:"Calendar",
        icon:"icon-calendar-o",
        component:CalendarPage,
        layout:"/admin"
    },
    {
        name:"UI Elements",
        icon:"icon-box",
        component:CalendarPage,
        layout:"/admin",
        submenu:[
            {
                path: "/alert",
                name:"Alert",
                component:AlertPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/buttons",
                name:"Buttons",
                component:ButtonsPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/cards",
                name:"Cards",
                component:CardsPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/carousel",
                name:"Carousel",
                component:CarouselPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/dropdowns",
                name:"Dropdowns",
                component:DropdownPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/grid",
                name:"Grid",
                component:GridPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/images",
                name:"Images",
                component:ImagesPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/lightbox",
                name:"Lightbox",
                component:LightboxPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/modals",
                name:"Modals",
                component:ModalsPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/range-slider",
                name:"Range Slider",
                component:RangeSliderPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/session-timeout",
                name:"Session Timeout",
                component:SessionTimeoutPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/progress-bar",
                name:"Progress Bar",
                component:ProgressBarPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/sweet-alert",
                name:"Sweet Alert",
                component:SweetAlertPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/tabs",
                name:"Tabs",
                component:TabsPage,
                layout:"/admin/ui-elements",
            },
            {
                path: "/typography",
                name:"Typography",
                component:TypographyPage,
                layout:"/admin/ui-elements",
            }
        ]
    },{
        name:"Forms",
        icon:"icon-box",
        component:CalendarPage,
        layout:"/admin",
        submenu:[
            {
                path: "/alert",
                name:"Alert",
                component:AlertPage,
                layout:"/admin/forms",
            },
            {
                path: "/buttons",
                name:"Buttons",
                component:ButtonsPage,
                layout:"/admin/forms",
            },
            {
                path: "/cards",
                name:"Cards",
                component:CardsPage,
                layout:"/admin/forms",
            },
            {
                path: "/carousel",
                name:"Carousel",
                component:CarouselPage,
                layout:"/admin/forms",
            },
            {
                path: "/dropdowns",
                name:"Dropdowns",
                component:DropdownPage,
                layout:"/admin/forms",
            },
            {
                path: "/grid",
                name:"Grid",
                component:GridPage,
                layout:"/admin/forms",
            },
            {
                path: "/images",
                name:"Images",
                component:ImagesPage,
                layout:"/admin/forms",
            },
            {
                path: "/lightbox",
                name:"Lightbox",
                component:LightboxPage,
                layout:"/admin/forms",
            },
            {
                path: "/modals",
                name:"Modals",
                component:ModalsPage,
                layout:"/admin/forms",
            },
            {
                path: "/range-slider",
                name:"Range Slider",
                component:RangeSliderPage,
                layout:"/admin/forms",
            },
            {
                path: "/session-timeout",
                name:"Session Timeout",
                component:SessionTimeoutPage,
                layout:"/admin/forms",
            },
            {
                path: "/progress-bar",
                name:"Progress Bar",
                component:ProgressBarPage,
                layout:"/admin/forms",
            },
            {
                path: "/sweet-alert",
                name:"Sweet Alert",
                component:SweetAlertPage,
                layout:"/admin/forms",
            },
            {
                path: "/tabs",
                name:"Tabs",
                component:TabsPage,
                layout:"/admin/forms",
            },
            {
                path: "/typography",
                name:"Typography",
                component:TypographyPage,
                layout:"/admin/forms",
            }
        ]
    }
]

export default routes;