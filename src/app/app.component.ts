import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'helloAngular';
  list:any[] = [];

  constructor(private http:HttpClient) {}

  onSubmit(data) {
    this.http.post<any>('http://localhost:3000/api', data).subscribe( result => {
      this.getFeedback()
    });
  } 

  getFeedback() {
    this.http.get<any>('http://localhost:3000/api').subscribe(result=> {
      //  alert(JSON.stringify(result))
      this.list = result.data
    })
  }

  ngOnInit(): void {
    this.getFeedback()
  }
}
