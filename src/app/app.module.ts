import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';



//パスと対応するコンポーネントを書く
export const AppRoutes = [
    {path: "", component: TopComponentComponent},
    {path: "input_form", component: FormComponentComponent},
    {path: "result", component: ResultComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    TopComponentComponent,
    FormComponentComponent,
    ResultComponentComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
