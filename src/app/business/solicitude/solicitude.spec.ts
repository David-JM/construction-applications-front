import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitude } from './solicitude';

describe('Solicitude', () => {
  let component: Solicitude;
  let fixture: ComponentFixture<Solicitude>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solicitude]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solicitude);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
