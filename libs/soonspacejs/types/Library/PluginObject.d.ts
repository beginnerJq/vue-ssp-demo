import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
declare type PluginObjectInfo = BaseObject3DInfo;
declare class PluginObject extends BaseObject3D {
    constructor(param: PluginObjectInfo);
}
export { PluginObject, PluginObjectInfo, };
