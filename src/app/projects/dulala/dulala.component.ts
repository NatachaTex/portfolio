import { Component, OnInit } from '@angular/core';
import {IMAGE_FULL_CLASS, IMAGE_TWO_COLUMNS_LEFT_CLASS, IMAGE_TWO_COLUMNS_RIGHT_CLASS} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/dulala/';


@Component({
  selector: 'app-dulala',
  templateUrl: './dulala.component.html',
})
export class DulalaComponent implements OnInit {

  headerImageData = {
    assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
    imageName: 'header.jpg',
    imageObjectPositionLeftSidePercentage: null
  };

  imageDatas = [
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-001.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-002.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
  ];

  projectTextualDatas = {
    title: '<span>Catalogue de formations et divers supports de communication</span>',
    subtitle: '<span>(en cours)</span>',
    description: '<span>D\'Une Langue A L\'Autre est une association loi 1901 qui a pour objet de promouvoir une éducation <br/>' +
    'ouverte sur les langues, quelles qu\'elles soient. Pour faciliter la découverte des langues et cultures <br/>' +
    'd\'ici et d’ailleurs, DULALA propose des ateliers pour les enfants et des formations ou ressources <br/>' +
    'pédagogiques pour les professionnels de l’Education. Cette éducation à la diversité des langues <br/>' +
    'et cultures permet de favoriser le vivre ensemble. <br/><br/>' +
    'Dans le cadre d\'un stage, réalisation du catalogue de formation 2020-2021 et divers supports de <br/>' +
    'communication, en respectant la charte graphique (V. et R. Baur, M. Maione) de l\'association.</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>DULALA</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Mise en page</span>',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
