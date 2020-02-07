function SceneSubject(scene) {

	var geometry = new THREE.BoxGeometry(1200, 1200, 1200);
	var material = new THREE.MeshNormalMaterial();
	var cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	
	this.update = function(time) {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		cube.rotation.z += 0.01;
	}
}