import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountModule } from '@account/account.module';
import { ServerModule } from '@server/server.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'server',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: (): Promise<typeof AccountModule> => import('@account/account.module').then((m) => m.AccountModule)
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
