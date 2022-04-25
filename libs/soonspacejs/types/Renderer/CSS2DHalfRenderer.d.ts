/**
 * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
 * @author mrdoob / http://mrdoob.com/
 * @author yomotsu / https://yomotsu.net/
 */
import { Object3D, Scene, PerspectiveCamera, OrthographicCamera } from 'three';
declare class CSS2DHalfObject extends Object3D {
    element: HTMLElement;
    constructor(element: HTMLElement);
}
declare class CSS2DHalfRenderer {
    domElement: HTMLElement;
    cameraElement: HTMLElement;
    cache: {
        camera: {
            fov: number;
            style: string;
        };
        objects: WeakMap<object, any>;
    };
    constructor(domElement?: HTMLElement, cameraElement?: HTMLElement);
    setSize(width: number, height: number): void;
    renderObject(object: Object3D, scene: Scene, camera: PerspectiveCamera | OrthographicCamera, cameraCSSMatrix: string): void;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera): void;
}
export { CSS2DHalfObject, CSS2DHalfRenderer, };
