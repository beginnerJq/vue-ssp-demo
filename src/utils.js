/* eslint-disable no-unused-vars */

/* --------------------------------------------- init --------------------------------------------- */

/**
 * 灯光修改
 * @param {*} ssp
 * @returns
 */
const shimLight = (ssp) => {
  const ambientLight = ssp.getLightById('defaultAmbientLight'),
    hemisphereLight = ssp.getLightById('defaultHemisphereLight');
  const directionalLight = ssp.getLightById('defaultDirectionalLight');

  ambientLight.visible = false;
  hemisphereLight.visible = false;

  ssp.setDirectionalLight({
    id: 'defaultDirectionalLight',
    name: 'defaultDirectionalLight',
    position: {
      x: 24,
      y: 20,
      z: 25,
    },
    target: {
      x: 0,
      y: -20,
      z: 0,
    },
    openShadow: true,
    mapSize: 6000,
  });

  return directionalLight;
};

/**
 * 场景初始化
 * @param {*} ssp
 */
export const sspInit = (ssp) => {
  // 设置颜色空间
  ssp.setColorSpace('sRGB');

  // 设置环境反射
  ssp.setEnvironment();

  // 灯光修改
  shimLight(ssp);
};

/* --------------------------------------------- loaded --------------------------------------------- */

/**
 * 地面反射
 */
const groundEnv = (ssp) => {
  const { THREE } = ssp;

  // 站厅地板模型
  const [hall] = ssp.getModelByName('TSPzhantingzhong');

  // 地板
  const hallMesh = hall.getObjectByName('对象007');

  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(1024, {
    type: THREE.HalfFloatType,
  });

  const cubeCamera = new THREE.CubeCamera(1, 100, cubeRenderTarget);

  console.log(hallMesh.material);

  hallMesh.material.normalMap = null;
  hallMesh.material.envMap = cubeRenderTarget.texture;
  hallMesh.material.envMapIntensity = 1;
  hallMesh.material.color = new THREE.Color('#fcfcfc');
  hallMesh.material.roughness = 0;
  hallMesh.material.metalness = 0.2;
  hallMesh.material.needsUpdate = true;

  // cubeCamera.position.set(-4, 0.5, -6.6);

  cubeCamera.update(ssp.viewport.renderer, ssp.viewport.scene);
};

/**
 * 反射强度
 * @param {*} ssp
 */
const envIntensity = (ssp) => {
  ssp.manager.store.modelManager.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.envMapIntensity = 0.4;
    }
  });
};

/**
 * 场景加载完成
 * @param {*} ssp
 */
export const sspLoaded = (ssp) => {
  // 更新阴影
  ssp.updateAllShadow();

  // 地面反射
  groundEnv(ssp);

  // 反射度调整
  envIntensity(ssp);

  // 渲染场景
  ssp.render();
};
