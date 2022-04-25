/**
  ____                    ____                          _
 / ___|  ___   ___  _ __ / ___| _ __   __ _  ___ ___   (_)___
 \___ \ / _ \ / _ \| '_ \\___ \| '_ \ / _` |/ __/ _ \  | / __|
  ___) | (_) | (_) | | | |___) | |_) | (_| | (_|  __/_ | \__ \
 |____/ \___/ \___/|_| |_|____/| .__/ \__,_|\___\___(_)/ |___/
                               |_|                   |__/
*/
import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import { Object3D, Vector3, Euler, Box3, AnimationClip, AnimationAction, Light } from 'three';
import * as shared from './Shared';
import Animation from './Animation';
import * as library from './Library';
import { BaseObject3D, BaseObject3DInfo, Sbm, SbmInfo, Model, ModelInfo, Poi, PoiInfo, PoiNode, PoiNodeInfo, Topology, TopologyInfo, Group, GroupInfo, Canvas3D, Canvas3DInfo, PluginObject, PluginObjectInfo } from './Library';
import Viewport from './Viewport';
import Manager from './Manager';
import { ViewportOptions, SceneGlobalEvents, PluginsConstructor, IColor, Position, Rotation, OffsetPoint, AnimationOptions, ModelAnimationFindFunc, TopologyNodeInfo, CameraViewpointData, FlyToViewpoint, FlyToObjOptions, SurroundOptions, LabelOptions, EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions, UserDataPropertyFindFunc, AmbientLightOptions, DirectionalLightOptions, HemisphereLightOptions, SpotLightOptions, PointLightOptions, CloneSbmInfo, ModelLoadingProgressCallback, GroupProgressCallback, CloneModelInfo, ClonePoiInfo, ShortestPathInfo, ShortestPathByMultipleStartPoints, ShortestPathByMultipleEndPoints, TopologyInfoForGml, GridHelperOptions, AxesHelperOptions, BoxHelperOptions, PlaneHelperOptions, GroundHelperOptions, DirectionalLightHelperOptions, HemisphereLightHelperOptions, SpotLightHelperOptions, PointLightHelperOptions, SignalsState, ControlsOptions, RectAreaLightOptions, RectAreaLightHelperOptions, SkyOptions, ColorSpace, BloomOptions, SobelOptions } from './Interface';
export declare type InitOptions = ViewportOptions;
export declare type InitEvents = SceneGlobalEvents;
export interface SoonSpaceConstructor {
    el: string;
    options?: InitOptions;
    events?: InitEvents;
}
export * from './Interface';
declare global {
    interface Window {
        THREE: typeof THREE;
    }
}
export default class SoonSpace {
    static readonly THREE: typeof THREE;
    readonly THREE: typeof THREE;
    readonly THREE_PLUGINS: {
        TransformControls: typeof TransformControls;
        Lensflare: {
            Lensflare: typeof Lensflare;
            LensflareElement: typeof LensflareElement;
        };
    };
    readonly version: string;
    readonly options: InitOptions;
    readonly domElement: HTMLElement | null;
    readonly animation: typeof Animation;
    readonly library: typeof library;
    readonly utils: typeof shared;
    readonly signals: SignalsState;
    readonly viewport: Viewport;
    readonly manager: Manager;
    readonly plugins: Record<string, any>;
    constructor(param: SoonSpaceConstructor);
    /******/
    /******/
    /******* Init methods */
    /******/
    /******/
    private _init;
    private _initEvents;
    private _initDefaultLight;
    /******/
    /******/
    /******* plugins methods */
    /******/
    /******/
    /**
     * 注册插件
     * @param plugin
     * @param name
     */
    registerPlugin<TP>(plugin: PluginsConstructor<TP, this>, name: string): TP;
    /**
     * 获取已注册插件
     * @param name
     */
    getPlugin<TP>(name: string): TP | null;
    /**
     * 创建插件对象
     * @param info
     * @param {Object3D} object
     */
    createPluginObject(info: PluginObjectInfo, object?: Object3D): PluginObject;
    /**
     * 向插件对象内添加子集
     * @param id
     * @param object
     * @returns {PluginObject | null}
     */
    addToPluginObject(id: PluginObjectInfo['id'], object: Object3D): PluginObject | null;
    /**
     * 根据 ID 获取插件对象
     * @param id
     */
    getPluginObjectById(id: PluginObjectInfo['id']): PluginObject | null;
    /**
     * 根据名称获取插件对象
     * @param name
     */
    getPluginObjectByName(name: string): PluginObject[];
    /**
     * 根据 ID 移除插件对象
     * @param id
     */
    removePluginObjectById(id: PluginObjectInfo['id']): boolean;
    /******/
    /******/
    /******* Viewport methods */
    /******/
    /******/
    /**
     * 设置边缘检测
     * @param options
     */
    setSobel(options: SobelOptions): void;
    /**
     * 设置泛光
     * @param bloom
     */
    setBloom(bloom?: BloomOptions): void;
    /**
     * 设置场景的颜色空间
     * @param colorSpace
     */
    setColorSpace(colorSpace: ColorSpace): void;
    /**
     * 设置开启鼠标悬浮
     * @param enabled
     */
    setHoverEnabled(enabled: boolean): void;
    /**
     * 设置背景色
     * @param color
     */
    setBackgroundColor(color: IColor): void;
    /**
     * 设置背景图
     * @param imgUrl
     */
    setBackgroundImage(imgUrl: string): void;
    /**
     * 设置球形天空背景
     * @param imgUrl
     */
    setSphereSkyBackground(imgUrl: string): void;
    /**
     * 设置天空背景
     * @param dirPath
     * @param fileNames
     */
    setSkyBackground(dirPath: string, fileNames: string[]): void;
    /**
     * 设置场景环境
     * @returns
     */
    setEnvironment(): THREE.Texture;
    /**
     * 播放模型动画
     * @param model
     * @param animation
     */
    playModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): AnimationAction | undefined;
    /**
     * 停止播放模型动画
     * @param model
     * @param animation
     */
    stopModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): void;
    /**
     * 通过空间坐标点获取屏幕坐标点
     * @param position
     */
    getOffsetByPosition(position: Position): {
        left: number;
        top: number;
    };
    /**
     * 通过屏幕坐标点获取空间坐标点
     * @param offset
     * @param z
     */
    getPositionByOffset(offset: OffsetPoint, z?: number): Vector3;
    /**
     * 手动渲染一次场景
     * @param fn
     */
    render(fn?: () => void): Promise<void>;
    /**
     * 清除事件信号监听
     */
    clearSignals(): void;
    /**
     * 销毁场景
     */
    dispose(): Promise<void>;
    /******/
    /******/
    /******* Viewport cameraManager methods */
    /******/
    /******/
    /**
     * 获取当前相机视角数据
     */
    getCameraViewpoint(): CameraViewpointData;
    /**
     * 设置相机视角数据
     */
    setCameraViewpoint(data: CameraViewpointData): void;
    /**
     * 相机飞向
     * @param position
     * @param rotation
     * @param options
     */
    flyTo(position: Position, rotation?: FlyToViewpoint | Rotation | Euler, options?: AnimationOptions): Promise<void>;
    /**
     * 相机飞向包围盒
     * @param bbox
     * @param viewpoint
     * @param options
     */
    flyToBoundingBox(bbox: Box3, viewpoint?: FlyToViewpoint, options?: AnimationOptions): Promise<void>;
    /**
     * 相机飞向对象
     * @param object
     * @param viewpoint
     * @param options
     */
    flyToObj(object: Object3D, rotation?: FlyToViewpoint | Rotation | Euler, options?: FlyToObjOptions): Promise<void>;
    /**
     * 相机飞向主场景
     * @param viewpoint
     * @param options
     */
    flyMainViewpoint(viewpoint?: FlyToViewpoint, options?: FlyToObjOptions): Promise<void>;
    /**
     * 相机在目标点上环绕
     * @param target
     * @param options
     */
    surroundOnTarget(target: Vector3 | Position, options?: SurroundOptions): Promise<void>;
    /**
     * 相机在对象上环绕
     * @param object
     * @param options
     */
    surroundOnObject(object: BaseObject3D, options?: SurroundOptions): Promise<void>;
    /**
     * 获取对象的标签位置坐标
     * @param object
     * @param options
     */
    getObjectLabelPos(object: Box3 | BaseObject3D, rotation?: FlyToViewpoint | Rotation | Euler, options?: LabelOptions): Position;
    /******/
    /******/
    /******* Viewport Controls methods */
    /******/
    /******/
    /**
     * 设置控制器配置
     * @param options
     */
    setControlsOptions(options: ControlsOptions): void;
    /******/
    /******/
    /******* Viewport Scener methods */
    /******/
    /******/
    /**
     * 添加对象
     * @param object
     * @param parent
     */
    addObject(object: Object3D, parent?: Object3D): void;
    /**
     * 移除对象
     * @param object
     */
    removeObject(object: Object3D): void;
    /**
     * 开启场景雾化
     * @param options
     */
    openSceneFog(options?: FogOptions): void;
    /**
     * 关闭场景雾化
     */
    closeSceneFog(): void;
    setSky(options: SkyOptions): import("three/examples/jsm/objects/Sky").Sky | undefined;
    /**
     * 轮廓显示模型
     * @param object
     * @param options
     */
    edgeShow(object: BaseObject3D | BaseObject3D[], options?: EdgeSelectOptions): Promise<void>;
    /**
     * 取消轮廓显示模型
     * @param objects
     */
    unEdgeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 描边显示模型
     * @param object
     * @param options
     */
    strokeShow(object: BaseObject3D | BaseObject3D[], options?: StrokeSelectOptions): Promise<void | void[]>;
    /**
     * 取消描边显示模型
     * @param objects
     */
    unStrokeShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 透明显示模型
     * @param object
     * @param options
     */
    opacityShow(object: BaseObject3D | BaseObject3D[], options?: OpacitySelectOptions): Promise<void | void[]>;
    /**
     * 取消透明显示模型
     * @param objects
     */
    unOpacityShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 高亮显示模型
     * @param object
     * @param options
     */
    highlightShow(object: BaseObject3D | BaseObject3D[], options?: HighlightSelectOptions): Promise<void | void[]>;
    /**
     * 取消高亮显示模型
     * @param objects
     */
    unHighlightShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /**
     * 自发光显示模型
     * @param object
     * @param options
     */
    emissiveShow(object: BaseObject3D | BaseObject3D[], options?: EmissiveSelectOptions): Promise<void | void[]>;
    /**
     * 取消自发光显示模型
     * @param objects
     */
    unEmissiveShow(objects?: BaseObject3D | BaseObject3D[]): Promise<void | void[]>;
    /******/
    /******/
    /******* Manager methods */
    /******/
    /******/
    /**
     * 清除除灯光外所有对象
     */
    clearObject(): void;
    /**
     * 清除所有对象
     */
    clear(): void;
    /******/
    /******/
    /******* Light methods */
    /******/
    /******/
    /**
     * 创建环境关
     * @param options
     */
    createAmbientLight(options: AmbientLightOptions): THREE.AmbientLight;
    /**
     * 设置环境关
     * @param options
     */
    setAmbientLight(options: AmbientLightOptions): boolean;
    /**
     * 创建平行光
     * @param options
     */
    createDirectionalLight(options: DirectionalLightOptions): THREE.DirectionalLight;
    /**
     * 设置平行光
     * @param options
     */
    setDirectionalLight(options: DirectionalLightOptions): boolean;
    /**
     * 创建半球光
     * @param options
     */
    createHemisphereLight(options: HemisphereLightOptions): THREE.HemisphereLight;
    /**
     * 设置半球光
     * @param options
     */
    setHemisphereLight(options: HemisphereLightOptions): boolean;
    /**
     * 创建聚光灯
     * @param options
     */
    createSpotLight(options: SpotLightOptions): THREE.SpotLight;
    /**
     * 设置聚光灯
     * @param options
     */
    setSpotLight(options: SpotLightOptions): boolean;
    /**
     * 创建点光源
     * @param options
     */
    createPointLight(options: PointLightOptions): THREE.PointLight;
    /**
     * 设置点光源
     * @param options
     */
    setPointLight(options: PointLightOptions): boolean;
    /**
     * 创建矩形区域光源
     * @param options
     * @returns
     */
    createRectAreaLight(options: RectAreaLightOptions): THREE.RectAreaLight;
    /**
     * 设置矩形区域光源
     * @param options
     * @returns
     */
    setRectAreaLight(options: RectAreaLightOptions): boolean;
    /**
     * 根据 id 查询 Light 对象
     * @param id
     */
    getLightById<T extends Light>(id: BaseObject3DInfo['id']): T | null;
    /**
     * 根据 id 移除 Light 对象
     * @param id
     */
    removeLightById(id: BaseObject3DInfo['id']): boolean;
    /**
     * 获取所有 Light 对象
     */
    getAllLight<T = Light>(): T[];
    /**
     * 清空 Light 对象
     */
    clearLight(): void;
    /**
     * 显示所有光
     */
    showAllLight(): void;
    /**
     * 隐藏所有光
     */
    hideAllLight(): void;
    /**
     * 更新所有灯光阴影
     * @returns
     */
    updateAllShadow(): void;
    /******/
    /******/
    /******* Sbm methods */
    /******/
    /******/
    /**
     * 加载 Sbm 模型
     * @param sbmInfo
     * @param parent
     * @param onProgress
     */
    loadSbm(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 解析 Sbm 模型
     * @param data
     * @param sbmInfo
     * @param onProgress
     */
    parseSbm(data: ArrayBuffer, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    /**
     * 克隆 Sbm 模型
     * @param model
     * @param sbmInfo
     * @param parent
     */
    cloneSbm(model: Sbm, sbmInfo: CloneSbmInfo, parent?: BaseObject3D | null): Promise<Sbm>;
    /**
     * 根据 id 查询 Sbm 模型
     * @param id
     */
    getSbmById(id: SbmInfo['id']): Sbm | null;
    /**
     * 根据 name 查询 Sbm 模型
     * @param name
     */
    getSbmByName(name: string): Sbm[];
    /**
     * 根据用户数据查询 Sbm 模型
     * @param name
     */
    getSbmByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Sbm[];
    /**
     * 根据 id 删除 Sbm 模型
     * @param id
     */
    removeSbmById(id: SbmInfo['id']): boolean;
    /**
     * 为 Sbm 创建组
     * @param groupInfo
     */
    createGroupForSbm(groupInfo: GroupInfo): Group;
    /**
     * 加载 Sbm 模型到组内
     * @param groupInfo
     * @param sbmInfoList
     * @param onProgress
     */
    loadSbmToGroup(groupInfo: GroupInfo, sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group>;
    /**
     * 为已有的组添加 Sbm 模型
     * @param groupId
     * @param sbmInfoList
     * @param onProgress
     */
    addSbmForGroup(groupId: GroupInfo['id'], sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group | null>;
    /**
     * 创建 SSbm 组，从 xml 文件资源
     * @param groupInfo
     * @param url
     */
    createSbmGroupFromXml(groupInfo: GroupInfo, url: string): Promise<Group>;
    /**
     * 根据 id 查询 Sbm 模型组
     * @param id
     */
    getSbmGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Sbm 模型组
     * @param name
     */
    getSbmGroupByName(name: string): Group[];
    /**
     * 获取所有 Sbm 模型组
     */
    getAllSbmGroup(): Group[];
    /**
     * 根据 id 删除 Sbm 模型组
     * @param id
     */
    removeSbmGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Sbm 模型
     */
    clearSbm(): void;
    /**
     * 获取所有 Sbm 模型
     */
    getAllSbm(): Sbm[];
    /**
     * 显示所有 Sbm 模型
     */
    showAllSbm(): void;
    /**
     * 隐藏所有 Sbm 模型
     */
    hideAllSbm(): void;
    /**
     * 获取 Sbm 模型缓冲
     */
    getSbmModelMaps(): Map<string, library.Sbm>;
    /**
     * 设置 Sbm 模型缓冲
     */
    setSbmModelMaps(maps: Map<string, Sbm>): void;
    /**
     * 清空本地模型缓存数据
     */
    clearIdb(): Promise<void[]>;
    /******/
    /******/
    /******* Model methods */
    /******/
    /******/
    /**
     * 设置 GLTF 模型的 DRACO 解压库路径
     * @param path
     * @returns
     */
    setModelDracoDecoderPath(path: string): void;
    /**
     * 加载 Model 模型
     * @param modelInfo
     * @param parent
     * @param onProgress
     */
    loadModel(modelInfo: ModelInfo): Promise<Model>;
    /**
     * 克隆 Model 模型
     * @param model
     * @param modelInfo
     * @param parent
     */
    cloneModel(model: Model, modelInfo: CloneModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    /**
     * 根据 id 查询 Model 模型
     * @param id
     */
    getModelById(id: ModelInfo['id']): Model | null;
    /**
     * 根据 name 查询 Model 模型
     * @param name
     */
    getModelByName(name: string): Model[];
    /**
     * 根据用户数据查询 Model 模型
     * @param name
     */
    getModelByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Model[];
    /**
     * 根据 id 删除 Model 模型
     * @param id
     */
    removeModelById(id: ModelInfo['id']): boolean;
    /**
     * 为 Model 创建组
     * @param groupInfo
     */
    createGroupForModel(groupInfo: GroupInfo): Group;
    /**
     * 加载 Model 模型到组内
     * @param groupInfo
     * @param modelInfo
     * @param onProgress
     */
    loadModelToGroup(groupInfo: GroupInfo, modelInfo: ModelInfo[]): Promise<Group>;
    /**
     * 为已有的组添加 Model 模型
     * @param groupId
     * @param modelInfo
     * @param onProgress
     */
    addModelForGroup(groupId: GroupInfo['id'], modelInfo: ModelInfo[]): Promise<Group | null>;
    /**
     * 根据 id 查询 Model 模型组
     * @param id
     */
    getModelGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Model 模型组
     * @param name
     */
    getModelGroupByName(name: string): Group[];
    /**
     * 获取所有 Model 模型组
     */
    getAllModelGroup(): Group[];
    /**
     * 根据 id 删除 Model 模型组
     * @param id
     */
    removeModelGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Model 模型
     */
    clearModel(): void;
    /**
     * 获取所有 Model 模型
     */
    getAllModel(): Model[];
    /**
     * 显示所有 Model 模型
     */
    showAllModel(): void;
    /**
     * 隐藏所有 Model 模型
     */
    hideAllModel(): void;
    /******/
    /******/
    /******* Poi methods */
    /******/
    /******/
    /**
     * 创建 Poi
     * @param info
     */
    createPoi(info: PoiInfo): Poi;
    /**
     * 克隆 Poi
     * @param info
     */
    clonePoi(poi: Poi, poiInfo: ClonePoiInfo, parent?: BaseObject3D | null): Poi | void;
    /**
     * 根据 id 查询 Poi
     * @param id
     */
    getPoiById(id: PoiInfo['id']): Poi | null;
    /**
     * 根据 name 查询 Poi
     * @param id
     */
    getPoiByName(name: string): Poi[];
    /**
     * 根据用户数据查询 Poi
     * @param name
     */
    getPoiByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Poi[];
    /**
     * 根据 id 删除 Poi
     * @param id
     */
    removePoiById(id: PoiInfo['id']): boolean;
    /**
     * 为 Poi 创建组
     * @param groupInfo
     */
    createGroupForPoi(groupInfo: GroupInfo): Group;
    /**
     * 创建 Poi 到组内
     * @param groupInfo
     * @param poiInfo
     */
    createPoiToGroup(groupInfo: GroupInfo, poiInfo: PoiInfo[]): Group;
    /**
     * 为已有的组添加 Poi
     * @param groupInfo
     * @param poiInfo
     */
    addPoiForGroup(groupId: GroupInfo['id'], poiInfo: PoiInfo[]): Group | null;
    /**
     * 根据 id 查询 Poi 组
     * @param id
     */
    getPoiGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Poi 组
     * @param name
     */
    getPoiGroupByName(name: string): Group[];
    /**
     * 获取所有 Poi 模型组
     */
    getAllPoiGroup(): Group[];
    /**
     * 根据 id 删除 Poi 组
     * @param id
     */
    removePoiGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Poi
     */
    clearPoi(): void;
    /**
     * 获取所有 Poi 模型
     */
    getAllPoi(): Poi[];
    /**
     * 显示所有 Poi
     */
    showAllPoi(): void;
    /**
     * 隐藏所有 Poi
     */
    hideAllPoi(): void;
    /******/
    /******/
    /******* PoiNode methods */
    /******/
    /******/
    /**
     * 创建 PoiNode
     * @param info
     */
    createPoiNode(info: PoiNodeInfo): PoiNode;
    /**
     * 根据 id 查询 PoiNode
     * @param id
     */
    getPoiNodeById(id: PoiNodeInfo['id']): PoiNode | null;
    /**
     * 根据 name 查询 PoiNode
     * @param id
     */
    getPoiNodeByName(name: string): PoiNode[];
    /**
     * 根据用户数据查询 PoiNode
     * @param name
     */
    getPoiNodeByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): PoiNode[];
    /**
     * 根据 id 删除 PoiNode
     * @param id
     */
    removePoiNodeById(id: PoiNodeInfo['id']): boolean;
    /**
     * 为 PoiNode 创建组
     * @param groupInfo
     */
    createGroupForPoiNode(groupInfo: GroupInfo): Group;
    /**
     * 创建 PoiNode 到组内
     * @param groupInfo
     * @param poiNodeInfo
     */
    createPoiNodeToGroup(groupInfo: GroupInfo, poiNodeInfo: PoiNodeInfo[]): Group;
    /**
     * 为已有的组添加 PoiNode
     * @param groupInfo
     * @param poiNodeInfo
     */
    addPoiNodeForGroup(groupId: GroupInfo['id'], poiNodeInfo: PoiNodeInfo[]): Group | null;
    /**
     * 根据 id 查询 PoiNode 组
     * @param id
     */
    getPoiNodeGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 PoiNode 组
     * @param name
     */
    getPoiNodeGroupByName(name: string): Group[];
    /**
     * 获取所有 PoiNode 模型组
     */
    getAllPoiNodeGroup(): Group[];
    /**
     * 根据 id 删除 PoiNode 组
     * @param id
     */
    removePoiNodeGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 PoiNode
     */
    clearPoiNode(): void;
    /**
     * 获取所有 PoiNode 模型
     */
    getAllPoiNode(): PoiNode[];
    /**
     * 显示所有 PoiNode
     */
    showAllPoiNode(): void;
    /**
     * 隐藏所有 PoiNode
     */
    hideAllPoiNode(): void;
    /******/
    /******/
    /******* Canvas3D methods */
    /******/
    /******/
    /**
     * 创建 Canvas3D
     * @param info
     */
    createCanvas3D(info: Canvas3DInfo): Canvas3D;
    /**
     * 根据 id 查询 Canvas3D
     * @param id
     */
    getCanvas3DById(id: Canvas3DInfo['id']): Canvas3D | null;
    /**
     * 根据 name 查询 Canvas3D
     * @param id
     */
    getCanvas3DByName(name: string): Canvas3D[];
    /**
     * 根据用户数据查询 Canvas3D
     * @param name
     */
    getCanvas3DByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Canvas3D[];
    /**
     * 根据 id 删除 Canvas3D
     * @param id
     */
    removeCanvas3DById(id: Canvas3DInfo['id']): boolean;
    /**
     * 为 Canvas3D 创建组
     * @param groupInfo
     */
    createGroupForCanvas3D(groupInfo: GroupInfo): Group;
    /**
     * 创建 Canvas3D 到组内
     * @param groupInfo
     * @param canvasInfo
     */
    createCanvas3DToGroup(groupInfo: GroupInfo, canvasInfo: Canvas3DInfo[]): Group;
    /**
     * 为已有的组添加 Canvas3D
     * @param groupInfo
     * @param canvasInfo
     */
    addCanvas3DForGroup(groupId: GroupInfo['id'], canvasInfo: Canvas3DInfo[]): Group | null;
    /**
     * 根据 id 查询 Canvas3D 组
     * @param id
     */
    getCanvas3DGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Canvas3D 组
     * @param name
     */
    getCanvas3DGroupByName(name: string): Group[];
    /**
     * 获取所有 Canvas3D 模型组
     */
    getAllCanvas3DGroup(): Group[];
    /**
     * 根据 id 删除 Canvas3D 组
     * @param id
     */
    removeCanvas3DGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Canvas3D
     */
    clearCanvas3D(): void;
    /**
     * 获取所有 Canvas3D 模型
     */
    getAllCanvas3D(): Canvas3D[];
    /**
     * 显示所有 Canvas3D
     */
    showAllCanvas3D(): void;
    /**
     * 隐藏所有 Canvas3D
     */
    hideAllCanvas3D(): void;
    /******/
    /******/
    /******* Topology methods */
    /******/
    /******/
    /**
     * 获取最短路径
     * @param topology
     * @param info
     */
    getShortestPath(topology: Topology, info: ShortestPathInfo): Topology | null;
    /**
     * 通过多个起点获取最短路径
     * @param topology
     * @param info
     */
    getShortestPathByMultipleStartPoints(topology: Topology, info: ShortestPathByMultipleStartPoints): Topology | null;
    /**
     * 通过多个终点获取最短路径
     * @param topology
     * @param info
     */
    getShortestPathByMultipleEndPoints(topology: Topology, info: ShortestPathByMultipleEndPoints): Topology | null;
    /**
     * 创建 Topology，从 gml 文件资源
     * @param groupInfo
     * @param gmlUrl
     */
    createTopologyFromGml(topologyInfo: TopologyInfoForGml): Promise<Topology>;
    /**
     * 创建 Topology
     * @param info
     */
    createTopology(info: TopologyInfo): Topology;
    /**
     * 重置 Topology nodes
     * @param info
     */
    resetTopologyNodes(topology: Topology, nodes: TopologyNodeInfo[]): Topology;
    /**
     * 根据 id 查询 Topology
     * @param id
     */
    getTopologyById(id: TopologyInfo['id']): Topology | null;
    /**
     * 根据 name 查询 Topology
     * @param id
     */
    getTopologyByName(name: string): Topology[];
    /**
     * 根据用户数据查询 Topology
     * @param name
     */
    getTopologyByUserDataProperty(propNameOrFindFunc: string | UserDataPropertyFindFunc, propValue?: any): Topology[];
    /**
     * 根据 id 删除 Topology
     * @param id
     */
    removeTopologyById(id: TopologyInfo['id']): boolean;
    /**
     * 为 Topology 创建组
     * @param groupInfo
     */
    createGroupForTopology(groupInfo: GroupInfo): Group;
    /**
     * 创建 Topology 到组内
     * @param groupInfo
     * @param topologyInfo
     */
    createTopologyToGroup(groupInfo: GroupInfo, topologyInfo: TopologyInfo[]): Group;
    /**
     * 为已有的组添加 Topology
     * @param groupInfo
     * @param topologyInfo
     */
    addTopologyForGroup(groupId: GroupInfo['id'], topologyInfo: TopologyInfo[]): Group | null;
    /**
     * 根据 id 查询 Topology 组
     * @param id
     */
    getTopologyGroupById(id: GroupInfo['id']): Group | null;
    /**
     * 根据 name 查询 Topology 组
     * @param name
     */
    getTopologyGroupByName(name: string): Group[];
    /**
     * 获取所有 Topology 模型组
     */
    getAllTopologyGroup(): Group[];
    /**
     * 根据 id 删除 Topology 组
     * @param id
     */
    removeTopologyGroupById(id: GroupInfo['id']): boolean;
    /**
     * 清空 Topology
     */
    clearTopology(): void;
    /**
     * 获取所有 Topology 模型
     */
    getAllTopology(): Topology[];
    /**
     * 显示所有 Topology
     */
    showAllTopology(): void;
    /**
     * 隐藏所有 Topology
     */
    hideAllTopology(): void;
    /******/
    /******/
    /******* Helper methods */
    /******/
    /******/
    /**
     * 添加网格辅助器
     * @param options
     */
    addGridHelper(options: GridHelperOptions): THREE.GridHelper;
    /**
     * 添加轴线辅助器
     * @param options
     */
    addAxesHelper(options: AxesHelperOptions): THREE.AxesHelper;
    /**
     * 添加包围盒辅助器
     * @param options
     */
    addBoxHelper(options: BoxHelperOptions): THREE.Box3Helper;
    /**
     * 添加面辅助器
     * @param options
     */
    addPlaneHelper(options: PlaneHelperOptions): library.BaseMesh;
    /**
     * 创建地面
     * @param options
     */
    createGround(options: GroundHelperOptions): library.Ground;
    /**
     * 添加地面辅助器
     * @param options
     */
    addGroundHelper(options: GroundHelperOptions): library.Ground;
    /**
     * 添加平行光辅助器
     * @param options
     */
    addDirectionalLightHelper(options: DirectionalLightHelperOptions): THREE.DirectionalLightHelper;
    /**
     * 添加半球光辅助器
     * @param options
     */
    addHemisphereLightHelper(options: HemisphereLightHelperOptions): THREE.HemisphereLightHelper;
    /**
     * 添加聚光灯辅助器
     * @param options
     */
    addSpotLightHelper(options: SpotLightHelperOptions): THREE.SpotLightHelper;
    /**
     * 添加点光辅助器
     * @param options
     */
    addPointLightHelper(options: PointLightHelperOptions): THREE.PointLightHelper;
    /**
     * 添加矩形区域光辅助器
     * @param options
     * @returns
     */
    addRectAreaLightHelper(options: RectAreaLightHelperOptions): import("three/examples/jsm/helpers/RectAreaLightHelper").RectAreaLightHelper;
    /**
     * 通过 ID 获取辅助器
     * @param id
     */
    getHelperById<Helper>(id: string | number): Helper | null;
    /**
     * 通过 ID 移除辅助器
     * @param id
     */
    removeHelperById(id: string | number): boolean;
    /**
     * 清空辅助器
     */
    clearHelper(): void;
    /**
     * 显示所有辅助器
     */
    showAllHelper(): void;
    /**
     * 隐藏所有辅助器
     */
    hideAllHelper(): void;
}
