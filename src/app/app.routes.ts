import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./business/solicitude/solicitude.routes').then((m) => m.solicitudeRoutes),
    },
    {
        path: 'materials',
        loadChildren: () =>
            import('./business/materials/materials.routes').then((m) => m.materialsRoutes),
    },
    {
        path: 'reports',
        loadChildren: () =>
            import('./business/reports/reports.routes').then((m) => m.reportsRoutes),
    },
];
