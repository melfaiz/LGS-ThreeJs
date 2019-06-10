let scene, camera, renderer, object, light;

let file = "models/shape1/board.gltf";


var buttons = document.getElementsByTagName("button");

window.alert("Use the mouse and keyboard to control the object");
window.addEventListener('resize', onWindowResize, false);
scene = new THREE.Scene();


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onButtonClick, false);
};

function onButtonClick(event) {
  alert(event.target.id);
}

function changefile(){
    clc(scene);
    
    if (file == "models/shape1/board.gltf") {
        file = "models/shape3/board.gltf";
    }else{
        file = "models/shape1/board.gltf";
    }
    load(file);
}



function init(){

    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );



    
    controls = new THREE.OrbitControls(camera);
    camera.position.z = 5;

    load(file);
}

function load(file){
        // Instantiate a loader
        var loader = new THREE.GLTFLoader();

        // Load a glTF resource
        loader.load(
            file, // resource URL
            gltfload,
            loading,
            error
        );
}
var animate = function () {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );

};

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight ;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
   
}


// called when the resource is loaded
function gltfload( gltf ) {
    
    object = gltf.scene;
    object.name = "figure";
    object.rotation.z = Math.PI / 3;
    object.rotation.y = - Math.PI / 6;
    object.rotation.x = 0;
    scene.add( object );

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Scene
    gltf.scenes; // Array<THREE.Scene>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object

}

// called while loading is progressing
function loading ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}

// called when loading has errors
function error ( error ) {
    console.log( 'An error happened' );
}

function clc(scene) {
    var selectedObject = scene.getObjectByName("figure");
    scene.remove( selectedObject );
}



init();

animate();

