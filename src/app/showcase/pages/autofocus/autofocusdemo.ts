import { Component } from '@angular/core';
import { ImportDocComponent } from '../../doc/autofocus/importdoc';
import { AutoFocusBasicDemo } from '../../doc/autofocus/basicdoc';
import { PropsDocComponent } from '../../doc/autofocus/propsdoc';

@Component({
    selector: 'autofocusdemo',
    templateUrl: './autofocusdemo.html'
})
export class AutoFocusDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: AutoFocusBasicDemo
        }
    ];

    apiDocs = [
        {
            id: 'props',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'AutoFocus', pathname: '/modules/autofocus.html' }]
        }
    ];
}
