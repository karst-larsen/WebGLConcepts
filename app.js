import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'
import testTexture from './waterpic.jpg'

export default class Sketch{
    constructor(options) {
        this.container = options.domElement;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight; 

        this.camera = new THREE.PerspectiveCamera( 100, this.width / this.height, 0.01, 10 );
        this.camera.position.z = 1;

        this.scene = new THREE.Scene();
        
        this.renderer = new THREE.WebGLRenderer( { 
            antialias: true,
            alpha: true 
        } );
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize( this.width, this.height );

        this.container.appendChild(this.renderer.domElement)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        
        this.time = 0;
        this.resize();
        this.addObjects();
        this.render();

        this.setupResize();
    }

    resize() {
        this.height = this.container.offsetHeight;
        this.width = this.container.offsetWidth;
        this.renderer.setSize( this.width, this.height );
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    addObjects() {
        // this.geometry = new THREE.BoxGeometry( 0.5, 0.2, 0.2 );
        // this.geometry = new THREE.PlaneBufferGeometry( 0.5, 0.5, 1000, 1000 );
        this.geometry = new THREE.SphereBufferGeometry( 0.5, 100, 100 );
        this.material = new THREE.ShaderMaterial({
            // wireframe: true,
            uniforms: {
                time: { value: 1.0 },
                uTexture: {value: new THREE.TextureLoader().load(testTexture)},
                resolution: { value: new THREE.Vector2() }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        })
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.mesh );

    }

    render() {
        this.time += 0.005;
        this.material.uniforms.time.value = this.time;

        this.mesh.rotation.x = this.time / 2000;
	    this.mesh.rotation.y = this.time / 1000;
	    this.renderer.render( this.scene, this.camera );

        requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    domElement: document.getElementById('container')
});

// init


// animation

function animation( time ) {

	

}