import { AddTodoPage } from './../../add-todo/add-todo.page';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { Data } from '../../data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public todos = [];

  value = 10;
  constructor(
    private authService: AuthenticationService,
    private storage: Storage,
    private modalController: ModalController,
    public dataService: Data) {
    this.getData();
  }


  ngOnInit() {
    this.getData();
    this.dataService.save(this.todos);
  }


  logout() {
    this.authService.logout();
  }

  doRefresh(event) {
    this.getData();


    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  getData() {
    this.dataService.getData().then((todos) => {

      if (todos) {
        this.todos = todos;
      }
    });
  }

  async addTodo() {
    const modal = await this.modalController.create({
      component: AddTodoPage,
      componentProps: {
        custom_id: this.value
      }
    });
    await modal.present();
  }
}
