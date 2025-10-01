import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

import { HttpService } from '../../core/services/http.service';
import { ConstructionType } from './shared/models/construction-type';
import { Construction } from './shared/models/construction';

@Injectable()
export class SolicitudeSandbox {
  readonly #httpService: HttpService = inject(HttpService);

  getConstructionTypes(): Observable<ConstructionType[]> {
    const url = `${env.api.host}${env.api.paths.types}`;
    return this.#httpService.doGet<ConstructionType[]>(url);
  }

  getConstructions(): Observable<string[][]> {
    const url = `${env.api.host}${env.api.paths.constructions}`;
    return this.#httpService.doGet<Construction>(url).pipe(map(res => res.grid));
  }
}
