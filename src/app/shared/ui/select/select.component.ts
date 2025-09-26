import { Component, Input, Output, EventEmitter, Signal, input, output } from '@angular/core';
@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './select.component.html',
})
export class SelectComponent<T = string> {
    options = input<T[]>([]);    
    selected = input<string | null>(null);   

    selectedChange = output<string>();

    onChange(event: Event) {
        const target = event.target as HTMLSelectElement;
    //  this.selectedChange.emit(target.value as unknown as T);
    }
}
