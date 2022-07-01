import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiSelezionatoreComponent } from './dati-selezionatore.component';

describe('DatiSelezionatoreComponent', () => {
  let component: DatiSelezionatoreComponent;
  let fixture: ComponentFixture<DatiSelezionatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiSelezionatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiSelezionatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
