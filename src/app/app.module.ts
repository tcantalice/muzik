/* Framework */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

/* App */
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Pages */
import { SearchArtistPage } from './pages/search-artist';
import { DetailArtistPage } from './pages/detail-artist';

import { HeaderComponent } from './shared/template/header';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchArtistPage,
    DetailArtistPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
