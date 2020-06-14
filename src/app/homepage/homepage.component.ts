import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import {DeviceDetectorService} from 'ngx-device-detector';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  public menuItems = [
    { name: 'Tout', projectType: 'all', isActive: true },
    { name: 'Identité visuelle', projectType: 'visual', isActive: false },
    { name: 'Édition', projectType: 'edit', isActive: false },
    { name: 'Évènement', projectType: 'event', isActive: false },
    { name: 'Print', projectType: 'print', isActive: false },
  ];

  private initialProjectDataSource = [
    {
      title: '<span>Catalogue de formations & divers supports de communication</span>',
      place: 'Dulala',
      date: '2020',
      projectType: ['print'],
      imageName: 'dulala_thumb',
      routerLinkName: '/projets/dulala'
    },
    {
      title: '<span>Campagne de sensibilisation <br/>à l\'addiction aux achats</span>',
      place: null,
      date: '2020',
      projectType: ['print'],
      imageName: 'hyperconso_thumb',
      routerLinkName: '/projets/'
    },
    {
      title: '<span>Évènement 400 ans de La Fontaine</span>',
      place: 'Château-Thierry',
      date: '2020',
      projectType: ['print', 'event'],
      imageName: 'lafontaine_thumb',
      routerLinkName: '/projets/la-fontaine'
    },
    {
      title: '<span>Naming & identité visuelle</span>',
      place: 'Écobul',
      date: '2019',
      projectType: ['visual'],
      imageName: 'ecocotte_thumb',
      routerLinkName: null
    },
    {
      title: '<span>Identité visuelle & <br/>charte graphique</span>',
      place: 'Cité du développement durable',
      date: '2019',
      projectType: ['visual'],
      imageName: 'cdd_thumb',
      routerLinkName: 'projets/cite-developpement-durable'
    },
    {
      title: '<span>Réalité Parallèle micro-édition</span>',
      place: 'Les éditions extensibles',
      date: '2019',
      projectType: ['edit'],
      imageName: 'ourcq_thumb',
      routerLinkName: '/projets/realite-parallele'
    },
    {
      title: '<span>JPO des ateliers d\'artistes<br/> de Belleville</span>',
      place: 'Artame Gallery',
      date: '2018',
      projectType: ['print', 'event'],
      imageName: 'artame_thumb',
      routerLinkName: '/projets/jpo-ateliers-belleville'
    },
  ];

  public masonryItems = null;

  isDesktop = true;



  public masonryOptions: NgxMasonryOptions = {
    gutter: 82,
    fitWidth: true,
  };

  constructor( private deviceService: DeviceDetectorService) {
    this.isDesktop = deviceService.isDesktop();
    this.masonryItems = this.initialProjectDataSource;
  }

  ngOnInit() {

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
      return project.projectType.includes(projectTypeToShow);
    });

    if (this.masonryItems.length === 0) {
      this.masonryItems = this.initialProjectDataSource;
      this.masonry.reloadItems();
      this.masonry.layout();
    }

  }

}
