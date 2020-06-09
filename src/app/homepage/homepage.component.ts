import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  public menuItems = [
    { name: 'Tout', projectType: 'all', isActive: true },
    { name: 'Edition', projectType: 'edit', isActive: false },
    { name: 'Identité visuelle', projectType: 'visual', isActive: false },
    { name: 'Print', projectType: 'print', isActive: false },
    // { name: 'Digital', projectType: 'tech', isActive: false },
  ];

  private initialProjectDataSource = [
    {
      title: 'Catalogue de formations & divers supports de communication',
      place: 'Dulala',
      date: '2020',
      projectType: 'print',
      imageName: 'dulala_thumb'
    },
    {
      title: 'Campagne de sensibilisation à l\'addiction aux achats',
      place: null,
      date: '2020',
      projectType: 'print',
      imageName: 'hyperconso_thumb'
    },
    {
      title: 'Évènement 400 ans de La Fontaine',
      place: 'Château-Thierry',
      date: '2020',
      projectType: 'print',
      imageName: 'lafontaine_thumb'
    },
    {
      title: 'Naming & identité visuelle',
      place: 'Écobul',
      date: '2019',
      projectType: 'visual',
      imageName: 'ecocotte_thumb'
    },
    {
      title: 'Identité visuelle & charte graphique',
      place: 'Cité du développement durable',
      date: '2019',
      projectType: 'visual',
      imageName: 'cdd_thumb'
    },
    {
      title: 'Réalité Parallèle micro-édition',
      place: 'Les éditions extensibles',
      date: '2019',
      projectType: 'edit',
      imageName: 'ourcq_thumb'
    },
    {
      title: 'JPO des ateliers d\'artistes de Belleville',
      place: 'Artame Gallery',
      date: '2018',
      projectType: 'print',
      imageName: 'artame_thumb'
    },
  ];

  public masonryItems = null;



  public masonryOptions: NgxMasonryOptions = {
    gutter: 50,
    fitWidth: true
  };

  constructor() { }

  ngOnInit() {
    this.masonryItems = this.initialProjectDataSource;
  }

  changeActiveItem(itemTypeIndex) {
    let projectTypeToShow = '';

    this.menuItems.map((menuItem, key) => {
      menuItem.isActive = itemTypeIndex === key;

      if (itemTypeIndex === key ) {
        projectTypeToShow = menuItem.projectType;
      }
    });


    this.masonryItems = this.initialProjectDataSource.filter((project) => {
      return project.projectType === projectTypeToShow;
    });

    if (this.masonryItems.length === 0) {
      this.masonryItems = this.initialProjectDataSource;
      this.masonry.reloadItems();
      this.masonry.layout();
    }

  }

}
