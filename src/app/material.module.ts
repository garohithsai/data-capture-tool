import { MatProgressSpinnerModule,
        MatNativeDateModule, MatToolbarModule, MatButtonModule, MatInputModule,
        MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule,
        MatRadioModule, MatSelectModule, MatSnackBarModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatProgressSpinnerModule
    ], exports: [
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule ,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {}
