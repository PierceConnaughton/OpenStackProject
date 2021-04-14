import { Component, OnInit } from '@angular/core';
import {IMonitor} from '../../../../model/monitor';
import { MonitorService  }  from '../../../../Services/monitor.service'
import { OrderByPipe } from '../../../../order-by.pipe';
import {NgAuthService} from '../../../../ng-auth.service';


@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css']
})
export class MonitorListComponent implements OnInit {

  monitorList: IMonitor[];

  message: string;

  showMonitorForm: boolean = false;

  currentMonitor : IMonitor;

  deleteMonitorBool: boolean = false;

  userEmail: string = "partypierce1234@gmail.com";

  // search text property
  searchTextMonitorID: string;
  searchTextBrand: string;

  searchTextVersion: string;
  searchTextColor: string;

  order: string = 'monitorID';
  reverse: boolean = false;

  constructor(private monitorService: MonitorService, public ngAuthService: NgAuthService) { }

  ngOnInit(): void {


    //gets the list of monitors
    this.monitorService.getMonitors().subscribe({
      next: (value: IMonitor[] )=> this.monitorList = value,
      complete: () => console.log('monitor service finished'),
      error: (mess) => this.message = mess
    })
  }

  loadMonitors(){
    this.monitorService.getMonitors().subscribe({
      next: (value: IMonitor[] )=> this.monitorList = value,
      complete: () => console.log('monitor service finished'),
      error: (mess) => this.message = mess
    });
  }


  clicked (monitor: IMonitor): void {
    this.currentMonitor = monitor;
  }

  openCreateMonitor(): void {
    this.currentMonitor = null;
    this.showMonitorForm = true;
    
  }

  openEditMonitor(): void{
    this.showMonitorForm = true;
    
  }

  openDeleteMonitor(id: string):void {
    this.deleteMonitorBool = true;
    console.log('need to delete monitor with id '+ this.currentMonitor.id);
    this.deleteMonitor(this.currentMonitor.id)
    this.loadMonitors();
  }



  monitorFormClose(monitor: IMonitor): void{
    this.showMonitorForm = null;
    console.table(monitor);

    if(monitor == null){
      this.currentMonitor = null;
    }

    else if(this.currentMonitor == null){
      this.createNewMonitor(monitor);
    }

    else{
      console.log('need to update monitor with id ' + this.currentMonitor.id);
      this.updateMonitor(this.currentMonitor.id, monitor)
    }

  }

  updateMonitor(id: string, monitor: IMonitor){
    this.monitorService.updateMonitor(id,monitor)
    .subscribe({
      next: monitor => this.message = "monitor has been modified",
      error: (err) => this.message = err
    });


    this.loadMonitors();
  }

  deleteMonitor(id: string){
    this.monitorService.deleteMonitor(id)
    .subscribe({
      next: monitor => this.message = "monitor has been deleted",
      error: (err) => this.message = err
    });

    this.loadMonitors();
  }



  createNewMonitor(newMonitor: IMonitor): void {
    console.log('adding new monitor ' + JSON.stringify(newMonitor));
    this.monitorService.createMonitor({ brand: 'dsfdsfa', ...newMonitor })
      .subscribe({
        next: monitor => {
          console.log(JSON.stringify(monitor) + ' has been added');
        this.message = "new monitor has been added";},
        error: (err) => this.message = err
      });
    this.showMonitorForm = false;

    
    this.loadMonitors();
  }

  isSelected(monitor: IMonitor): boolean{
    if (!monitor || !this.currentMonitor) {
      return false;
    }
    else {
      return monitor.monitorID === this.currentMonitor.monitorID;
    }
  }

  setOrder(value: string) {
    
      this.order = value;
    
    
  }

 

}


