import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { EpisodeComponent } from './components/episode/episode.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'episode', component: EpisodeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'landing' },];
