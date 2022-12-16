import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartpageComponent } from './startpage/startpage.component';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { SkillsSetComponent } from './skills-set/skills-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AllSkillsComponent } from './all-skills/all-skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AllWorksComponent } from './all-works/all-works.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartpageComponent,
    WorkTogetherComponent,
    SkillsSetComponent,
    MyWorkComponent,
    FooterComponent,
    ContactComponent,
    AllSkillsComponent,
    ContactFormComponent,
    AllWorksComponent,
    ScrollButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
