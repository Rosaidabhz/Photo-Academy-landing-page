import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecHeroComponent } from './sec-hero.component';

describe('SecHeroComponent', () => {
  let component: SecHeroComponent;
  let fixture: ComponentFixture<SecHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
