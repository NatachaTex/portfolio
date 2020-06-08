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
    { title: 'Catalogue de formations & autres supports de communication - Dulala', projectType: 'print', imageName: 'dulala_thumb' },
    { title: 'Campagne de sensibilisation à l\'addiction aux achats', projectType: 'print', imageName: 'hyperconso_thumb' },
    { title: 'évènement 400 ans de La Fontaine - Commune de Château-Thierry', projectType: 'print', imageName: 'lafontaine_thumb' },
    { title: 'Naming & identité visuelle - écobul', projectType: 'visual', imageName: 'ecocotte_thumb' },
    { title: 'Identité visuelle & charte graphique - La cité du développement durable', projectType: 'visual', imageName: 'cdd_thumb' },
    { title: 'Réalité Parallèle micro-édition - Les éditions Extensibles', projectType: 'edit', imageName: 'ourcq_thumb' },
    { title: 'Journée portes ouvertes des ateliers d\'artistes de Belleville - Artame Gallery', projectType: 'print', imageName: 'artame_thumb' },
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
