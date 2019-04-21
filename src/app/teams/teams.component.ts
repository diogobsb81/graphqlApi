import { Component, OnInit } from '@angular/core';
import { Teams } from './teams.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ToastrService } from 'ngx-toastr';

const TeamsQuery = gql`
  query Teams {
    getTeams {
      id,name,city,division,full_name,abbreviation,conference
    }
  }
`;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsList: Teams[] = [];
  searchString: string;
  page: number;
  pageSize: number;
  collectionSize: number;

  constructor(private apollo: Apollo, private toastrService: ToastrService ) {
    this.page = 1;
    this.pageSize = 10;
   }

  ngOnInit() {
    this.getTeams();
  }
  async getTeams() {
    return await this.apollo.watchQuery<Teams>({
      query: TeamsQuery
    })
      .valueChanges
      .subscribe(({data}) => {
        this.teamsList = data.getTeams;
        this.collectionSize = data.getTeams.length;
        this.teamsList.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        return this.teamsList;
      },
      error => {
        this.toastrService.error(`Connection error with server ${error}`);
      });
  }

}
