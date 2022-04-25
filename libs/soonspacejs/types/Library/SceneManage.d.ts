import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
declare type SceneManageInfo = BaseObject3DInfo;
declare class SceneManage extends BaseObject3D {
    readonly isSceneManage: boolean;
    constructor(param: SceneManageInfo);
}
export { SceneManage, SceneManageInfo, };
