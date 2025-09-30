import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';

import { environment as env } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ConstructionType } from './shared/models/construction-type';

@Injectable()
export class SolicitudeSandbox {
  readonly #httpService: HttpService = inject(HttpService);

  getConstructionTypes(): Observable<ConstructionType[]> {
    const url = `${env.api.host}${env.api.paths.types}`;
    return this.#httpService.doGet<ConstructionType[]>(url).pipe(
      map((list) =>
        list.map((res) => {
          res.type = res.type.toUpperCase();
          return res;
        })
      )
    );
  }
}
