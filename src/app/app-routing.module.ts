import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MyComponentComponent } from "./my-component/my-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' }, // Default route
    { path: 'app', component: MyComponentComponent }, // Route for MyComponent
    { path: 'home', component: HomeComponentComponent }
];

@NgModule({


    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { };
