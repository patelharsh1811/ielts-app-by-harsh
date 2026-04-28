import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking-test',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './speaking-test.html',
  styleUrl: './speaking-test.css',
})
export class SpeakingTest implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/speaking.json').subscribe((res) => {
      this.data = res;
    });
  }
}