import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'page-detail-artist',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class DetailArtistPage implements OnInit {

  artistName: string;
  artist: any;
  albuns: any;
  tags: any;
  similarArtists: any;
  stats: any;

  constructor(private service: ArtistService, private route: ActivatedRoute, private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.artistName = state.artist;
  }

  ngOnInit(): void {
  	this.service.getInfoArtist(this.artistName).subscribe(
      (data: any) => {
        this.artist = data.artist;
        this.tags = this.mapTags(this.artist);
        this.similarArtists = this.mapSimilarArtists(this.artist);
      }
    );
    
    this.service.getTopAlbuns(this.artistName).subscribe(
      (data: any) => {
        this.albuns = data.topalbums.album;
        this.albuns = this.albuns.sort(this.sorterTopAlbuns);
      }
    );
  }

  /**
   * Sort albuns based in play counts
   */
  private sorterTopAlbuns(a, b) {
    const playsA = a.playcount;
    const playsB = b.playcount;

    let comparison = 0;
    if(playsA > playsB) { comparison = -1; }
    else if(a.playcount < b.playcount) { comparison = 1; }
    return comparison;
  }

  /**
   * Extract tags associated to artist
   */
  private mapTags(artist: any) {
    return artist.tags.tag;
  }


  /**
   * Extract similar artists
   */
  private mapSimilarArtists(artist: any) {
    return artist.similar.artist;
  }

}
