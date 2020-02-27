import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ArtistService extends ApiService {

  constructor(http: HttpClient) {
  	super(http);
  }

  /**
   * Make a search for artist name or names
   *
   * @param artist Names to search
   * @param limit Limit of results
   * @param page Number of page
   */
  searchArtist(artist, limit: number = 10, page: number = 1) {

  	const httpOptions = this.setParameters('artist.search', {
	  		limit: `${limit}`,
	  		page: `${page}`,
        artist: `${artist}`
	  	});

  	return this.request(httpOptions);
  }

  /**
   * Get informations for a specified artist
   * 
   * @param artist Artist name
   * @param mbid Music brainz id of artist
   * @param lang Language to return biography ('en', 'pt', 'es', 'fr')
   * @param autocorrect The corrected artist name will be returned in the response
   */
  getInfoArtist(artist: string, mbid: string = '', lang: string = 'pt', autocorrect: boolean = false) {
    const httpOptions = this.setParameters('artist.getinfo', {
      lang: `${lang}`,
      autocorrect: autocorrect ? 1 : 0,
      artist: `${artist}` 
    });

    if (mbid !== '' && mbid !== null && mbid !== undefined) {
      httpOptions.params = httpOptions.params.set('mbid', mbid);
    }

    return this.request(httpOptions);
  }

  /**
   * Get top albuns of specified artist
   *
   * @param artist Artist name
   * @param mbid Music brainz id of artist
   * @param limit Limit of results
   * @param page Number of page
   * @param auto The corrected artist name will be returned in the response
   */
  getTopAlbuns(artist: string, mbid: string = '', limit: number = 10, page: number = 1, autocorrect: boolean = false) {
    const httpOptions = this.setParameters('artist.gettopalbums', {
      autocorrect: autocorrect ? 1 : 0,
      artist: `${artist}`,
      limit: `${limit}`,
      page: `${page}`
    });

    if (mbid !== '' && mbid !== null && mbid !== undefined) {
      httpOptions.params = httpOptions.params.set('mbid', mbid);
    }

    return this.request(httpOptions);
  }
}
