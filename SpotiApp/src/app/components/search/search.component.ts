import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artist: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(term: string) {
    this.loading = true;
    this.spotifyService.getArtists(term).subscribe((data: any) => {
      this.artist = data;
      this.loading = false;
    });
  }

}
