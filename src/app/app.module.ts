import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProviders } from './core/services/auth.interceptor';
import { envoirment } from 'src/environments/envoirment.dev';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/services/error.interceptor';
import { MedicineState } from './health/state/medicine.state';
import { FinancesComponent } from './finances/finances.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [AppComponent, FinancesComponent, HealthComponent],
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
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
