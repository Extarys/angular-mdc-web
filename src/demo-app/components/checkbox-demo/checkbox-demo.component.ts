import {
  Component
} from '@angular/core';

@Component({
  selector: 'checkbox-demo',
  templateUrl: './checkbox-demo.component.html'
})
export class CheckboxDemoComponent {
  isChecked: boolean = true;
  isIndeterminate: boolean;

  setIndeterminate() {
    this.isIndeterminate = !this.isIndeterminate;
  }
}
