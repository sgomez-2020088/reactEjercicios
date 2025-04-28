import { NotFoundPage } from "./pages/NotFoundPage";

import { TemperaturePage } from "./pages/Temperature/TemperaturePage";
import { RomanPage } from "./pages/Roman/RomanPage";

export const routes = [

    {
        path: '/',
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