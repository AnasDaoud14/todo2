import { Component } from '@angular/core';
import {Article} from "../models/Article";

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {

  titre:string = "Les articles du jour";


  listeArticles: Article[] = [
    { titre:"Le championnat de tunisie",contenu:"Le champion de tunisie est",auteur:"Med ANAS",date:"12/12/2005",categorie:"Sport"},
    { titre:"Le championnat d'europe",contenu:"Le champion d'europe est",auteur:"Med ALI",date:"10/09/2017",categorie:"Education"},
    { titre:"Le championnat d'afrique",contenu:"Le champion d'afrique est",auteur:"Med AZIZ",date:"01/02/2001",categorie:"Travail"},
  ]

  nbArticles:number = this.listeArticles.length;

  displayArticles(nb:number){
    this.nbArticles = nb;
  }

}
