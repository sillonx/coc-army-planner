import { useRoutes } from 'react-router-dom';

import MainPage from '../pages'
import Error404 from '../pages/404'

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <MainPage/>

        },
        {
            path: '*',
            element: <Error404/>
        }
    ]);
}