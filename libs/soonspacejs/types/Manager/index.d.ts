import Viewport from '../Viewport';
import DefaultManage from './DefaultManage';
import LightManage from './LightManage';
import SbmManage from './SbmManage';
import ModelManage from './ModelManage';
import PoiManage from './PoiManage';
import PoiNodeManage from './PoiNodeManage';
import Canvas3DManage from './Canvas3DManage';
import TopologyManage from './TopologyManage';
import HelperManage from './HelperManage';
import PluginObjectManage from './PluginObjectManage';
interface ManagerStore {
    LightManager: LightManage;
    sbmManager: SbmManage;
    modelManager: ModelManage;
    poiManager: PoiManage;
    poiNodeManager: PoiNodeManage;
    canvas3DManager: Canvas3DManage;
    topologyManager: TopologyManage;
    helperManager: HelperManage;
    pluginObjectManager: PluginObjectManage;
    [x: string]: DefaultManage;
}
declare class Manager {
    readonly viewport: Viewport;
    needUpdate: boolean;
    readonly store: ManagerStore;
    readonly postUpdate: Map<string, () => void>;
    constructor(viewport: Viewport);
    update(): void;
    clearObject(): void;
    clear(): void;
}
export { ManagerStore, };
export default Manager;
