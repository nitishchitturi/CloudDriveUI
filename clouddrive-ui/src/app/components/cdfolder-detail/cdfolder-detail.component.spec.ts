import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfolderDetailComponent } from './cdfolder-detail.component';

describe('CdfolderDetailComponent', () => {
  let component: CdfolderDetailComponent;
  let fixture: ComponentFixture<CdfolderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdfolderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfolderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
