import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormularioComponent } from './main-formulario.component';

describe('MainFormularioComponent', () => {
  let component: MainFormularioComponent;
  let fixture: ComponentFixture<MainFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFormularioComponent]
    });
    fixture = TestBed.createComponent(MainFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
