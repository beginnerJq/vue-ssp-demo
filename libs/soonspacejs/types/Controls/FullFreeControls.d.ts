import { Vector3, Box3, PerspectiveCamera } from 'three';
import Viewport from '../Viewport';
import { OffsetPoint, ControlsOptions } from '../Interface';
declare class FullFreeControls implements ControlsOptions {
    viewport: Viewport;
    camera: PerspectiveCamera;
    domElement: HTMLElement;
    interactivePosition: Vector3 | null;
    state: number;
    [x: string]: any;
    constructor(viewport: Viewport, camera: PerspectiveCamera);
    setOptions(options: ControlsOptions): void;
    init(): void;
    getInteractivePosition(event: MouseEvent | TouchEvent | OffsetPoint): Vector3 | null;
    intersectsBox(panOffset: Vector3): boolean;
    caculateContainPoint(point: Vector3, camera: PerspectiveCamera): boolean;
    panLeft(distance: number): void;
    panUp(distance: number): void;
    pan(delta: Vector3): void;
    zoom_on_point(delta: Vector3, event: WheelEvent): void;
    zoom_touch(delta: Vector3): void;
    rotate(delta: Vector3): void;
    autoRotate(): void;
    update(): void;
    getSceneBbox(): Box3;
}
export default FullFreeControls;
