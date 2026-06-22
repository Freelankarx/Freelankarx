/* ============================================
   3D COSMIC SCENE — Multiple Objects
   Icosahedron + Torus Knot + Wireframes + Rings + Particles
   ============================================ */

window.FreelankarxThree = (function() {
  let scene, camera, renderer, group;
  let centralObject, torusKnot, wireSphere, rings = [], particles3D;
  let mouse = { x: 0, y: 0 };
  let targetRotation = { x: 0, y: 0 };
  let clock;

  function init() {
    const container = document.querySelector('.hero-3d');
    if (!container || typeof THREE === 'undefined') {
      // Fallback decorative element
      if (container) {
        container.innerHTML = `
          <div style="position:relative;width:100%;height:100%;display:grid;place-items:center;">
            <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle, rgba(139,92,246,0.4), transparent 60%);filter:blur(40px);"></div>
            <div style="position:absolute;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle, rgba(6,182,212,0.4), transparent 60%);filter:blur(30px);"></div>
            <div style="font-size:6rem;background:linear-gradient(135deg,#8B5CF6,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 30px rgba(139,92,246,0.5));">◆</div>
          </div>`;
      }
      return;
    }

    clock = new THREE.Clock();
    setupScene(container);
    setupLights();
    createCentralObject();
    createTorusKnot();
    createWireSphere();
    createRings();
    createParticleField();
    setupInteraction(container);
    animate();
  }

  function setupScene(container) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group holds everything for easy rotation
    group = new THREE.Group();
    scene.add(group);

    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  function setupLights() {
    // Ambient
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Purple light (right top)
    const purpleLight = new THREE.PointLight(0x8B5CF6, 4, 20);
    purpleLight.position.set(5, 5, 5);
    scene.add(purpleLight);

    // Cyan light (left bottom)
    const cyanLight = new THREE.PointLight(0x06B6D4, 4, 20);
    cyanLight.position.set(-5, -3, 3);
    scene.add(cyanLight);

    // Pink light (back)
    const pinkLight = new THREE.PointLight(0xEC4899, 3, 20);
    pinkLight.position.set(0, 5, -5);
    scene.add(pinkLight);

    // Blue light (front bottom)
    const blueLight = new THREE.PointLight(0x3B82F6, 2, 15);
    blueLight.position.set(0, -5, 5);
    scene.add(blueLight);
  }

  function createCentralObject() {
    // Main iridescent icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x8B5CF6,
      metalness: 0.4,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 1,
      clearcoat: 1,
      clearcoatRoughness: 0,
      iridescence: 1,
      iridescenceIOR: 1.5,
      transparent: true,
      opacity: 0.95,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.2
    });

    centralObject = new THREE.Mesh(geometry, material);
    group.add(centralObject);

    // Inner wireframe core
    const innerGeo = new THREE.IcosahedronGeometry(0.8, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06B6D4,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    centralObject.add(innerCore);
  }

  function createTorusKnot() {
    // Orbiting torus knot — adds dynamic motion
    const geometry = new THREE.TorusKnotGeometry(2.3, 0.04, 128, 16, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xEC4899,
      emissive: 0xEC4899,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85
    });

    torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.rotation.x = Math.PI / 6;
    group.add(torusKnot);
  }

  function createWireSphere() {
    // Outer wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(3.2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });

    wireSphere = new THREE.Mesh(geometry, material);
    group.add(wireSphere);
  }

  function createRings() {
    // Three floating rings at different angles
    const ringConfigs = [
      { color: 0x06B6D4, radius: 2.8, tube: 0.015, rotX: Math.PI / 2.5, rotY: 0, rotZ: 0 },
      { color: 0x10B981, radius: 3.0, tube: 0.012, rotX: Math.PI / 3, rotY: Math.PI / 4, rotZ: 0 },
      { color: 0xF59E0B, radius: 2.6, tube: 0.01, rotX: Math.PI / 6, rotY: -Math.PI / 4, rotZ: Math.PI / 3 }
    ];

    ringConfigs.forEach(config => {
      const geometry = new THREE.TorusGeometry(config.radius, config.tube, 8, 128);
      const material = new THREE.MeshBasicMaterial({
        color: config.color,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = config.rotX;
      ring.rotation.y = config.rotY;
      ring.rotation.z = config.rotZ;
      rings.push(ring);
      group.add(ring);
    });
  }

  function createParticleField() {
    // 3D particle cloud around the objects
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color(0x8B5CF6),
      new THREE.Color(0x06B6D4),
      new THREE.Color(0xEC4899),
      new THREE.Color(0x3B82F6)
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spherical distribution
      const radius = 3 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    particles3D = new THREE.Points(geometry, material);
    group.add(particles3D);
  }

  function setupInteraction(container) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotation.x = mouse.y * 0.3;
      targetRotation.y = mouse.x * 0.3;
    });

    container.addEventListener('mouseleave', () => {
      targetRotation.x = 0;
      targetRotation.y = 0;
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Central object rotation
    centralObject.rotation.x += 0.003;
    centralObject.rotation.y += 0.005;
    // Gentle floating
    centralObject.position.y = Math.sin(t * 0.8) * 0.15;

    // Torus knot — counter-rotation
    torusKnot.rotation.x += 0.008;
    torusKnot.rotation.y -= 0.012;

    // Wire sphere — opposite rotation
    wireSphere.rotation.x -= 0.002;
    wireSphere.rotation.y -= 0.003;

    // Rings — each rotates differently
    rings.forEach((ring, i) => {
      ring.rotation.z += 0.004 * (i + 1) * (i % 2 === 0 ? 1 : -1);
      ring.rotation.x += 0.001 * (i + 1);
    });

    // 3D particles — slow drift
    if (particles3D) {
      particles3D.rotation.y += 0.0008;
      particles3D.rotation.x += 0.0004;
    }

    // Smooth mouse-following rotation on whole group
    group.rotation.y += (targetRotation.y - group.rotation.y) * 0.05;
    group.rotation.x += (targetRotation.x - group.rotation.x) * 0.05;

    renderer.render(scene, camera);
  }

  return { init };
})();
