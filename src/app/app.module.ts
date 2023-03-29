import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { AbdominalAdiologyComponent } from './components/radiology/abdominal-adiology/abdominal-adiology.component';
import { ProstateRadiologyComponent } from './components/radiology/prostate-radiology/prostate-radiology.component';
import { InterventionalRadiologyGuidanceComponent } from './components/radiology/interventional-radiology-guidance/interventional-radiology-guidance.component';
import { WomensImagingComponent } from './components/radiology/womens-imaging/womens-imaging.component';
import { MusculoskeletalRadiologyComponent } from './components/radiology/musculoskeletal-radiology/musculoskeletal-radiology.component';
import { PediatricSportsInjuriesComponent } from './components/radiology/pediatric-sports-injuries/pediatric-sports-injuries.component';
import { PediatricRadiologyComponent } from './components/radiology/pediatric-radiology/pediatric-radiology.component';
import { OncologicalRadiologyComponent } from './components/radiology/oncological-radiology/oncological-radiology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NeuroradiologyComponent } from './components/neuroradiology/neuroradiology.component';
import { BrainTumorsComponent } from './components/neuroradiology/brain-tumors/brain-tumors.component';
import { BackPainComponent } from './components/neuroradiology/back-pain/back-pain.component';
import { SpinalTraumaComponent } from './components/neuroradiology/spinal-trauma/spinal-trauma.component';
import { BrainAndSpineComponent } from './components/neuroradiology/brain-and-spine/brain-and-spine.component';
import { DementiaAlzheimerComponent } from './components/neuroradiology/dementia-alzheimer/dementia-alzheimer.component';
import { EvaluationOfTinnitusComponent } from './components/neuroradiology/evaluation-of-tinnitus/evaluation-of-tinnitus.component';
import { MetabolicDisordersComponent } from './components/neuroradiology/metabolic-disorders/metabolic-disorders.component';
import { EpilepsyOrSeizuresComponent } from './components/neuroradiology/epilepsy-or-seizures/epilepsy-or-seizures.component';
import { CranialNerveDisordersComponent } from './components/neuroradiology/cranial-nerve-disorders/cranial-nerve-disorders.component';
import { HypophysisComponent } from './components/neuroradiology/hypophysis/hypophysis.component';
import { HydrocephalusAndCSFComponent } from './components/neuroradiology/hydrocephalus-and-csf/hydrocephalus-and-csf.component';
import { StrokeAndItsMimicsComponent } from './components/neuroradiology/stroke-and-its-mimics/stroke-and-its-mimics.component';
import { ChildAcuteNeurologicalComponent } from './components/neuroradiology/child-acute-neurological/child-acute-neurological.component';
import { HeadTraumaComponent } from './components/neuroradiology/head-trauma/head-trauma.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';
import { PasswordPatternDirective } from './directives/password-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    AbdominalAdiologyComponent,
    ProstateRadiologyComponent,
    BookAppointmentComponent,
    InterventionalRadiologyGuidanceComponent,
    WomensImagingComponent,
    MusculoskeletalRadiologyComponent,
    PediatricSportsInjuriesComponent,
    PediatricRadiologyComponent,
    OncologicalRadiologyComponent,
    NeuroradiologyComponent,
    BrainTumorsComponent,
    BackPainComponent,
    SpinalTraumaComponent,
    BrainAndSpineComponent,
    DementiaAlzheimerComponent,
    EvaluationOfTinnitusComponent,
    MetabolicDisordersComponent,
    EpilepsyOrSeizuresComponent,
    CranialNerveDisordersComponent,
    HypophysisComponent,
    HydrocephalusAndCSFComponent,
    StrokeAndItsMimicsComponent,
    ChildAcuteNeurologicalComponent,
    HeadTraumaComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    PasswordPatternDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
