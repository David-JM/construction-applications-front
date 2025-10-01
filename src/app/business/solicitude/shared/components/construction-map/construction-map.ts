import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { SolicitudeSandbox } from '../../../solicitude.sandbox';

@Component({
  selector: 'app-construction-map',
  imports: [],
  providers: [SolicitudeSandbox],
  templateUrl: './construction-map.html',
  styleUrl: './construction-map.scss',
})
export class ConstructionMap {
  private _solicitudeSandbox: SolicitudeSandbox = inject(SolicitudeSandbox);

  constructions = toSignal(this._solicitudeSandbox.getConstructions(), { initialValue: [] });

  flatMatrix = computed(() => this.constructions().flat());
}
