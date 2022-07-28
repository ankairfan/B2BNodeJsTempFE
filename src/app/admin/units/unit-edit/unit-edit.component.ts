import { UnitService } from './../service/unit.service';
import { Unit } from './../model/unit';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.scss']
})
export class UnitEditComponent implements OnInit {

  unitId: string;
  unit: Unit;
  unitForm: FormGroup;
  title: string;
  btnText: string;
  type: string;

  constructor(private route: ActivatedRoute, private router: Router, private unitService: UnitService) { }

  ngOnInit(): void {
    this.unitId = this.route.snapshot.paramMap.get("id");

    if (this.unitId == null) {
      this.title = "Birim ekle";
      this.btnText = "Ekle";
      this.type = "add";
    } else {
      this.title = "Birim düzenle";
      this.btnText = "Güncelle";
      this.type = "edit";
      this.unitService.getUnitById(this.unitId).subscribe(result => {
        this.unit = result;
        this.unitForm.controls["name"].setValue(this.unit.name);

      });
  }
    this.unitForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.unitForm.valid) {
      if (this.type == "add") {
        this.unitService
          .addUnit(this.unitForm.value)
          .subscribe(result => {
            this.router.navigateByUrl("/admin/units");
          });
      }
      else {
        this.unitService
          .updateUnit(this.unitId, this.unitForm.value)
          .subscribe(result => {
            this.router.navigateByUrl("/admin/units");
          });
      }
    }
  }


}

