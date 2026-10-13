import { Routes } from '@angular/router';

const OutdoorCenters = () =>
  import('./presentation/views/outdoor-centers-overview/outdoor-centers-overview').then(
    (m) => m.OutdoorCentersOverview,
  );

export const routes: Routes = [
  { path: 'overview', loadComponent: OutdoorCenters },
]
