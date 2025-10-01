import { Component, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { OnlyNumberDirective } from '../../core/directives/only-number.directive';
import { SolicitudeSandbox } from './solicitude.sandbox';
import { ConstructionMap } from './shared/components/construction-map/construction-map';

@Component({
  selector: 'app-solicitude',
  imports: [CommonModule, ReactiveFormsModule, OnlyNumberDirective, TitleCasePipe, ConstructionMap],
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

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
    console.log('Formulario enviado', this.form.value);
  }

  get formCtrls() {
    return this.form.controls;
  }

  hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
