import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningTest } from './listening-test';

describe('ListeningTest', () => {
  let component: ListeningTest;
  let fixture: ComponentFixture<ListeningTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeningTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeningTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
