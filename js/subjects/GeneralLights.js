function GeneralLights(scene) {
	
	const light = new THREE.AmbientLight(0xFFFFFF, 0.3);
	scene.add(light);
	
	this.update = function(time) {
		console.log();
	}
}