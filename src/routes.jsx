import { NotFoundPage } from "./pages/NotFoundPage";

import { TemperaturePage } from "./pages/Temperature/TemperaturePage";
import { RomanPage } from "./pages/Roman/RomanPage";
import { WelcomePage } from "./Pages/WelcomePage";

export const routes = [

    {
        path: '/',
        element:<WelcomePage/>
    },
    {
        path: '/romano',
        element:<RomanPage/>
    },
    {
        path:'/temperature',
        element:<TemperaturePage/>
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
]