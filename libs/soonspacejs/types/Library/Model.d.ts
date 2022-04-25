import { Box3 } from 'three';
import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { ObjectEvents, ObjectEventsListener } from '../Interface';
interface ModelInfo extends BaseObject3DInfo, ObjectEvents<Model> {
    url: string;
}
interface ModelInnerInfo extends ModelInfo {
    format: string;
}
declare class Model extends BaseObject3D<ObjectEventsListener> implements ObjectEvents<Model> {
    readonly formatType: string;
    isEventPropagation: boolean;
    onLoad: ((object: Model) => void) | null;
    onClick: ((object: Model) => void) | null;
    onDblClick: ((object: Model) => void) | null;
    onRightClick: ((object: Model) => void) | null;
    constructor(param: ModelInnerInfo);
    getBoundingBox(): Box3;
    eventPropagation(): void;
    setEnvMap(dirPath: string, fileNames?: string[], options?: {
        reflectivity?: number;
    }): void;
    sClone<T extends BaseObject3D>(recursive?: boolean): T;
}
export { Model, ModelInfo, ModelInnerInfo, };
