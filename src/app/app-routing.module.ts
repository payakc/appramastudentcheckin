import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AppComponent } from './app.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';


const routes: Routes = [
  { path: '', redirectTo: '/checkin', pathMatch: 'full' },
 // { path: '', component: CheckinComponent }, 
   { path: 'checkin', component: CheckinComponent },
   { path: 'backend/login', component: LoginComponent },
   { path: '**', component: PagenofoundComponent }
   //,{ path: 'edit-student/:id', component: EditStudentComponent }
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
