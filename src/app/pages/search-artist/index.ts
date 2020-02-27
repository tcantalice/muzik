import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'page-search-artist',
  templateUrl: './index.html',
  styleUrls: ['./style.css']
})
export class SearchArtistPage implements OnInit {

  queryField = new FormControl();
  artists$: Observable<any>;

  constructor(private service: ArtistService) { }

  ngOnInit(): void { }

  onSearch() {
    const terms = this.queryField.value;

    if (terms !== '' && terms !== undefined && terms !== null) {
      this.artists$ = this.service.searchArtist(terms).pipe(
          map((res: any) => res.results.artistmatches.artist)
        );
    }
  }
}
