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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardForUserDashboardGuard } from './guards/auth-guard-for-user-dashboard.guard';
import { GetSecondOpinionComponent } from './components/get-second-opinion/get-second-opinion.component';
import { FaqComponent } from './components/resources/faq/faq.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { ManageProfileComponent } from './components/admin/manage-profile/manage-profile.component';
import { PatientFeedbackComponent } from './components/admin/patient-feedback/patient-feedback.component';
import { ViewReportsComponent } from './components/admin/view-reports/view-reports.component';
import { AdminRoutesGuardGuard } from './guards/admin-routes-guard.guard';
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { HomeTestComponent } from './components/home-test/home-test.component';
import { InnerTestComponent } from './components/inner-test/inner-test.component';
import { PrivacyPolicyComponent } from './components/others/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './components/others/cookie-policy/cookie-policy.component';
import { ImprintComponent } from './components/others/imprint/imprint.component';
import { TermsAndConditionsComponent } from './components/others/terms-and-conditions/terms-and-conditions.component';
import { TumorComponent } from './components/brain/tumor/tumor.component';
import { TheRoleOfSpecialistNeuroradioloComponent } from './components/resources/blog/the-role-of-specialist-neuroradiolo/the-role-of-specialist-neuroradiolo.component';
import { ObtainingSecondOpinionComponent } from './components/resources/blog/obtaining-second-opinion/obtaining-second-opinion.component';
import { LessonsLearnedFromComponent } from './components/resources/blog/lessons-learned-from/lessons-learned-from.component';
import { RadiologistsReadAcrossComponent } from './components/resources/blog/radiologists-read-across/radiologists-read-across.component';
import { TeamMemberSonkeComponent } from './components/resources/our-team/team-member-sonke/team-member-sonke.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },
      { path: 'home-test', component: HomeTestComponent },
      { path: 'inner-test', component: InnerTestComponent },

      // { path: 'about-us', component: AboutUsComponent }, //comenting on 11th may
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
      // { path: 'bookAppointment', component: BookAppointmentComponent },
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
      { path: 'theRoleOfSpecialistNeuroradiol', component: TheRoleOfSpecialistNeuroradioloComponent },
      { path: 'ObtainingSecondOpinion', component: ObtainingSecondOpinionComponent },
      { path: 'LessonsLearnedFrom', component: LessonsLearnedFromComponent },
      { path: 'RadiologistsReadAcross', component: RadiologistsReadAcrossComponent },
      { path: 'comparisonStudies', component: ComparisonStudiesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'faq', component: FaqComponent },
      {
        path: 'guidanceRadiologyTraining',
        component: GuidanceRadiologyTrainingComponent,
      },
      { path: 'ourTeam', component: OurTeamComponent },
      { path: 'primaryReads', component: PrimaryReadsComponent },
      { path: 'MemberSonke', component: TeamMemberSonkeComponent },
      { path: 'proBono', component: ProBonoComponent },
      { path: 'testimonial', component: TestimonialComponent },
      { path: 'GetSecondOpinion', component: GetSecondOpinionComponent },
      { path: 'cookie-policy', component: CookiePolicyComponent },
      { path: 'imprint', component: ImprintComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-and-condition', component: TermsAndConditionsComponent },
      { path: 'thankYou', component: ThankYouComponent },
      { path: 'error404', component: Error404Component },
      { path: 'tumor', component: TumorComponent },
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
      { path: 'bookAppointment', component: BookAppointmentComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'adminHome',
        pathMatch: 'full',
      },
      { path: 'adminHome', component: AdminHomeComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'manageProfile', component: ManageProfileComponent },
      { path: 'patientFeedback', component: PatientFeedbackComponent },
      { path: 'viewReports', component: ViewReportsComponent },
      { path: 'userReports/:id', component: UserReportsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
