let scene, camera, renderer, mesh, sphere;

function init(){

    window.alert("Use the mouse and keyboard to control the object");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

   



    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const texture = new THREE.TextureLoader().load('textures/flower.jpg');
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    
    mesh.rotation.x += 0.5;
    mesh.rotation.y += 0.5;   
    scene.add(mesh);

    controls = new THREE.OrbitControls(camera, renderer.domElement);




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