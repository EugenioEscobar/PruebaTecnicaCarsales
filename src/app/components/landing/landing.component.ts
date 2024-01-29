import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EpisodeComponent } from '../episode/episode.component';
import { fetchEpisodes, fetchEpisodesBySeason } from '../../services/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  showEpisodeDialog: boolean = false;
  episodes: any[] = [];
  season = "S01";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadEpisodes();
  }

  openEpisodeDialog(episodeId: string): void {
    this.showEpisodeDialog = true;
    const dialogRef = this.dialog.open(EpisodeComponent, {
      width: '1000px',
      data: { episodeId: episodeId }
    });
  }

  closeEpisodeDialog(): void {
    this.showEpisodeDialog = false;
  }

  selectSeason(seasonSelected: string): void {
    this.season = seasonSelected;
    this.loadEpisodes();
  }

  async loadEpisodes(): Promise<void> {
    try {
      this.episodes = await fetchEpisodesBySeason(this.season);
      console.log(this.episodes);
    } catch (error) {
      console.error('Error al cargar los episodios:', error);
    }
  }
}
