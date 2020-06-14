import { Component, OnInit } from '@angular/core';
import {
  IMAGE_CENTERED_CLASS,
  IMAGE_FULL_CLASS,
  IMAGE_SMALL_CLASS,
  IMAGE_TWO_COLUMNS_LEFT_CLASS,
  IMAGE_TWO_COLUMNS_RIGHT_CLASS
} from '../../../environments/environment.prod';

const IMAGE_DIRECTORY_PATH = './assets/imgs/projects/parallel-realities/';

@Component({
  selector: 'app-parallel-realities',
  templateUrl: './parallel-realities.component.html',
})
export class ParallelRealitiesComponent implements OnInit {

  headerImageData = {
    assetProjectPath: `${IMAGE_DIRECTORY_PATH}`,
    imageName: 'header.jpg',
    imageObjectPositionLeftSidePercentage: null
  };

  imageDatas = [
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-001.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-002.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-003.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-004.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_LEFT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-005.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_TWO_COLUMNS_RIGHT_CLASS}`},
    { assetProjectPath: `${IMAGE_DIRECTORY_PATH}`, pictureName: 'picture-006.jpg', pictureLegend: null, imageContainerClass: `${IMAGE_FULL_CLASS}`},
  ];

  projectTextualDatas = {
    title: '<span>Réalité Parallèle</span>',
    subtitle: null,
    description: '<span>&#171; Les éditions extensibles ont pour objet de recherche la transversalité entre art contemporain <br/>' +
      'et littérature. Elles rassemblent des artistes-écrivains au sein de publications et d’expositions <br/>' +
      'littéraires et explorent les enjeux de l’écriture, du récit et de la fiction dans l’art contemporain. &#187; <br/><br/>' +
      'Réalité Parallèle est une micro-édition, réalisé en partenariat avec Les éditions extensibles, <br/>' +
      'pour la collection « Au Fil de l’Ourcq ». <br/><br/>' +
      'Au fil de cet ouvrage, découvrez par le prisme des reflets de l\'eau, le paysage urbain qui borde<br/>' +
      'le canal. Laissez vous plongez dans un univers poétique et onirique d\'une réalité parallèle...</span>',
    contextTitle: '<span>Commanditaire</span>',
    contextDetails: '<span>Les éditions extensibles</span>',
    missionsTitle: '<span>Missions</span>',
    missionsDetails: '<span>Création du contenu rédactionnel <br/>' +
    'Création du contenu visuel, illustration<br/>' +
    'Mise en page</span>',

  };

  constructor() { }

  ngOnInit(): void {
  }

}
