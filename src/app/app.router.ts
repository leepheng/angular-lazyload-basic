import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';

export const router: Routes = [
    {
        path: '',
        component: HomeComponent
        // default loading component
    },
    {
        path: 'gallery',
        loadChildren: 'app/components/gallery/gallery.module#GalleryModule'
        // this is lazy load module
    },
    {
        path: 'about',
        loadChildren: 'app/components/about/about.module#AboutModule'
        // this is lazy load module
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);