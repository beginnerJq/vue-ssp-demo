/**
 * @author mrdoob / http://mrdoob.com/
 */
import { Object3D, Scene, PerspectiveCamera } from 'three';
declare class CSS2DObject extends Object3D {
    element: HTMLElement;
    constructor(element: HTMLElement);
}
declare class CSS2DRenderer {
    domElement: HTMLElement;
    constructor(domElement?: HTMLElement);
    setSize(width: number, height: number): void;
    renderObject(object: Object3D, scene: Scene, camera: PerspectiveCamera): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
}
export { CSS2DObject, CSS2DRenderer, };
