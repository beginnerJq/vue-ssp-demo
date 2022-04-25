import { IColor, IVector2, Position, Rotation, Scale } from './base';
import { BaseObject3D, BaseObject3DInfo, LinkInfo, SbmInfo, ModelInfo, PoiInfo } from '../Library';
import { Box3, DirectionalLight, HemisphereLight, SpotLight, PointLight, RectAreaLight } from 'three';
interface UserDataPropertyFindFunc<T = BaseObject3D['userData']> {
    (userData: T): T;
}
interface BaseLightInfo {
    id: string | number;
    name?: string;
    color?: IColor;
    intensity?: number;
}
declare type AmbientLightOptions = BaseLightInfo;
export interface ShadowOptions {
    openShadow?: boolean;
    shadowAutoUpdate?: boolean;
    mapSize?: number;
}
interface DirectionalLightOptions extends BaseLightInfo, ShadowOptions {
    position?: Position;
    target?: Position;
}
interface HemisphereLightOptions extends BaseLightInfo {
    position?: Position;
    skyColor?: IColor;
    groundColor?: IColor;
}
interface SpotLightOptions extends BaseLightInfo, ShadowOptions {
    position?: Position;
    angle?: number;
    target?: Position;
}
interface PointLightOptions extends BaseLightInfo, ShadowOptions {
    position?: Position;
    distance?: number;
}
interface RectAreaLightOptions extends BaseLightInfo {
    position?: Position;
    width?: number;
    height?: number;
}
declare type CloneSbmInfo = Omit<SbmInfo, 'url'>;
interface ModelLoadingProgress {
    total: number;
    loaded: number;
    timeStamp: number;
}
interface ModelLoadingProgressCallback {
    (progress: ModelLoadingProgress): void;
}
interface GroupProgress {
    modelTotal: number;
    loadingModelIndex: number;
    current: ModelLoadingProgress;
}
interface GroupProgressCallback {
    (groupProgress: GroupProgress): void;
}
declare type CloneModelInfo = Omit<ModelInfo, 'url'>;
declare type ClonePoiInfo = Omit<PoiInfo, 'url'>;
interface TopologyInfoForGml extends BaseObject3DInfo {
    url: string;
    linkWidth?: number;
    linkColor?: IColor;
    renderNode?: boolean;
    nodeColor?: IColor;
    nodeRadius?: number;
}
interface TopologyEffectInfo {
    renderLink?: boolean;
    linkWidth?: number;
    linkColor?: IColor | IColor[];
    renderNode?: boolean;
    nodeColor?: IColor;
    nodeRadius?: number;
    imgUrl?: LinkInfo['imgUrl'];
    animation?: LinkInfo['animation'];
}
interface ShortestPathInfo extends BaseObject3DInfo, TopologyEffectInfo {
    start: Position;
    end: Position;
}
interface ShortestPathByMultipleStartPoints extends BaseObject3DInfo, TopologyEffectInfo {
    start: Position[];
    end: Position;
}
interface ShortestPathByMultipleEndPoints extends BaseObject3DInfo, TopologyEffectInfo {
    start: Position;
    end: Position[];
}
interface TopologyNodeGraph {
    targetNodeId: string;
    linkInfo: {
        id: string;
        name: string;
    };
    passable: number;
    length: number;
    enable?: boolean;
    restrict?: number;
}
interface TopologyNodeInfo {
    id: BaseObject3DInfo['id'];
    name?: BaseObject3DInfo['name'];
    position: Position;
    graphs?: TopologyNodeGraph[];
}
interface TopologyInnerNodeInfo {
    id: BaseObject3DInfo['id'];
    name?: BaseObject3DInfo['name'];
    position: Position;
    graphs: TopologyNodeGraph[];
}
interface TwoWaysLink {
    pointAIndex: number;
    pointBIndex: number;
}
interface BaseHelperOptions {
    id: string | number;
}
interface GridHelperOptions extends BaseHelperOptions {
    size?: number;
    divisions?: number;
    color?: IColor;
    position?: Position;
    rotation?: Rotation;
    scale?: Scale;
}
interface AxesHelperOptions extends BaseHelperOptions {
    axesLength?: number;
}
interface BoxHelperOptions extends BaseHelperOptions {
    box: Box3;
    color?: IColor;
}
interface PlaneHelperOptions extends BaseHelperOptions {
    width?: number;
    height?: number;
    color?: IColor;
    opacity?: number;
    position?: Position;
    rotation?: Rotation;
    scale?: Scale;
}
interface GroundHelperOptions extends BaseHelperOptions {
    imgUrl: string;
    width?: number;
    height?: number;
    opacity?: number;
    position?: Position;
    rotation?: Position;
    scale?: Scale;
    repeat?: IVector2;
}
interface DirectionalLightHelperOptions extends BaseHelperOptions {
    light: DirectionalLight;
    color?: IColor;
    size?: number;
}
interface HemisphereLightHelperOptions extends BaseHelperOptions {
    light: HemisphereLight;
    color?: IColor;
    size?: number;
}
interface SpotLightHelperOptions extends BaseHelperOptions {
    light: SpotLight;
    color?: IColor;
}
interface PointLightHelperOptions extends BaseHelperOptions {
    light: PointLight;
    color?: IColor;
    size?: number;
}
interface RectAreaLightHelperOptions extends BaseHelperOptions {
    light: RectAreaLight;
    color?: IColor;
}
export { UserDataPropertyFindFunc, BaseLightInfo, AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, SpotLightOptions, PointLightOptions, RectAreaLightOptions, CloneSbmInfo, ModelLoadingProgress, ModelLoadingProgressCallback, GroupProgress, GroupProgressCallback, CloneModelInfo, ClonePoiInfo, TopologyInfoForGml, TopologyEffectInfo, ShortestPathInfo, ShortestPathByMultipleStartPoints, ShortestPathByMultipleEndPoints, TwoWaysLink, TopologyNodeGraph, TopologyNodeInfo, TopologyInnerNodeInfo, GridHelperOptions, AxesHelperOptions, BoxHelperOptions, PlaneHelperOptions, GroundHelperOptions, DirectionalLightHelperOptions, HemisphereLightHelperOptions, SpotLightHelperOptions, PointLightHelperOptions, RectAreaLightHelperOptions, };
