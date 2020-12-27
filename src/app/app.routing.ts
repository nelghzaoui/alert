import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountModule } from '@account/account.module';
import { AlertModule } from '@alert/alert.module';
import { ServerModule } from '@server/server.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: (): Promise<typeof AccountModule> => import('@account/account.module').then((m) => m.AccountModule)
  },
  {
    path: 'alert',
    loadChildren: (): Promise<typeof AlertModule> => import('@alert/alert.module').then((m) => m.AlertModule)
  },
  {
    path: 'server',
    loadChildren: (): Promise<typeof ServerModule> => import('@server/server.module').then((m) => m.ServerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
