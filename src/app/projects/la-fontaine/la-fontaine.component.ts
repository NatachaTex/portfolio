import { Component, OnInit } from '@angular/core';
import {IMAGE_FULL_CLASS, IMAGE_TWO_COLUMNS_LEFT_CLASS, IMAGE_TWO_COLUMNS_RIGHT_CLASS} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/la-fontaine/';


@Component({
  selector: 'app-la-fontaine',
  templateUrl: './la-fontaine.component.html',
})
export class LaFontaineComponent implements OnInit {
  headerImageData = {
    assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
    imageName: 'header.jpg',
    imageObjectPositionLeftSidePercentage: '77%'
  };

  imageDatas = [
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-001.jpg',
      pictureLegend: 'Signalétique du parcours',
      imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`
    },
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-002.jpg',
      pictureLegend: null,
      imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`
    },
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-003.jpg',
      pictureLegend: 'Dépliant guide du parcours recto',
      imageContainerClass: `${IMAGE_FULL_CLASS}`
    },
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-004.jpg',
      pictureLegend: 'Dépliant guide du parcours verso',
      imageContainerClass: `${IMAGE_FULL_CLASS}`
    },
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-005.jpg',
      pictureLegend: 'Affiches annonçant l\'évènement',
      imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`
    },
    {
      assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
      pictureName: 'picture-006.jpg',
      pictureLegend: null,
      imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`
    },
  ];

  projectTextualDatas = {
    title: '<span>400ème anniversaire de Jean de la Fontaine</span>',
    subtitle: null,
    description: '<span>À l\'occasion des 400 ans de la naissance de Jean de La Fontaine, Château-Thierry, commune<br/>' +
    'qui a vu naître l\'auteur, lance un appel à projet pour trouver des idées d\'évènements participatifs<br/>' +
    'impliquant les Castelthéodoriciens et le public de passage.<br/><br/>' +
    'Dans les fables de La Fontaine, l\'humanisation des animaux à un but moralisateur et éducatif.<br/>' +
    'Il s\'agit en fait de ne parler que de l\'homme, puisque ces bêtes représentent des types humains,<br/>' +
    'des caractères. À travers un test de personnalité, sous la forme d\'un parcours ludique placé<br/>' +
    'dans la cours de la bibliothèque municipale, le visiteur pourra découvrir quel animal des fables<br/>' +
    'sommeille en lui.</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>Commune de Château-Thierry -<br/>' +
      'Appel à projet</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Création d\'un parcours participatif<br/>' +
      'Création de support de communication<br/>' +
      '(dépliants, affiches)</span>',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
