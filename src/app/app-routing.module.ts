import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { BattleComponent } from './components/battle/battle.component';

const routes: Routes = [
{ path: '', component:  HeaderComponent },
{ path: 'search', component:  SearchComponent },
{ path: 'battle', component:  BattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
