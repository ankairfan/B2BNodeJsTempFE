import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unit } from '../model/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = `${environment.apiUrl}unit`;

  getUnits() {
    return this.httpClient
      .get<any>(this.baseUrl)
      .pipe(map(result => result.data));
  }

  getUnitById(id: string) {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`)
      .pipe(map(result => result.data));
  }


  removeUnit(unitId: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${unitId}`);
  }
  addUnit(unit: Unit) {

    return this.httpClient.post<any>(this.baseUrl, unit);

  }

  updateUnit(unitId: string, unit: Unit) {
    return this.httpClient.put<any>(`${this.baseUrl}/${unitId}`, unit);
  }
}
