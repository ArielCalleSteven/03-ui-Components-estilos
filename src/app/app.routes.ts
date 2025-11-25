import { Routes } from '@angular/router';
import { DaisyuiPageComponent } from './features/daisyui-page/daisyui-page';
import { SimpsonsPageComponent } from './features/simpsons-page/simpsons-page'; 
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';

export const routes: Routes = [

    { path: '', component: DaisyuiPageComponent },


    { path: 'simpsons', component: SimpsonsPageComponent },


    { path: 'simpsons/:id', component: SimpsonDetailPageComponent }
];