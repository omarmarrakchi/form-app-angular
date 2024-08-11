import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseDetalComponent } from './reponse-detal.component';

describe('ReponseDetalComponent', () => {
  let component: ReponseDetalComponent;
  let fixture: ComponentFixture<ReponseDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReponseDetalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReponseDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
