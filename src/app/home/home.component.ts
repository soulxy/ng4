import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{ DialogService } from '../@common/service/dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  name: string
  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.name) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('确认离开?');
  }

}
