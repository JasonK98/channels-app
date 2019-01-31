import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSecondaryComponent } from './channel-secondary.component';

describe('ChannelSecondaryComponent', () => {
  let component: ChannelSecondaryComponent;
  let fixture: ComponentFixture<ChannelSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
