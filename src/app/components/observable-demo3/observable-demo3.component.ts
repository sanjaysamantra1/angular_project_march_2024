import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, exhaustMap, fromEvent, map, switchMap } from 'rxjs';

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}

@Component({
  selector: 'app-observable-demo3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {
  searchResult$!: Observable<PeopleData>;

  searchBox = new FormControl();
  searchFormGroup = new FormGroup({
    search: this.searchBox,
  });

  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => this.httpClient.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((x) => console.log(x));
  }

  constructor(private httpClient: HttpClient) {
    this.exhaustMapDemo();
  }

  ngOnInit() {

    this.searchResult$ = this.searchBox.valueChanges.pipe(
      switchMap((term) =>
        this.httpClient.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
        ({
          name: response.name,
          birthYear: response.birth_year,
          height: Number(response.height),
          weight: Number(response.mass),
          eyeColor: response.eye_color,
        } as PeopleData)
      )
    );
  }
}
