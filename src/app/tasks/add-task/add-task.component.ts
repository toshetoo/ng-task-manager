import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { TasksService } from '../tasks.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import TaskInterface from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskForm: FormGroup;
  constructor(private fb: FormBuilder,
              private tasksService: TasksService,
              private router: Router,
              private route: ActivatedRoute) { 

                this.route.params.subscribe((params) => {
                  console.log(params);
            
                  if (params.id) {
                    this.tasksService.getById(params.id)
                    .subscribe((task) => {
                      this.createForm();
            
                      this.taskForm.patchValue({...task});
                      // this.userForm.name = user.name;
                      // this.userForm.password = user.paswwrod;
                    });
                  }
                });
                this.createForm();
              }

  ngOnInit() {
  }

  private createForm(): void {
    this.taskForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      creationDate: [''],
      assignees: ['']
    });
  }

  onFormSubmit(event): void {
    const newTask = { ...this.taskForm.value} as TaskInterface;
    newTask.assignees = newTask.assignees || [];
    newTask.creationDate = new Date().toString();
    this.tasksService.addTask(newTask)
    .subscribe(() => {
      console.log('USER CREATED');
      this.router.navigateByUrl('tasks/list');
    })
  }

  get isFormValid(): boolean {
    return this.taskForm.valid;
  }

  get title() {
    return this.taskForm.get('title');
  }

  get description() {
    return this.taskForm.get('description');
  }

  get creationDate() {
    return this.taskForm.get('creationDate');
  }

}
