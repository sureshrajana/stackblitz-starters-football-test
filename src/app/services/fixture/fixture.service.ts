import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { FixtureServiceModule } from './fixture.service.module';
import { API_KEY, API_URL } from '../../constants/url.constant';
import { ApiFixtureResponse, Fixture } from '../../models/fixture.model';

@Injectable({
  providedIn: FixtureServiceModule
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getFixtureTeam(leagueId: number, teamId: number, year: string): Observable<Fixture[]> {
    const url =
      API_URL +
      '/'+`fixtures?league=${leagueId}&season=${year}&team=${teamId}&last=10`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': API_KEY,
      }),
    };
    return this.http.get<ApiFixtureResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
