import { Directive, Input, HostListener, ElementRef, OnInit } from "@angular/core";
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
                    console.log(str.slice(pos, value.length));
                    newStr = str.replace(str.slice(pos, value.length), (match: string)=>{
                        return `<mark>${match}</mark>`
                    })
                } 
                this.el.nativeElement.textContent = newStr;   
            } else {
                this.el.nativeElement.textContent = str;
            }
        });
    }

    setFontColor(value: string): void {
        this.el.nativeElement.style.background = this.color;
    }
}