import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AbdominalAdiologyComponent } from './components/radiology/abdominal-adiology/abdominal-adiology.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { ProstateRadiologyComponent } from './components/radiology/prostate-radiology/prostate-radiology.component';
import { InterventionalRadiologyGuidanceComponent } from './components/radiology/interventional-radiology-guidance/interventional-radiology-guidance.component';
import { WomensImagingComponent } from './components/radiology/womens-imaging/womens-imaging.component';
import { MusculoskeletalRadiologyComponent } from './components/radiology/musculoskeletal-radiology/musculoskeletal-radiology.component';
import { PediatricRadiologyComponent } from './components/radiology/pediatric-radiology/pediatric-radiology.component';
import { PediatricSportsInjuriesComponent } from './components/radiology/pediatric-sports-injuries/pediatric-sports-injuries.component';
import { OncologicalRadiologyComponent } from './components/radiology/oncological-radiology/oncological-radiology.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
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
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AboutComponent } from './components/resources/about/about.component';
import { BlogComponent } from './components/resources/blog/blog.component';
import { ComparisonStudiesComponent } from './components/resources/comparison-studies/comparison-studies.component';
import { ContactComponent } from './components/resources/contact/contact.component';
import { GuidanceRadiologyTrainingComponent } from './components/resources/guidance-radiology-training/guidance-radiology-training.component';
import { OurTeamComponent } from './components/resources/our-team/our-team.component';
import { PrimaryReadsComponent } from './components/resources/primary-reads/primary-reads.component';
import { ProBonoComponent } from './components/resources/pro-bono/pro-bono.component';
import { TestimonialComponent } from './components/resources/testimonial/testimonial.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { Error404Component } from './components/error404/error404.component';
import { DefaultHomeComponent } from './components/default-home/default-home.component';
import { BlogDetailsComponent } from './components/resources/blog/blog-details/blog-details.component';
import { UserProfileComponent } from './components/user-dashboard/user-profile/user-profile.component';
import { UserHomeComponent } from './components/user-dashboard/user-home/user-home.component';
import { MyReportsComponent } from './components/user-dashboard/my-reports/my-reports.component';
import { GiveFeedbackComponent } from './components/user-dashboard/give-feedback/give-feedback.component';
import { UpdatePasswordComponent } from './components/auth/update-password/update-password.component';
import { VarifyOtpComponent } from './components/auth/varify-otp/varify-otp.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultHomeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'abdominalRadiology', component: AbdominalAdiologyComponent },
      { path: 'prostateRadiology', component: ProstateRadiologyComponent },
      {
        path: 'interventionalRadiologyGuidance',
        component: InterventionalRadiologyGuidanceComponent,
      },
      { path: 'womensImaging', component: WomensImagingComponent },
      {
        path: 'musculoskeletalRadiology',
        component: MusculoskeletalRadiologyComponent,
      },
      {
        path: 'pediatricSportsInjuries',
        component: PediatricSportsInjuriesComponent,
      },
      { path: 'pediatricRadiology', component: PediatricRadiologyComponent },
      {
        path: 'oncologicalRadiology',
        component: OncologicalRadiologyComponent,
      },
      { path: 'bookAppointment', component: BookAppointmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'resetPassword', component: ResetPasswordComponent },
      { path: 'updatePassword', component: UpdatePasswordComponent },
      { path: 'varifyotp', component: VarifyOtpComponent },
      { path: 'neuroradiology', component: NeuroradiologyComponent },
      { path: 'brainTumors', component: BrainTumorsComponent },
      { path: 'backPain', component: BackPainComponent },
      { path: 'spinalTrauma', component: SpinalTraumaComponent },
      { path: 'brainAndSpine', component: BrainAndSpineComponent },
      { path: 'dementiaAlzheimer', component: DementiaAlzheimerComponent },
      {
        path: 'evaluationOfTinnitus',
        component: EvaluationOfTinnitusComponent,
      },
      { path: 'metabolicDisorders', component: MetabolicDisordersComponent },
      { path: 'epilepsyOrSeizures', component: EpilepsyOrSeizuresComponent },
      {
        path: 'cranialNerveDisorders',
        component: CranialNerveDisordersComponent,
      },
      { path: 'hypophysis', component: HypophysisComponent },
      { path: 'hydrocephalusAndCSF', component: HydrocephalusAndCSFComponent },
      { path: 'strokeAndItsMimics', component: StrokeAndItsMimicsComponent },
      {
        path: 'childWithAcuteNeurological',
        component: ChildAcuteNeurologicalComponent,
      },
      { path: 'headTrauma', component: HeadTraumaComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blogDetails', component: BlogDetailsComponent },
      { path: 'comparisonStudies', component: ComparisonStudiesComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'guidanceRadiologyTraining',
        component: GuidanceRadiologyTrainingComponent,
      },
      { path: 'ourTeam', component: OurTeamComponent },
      { path: 'primaryReads', component: PrimaryReadsComponent },
      { path: 'proBono', component: ProBonoComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'thankYou', component: ThankYouComponent },
      { path: 'error404', component: Error404Component },
    ],
  },
  {
    path: 'userDashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'userHome',
        pathMatch: 'full',
      },
      { path: 'userHome', component: UserHomeComponent },
      { path: 'userProfile', component: UserProfileComponent },
      { path: 'myReports', component: MyReportsComponent },
      { path: 'giveFeedback', component: GiveFeedbackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
