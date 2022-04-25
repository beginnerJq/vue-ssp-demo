import { AmbientLight, DirectionalLight, HemisphereLight, SpotLight, PointLight, RectAreaLight } from 'three';
import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, SpotLightOptions, PointLightOptions, RectAreaLightOptions } from '../Interface';
declare class LightManage extends DefaultManage {
    constructor(viewport: Viewport);
    createAmbientLight(options: AmbientLightOptions): AmbientLight;
    setAmbientLight(options: AmbientLightOptions): boolean;
    createDirectionalLight(options: DirectionalLightOptions): DirectionalLight;
    setDirectionalLight(options: DirectionalLightOptions): boolean;
    createHemisphereLight(options: HemisphereLightOptions): HemisphereLight;
    setHemisphereLight(options: HemisphereLightOptions): boolean;
    createSpotLight(options: SpotLightOptions): SpotLight;
    setSpotLight(options: SpotLightOptions): boolean;
    createPointLight(options: PointLightOptions): PointLight;
    setPointLight(options: PointLightOptions): boolean;
    createRectAreaLight(options: RectAreaLightOptions): RectAreaLight;
    setRectAreaLight(options: RectAreaLightOptions): boolean;
    updateAllShadow(): void;
}
export default LightManage;
