import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { AppRoutingModule } from "./app-routing.module";
import { HerodetailsComponent } from "./herodetails/herodetails.component";

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        // AppRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule{}