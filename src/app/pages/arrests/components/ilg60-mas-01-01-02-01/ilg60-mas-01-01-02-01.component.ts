import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Ilg60Mas01010201Config } from "./ilg60-mas-01-01-02-01.config";
import { FormBuilder } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MasPersonService } from "../../services";
import { Comments, MasPerson, Hero, HEROES } from "../../models";

@Component({
  selector: "app-ilg60-mas-01-01-02-01",
  templateUrl: "./ilg60-mas-01-01-02-01.component.html",
  styleUrls: ["./ilg60-mas-01-01-02-01.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class Ilg60Mas01010201Component
  extends Ilg60Mas01010201Config
  implements OnInit {

  public results: any;

  /////////// STARTR DATA TEST Tutorials ////////////
  customers = [{ value: "Ebony" }, { value: "Chiho" }];
  customer = "Padma";

  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  @Input() heros?: Hero
  /////////// END DATA TEST Tutorials ////////////

  constructor(
    private fb: FormBuilder,
    private _Masperson: MasPersonService,
    private http: HttpClient
  ) {
    super();
  }

  dataList: MasPerson[];
  Istcomments: Comments[];

 

  ngOnInit() {
    this.http.get("/assets/data/dataPersonMock.json").subscribe(
      (data) => {
        this.results = data;
        // this.results = data["results"];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("An error occurred:", err.error.message);
        } else {
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
        }
      }
    );

    this._Masperson.getcomments().subscribe(
      (resp) => {
        this.Istcomments = resp;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("An error occurred:", err.error.message);
        } else {
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
        }
      }
    );
  }

  pageChanges(event: any) {
    const list = this.dataList.slice(event.startIndex - 1, event.endIndex);
    this.setItemFormArray(list, "Array");
  }

  private setItemFormArray(array: any[], formControl: string) {
    if (array !== undefined && array.length) {
      const itemFGs = array.map((item) => this.fb.group(item));
      const itemFormArray = this.fb.array(itemFGs);
      this.formGroup.setControl(formControl, itemFormArray);
    }
  }
}
