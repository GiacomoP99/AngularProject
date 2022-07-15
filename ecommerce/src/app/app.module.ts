import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './auth.interceptor';
import { AuthService } from './auth.service';
import { CoreModule } from './core/core.module';
import { RestDatasourcesService } from './rest-datasources.service';
import { TokenStorageService } from './token-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    RestDatasourcesService,
    AuthService,
    TokenStorageService,
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
