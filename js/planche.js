let scene, camera, renderer, mesh;

function init(){

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    

    
    camera.position.z = 30;



    var shape = new THREE.Shape();

    x = -5, y = 10;
    shape.moveTo( x , y  );
    shape.bezierCurveTo( x , y+10 , x + 10, y+10, x+10, y );
    shape.bezierCurveTo( x+10 , y , x +10, y-20, x+10, y-20 );
    shape.bezierCurveTo( x+10 , y-30 , x , y-30, x, y-20 );

    



    var geometry = new THREE.ShapeGeometry( shape );

    const texture = new THREE.TextureLoader().load('textures/flower.jpg');
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    var mesh = new THREE.Mesh( geometry, material ) ;
    scene.add( mesh );
    renderer.render( scene, camera );

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