import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { CountryServiceModule } from './country.service.module';
import { API_KEY, API_URL } from '../../constants/url.constant';
import { ApiCountryResponse, Country } from '../../models/country.model';
import { COUNTRY_List } from 'src/app/constants/country.constant';

@Injectable({
  providedIn: CountryServiceModule,
})
export class CountryService {
  private countries!: Country[];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    const url = API_URL + '/countries';
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': API_KEY,
      }),
    };
    return this.http.get<ApiCountryResponse>(url, HEADER_OPTIONS).pipe(
      map((data) => data.response),
      map((countries) =>
        countries.filter((country) => COUNTRY_List.includes(country.name))
      ),
      map((countries) => (this.countries = countries)),
      shareReplay()
    );
  }

  getCachedCounties(): Country[] {
    return this.countries;
  }
}
