function SkyBox(scene) {

	let materialArray = [];

	let 
		texture_ft = new THREE.TextureLoader().load("/imgs/bay_ft.jpg"),
		texture_bk = new THREE.TextureLoader().load("/imgs/bay_bk.jpg"),
		texture_up = new THREE.TextureLoader().load("/imgs/bay_up.jpg"),
		texture_dn = new THREE.TextureLoader().load("/imgs/bay_dn.jpg"),
		texture_rt = new THREE.TextureLoader().load("/imgs/bay_rt.jpg"),
		texture_lf = new THREE.TextureLoader().load("/imgs/bay_lf.jpg");

	materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
	materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
	materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
	materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
	materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
	materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

	for (let i = 0; i<6; i++)
		materialArray[i].side = THREE.BackSide;

	let skyboxGeo = new THREE.BoxGeometry(5000, 5000, 5000);
	let skybox = new THREE.Mesh(skyboxGeo, materialArray);

	scene.add(skybox)

	this.update = function(time) {
		console.log();
	}
}