import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
