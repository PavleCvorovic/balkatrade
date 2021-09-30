import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomProduktiComponent } from './random-produkti.component';

describe('RandomProduktiComponent', () => {
  let component: RandomProduktiComponent;
  let fixture: ComponentFixture<RandomProduktiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomProduktiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomProduktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
