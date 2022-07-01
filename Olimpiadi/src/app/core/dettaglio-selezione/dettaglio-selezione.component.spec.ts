import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioSelezioneComponent } from './dettaglio-selezione.component';

describe('DettaglioSelezioneComponent', () => {
  let component: DettaglioSelezioneComponent;
  let fixture: ComponentFixture<DettaglioSelezioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioSelezioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioSelezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
