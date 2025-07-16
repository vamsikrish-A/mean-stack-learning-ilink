import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingWdget } from './voting-wdget';

describe('VotingWdget', () => {
  let component: VotingWdget;
  let fixture: ComponentFixture<VotingWdget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingWdget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingWdget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
