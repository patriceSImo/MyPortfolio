import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AxesHelper, BufferGeometry, Clock, Float32BufferAttribute, Group, MathUtils, PerspectiveCamera, Points, PointsMaterial, Scene, TextureLoader, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';

@Component({
  selector: 'app-threejs-auto-animation', // Assurez-vous que le sélecteur est correct
  template: '<div #threejsCanvasContainer></div>', // Remplacez ce contenu par le HTML de votre choix
})
export class ThreejsAutoAnimationComponent implements OnInit {
  @ViewChild('threejsCanvasContainer', { static: true }) canvasContainer!: ElementRef;

  ngOnInit() {



const textureLoader = new TextureLoader;
const circleTexture = textureLoader.load("assets/images/cercle.png");



const scene = new Scene();
scene.add(new AxesHelper(0));

const count = 100;
const distance = 2;

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;
scene.add(camera);

const points = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);
for (let i = 0; i < points.length; i++) {
  points[i] = MathUtils.randFloatSpread(distance * 2);
  colors[i] = Math.random();
}

const geometry = new BufferGeometry();
geometry.setAttribute('position', new Float32BufferAttribute(points, 3));
geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

const pointMaterial = new PointsMaterial({
  vertexColors: true,
  size: 0.1,
  map: circleTexture,
  alphaTest:0.01,
  transparent : true,

});

const pointsObject = new Points(geometry, pointMaterial);
const groupe = new Group();
groupe.add(pointsObject);

scene.add(groupe);


const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const controls = new OrbitControls(camera, renderer.domElement);

// Utilisez le conteneur du canvas via ViewChild
this.canvasContainer.nativeElement.appendChild(renderer.domElement);

const clock = new Clock();



const animate = () => {
  const time = clock.getElapsedTime();
  requestAnimationFrame(animate);
 groupe.rotation.y = time * 0.1

  renderer.render(scene, camera);
  effectComposer.render();
  controls.update();
};


const bloomEffect = new BloomEffect({
  luminanceThreshold: 0.3,
  luminanceSmoothing: 0.75,
  intensity: 0.4,
});

const effectComposer = new EffectComposer(renderer);

const effectPass = new EffectPass(camera, bloomEffect);
effectPass.renderToScreen = true;

effectComposer.addPass(new RenderPass(scene, camera));
effectComposer.addPass(effectPass);


animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

  }
}


