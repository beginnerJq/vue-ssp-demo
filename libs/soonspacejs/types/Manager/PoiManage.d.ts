import DefaultManage from './DefaultManage';
import { SpriteMaterial } from 'three';
import { Poi, PoiInfo, Group, GroupInfo, BaseObject3D } from '../Library';
import { ClonePoiInfo } from '../Interface';
import Viewport from '../Viewport';
declare class PoiManage extends DefaultManage {
    materials: Map<string, SpriteMaterial>;
    constructor(viewport: Viewport);
    create(info: PoiInfo): Poi;
    clone(poi: Poi, poiInfo: ClonePoiInfo, parent?: BaseObject3D | null): Poi | void;
    createToGroup(groupInfo: GroupInfo, poiInfo: PoiInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], poiInfo: PoiInfo[]): Group | null;
    _createMaterial(url: PoiInfo['url']): SpriteMaterial;
    private _copyMaterial;
}
export default PoiManage;
