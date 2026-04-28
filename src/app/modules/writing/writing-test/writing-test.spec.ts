import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTest } from './writing-test';

describe('WritingTest', () => {
  let component: WritingTest;
  let fixture: ComponentFixture<WritingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
