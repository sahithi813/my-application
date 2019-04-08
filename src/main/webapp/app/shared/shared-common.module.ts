import { NgModule } from '@angular/core';

import { MyApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MyApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MyApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyApplicationSharedCommonModule {}
