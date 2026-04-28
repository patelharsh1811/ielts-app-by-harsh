import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-test',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './listening-test.html',
  styleUrl: './listening-test.css',
})
export class ListeningTest implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/data/listening.json').subscribe((res) => {
      this.data = res;
    });
  }
}