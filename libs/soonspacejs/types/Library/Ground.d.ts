import { BaseMesh, BaseMeshInfo } from './BaseMesh';
import { BufferGeometry, Material } from 'three';
declare type GroundInfo = BaseMeshInfo;
declare class Ground extends BaseMesh {
    constructor(geometry: BufferGeometry, material: Material, param: GroundInfo);
}
export { Ground, GroundInfo, };
