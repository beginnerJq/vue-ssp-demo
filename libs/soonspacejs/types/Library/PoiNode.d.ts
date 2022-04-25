import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { PoiNodeType } from '../Interface';
import { Box3 } from 'three';
interface PoiNodeInfo extends BaseObject3DInfo {
    type: PoiNodeType;
    element: HTMLElement;
}
declare class PoiNode extends BaseObject3D {
    readonly elementType: string;
    element: HTMLElement;
    constructor(param: PoiNodeInfo);
    create(type: PoiNodeInfo['type']): void;
    show(): void;
    hide(): void;
    getBoundingBox(padding?: number): Box3;
    _create2D(): void;
    _create2DHalf(): void;
    _create3D(): void;
    _setElementDisplay(visible: boolean): void;
}
export { PoiNode, PoiNodeInfo, };
