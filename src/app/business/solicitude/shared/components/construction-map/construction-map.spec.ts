import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMap } from './construction-map';

describe('ConstructionMap', () => {
  let component: ConstructionMap;
  let fixture: ComponentFixture<ConstructionMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
