import { Box3, PerspectiveCamera, Vector3, Euler, Object3D } from 'three';
import { Rotation, Position, AnimationOptions, FlyToViewpoint, CameraViewpointData, FlyToObjOptions, SurroundOptions, LabelOptions } from '../Interface';
import { BaseObject3D, BaseMesh } from '../Library';
import Viewport from '.';
declare class cameraManager {
    viewport: Viewport;
    mainCamera: PerspectiveCamera;
    currentCamera: PerspectiveCamera;
    cameras: {
        [x: string]: PerspectiveCamera;
    };
    constructor(viewport: Viewport);
    createCamera(key: string): PerspectiveCamera;
    removeCamera(key: string): boolean;
    setCurrentCamera(camera: PerspectiveCamera): void;
    getMainCamera(): PerspectiveCamera;
    getCameraViewpoint(): CameraViewpointData;
    setCameraViewpoint(data: CameraViewpointData): void;
    rotateTo(rotation: Euler, options?: AnimationOptions): Promise<void>;
    moveTo(position: Position, options?: AnimationOptions): Promise<void>;
    flyTo(position: Position, rotation?: FlyToViewpoint | Rotation | Euler, options?: AnimationOptions): Promise<void>;
    flyToBoundingBox(bbox: Box3, rotation?: FlyToViewpoint | Rotation | Euler, options?: AnimationOptions): Promise<void>;
    flyToObj(object: Object3D, rotation?: FlyToViewpoint | Rotation | Euler, options?: FlyToObjOptions): Promise<void>;
    surroundOnTarget(target: Vector3 | Position, options?: SurroundOptions): Promise<void>;
    surroundOnObject(object: BaseObject3D | BaseMesh, options?: SurroundOptions): Promise<void>;
    getMovePosByBBox(bbox: Box3): Vector3;
    getObjectLabelPos(bbox: Box3 | BaseObject3D, rotation?: FlyToViewpoint | Rotation | Euler, options?: LabelOptions): Position;
}
export default cameraManager;
