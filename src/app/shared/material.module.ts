import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatChipsModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatChipsModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
})
export class MaterialModule { }

