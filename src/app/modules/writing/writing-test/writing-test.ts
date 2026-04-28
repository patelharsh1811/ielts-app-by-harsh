import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-test',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './writing-test.html',
  styleUrl: './writing-test.css',
})
export class WritingTest implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/writing.json').subscribe((res) => {
      this.data = res;
    });
  }
}