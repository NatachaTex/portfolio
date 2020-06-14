import { Component, OnInit } from '@angular/core';
import {IMAGE_CENTERED_CLASS, IMAGE_FULL_CLASS, IMAGE_SMALL_CLASS} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/sustainable-forum/';


@Component({
  selector: 'app-sustainable-forum',
  templateUrl: './sustainable-forum.component.html',
})
export class SustainableForumComponent implements OnInit {

  headerImageData = {
    assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
    imageName: 'header.jpg',
    imageObjectPositionLeftSidePercentage: null
  };

  imageDatas = [
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-001.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_SMALL_CLASS} ${IMAGE_CENTERED_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-002.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-003.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-004.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
  ];

  projectTextualDatas = {
    title: '<span>La cité du développement durable</span>',
    subtitle: null,
    description: '<span>Implanté au cœur du jardin d’agronomie tropicale de Paris, La cité du développement durable<br/>' +
      'est un pôle unique en France, qui regroupe des organisations actrices du développement durable :<br/>' +
      'instituts de recherches, fonds de dotations, entreprises de l’économie sociale et solidaire...<br/><br/>' +
      'Leur objectif est de réaliser ensemble des actions concrètes au service des transitions écologiques.<br/><br/>' +
      'La cité du développement durable se caractérise comme un lieu de partage, de capitalisation et <br/>' +
      'd’approfondissement scientifique. L’identité visuelle proposée s’adapte à ses différents secteurs <br/>' +
      'et champs d\'actions, tout en évoquant ses valeurs : respect de l’environnement, réunion, échange,<br/>' +
      'et collaboration.</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>La cité du développement durable -<br/>' +
      'Projet d\'étude</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Refonte du logotype<br/>' +
      'Déclinaison du logotype<br/>' +
      'Charte graphique</span>',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
