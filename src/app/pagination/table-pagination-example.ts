import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrl: 'table-pagination-example.scss',
  templateUrl: 'table-pagination-example.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationExample implements AfterViewInit {
  displayedColumns: string[] = ['name', 'weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Juan', weight: 10079},
  {name: 'Pedro', weight: 40026},
  {name: 'Gael', weight: 6941},
  {name: 'Fernanda', weight: 90122},
  {name: 'Sofia', weight: 10811},
  {name: 'Odalys', weight: 120107},
  {name: 'Mario', weight: 140067},
  {name: 'Ervey', weight: 159994},
  {name: 'Kevin', weight: 189984},
  {name: 'Jose', weight: 201797},
  {name: 'Julio', weight: 229897},
  {name: 'Andres', weight: 24305},
  {name: 'Cristian', weight: 269815},
  {name: 'Jatzel', weight: 280855},
  {name: 'Maria', weight: 309738},
  {name: 'Andrei', weight: 32065},
  {name: 'Carlos', weight: 35453},
  {name: 'Amelia', weight: 39948},
  {name: 'Clarisa', weight: 390983},
  {name: 'Sara', weight: 40078},
];
