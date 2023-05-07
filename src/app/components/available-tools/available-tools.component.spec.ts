import { toolCardResponseMock } from './../Mocks/available-tools.mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableToolsComponent } from './available-tools.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrelloAPIService } from 'src/app/services/trello-api.service';
import { HttpClient } from '@angular/common/http';
import SpyObj = jasmine.SpyObj;
import { of } from 'rxjs';
import {
  boardGeneralInfoResponseMock,
  operationsListResponseMock,
} from '../Mocks/available-tools.mocks';
import { By } from '@angular/platform-browser';

describe('AvailableToolsComponent', () => {
  let component: AvailableToolsComponent;
  let fixture: ComponentFixture<AvailableToolsComponent>;
  let trelloAPIServiceMock: SpyObj<TrelloAPIService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailableToolsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        {
          provide: TrelloAPIService,
          useValue: jasmine.createSpyObj<TrelloAPIService>('TrelloAPIService', [
            'getBoardInfo',
            'getOperationList',
            'getToolCards',
          ]),
        },
      ],
    }).compileComponents();

    trelloAPIServiceMock = TestBed.inject(
      TrelloAPIService
    ) as jasmine.SpyObj<TrelloAPIService>;
    trelloAPIServiceMock.getBoardInfo.and.returnValue(
      of(boardGeneralInfoResponseMock)
    );
    trelloAPIServiceMock.getOperationList.and.returnValue(
      of(operationsListResponseMock)
    );
    trelloAPIServiceMock.getToolCards.and.returnValue(of(toolCardResponseMock));

    fixture = TestBed.createComponent(AvailableToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a board with the title named "Tools"', () => {
    const title =
      fixture.nativeElement.querySelector('h5.board-title').innerHTML;
    expect(title).toEqual('Tools');
  });

  it('should show 5 different manufacturing operations on the board', () => {
    const operationCard = fixture.debugElement.queryAll(
      By.css('.operation-card')
    );
    expect(operationCard.length).toEqual(5);
  });

  it('should show all the 10 tool names on the board', () => {
    const toolNames = fixture.debugElement.queryAll(By.css('.tool-names'));
    expect(toolNames.length).toEqual(10);
  });
});
