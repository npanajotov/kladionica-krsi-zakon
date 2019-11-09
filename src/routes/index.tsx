import Home from '../views/Home';
import {HOME_PAGE, NOT_FOUND_PAGE} from "../app/consts/pages";
import NotFound from "../views/NotFound";


export interface RouteObject {
    name: string,
    page_name: string,
    path: string,
    exact: boolean,
    component: any,
}

export interface RouteChildObject {
    name: string,
    path: string,
    exact: boolean,
    component: any,
}


const list: Array<RouteObject> = [
    {
        name: HOME_PAGE,
        page_name: "Naslovna",
        path: "/",
        exact: true,
        component: Home,
    },
    {
        name: NOT_FOUND_PAGE,
        page_name: "404",
        path: "/404.html",
        exact: false,
        component: NotFound,
    },
];

export default list;