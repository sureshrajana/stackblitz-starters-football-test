import { Injectable } from '@angular/core';
import { TeamServiceModule } from './team.service.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { ApiTeamResponse, TeamData } from '../../models/team.model';
import { API_KEY, API_URL } from '../../constants/url.constant';

@Injectable({
  providedIn: TeamServiceModule
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(teamId: number): Observable<TeamData[]> {
    const url = API_URL + `/teams?id=${teamId}`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': API_KEY,
      }),
    };
    return this.http.get<ApiTeamResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
