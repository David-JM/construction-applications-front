import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { OnlyNumberDirective } from '../../core/directives/only-number.directive';
import { SolicitudeSandbox } from './solicitude.sandbox';
import { ConstructionMap } from './shared/components/construction-map/construction-map';

@Component({
  selector: 'app-solicitude',
  imports: [ReactiveFormsModule, OnlyNumberDirective, TitleCasePipe, ConstructionMap],
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
    initialValue: [],
  });
}
