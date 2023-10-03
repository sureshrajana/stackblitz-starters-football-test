import { Injectable } from '@angular/core';
import { StandingsServiceModule } from './standings.service.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import {
  ApiStandingLeagueResponse,
  StandingLeague,
} from '../../models/standing.model';
import { API_URL, API_KEY } from '../../constants';

@Injectable({
  providedIn: StandingsServiceModule,
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  getStandingsLeague(
    leagueId: string,
    year: string
  ): Observable<StandingLeague[]> {
    const url = API_URL + '/' + `standings?league=${leagueId}&season=${year}`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': API_KEY,
      }),
    };
    return this.http.get<ApiStandingLeagueResponse>(url, HEADER_OPTIONS).pipe(
      map((data) => data.response),
      shareReplay()
    );
  }
}
