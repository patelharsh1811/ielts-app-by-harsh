import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingTest } from './speaking-test';

describe('SpeakingTest', () => {
  let component: SpeakingTest;
  let fixture: ComponentFixture<SpeakingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakingTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakingTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
