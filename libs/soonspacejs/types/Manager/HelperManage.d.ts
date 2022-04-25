import Viewport from '../Viewport';
import DefaultManage from './DefaultManage';
import { GridHelper, AxesHelper, Box3Helper, DirectionalLightHelper, HemisphereLightHelper, SpotLightHelper, PointLightHelper } from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { GridHelperOptions, AxesHelperOptions, BoxHelperOptions, PlaneHelperOptions, GroundHelperOptions, DirectionalLightHelperOptions, HemisphereLightHelperOptions, SpotLightHelperOptions, PointLightHelperOptions, RectAreaLightHelperOptions } from '../Interface';
import { BaseMesh, Ground } from '../Library';
declare class HelperManage extends DefaultManage {
    constructor(viewport: Viewport);
    addGridHelper(options: GridHelperOptions): GridHelper;
    addAxesHelper(options: AxesHelperOptions): AxesHelper;
    addBoxHelper(options: BoxHelperOptions): Box3Helper;
    addPlaneHelper(options: PlaneHelperOptions): BaseMesh;
    addGroundHelper(options: GroundHelperOptions): Ground;
    addDirectionalLightHelper(options: DirectionalLightHelperOptions): DirectionalLightHelper;
    addHemisphereLightHelper(options: HemisphereLightHelperOptions): HemisphereLightHelper;
    addSpotLightHelper(options: SpotLightHelperOptions): SpotLightHelper;
    addPointLightHelper(options: PointLightHelperOptions): PointLightHelper;
    addRectAreaLightHelper(options: RectAreaLightHelperOptions): RectAreaLightHelper;
}
export default HelperManage;
