import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableToolsComponent } from './available-tools.component';

describe('AvailableToolsComponent', () => {
  let component: AvailableToolsComponent;
  let fixture: ComponentFixture<AvailableToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
