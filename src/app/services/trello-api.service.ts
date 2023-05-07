import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BoardOverviewInfo,
  Operations,
  ToolCard,
} from '../components/interface/trello-API.interface';

@Injectable({
  providedIn: 'root',
})
export class TrelloAPIService {
  id = 'ulh4e4QN';
  APIKey = '603695aacf78675c9280ab2dc050f005';
  TokenKey =
    'ATTAbbdd6fb7ece06fc5ffd9f4264efbb98a516ec35cc4864cb47f1dbcb296329a2e7B839C5F';

  constructor(private http: HttpClient) {}

  getBoardInfo(): Observable<BoardOverviewInfo> {
    return this.http.get<BoardOverviewInfo>(
      `https://api.trello.com/1/boards/${this.id}?key=${this.APIKey}&token=${this.TokenKey}`
    );
  }

  getOperationList(): Observable<Operations[]> {
    return this.http.get<Operations[]>(
      `https://api.trello.com/1/boards/${this.id}/lists?key=${this.APIKey}&token=${this.TokenKey}`
    );
  }

  getToolCards(): Observable<ToolCard[]> {
    return this.http.get<ToolCard[]>(
      `https://api.trello.com/1/boards/${this.id}/cards?key=${this.APIKey}&token=${this.TokenKey}`
    );
  }
}
