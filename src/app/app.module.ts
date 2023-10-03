import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { AboutComponent } from './components/resources/about/about.component';
import { OurTeamComponent } from './components/resources/our-team/our-team.component';
import { ProBonoComponent } from './components/resources/pro-bono/pro-bono.component';
import { PrimaryReadsComponent } from './components/resources/primary-reads/primary-reads.component';
import { ComparisonStudiesComponent } from './components/resources/comparison-studies/comparison-studies.component';
import { GuidanceRadiologyTrainingComponent } from './components/resources/guidance-radiology-training/guidance-radiology-training.component';
import { ContactComponent } from './components/resources/contact/contact.component';
import { BlogComponent } from './components/resources/blog/blog.component';
import { TestimonialComponent } from './components/resources/testimonial/testimonial.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { Error404Component } from './components/error404/error404.component';
import { DefaultHomeComponent } from './components/default-home/default-home.component';
import { UserProfileComponent } from './components/user-dashboard/user-profile/user-profile.component';
import { UserHomeComponent } from './components/user-dashboard/user-home/user-home.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MyReportsComponent } from './components/user-dashboard/my-reports/my-reports.component';
import { GiveFeedbackComponent } from './components/user-dashboard/give-feedback/give-feedback.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './components/auth/update-password/update-password.component';
import { VarifyOtpComponent } from './components/auth/varify-otp/varify-otp.component';
import { RegisterNowComponent } from './components/register-now/register-now.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GetSecondOpinionComponent } from './components/get-second-opinion/get-second-opinion.component';
import { BottomOfPagesComponent } from './components/shared/bottom-of-pages/bottom-of-pages.component';
import { FaqComponent } from './components/resources/faq/faq.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { ManageProfileComponent } from './components/admin/manage-profile/manage-profile.component';
import { ViewReportsComponent } from './components/admin/view-reports/view-reports.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { PatientFeedbackComponent } from './components/admin/patient-feedback/patient-feedback.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BlogDetailsComponent } from './components/resources/blog/blog-details/blog-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { getBaseUrl } from "./config";
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { HomeTestComponent } from './components/home-test/home-test.component';
import { InnerTestComponent } from './components/inner-test/inner-test.component';
import { CookiePolicyComponent } from './components/others/cookie-policy/cookie-policy.component';
import { ImprintComponent } from './components/others/imprint/imprint.component';
import { PrivacyPolicyComponent } from './components/others/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/others/terms-and-conditions/terms-and-conditions.component';
import { RadiologySidebarComponent } from './components/shared/radiology-sidebar/radiology-sidebar.component';
import { TumorComponent } from './components/brain/tumor/tumor.component';
import { AuthSidebarComponent } from './components/auth/auth-sidebar/auth-sidebar.component';
import { RadiologyComponent } from './components/radiology/radiology/radiology.component';
import { PricingComponent } from './components/resources/pricing/pricing.component';
import { ClientManagementComponent } from './components/admin/client-management/client-management.component';
import { OrdersManagementComponent } from './components/admin/orders-management/orders-management.component';
import { RevenueComponent } from './components/admin/revenue/revenue.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EventsComponent } from './components/resources/events/events.component';
import { TopBannerComponent } from './components/shared/top-banner/top-banner.component';
import { PackagesComponent } from './components/admin/packages/packages.component';
import { TestimonialBlogComponent } from './components/shared/testimonial-blog/testimonial-blog.component';
import { HeadAndNeckComponent } from './components/neuroradiology/head-and-neck/head-and-neck.component';

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
    PasswordPatternDirective,
    AboutComponent,
    OurTeamComponent,
    ProBonoComponent,
    PrimaryReadsComponent,
    ComparisonStudiesComponent,
    GuidanceRadiologyTrainingComponent,
    ContactComponent,
    BlogComponent,
    TestimonialComponent,
    ThankYouComponent,
    Error404Component,
    DefaultHomeComponent,
    UserProfileComponent,
    UserHomeComponent,
    ClickOutsideDirective,
    MyReportsComponent,
    GiveFeedbackComponent,
    ResetPasswordComponent,
    UpdatePasswordComponent,
    VarifyOtpComponent,
    RegisterNowComponent,
    NotFoundComponent,
    GetSecondOpinionComponent,
    BottomOfPagesComponent,
    FaqComponent,
    AdminComponent,
    AdminHomeComponent,
    ManageProfileComponent,
    ViewReportsComponent,
    AppointmentsComponent,
    PatientFeedbackComponent,
    BlogDetailsComponent,
    FilterPipe,
    UserReportsComponent,
    HomeTestComponent,
    InnerTestComponent,
    CookiePolicyComponent,
    ImprintComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RadiologySidebarComponent,
    TumorComponent,
    AuthSidebarComponent,
    RadiologyComponent,
    PricingComponent,
    ClientManagementComponent,
    OrdersManagementComponent,
    RevenueComponent,
    PaymentComponent,
    EventsComponent,
    TopBannerComponent,
    PackagesComponent,
    TestimonialBlogComponent,
    HeadAndNeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxUiLoaderModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: "BASE_URL", useFactory: getBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
