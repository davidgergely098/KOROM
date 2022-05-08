import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const Modules = [CommonModule, ReactiveFormsModule];
@NgModule({
  declarations: [],
  providers: [],
  imports: [...Modules],
  exports: [...Modules],
})
export class SharedModule {}
