var app = app || {};
app.step = 0; // Base animation point

app.controller = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
};

app.animate = function () {
  app.stats.update();

  app.step += app.controller.bouncingSpeed;
  app.sphere.position.x = 20 + (10 *(Math.cos(app.step)));
  app.sphere.position.y = 2 + (10 * (Math.abs(Math.sin(app.step))));

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  requestAnimationFrame( app.animate );
  app.renderer.render( app.scene, app.camera );
};

app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.top = "0px";
  stats.domElement.style.left = "0px";
  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
};

app.init = function () {
  // Scene keeps track of all of the shapes on the screen
  app.scene = new THREE.Scene();
  // Keep track of the width and the height
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // angle, aspect ratio, near, far
  app.camera = new THREE.PerspectiveCamera(45, app.width / app.height, 0.1, 1000 );
  app.camera.position.x = -30;
  app.camera.position.y = 10;
  app.camera.position.z = 30;
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.shadowMap.enabled = true;
  app.renderer.setPixelRatio( window.devicePixelRatio || 1 );
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0xECEFF1 ); // "#ECEFF1"

  // app.axes = new THREE.AxisHelper( 40 );
  // app.scene.add( app.axes );

  var planeGeometry = new THREE.PlaneGeometry(60, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC
  });
  app.plane = new THREE.Mesh(planeGeometry, planeMaterial);
  app.plane.rotation.x = -0.5 * Math.PI;
  app.plane.position.x = 15;
  app.plane.position.y = -2;
  app.plane.position.z = 0;
  app.plane.receiveShadow = true;
  app.scene.add(app.plane);

  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  });
  app.cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  app.cube.position.x = -4;
  app.cube.position.y = 3;
  app.cube.position.z = 0;
  app.cube.castShadow = true;
  app.scene.add( app.cube );

  var sphereGeometry = new THREE.SphereGeometry(4, 30, 30);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039BE5,
    // wireframe: true
  });
  app.sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  app.sphere.position.x = 20;
  app.sphere.position.y = 4;
  app.sphere.position.z = 2;
  app.sphere.castShadow = true;
  app.scene.add( app.sphere );

  app.pointLight = new THREE.PointLight( 0xFFFFFF );
  app.pointLight.position.set( 15, 30, 10 );
  app.pointLight.castShadow = true;
  app.pointLight.shadow.mapSize.width = 2048;
  app.pointLight.shadow.mapSize.height = 2048;
  app.pointLight.shadow.camera.near = 1;
  app.pointLight.shadow.camera.far = 50;
  app.scene.add( app.pointLight );

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  var target = document.getElementById("output");
  target.appendChild( app.renderer.domElement );
  app.renderer.render( app.scene, app.camera );

  app.stats = app.addStats();
  app.animate();

  app.gui = new dat.GUI();
  app.gui.add(app.controller, 'rotationSpeed', 0, 0.2);
  app.gui.add(app.controller, 'bouncingSpeed', 0, 0.2);
};

window.onload = app.init;

app.resize = function () {
  app.width = window.innerWidth;
  app.height = window.innerHeight;
  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();
  app.renderer.setSize(app.width, app.height);
};

window.addEventListener("resize", app.resize);
