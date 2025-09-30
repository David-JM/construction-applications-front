import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudeSandbox } from './solicitude.sandbox';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-solicitude',
  imports: [ReactiveFormsModule],
  providers: [SolicitudeSandbox],
  templateUrl: './solicitude.html',
  styleUrl: './solicitude.scss',
  standalone: true,
})
export class Solicitude {
  private readonly _formBuilder = inject(FormBuilder);
  private _solicitudeSandbox: SolicitudeSandbox = inject(SolicitudeSandbox);

  form = this._formBuilder.group({
    constructionType: [null, Validators.required],
    coordX: [null, Validators.required],
    coordY: [null, Validators.required],
  });

  constructionTypes = toSignal(this._solicitudeSandbox.getConstructionTypes(), {
    initialValue: [
      {
        id: 1,
        type: 'Casa',
      },
      {
        id: 2,
        type: 'Lago',
      },
    ],
  });
}
