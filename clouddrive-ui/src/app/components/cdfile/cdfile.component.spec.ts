import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfileComponent } from './cdfile.component';

describe('CdfileComponent', () => {
  let component: CdfileComponent;
  let fixture: ComponentFixture<CdfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
