import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fetchCharacter, fetchEpisodeById } from '../../services/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
  episodeId: number;
  episode: any;
  temporada: number;
  n_episodio: number;
  characters: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.episodeId = data.episodeId;
    this.temporada = 1;
    this.n_episodio = 1;
  }


  ngOnInit(): void {
    this.loadEpisode();
  }

  async loadEpisode(): Promise<void> {
    try {
      this.episode = await fetchEpisodeById(this.episodeId);
      const match = this.episode.episode.match(/S(\d+)E(\d+)/);
      console.log(match);

      if (match) {
        this.temporada = parseInt(match[1]);
        this.n_episodio = parseInt(match[2]);
      }
      for (const characterUrl of this.episode.characters) {
        const characterId = this.extractCharacterId(characterUrl);
        const character = await fetchCharacter(characterId);
        this.characters.push(character);
      }

    } catch (error) {
      console.error('Error al cargar los episodios:', error);
    }
  }

  private extractCharacterId(characterUrl: string): number {
    const parts = characterUrl.split('/');
    return parseInt(parts[parts.length - 1]);
  }

}