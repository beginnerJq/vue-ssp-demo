import { Scene, Object3D } from 'three';
import { EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions, SignalsState } from '../Interface';
declare class Scener {
    readonly signals: SignalsState;
    scene: Scene;
    selectedObjects: {
        edge: Object3D[];
        stroke: Object3D[];
        opacity: Object3D[];
        highlight: Object3D[];
        emissive: Object3D[];
    };
    intersectsList: {
        meshOfModelList: Object3D[];
        poiIconList: Object3D[];
        otherObjList: Object3D[];
        getAll: () => Object3D[];
    };
    constructor(signals: SignalsState);
    addObject(object: Object3D, parent?: Object3D): void;
    removeObject(object: Object3D): void;
    openSceneFog(options?: FogOptions): void;
    closeSceneFog(): void;
    edgeShow(object: Object3D | Object3D[], options?: EdgeSelectOptions): Promise<void>;
    unEdgeShow(objects?: Object3D | Object3D[]): Promise<void | void[]>;
    strokeShow(object: Object3D | Object3D[], options?: StrokeSelectOptions): Promise<void | void[]>;
    unStrokeShow(objects?: Object3D | Object3D[]): Promise<void | void[]>;
    opacityShow(object: Object3D | Object3D[], options?: OpacitySelectOptions): Promise<void | void[]>;
    unOpacityShow(objects?: Object3D | Object3D[]): Promise<void | void[]>;
    highlightShow(object: Object3D | Object3D[], options?: HighlightSelectOptions): Promise<void | void[]>;
    unHighlightShow(objects?: Object3D | Object3D[]): Promise<void | void[]>;
    emissiveShow(object: Object3D | Object3D[], options?: EmissiveSelectOptions): Promise<void | void[]>;
    unEmissiveShow(objects?: Object3D | Object3D[]): Promise<void | void[]>;
    _triggerObjectAdded(object: Object3D): void;
}
export default Scener;
