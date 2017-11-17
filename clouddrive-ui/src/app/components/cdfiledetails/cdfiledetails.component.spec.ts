import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfiledetailsComponent } from './cdfiledetails.component';

describe('CdfiledetailsComponent', () => {
  let component: CdfiledetailsComponent;
  let fixture: ComponentFixture<CdfiledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdfiledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
