import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDhtBPQYOSDgpR2n_8Th9pfo0tIAd0XttXbXHa3mNDziunqjy7S1AfTRkPUBlWoAhXJi2IBuqbuwTbQBnA',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map(data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${ term }&type=artist`)
      .pipe( map( data => data['artists'].items));
  }

  getArtistById(id: string) {
    console.log(id);
    return this.getQuery(`artists/${id}`);
  }

}
