import { Box3 } from 'three';
import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { ObjectEvents, ObjectEventsListener } from '../Interface';
interface SbmInfo extends BaseObject3DInfo, ObjectEvents<Sbm> {
    url: string;
    isPlatform?: boolean;
}
declare class Sbm extends BaseObject3D<ObjectEventsListener> implements ObjectEvents<Sbm> {
    isEventPropagation: boolean;
    onLoad: ((object: Sbm) => void) | null;
    onClick: ((object: Sbm) => void) | null;
    onDblClick: ((object: Sbm) => void) | null;
    onRightClick: ((object: Sbm) => void) | null;
    constructor(param: SbmInfo);
    getBoundingBox(): Box3;
    eventPropagation(): void;
    setEnvMap(dirPath: string, fileNames?: string[], options?: {
        reflectivity?: number;
    }): void;
    sClone<T extends BaseObject3D>(recursive?: boolean): T;
}
export { Sbm, SbmInfo, };
