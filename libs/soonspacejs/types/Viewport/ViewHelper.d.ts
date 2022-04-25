import * as THREE from 'three';
import { Camera, WebGLRenderer } from 'three';
declare class ViewHelper extends THREE.Object3D {
    render: (renderer: WebGLRenderer) => void;
    constructor(editorCamera: Camera, dom: HTMLElement);
}
export { ViewHelper, };
