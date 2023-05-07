import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { TrelloAPIService } from 'src/app/services/trello-api.service';
import {
  BoardOverviewInfo,
  Operations,
  ToolCard,
} from '../interface/trello-API.interface';

@Component({
  selector: 'app-available-tools',
  templateUrl: './available-tools.component.html',
  styleUrls: ['./available-tools.component.css'],
})
export class AvailableToolsComponent implements OnInit {
  operationsList$!: Observable<{
    boardInfo: BoardOverviewInfo;
    listOfOperations: Operations[];
    tools: ToolCard[];
  }>;
  constructor(private trelloAPIService: TrelloAPIService) {}

  ngOnInit(): void {
    this.getManufacturingOperationsInfo();
  }

  getManufacturingOperationsInfo(): void {
    const boardInfo = this.trelloAPIService.getBoardInfo();
    const listOfOperations = this.trelloAPIService.getOperationList();
    const tools = this.trelloAPIService.getToolCards();
    this.operationsList$ = forkJoin({ boardInfo, listOfOperations, tools });
  }
}
