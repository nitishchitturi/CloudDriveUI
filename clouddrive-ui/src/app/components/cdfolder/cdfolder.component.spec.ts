import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfolderComponent } from './cdfolder.component';

describe('CdfolderComponent', () => {
  let component: CdfolderComponent;
  let fixture: ComponentFixture<CdfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
