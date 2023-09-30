import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'Header',component:HeaderComponent },
  {path:'about',component:AboutComponent},
  {path:'project',component:ProjectsComponent},
  {path:'skill',component:SkillComponent},
  {path:'education',component:EducationComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'certificates',component:CertificatesComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
