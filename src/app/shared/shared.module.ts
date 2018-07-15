import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
