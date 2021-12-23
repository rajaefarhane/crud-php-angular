import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListeStudentComponent } from './components/liste-student/liste-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'AddStudentComponent'},
  {path:'add-student', component: AddStudentComponent},
  {path:'updat-student/:id', component: UpdateStudentComponent},
  {path:'liste-student', component: ListeStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
