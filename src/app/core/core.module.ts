import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [],
   imports: [HttpClientModule, MaterialModule],
   providers: [],
})
export class CoreModule {}
