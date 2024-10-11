import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DucatiComponent } from './components/brand/ducati/ducati.component';
import { YamahaComponent } from './components/brand/yamaha/yamaha.component';
import { HondaComponent } from './components/brand/honda/honda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'app-ducati',
    component: DucatiComponent,
  },
  {
    path: 'app-yamaha',
    component: YamahaComponent,
  },
  {
    path: 'app-honda',
    component: HondaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
