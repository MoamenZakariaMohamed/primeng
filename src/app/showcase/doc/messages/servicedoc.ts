import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'service-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                MessageService alternative does not require a value binding to an array. In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself so
                that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component to match the key of the message to implement scoping.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex justify-content-center gap-2">
                <button type="button" pButton class="p-button-primary" (click)="addSingle()" label="Show Single"></button>
                <button type="button" pButton class="p-button-success" (click)="addMultiple()" label="Show Multiple"></button>
                <button type="button" pButton class="p-button-secondary" (click)="clear()" label="Clear All"></button>
            </div>
            <p-messages></p-messages>
        </div>
        <app-code [code]="code"></app-code>
    </div>`,
    providers: [MessageService]
})
export class ServiceDocComponent {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    addSingle() {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }

    addMultiple() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
            { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }
        ]);
    }

    clear() {
        this.messageService.clear();
    }

    code: Code = {
        basic: `
<div class="flex justify-content-center gap-2">
    <button type="button" pButton class="p-button-primary" (click)="addSingle()" label="Single"></button>
    <button type="button" pButton class="p-button-success" (click)="addMultiple()" label="Multiple"></button>
    <button type="button" pButton class="p-button-secondary" (click)="clear()" label="Clear"></button>
</div>
<p-messages></p-messages>`,
        html: `
<div class="card">
    <div class="flex justify-content-center gap-2">
        <button type="button" pButton class="p-button-primary" (click)="addSingle()" label="Single"></button>
        <button type="button" pButton class="p-button-success" (click)="addMultiple()" label="Multiple"></button>
        <button type="button" pButton class="p-button-secondary" (click)="clear()" label="Clear"></button>
    </div>
    <p-messages></p-messages>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html',
    providers: [MessageService]
})
export class MessagesDemo {

    constructor(private messageService: MessageService) {}

    addSingle() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }

    addMultiple() {
        this.messageService.addAll([
            {severity:'success', summary:'Service Message', detail:'Via MessageService'},
            {severity:'info', summary:'Info Message', detail:'Via MessageService'}
        ]);
    }
    
    clear() {
        this.messageService.clear();
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule, ButtonModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}
`
    };
}
