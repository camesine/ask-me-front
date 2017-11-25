import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

declare var jQuery: any;
declare var tinymce: any;

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [],
      menubar: false,
      height : '430',
      toolbar: `
      undo redo | formatselect | bold italic backcolor
      | alignleft aligncenter alignright alignjustify |
      bullist numlist outdent indent | removeformat
      `,
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {

          console.log(this.editor.getContent({format: 'text'}));
          console.log(this.editor.getContent({format: 'html'}));

        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
