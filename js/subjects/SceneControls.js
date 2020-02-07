function SceneControls(camera, renderer) {
	
	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.update();

	this.update = function(time) {
		controls.update();
	}
}