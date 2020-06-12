import { Component, OnInit } from '@angular/core';
import {IMAGE_FULL_CLASS, IMAGE_TWO_COLUMNS_LEFT_CLASS, IMAGE_TWO_COLUMNS_RIGHT_CLASS} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/belleville-showroom/';


@Component({
  selector: 'app-belleville-showroom',
  templateUrl: './belleville-showroom.component.html',
})
export class BellevilleShowroomComponent implements OnInit {

  headerImageData = {assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, imageName: 'header.jpg'};

  imageDatas = [
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-001.jpg', imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-002.jpg', imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`},
  ];

  projectTextualDatas = {
    title: '<span>JPO des ateliers d\'artistes de Belleville</span>',
    subtitle: null,
    description: '<span>À l’occasion des journées portes ouvertes des ateliers d’artistes de Belleville, Artame Gallery<br/>' +
      'souhaitait, en parallèle de son exposition, proposer au visiteurs un atelier participatif sur<br/>' +
      'le thème &#171; Bestiaire moderne &#171;. <br/><br/>' +
      'L’objectif était d’inviter à la création, les habitants du quartier, dans un esprit convivial.</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>Artame Gallery</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Création et organisation d\'un atelier participatif <br/>' +
      'Création de support de communication (flyers)</span>',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
