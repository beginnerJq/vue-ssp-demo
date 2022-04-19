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

  directionalLight.shadow.bias = -0.005;

  ssp.setDirectionalLight({
    id: 'defaultDirectionalLight',
    name: 'defaultDirectionalLight',
    position: {
      x: -24,
      y: 40,
      z: -25,
    },
    target: {
      x: 20,
      y: -20,
      z: 0,
    },
    openShadow: true,
    mapSize: 6000,
  });

  // const cameraHelper = new ssp.THREE.CameraHelper(
  //   directionalLight.shadow.camera
  // );

  // ssp.viewport.scene.add(cameraHelper);

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

  ssp.setSkyBackground('sun/', [
    'px.jpg',
    'nx.jpg',
    'py.jpg',
    'ny.jpg',
    'pz.jpg',
    'nz.jpg',
  ]);
};

/* --------------------------------------------- loaded --------------------------------------------- */

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
export const sspLoaded = async (ssp) => {
  // 反射度调整
  envIntensity(ssp);

  // 更新阴影
  ssp.updateAllShadow();

  // 渲染场景
  ssp.render();
};
