import * as localforage from 'localforage';
import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { BaseObject3D, Group, GroupInfo, Sbm, SbmInfo } from '../Library';
import { CloneSbmInfo, ModelLoadingProgressCallback, GroupProgressCallback } from '../Interface';
import { SbmCache } from '../Interface/sbmCache';
declare class SbmManage extends DefaultManage {
    readonly viewport: Viewport;
    modelMaps: Map<string, Sbm>;
    store: typeof localforage;
    constructor(viewport: Viewport);
    load(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    parse(data: ArrayBuffer | SbmCache, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm>;
    clone(model: Sbm, sbmInfo: CloneSbmInfo, parent?: BaseObject3D | null): Promise<Sbm>;
    loadToGroup(groupInfo: GroupInfo, sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group>;
    addForGroup(groupId: GroupInfo['id'], sbmInfoList: SbmInfo[], onProgress?: GroupProgressCallback): Promise<Group | null>;
    createGroupFromXml(groupInfo: GroupInfo, url: string): Promise<Group>;
    /**
     * 清空本地模型缓存数据
     */
    clearIdb(): Promise<void>;
    _loadItem(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback, parent?: BaseObject3D | null): Promise<Sbm>;
    /**
     * 远程请求 sbm
     * @param sbmInfo
     * @returns
     */
    _fetchBuffer(sbmInfo: SbmInfo): Promise<ArrayBuffer>;
}
export default SbmManage;
