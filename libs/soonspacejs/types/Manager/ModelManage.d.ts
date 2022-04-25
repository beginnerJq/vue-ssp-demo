import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as localforage from 'localforage';
import DefaultManage from './DefaultManage';
import { BaseObject3D, Group, GroupInfo, Model, ModelInfo } from '../Library';
import { CloneModelInfo } from '../Interface';
import Viewport from '../Viewport';
declare class ModelManage extends DefaultManage {
    readonly viewport: Viewport;
    modelMaps: Map<string, Model>;
    store: typeof localforage;
    dracoDecoderPath: string | null;
    gltfLoader: GLTFLoader | null;
    fbxLoader: FBXLoader | null;
    constructor(viewport: Viewport);
    setDracoDecoderPath(path: string): void;
    load(modelInfo: ModelInfo): Promise<Model>;
    parse(format: string, buffer: ArrayBuffer, modelInfo: ModelInfo): Promise<Model>;
    clone(model: Model, info: CloneModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    loadToGroup(groupInfo: GroupInfo, modelInfo: ModelInfo[]): Promise<Group>;
    addForGroup(groupId: GroupInfo['id'], modelInfo: ModelInfo[]): Promise<Group | null>;
    /**
     * 清空本地模型缓存数据
     */
    clearIdb(): Promise<void>;
    _loadItem(modelInfo: ModelInfo, parent?: BaseObject3D | null): Promise<Model>;
    /**
     * 远程请求 model
     * @param modelInfo
     * @returns
     */
    _fetchBuffer(modelInfo: ModelInfo): Promise<ArrayBuffer>;
    private _copyMaterial;
}
export default ModelManage;
