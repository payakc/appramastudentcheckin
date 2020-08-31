import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './backend/add-student/add-student.component';
import { EditStudentComponent } from './backend/edit-student/edit-student.component';
import { StudentListComponent } from './backend/student-list/student-list.component';
import { StudentUploadComponent } from './backend/student-upload/student-upload.component';
import { AddSurveygroupComponent } from './backend/add-surveygroup/add-surveygroup.component';
import { EditSurveygroupComponent } from './backend/edit-surveygroup/edit-surveygroup.component';
import { SurveygroupListComponent } from './backend/surveygroup-list/surveygroup-list.component';
import { SurveyUploadComponent } from './backend/survey-upload/survey-upload.component';
import { ReportComponent } from './backend/report/report.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AddUserComponent } from './backend/add-user/add-user.component';
import { EditUserComponent } from './backend/edit-user/edit-user.component';
import { UserListComponent } from './backend/user-list/user-list.component';
import { LoginComponent } from './backend/login/login.component';
import { ManagerComponent } from './backend/manager/manager.component';
import { CheckinComponent } from './checkin/checkin.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule, Routes } from '@angular/router';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

/*
const appRoutes: Routes = [
   //{ path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
   { path: 'checkin', component: CheckinComponent },
   { path: 'backend', component: LoginComponent },
   { path: '**', component: PagenofoundComponent }
   //,{ path: 'edit-student/:id', component: EditStudentComponent }
 ];
*/
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    StudentUploadComponent,
    AddSurveygroupComponent,
    EditSurveygroupComponent,
    SurveygroupListComponent,
    SurveyUploadComponent,
    ReportComponent,
    DashboardComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    LoginComponent,
    ManagerComponent,
    CheckinComponent,
    PagenofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    NgxPaginationModule,
    ToastrModule.forRoot()
   // ,RouterModule.forRoot(routes)
   //,RouterModule.forRoot(appRoutes,{ enableTracing: true } // <-- debugging purposes only set true)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
