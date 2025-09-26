import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
    label = input<string>('Kliknij');    
    onClicked = output<void>();

    onClick() {
        this.onClicked.emit();
    }
}
