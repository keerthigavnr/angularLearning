import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MyComponentComponent } from "./my-component/my-component.component";
import { HomeComponentComponent } from "./home-component/home-component.component";
import { FormsModule } from "@angular/forms";
@NgModule(
    {
        declarations: [AppComponent, MyComponentComponent, HomeComponentComponent],
        imports: [BrowserModule, AppRoutingModule, FormsModule],
        bootstrap: [AppComponent]
    }
)

export class AppModule { }