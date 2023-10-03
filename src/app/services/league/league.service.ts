import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { LeagueServiceModule } from './league.service.module';
import { environment } from 'src/environments/environment';
import { ApiLeagueResponse, LeagueInfo } from '../../models/league.model';
import { API_KEY, API_URL } from '../../constants/url.constant';

@Injectable({
  providedIn: LeagueServiceModule
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  getLeague(leagueId: string): Observable<LeagueInfo[]> {
    const url = API_URL + '/' + `leagues?id=${leagueId}&current=true`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': API_KEY,
      }),
    };
    
    return this.http.get<ApiLeagueResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      shareReplay()
      );
  }
}

