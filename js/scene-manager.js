function SceneManager(canvas) {

	const
		clock 				= new THREE.Clock(),
		screenDimensions	= {
			width: canvas.width,
			height: canvas.height
		},

		scene 				= buildScene(),
		renderer 			= buildRenderer(screenDimensions),
		camera 				= buildCamera(screenDimensions),

		sceneSubjects		= createSceneSubjects(scene);




	function buildScene() {

		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#000");

		return scene;

	}

	function buildRenderer({width, height}) {

		const renderer = new THREE.WebGLRenderer({
			canvas: canvas, antialias: true, alpha: true 
		});

		const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;

		renderer.setPixelRatio(DPR);
		renderer.setSize(width, height);

		renderer.gammaInput = true;
		renderer.gammaOutput = true;

		return renderer;

	}

	function buildCamera({width, height}) {

		const aspectRatio = width / height;
		const fieldOfView = 60;
		const nearPlane = 1;
		const farPlane = 100;
		const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,45,30000);
		camera.position.z = 3;
		
		return camera;

	}

	function createSceneSubjects(scene) {

		const sceneSubjects = [
			new GeneralLights(scene),
			new SceneSubject(scene),
			new SkyBox(scene),
			new SceneControls(camera, renderer)
		];

		return sceneSubjects;

	}

	this.update = function() {

		const elapsedTime = clock.getElapsedTime();

		for (let i = 0; i < sceneSubjects.length; i++) 
			sceneSubjects[i].update(elapsedTime);


		renderer.render(scene, camera);

	}

	this.onWindowResize = function() {

		const {width, height} = canvas;

		screenDimensions.width = width;
		screenDimensions.height = height;

		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);

	}

}