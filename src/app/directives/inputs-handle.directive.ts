import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: 'input[appInputsHandle]',
  exportAs: 'reverseInput'
})
export class InputsHandleDirective {
  inputValue = input<string>('');

  reverseValue = computed(() => this.inputValue().split('').reverse().join(''));

}
