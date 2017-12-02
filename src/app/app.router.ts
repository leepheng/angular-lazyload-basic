import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/components/home/home.module#HomeModule',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        loadChildren: 'app/components/gallery/gallery.module#GalleryModule'
    },
    {
        path: 'about',
        loadChildren: 'app/components/about/about.module#AboutModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);