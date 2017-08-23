
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {TaskFormComponent} from './task-form/task-form.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskService} from "./shared/task.service";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/data.service";

@NgModule({
  imports:      [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent, TaskFormComponent, TaskListComponent, TaskItemComponent],
  providers:    [TaskService],
  bootstrap:    [AppComponent]
})

export class AppModule {

}
