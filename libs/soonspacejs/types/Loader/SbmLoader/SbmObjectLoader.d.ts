import { Material } from 'three';
import { Sbm, SbmInfo } from '../../Library';
import { SbmCache } from '../../Interface/sbmCache';
declare class SbmObjectLoader {
    materials: Map<string, Material>;
    constructor();
    /**
     * @example
     * {
     *  materialsCache: {
     *   0: {textureUrl:'xxx.png', materialInfo: [0,0,0,...]}
     *  },
     * meshsCache: {
     *  materialId: 0,
      * position: [0,0,0,...],
      * uv: [0,0,0,...],
      * }
     * }
     * @param sbmObject
     * @param sbmInfo
     * @returns
     */
    parseObject(sbmObject: SbmCache, sbmInfo: SbmInfo): Sbm;
}
export default SbmObjectLoader;
