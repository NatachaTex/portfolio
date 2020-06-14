import { Component, OnInit } from '@angular/core';
import {IMAGE_FULL_CLASS, IMAGE_TWO_COLUMNS_LEFT_CLASS, IMAGE_TWO_COLUMNS_RIGHT_CLASS} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/buying-addiction/';


@Component({
  selector: 'app-buying-addiction',
  templateUrl: './buying-addiction.component.html',
})
export class BuyingAddictionComponent implements OnInit {
  headerImageData = {
    assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
    imageName: 'header.jpg',
    imageObjectPositionLeftSidePercentage: null
  };

  imageDatas = [
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-001.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-002.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-003.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-004.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-005.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-006.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-007.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
  ];

  projectTextualDatas = {
    title: '<span>Campagne de sensibilisation à l\'addiction aux achats</span>',
    subtitle: null,
    description: '<span>L’hyperconsommation est une addiction qui consiste à acheter de manière impulsive, en quantités <br/>' +
    'démesurées, dépassant le simple besoin. La cause de cette addiction est le contexte actuel, notre <br/>' +
    'économie est basée sur le marché et l’appel à la consommation est permanent. Elle est aussi liée <br/>' +
    'aux caractères et difficultés de chacun. <br/><br/>' +
    'Cette campagne est tournée vers l\'idée de bonheur. Le message transmit est que la consomma- <br/>' +
    'tion ne rend pas heureux, elle est au contraire dans le cas de l\'addiction, une source de désillusion. <br/> ' +
    'En effet, à travers l\'acte d\'achat les dépendants pense pouvoir soulager un mal être ou combler <br/>' +
    'un manque, ors il ne fait qu\'aggraver leur situation. Le bonheur, les relations humaines sont des  <br/>' +
    'choses qui ne s\'achètent pas.</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>Association Les débiteurs anonymes -<br/>' +
      'Projet d\'étude</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Création d\'une campagne <br/>' +
      'de sensibilisation (nom, slogan, univers)<br/>' +
      'Création de support de communication</span>',

  };
  constructor() { }

  ngOnInit(): void {
  }

}
