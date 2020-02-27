import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchArtistPage } from './pages/search-artist';
import { DetailArtistPage } from './pages/detail-artist';

const routes: Routes = [
	{ path: "artist/search", component: SearchArtistPage },
	{ path: "artist/detail", component: DetailArtistPage, data: {artist: ''}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
