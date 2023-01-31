import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../layout/code/app.code.component';
import { AppDemoActionsModule } from '../../layout/demoactions/app.demoactions.component';
import { ScrollPanelDemo } from './scrollpaneldemo';
import { ScrollPanelDemoRoutingModule } from './scrollpaneldemo-routing.module';

@NgModule({
    imports: [CommonModule, ScrollPanelModule, ScrollPanelDemoRoutingModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [ScrollPanelDemo]
})
export class ScrollPanelDemoModule {}
