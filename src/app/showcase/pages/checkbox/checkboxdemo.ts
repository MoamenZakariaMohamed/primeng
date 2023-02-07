import { Component } from '@angular/core';
import { LabelDocComponent } from '../../doc/checkbox/labeldoc';
import { BasicDocComponent } from '../../doc/checkbox/basicdoc';
import { ImportDocComponent } from '../../doc/checkbox/importdoc';
import { MultipleDocComponent } from '../../doc/checkbox/multipledoc';
import { DynamicDocComponent } from '../../doc/checkbox/dynamicdoc';
import { DisabledDocComponent } from '../../doc/checkbox/disableddoc';
import { StyleDocComponent } from '../../doc/checkbox/styledoc';
import { PropsDocComponent } from '../../doc/checkbox/propsdoc';

@Component({
    templateUrl: './checkboxdemo.html'
})
export class CheckboxDemo {
    selectedCities: string[] = [];

    selectedCategories: any[] = ['Technology', 'Sports'];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    checked: boolean = false;

    ngOnInit() {
        this.selectedCategories = this.categories.slice(1, 3);
    }

    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDocComponent
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDocComponent
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDocComponent
        },
        {
            id: 'label',
            label: 'Label',
            component: LabelDocComponent
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDocComponent
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDocComponent
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDocComponent
        },
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDocComponent
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Checkbox', pathname: '/modules/checkbox.html' }]
        }
    ];
}
