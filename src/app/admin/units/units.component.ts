import { Unit } from './model/unit';
import { UnitService } from './service/unit.service';
import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units: Unit[] = [];
  unit: Unit = new Unit();
  filterText: string = "";

  constructor(
    private unitService: UnitService,
    private errorService: ErrorService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUnits();
  }
  getUnits() {
    this.unitService.getUnits().subscribe(
      (result: Unit[]) => {
        this.units = result;
      }, (error) => {
        this.errorService.errorHandler(error);
      }
    );
  }

  deleteUnit(unitId: string) {
    this.unitService.removeUnit(unitId).subscribe(
      (result: Unit) => {
        this.units = this.units.filter(u => u._id !== unitId);
        this.toastrService.success('Birim Başarıyla silindi!.', 'Başarılı');
        this.getUnits();
      }, (error) => {
        this.errorService.errorHandler(error);
      }
    );

  }



}

