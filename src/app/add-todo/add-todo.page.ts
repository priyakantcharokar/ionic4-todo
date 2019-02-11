import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Data } from '..//data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  todos = [];
  title: string;
  description: string;

  constructor(public navCtrl: NavController, public dataService: Data, private router: Router, public modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.dataService.getData().then((todos) => {

      if (todos) {
        this.todos = todos;
      }
    });
  }

  saveItem() {
    this.todos.push(this.title);
    this.dataService.save(this.todos);

    this.router.navigate(['members', 'dashboard']);
    this.modalCtrl.dismiss();
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
