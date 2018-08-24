import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {LooserComponent} from './looser.component';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './app.pipe';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TFormComponent } from './t-form/t-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // LooserComponent,
    TestComponent,
    SummaryPipe,
    TitleCasingComponent,
    LikeComponent,
    ContactFormComponent,
    TFormComponent,
    SignUpComponent
    // TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
