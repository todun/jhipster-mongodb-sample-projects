import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMongodbNorelationsSharedModule } from 'app/shared';
import {
    OrderedItemComponent,
    OrderedItemDetailComponent,
    OrderedItemUpdateComponent,
    OrderedItemDeletePopupComponent,
    OrderedItemDeleteDialogComponent,
    orderedItemRoute,
    orderedItemPopupRoute
} from './';

const ENTITY_STATES = [...orderedItemRoute, ...orderedItemPopupRoute];

@NgModule({
    imports: [JhipsterMongodbNorelationsSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        OrderedItemComponent,
        OrderedItemDetailComponent,
        OrderedItemUpdateComponent,
        OrderedItemDeleteDialogComponent,
        OrderedItemDeletePopupComponent
    ],
    entryComponents: [OrderedItemComponent, OrderedItemUpdateComponent, OrderedItemDeleteDialogComponent, OrderedItemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMongodbNorelationsOrderedItemModule {}
