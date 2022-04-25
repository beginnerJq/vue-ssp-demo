import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { Icon, IconInfo } from './Icon';
import { SpriteMaterial, Box3 } from 'three';
import { ObjectEvents, ObjectEventsListener, Scale } from '../Interface';
interface PoiInfo extends BaseObject3DInfo, ObjectEvents<Poi> {
    url: string;
    nameScale?: Scale;
}
interface CanvasTextInfo {
    fontFamily?: string;
    fontSize?: number;
    color?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
}
declare class Poi extends BaseObject3D<ObjectEventsListener> implements ObjectEvents<Poi> {
    icon: Icon;
    text: Icon | null;
    isEventPropagation: boolean;
    onClick: ((object: Poi) => void) | null;
    onDblClick: ((object: Poi) => void) | null;
    onRightClick: ((object: Poi) => void) | null;
    constructor(material: SpriteMaterial, param: PoiInfo);
    getBoundingBox(padding?: number): Box3;
    eventPropagation(): void;
    sClone<T extends BaseObject3D>(recursive?: boolean): T;
    _createIcon(material: SpriteMaterial): Icon;
    _createText(info: IconInfo): void;
    _createCanvasText(text: string, info?: CanvasTextInfo): HTMLCanvasElement;
}
export { Poi, PoiInfo, CanvasTextInfo, };
