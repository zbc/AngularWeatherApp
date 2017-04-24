import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component'; 

const MAINMENU_ROUTES : Routes = [
    {
        path:'',
        redirectTo:'/weather',
        pathMatch:'full'
    },
    {
        path:'weather',
        component:WeatherComponent
    }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);