import { Component, OnInit } from '@angular/core';
import { PaginationDummyService } from 'src/app/services/pagination-dummy.service';

@Component({
  selector: 'app-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss'],
})
export class NgxInfiniteScrollComponent implements OnInit {
  items: string[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private paginationService: PaginationDummyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  toggleLoading = () => (this.isLoading = !this.isLoading);

  loadData = () => {
    this.toggleLoading();
    this.paginationService
      .getItems(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response) => (this.items = response),
        error: (error) => console.error(error),
        complete: () => {
          this.toggleLoading();
        },
      });
  };

  appendData = () => {
    this.toggleLoading();
    this.paginationService
      .getItems(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (response) => (this.items = this.items.concat(response)),
        error: (error) => console.error(error),
        complete: () => {
          this.toggleLoading();
        },
      });
  }

  onScroll = () => {
    this.currentPage++;
    this.appendData();
  }
}
