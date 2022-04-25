import DefaultManage from './DefaultManage';
import Viewport from '../Viewport';
import { Group, GroupInfo, Canvas3D, Canvas3DInfo } from '../Library';
declare class Canvas3DManage extends DefaultManage {
    constructor(viewport: Viewport);
    create(info: Canvas3DInfo): Canvas3D;
    createToGroup(groupInfo: GroupInfo, poiInfo: Canvas3DInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], poiInfo: Canvas3DInfo[]): Group | null;
}
export default Canvas3DManage;
