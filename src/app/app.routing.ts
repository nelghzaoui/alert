import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ServerModule } from '@server/server.module';

const routes: Routes = [
  { path: '', redirectTo: 'server', pathMatch: 'full' },
  {
    path: 'server',
    loadChildren: (): Promise<typeof ServerModule> =>
      import('@server/server.module').then(m => m.ServerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
