import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
declare type GroupInfo = BaseObject3DInfo;
declare class Group extends BaseObject3D {
    constructor(param: GroupInfo);
    showAllChild(): void;
    hideAllChild(): void;
}
export { Group, GroupInfo, };
