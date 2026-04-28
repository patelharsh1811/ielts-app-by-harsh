import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-test',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './reading-test.html',
  styleUrl: './reading-test.css',
})
export class ReadingTest implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/reading.json').subscribe((res) => {
      this.data = res;
    });
  }
}