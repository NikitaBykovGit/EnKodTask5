import { Directive, Input, ElementRef } from "@angular/core";
import { Observable } from 'rxjs';

@Directive({
    selector: '[select]',
})
export class SelectDirective {
    @Input('color') color: string;
    @Input('text$') text$: Observable<string>;
    constructor(private el: ElementRef) {}

    ngOnInit() {
        let str: string = this.el.nativeElement.textContent;
        let newStr: string = ""  
        this.text$.subscribe(value => {
            if (value) {
                let pos = -1;
                while ((pos = str.indexOf(value, pos + 1)) != -1) {
                    newStr = str.replace(str.slice(pos, pos + value.length), (match: string)=>{
                        return `<span style="background:${this.color}">${match}</span>`
                    })
                }
                this.el.nativeElement.innerHTML = newStr;   
            } else {
                this.el.nativeElement.textContent = str;
            }
        });
    }

    setFontColor(value: string): void {
        this.el.nativeElement.style.background = this.color;
    }
}