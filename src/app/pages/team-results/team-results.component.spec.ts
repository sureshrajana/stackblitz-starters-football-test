import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsComponent } from './team-results.component';
import {  Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TeamResultsComponent', () => {
  let component: TeamResultsComponent;
  let fixture: ComponentFixture<TeamResultsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamResultsComponent],
     
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(TeamResultsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should back to home', () => {
    const spy = spyOn(router, 'navigate');
    component.goToHome();
    expect(spy).toHaveBeenCalledWith(
      ['/home'], 
      { queryParams: { leagueId: '39', currentYear: '2023'} }
    );
  });
  
});
