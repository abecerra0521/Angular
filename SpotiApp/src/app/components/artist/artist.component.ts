import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe((params: any) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtistById(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }

}

