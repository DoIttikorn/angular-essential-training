import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
@NgModule({
  imports: [BrowserModule], // is used to import other modules
  declarations: [AppComponent], // is used to declare components, directives, pipes
  bootstrap: [AppComponent], // is used to specify the root component, will be used to bootstrap the application
})
export class AppModule {}
