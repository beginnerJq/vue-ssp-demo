import { Clock, Scene, PerspectiveCamera, WebGLRenderer, PMREMGenerator, Vector3, AnimationMixer, Intersection, Object3D, AnimationAction, AnimationClip } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import Scener from './Scener';
import { CSS2DRenderer, CSS2DHalfRenderer, CSS3DRenderer } from '../Renderer';
import RendererManager, { PassObj } from './RendererManager';
import CameraManager from './CameraManager';
import { FullFreeControls } from '../Controls';
import { Model } from '../Library';
import { ColorSpace, SkyOptions, IColor, OffsetPoint, SceneEventType, Position, ViewportOptions, ViewportState, ModelAnimationFindFunc, SignalsState, BloomOptions, SobelOptions } from '../Interface';
import Info from './Info';
import { ViewHelper } from './ViewHelper';
export declare const innerRenderState: Record<string, boolean>;
declare class Viewport {
    clock: Clock;
    options: ViewportOptions;
    state: ViewportState;
    signals: SignalsState;
    scener: Scener;
    scene: Scene;
    sky: Sky | null;
    rendererManager: RendererManager;
    container: HTMLElement;
    interactiveContainer: HTMLElement;
    renderer: WebGLRenderer;
    rendererCSS2D: CSS2DRenderer;
    rendererCSS3D: CSS3DRenderer;
    rendererCSS2DHalf: CSS2DHalfRenderer;
    pmremGenerator: PMREMGenerator;
    info: Info;
    stats: Stats;
    cameraManager: CameraManager;
    camera: PerspectiveCamera;
    controls: FullFreeControls;
    effectComposer: EffectComposer;
    passObj: PassObj;
    mixer: AnimationMixer;
    /**
     * render 前回调
     */
    postUpdate: Map<string, (time: number) => void>;
    /**
     * render 后回调
     */
    postRender: Map<string, (time: number) => void>;
    private selectModel;
    private selectPoi;
    private _loop;
    viewHelper: ViewHelper;
    constructor(options: ViewportOptions);
    _initInfo(): void;
    _initStats(): void;
    _initViewHelper(): void;
    /**
     ***************************** renderer ***************************
     */
    setSobel(options?: SobelOptions): void;
    setBloom(options?: BloomOptions): void;
    setColorSpace(colorSpace: ColorSpace): void;
    /**
     ***************************** background ***************************
     */
    setSphereSkyBackground(imgUrl: string): void;
    setSkyBackground(dirPath: string, fileNames?: string[]): void;
    setBackgroundColor(color: IColor): void;
    setBackgroundImage(imgUrl: string): void;
    setSky(options?: SkyOptions): Sky | undefined;
    closeSky(): boolean;
    /**
     ***************************** environment ***************************
     */
    setEnvironment(): import("three").Texture;
    /**
     ***************************** modelAnimation ***************************
     */
    playModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): AnimationAction | undefined;
    stopModelAnimation(model: Model, animation: number | AnimationClip | ModelAnimationFindFunc): void;
    /**
     ***************************** render ***************************
     */
    render(fn?: () => void): Promise<void>;
    trigerRender(count?: number): void;
    _passesObserver(): void;
    /**
     * 每帧都会被执行
     * @param time
     * @returns
     */
    autoRender(time: number): void;
    animate(time: number): void;
    getOffsetByPosition(position: Position): {
        left: number;
        top: number;
    };
    getPositionByOffset(offset: OffsetPoint, z?: number): Vector3;
    getIntersects(event: MouseEvent | TouchEvent | OffsetPoint, objects?: Object3D<import("three").Event>[]): Intersection<Object3D<import("three").Event>>[];
    rayClash(startPoint?: Vector3, dir?: Vector3, objects?: Object3D<import("three").Event>[]): Intersection<Object3D<import("three").Event>>[];
    setHoverEnabled(enabled: boolean): void;
    clearSignals(): void;
    dispose(): Promise<void>;
    _signalsEventListenr(): void;
    _containerAddEventListener(container: HTMLElement): void;
    /**
     * 触发场景交互事件
     * @param {SceneEventType}          eventType 事件类型 hover | click | dblClick | rightClick
     * @param {MouseEvent | TouchEvent} event     鼠标事件对象 或 触摸事件对象
     */
    _triggerSceneEventInAllObject(eventType: SceneEventType, event: MouseEvent | TouchEvent): void;
    _getManagerScene(type: string): Object3D | undefined;
}
export default Viewport;
