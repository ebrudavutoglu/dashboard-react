import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/Calendar";

//UI Elements
import AlertPage from "./pages/Alert";
import ButtonsPage from "./pages/Buttons";

const routes = [
    {
        path: "/dashboard",
        name:"Dashboard",
        icon:"icon-home",
        component:Dashboard,
        layout:"/admin",
        badge:"3"
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
            }
        ]
    }
]

export default routes;