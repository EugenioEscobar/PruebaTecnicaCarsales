import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'episode', component: EpisodeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'landing' },];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }