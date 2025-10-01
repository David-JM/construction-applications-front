import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: true
})
export class OnlyNumberDirective {
  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Filtrar solo números
    let filtered = input.value.replace(/[^0-9]/g, '');

    // Limitar a 2 dígitos
    if (filtered.length > 2) {
      filtered = filtered.slice(0, 2);
    }
    input.value = filtered;
  }
}
