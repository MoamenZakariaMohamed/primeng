import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'closable-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Messages are <i>closable</i> by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set <i>closable</i> to <i>false</i>. Note that in this case two-way binding is not necessary
                as the component does not need to update its value.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-messages [(value)]="messages1" [enableService]="false" [closable]="false"></p-messages>
            <p-messages [(value)]="messages2" [enableService]="false"></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class ClosableDocComponent implements OnInit {
    @Input() id: string;

    @Input() title: string;

    messages1!: Message[];

    messages2!: Message[];

    ngOnInit() {
        this.messages1 = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' }
        ];

        this.messages2 = [
            { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Closable Message Content' }
        ];
    }

    code: Code = {
        basic: `
<p-messages [(value)]="messages1" [enableService]="false" [closable]="false"></p-messages>
<p-messages [(value)]="messages2" [enableService]="false"></p-messages>`,
        html: `
<div class="card">
    <p-messages [(value)]="messages1" [enableService]="false" [closable]="false"></p-messages>
    <p-messages [(value)]="messages2" [enableService]="false"></p-messages>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo implements OnInit {
    messages1!: Message[];

    messages2!: Message[];

    ngOnInit() {
        this.messages1 = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];

        this.messages2 = [
            { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
        ];
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}
`
    };
}
