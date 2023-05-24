import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGamerComponent } from './lista-gamer.component';

describe('ListaGamerComponent', () => {
  let component: ListaGamerComponent;
  let fixture: ComponentFixture<ListaGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGamerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
