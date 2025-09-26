import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
    value = input<string>();    
    valueChange = output<string>();

    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.valueChange.emit(target.value);
    }
}