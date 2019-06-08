let scene, camera, renderer, object, light;

function init(){

    window.alert("Use the mouse and keyboard to control the object");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );


    // Instantiate a loader
    var loader = new THREE.GLTFLoader();

    // Load a glTF resource
    loader.load(
        // resource URL
        'models/board.gltf',
        gltfload,
        loading,
        error
    );
    
    
    // called when the resource is loaded
    function gltfload( gltf ) {
        
        object = gltf.scene;
        scene.add( object );
        object.rotation.z = Math.PI / 3;
        object.rotation.y = - Math.PI / 6;
        object.rotation.x = 0;


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



    controls = new THREE.OrbitControls(camera);
    camera.position.z = 5;

    





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

window.addEventListener('resize', onWindowResize, false);

init();
animate();