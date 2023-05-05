import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { authInterceptorProviders } from './core/services/auth.interceptor';
import { MedicineState } from './medicines/state/medicine.state';
import { envoirment } from 'src/environments/envoirment.dev';
import { BloodPressureComponent } from './blood-pressures/blood-pressure.component';

@NgModule({
  declarations: [AppComponent, BloodPressureComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    NgxsModule.forRoot([MedicineState], {
      developmentMode: !envoirment.production,
    }),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000, // 2 seconds
      progressBar: false,
      positionClass: 'toast-center-center',
    }),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
