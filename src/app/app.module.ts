import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from 'shared/services/auth.guard';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileService } from 'shared';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InventoryComponent,
        ReportsComponent,
        BillingComponent,
        ProfileComponent,
        LogInComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule, 
        FormsModule, 
        ReactiveFormsModule
    ],
    providers: [AuthGuard, ProfileService],
    bootstrap: [AppComponent]
})
export class AppModule { }
