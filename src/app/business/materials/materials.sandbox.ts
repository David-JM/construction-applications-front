import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

import { HttpService } from '../../core/services/http.service';
import { MaterialWarehouse } from './shared/models/material-warehouse';

@Injectable()
export class MaterialsSandbox {
  readonly #httpService: HttpService = inject(HttpService);

  getConstructionMaterials(): Observable<MaterialWarehouse> {
    const url = `${env.api.host}${env.api.paths.materials}`;
    return this.#httpService.doGet<MaterialWarehouse>(url);
  }
}
