import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

import Swiper from 'swiper';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('threejsCanvasContainer', { static: true }) canvasContainer!: ElementRef;


  playAnimation() {

  }


  ngOnDestroy(): void {
    // Implémentez votre code de nettoyage ici si nécessaire
  }



  ngOnInit() {
    const swiper = new Swiper('.swiper-container1', {
      effect: 'cube',
      grabCursor: true,

    });

    const swiper1 = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,

    });

    const swiper2 = new Swiper('.swiper-container2', {
      effect: 'cards',
      grabCursor: true,

      cardsEffect: {
        perSlideOffset: 9,
        perSlideRotate: 9,
        rotate: true,
      },

      pagination: {
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
      },

      /*autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },*/

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }

    });


    const swiper3 = new Swiper('.swiper-container3', {
      effect: 'cube',
      grabCursor: true,
      direction: 'vertical'
    });


    const swiper4 = new Swiper('.swiper-container4', {
      virtual: {
        enabled: true,
        addSlidesAfter:1,

      },

    });

    swiper2.controller.control = [swiper, swiper1, swiper3];





    // ANIMATIONS D'ENTREE

    const titreSpans = document.querySelectorAll('.bienvenue');
    const prenom = document.querySelectorAll('.prenom');
    const nom = document.querySelectorAll('.nom');
    const logo = document.querySelectorAll('.icon');
    const medias = document.querySelectorAll('.iconsocial-icons');
    const l1 = document.querySelector('.l1');
    const l2 = document.querySelector('.l2');

    window.addEventListener('load', () => {

      const TL = gsap.timeline({ paused: true });

      TL
        .from(".bienvenue", { opacity: 0, x: 1000, duration: 1, ease: "power2.out" })
        .from(".stem", { opacity:0,zInde:-1, ease: "power2.out" },)
        .from(".prenom", {  opacity: 0,x: 1000, duration: 2, ease: "power2.out" }, "-=1")
        .staggerFrom(nom, 1, { opacity: 0, ease: "power2.out" }, 0.3)
        .from(".suivez", { x: -1000, duration: 2, ease: "power2.out" },"-=2")
        .from(logo, 0.4, {  opacity: 0,transform: "scale(0)", ease: "power2.out" })
        .from(".cv", { y:100, duration: 1, opacity:0, ease:"electric"})


      TL.play();
    })

  }

  title = 'portfolioVue';
  currentText: string =
  "Mon éventail de compétences s'étend du développement d'applications au DevOps, incluant la manipulation de bases de données et la conception de sites via des CMS.";
  changeText(newText: string) {
    this.currentText = newText;
  }

  longParagraphe1(): string {
    return `J'ai acquis des compétences en automatisation du développement et des déploiements stables, en mettant l'accent sur l'intégration continue. Compétent en Docker, Git et CI/CD, des outils cruciaux pour des livraisons rapides et fiables. J'ai également approfondi mes compétences en infrastructures cloud (AWS, Azure) pour concevoir des architectures sécurisées et évolutives. Mon principal objectif est d'optimiser les processus de déploiement afin de renforcer l'efficacité opérationnelle.`;
  }

  longParagraphe2(): string {
    return `Expert en développement web, je maitrise un large éventail de technologies telles que Java EE, Python, Angular, React, JavaScript, TypeScript, Django, Spring, Hibernate, PHP, et la conception d'API REST. Mon parcours atteste de solides compétences dans la création de sites dynamiques et percutants. Prêt à transformer vos idées en une présence en ligne exceptionnelle, je suis impatient de relever de nouveaux défis passionnants.`;
  }

  longParagraphe3(): string {
    return `Passionné par les bases de données et compétent en CRM, je suis capable de concevoir et de gérer des systèmes de gestion de données efficaces. Maîtrise des langages SQL et NoSQL pour garantir des performances optimales et une prise de décision éclairée. Transformez vos données en informations précieuses pour stimuler votre activité.`;
  }

  longParagraphe4(): string {
    return `Doué dans le domaine du CMS et de l'infographie, je possède une expertise dans la création visuelle en utilisant des outils tels que Photoshop, After Effects et Premiere Pro. De plus, je suis capable de concevoir et d'administrer des sites web professionnels en utilisant WordPress, transformant des idées en designs attrayants et fonctionnels.`;
  }
}
