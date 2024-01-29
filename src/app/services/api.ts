interface Episode {
  id: number;
  name: string;
}

export async function fetchEpisodes(): Promise<Episode[]> {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    if (!response.ok) {
      throw new Error('Error al cargar los episodios');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al cargar los episodios:', error);
    throw error;
  }
}

export async function fetchEpisodeById(episodeId: number): Promise<Episode> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
    if (!response.ok) {
      throw new Error(`Error al cargar el episodio ${episodeId}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al cargar el episodio ${episodeId}:`, error);
    throw error;
  }
}

export async function fetchEpisodesBySeason(season: string): Promise<Episode[]> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode?episode=${season}`);
    if (!response.ok) {
      throw new Error(`Error al cargar los episodios de la temporada ${season}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error al cargar los episodios de la temporada ${season}:`, error);
    throw error;
  }
}

export async function fetchCharacter(characterId: number): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    if (!response.ok) {
      throw new Error(`Error al cargar el personaje ${characterId}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al cargar el personaje ${characterId}:`, error);
    throw error;
  }
}
