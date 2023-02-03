import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppCodeModule } from 'src/app/showcase/layout/doc/code/app.code.component';
import { AppDocSectionTextModule } from 'src/app/showcase/layout/doc/docsectiontext/app.docsectiontext.component';

interface CodeLang {
    html?: string;
    typescript?: string;
    scss?: string;
    data?: string;
}

@Component({
    selector: 'floatlabel-doc',
    template: ` <div>
        <app-docsectiontext title="Float Label">
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <input pInputText id="username" [(ngModel)]="value1" />
                <label htmlFor="username">Username</label>
            </span>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class FloatLabelDocComponent {
    value1: string;
    value2: string;

    code: CodeLang = {
        html: `
<span class="p-float-label">
    <input pInputText id="username" [(ngModel)]="value1" />
    <label htmlFor="username">Username</label>
</span>`,

        typescript: `
export class InputText {
    value:1 string;
}`
    };
}

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocSectionTextModule, InputTextModule, FormsModule],
    exports: [FloatLabelDocComponent],
    declarations: [FloatLabelDocComponent]
})
export class FloatLabelDocModule {}
