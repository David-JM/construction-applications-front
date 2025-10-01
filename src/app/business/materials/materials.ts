import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MaterialsSandbox } from './materials.sandbox';

@Component({
  selector: 'app-materials',
  imports: [],
  providers: [MaterialsSandbox],
  templateUrl: './materials.html',
  styleUrl: './materials.scss'
})
export class Materials {
  private _solicitudeSandbox: MaterialsSandbox = inject(MaterialsSandbox);

  materialWarehouse = toSignal(this._solicitudeSandbox.getConstructionMaterials());
}
