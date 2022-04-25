import DefaultManage from './DefaultManage';
import { Group, GroupInfo, Topology, TopologyInfo } from '../Library';
import { TopologyInfoForGml, ShortestPathInfo, ShortestPathByMultipleStartPoints, ShortestPathByMultipleEndPoints, TopologyNodeInfo } from '../Interface';
import Viewport from '../Viewport';
import { Dijkstras } from '../Math/dijkstra';
declare class TopologyManage extends DefaultManage {
    dijkstra: Dijkstras;
    constructor(viewport: Viewport);
    createFromGml(topologyInfoForGml: TopologyInfoForGml): Promise<Topology>;
    create(topologyInfo: TopologyInfo): Topology;
    resetNodes(topology: Topology, nodes: TopologyNodeInfo[]): Topology;
    createToGroup(groupInfo: GroupInfo, topologyInfos: TopologyInfo[]): Group;
    addForGroup(groupId: GroupInfo['id'], topologyInfos: TopologyInfo[]): Group | null;
    getShortestPath(topology: Topology, info: ShortestPathInfo): Topology | null;
    getShortestPathByMultipleStartPoints(topology: Topology, info: ShortestPathByMultipleStartPoints): Topology | null;
    getShortestPathByMultipleEndPoints(topology: Topology, info: ShortestPathByMultipleEndPoints): Topology | null;
    private setDijkstraGraph;
    private generateLineTopologyInfoNodeGraphs;
}
export default TopologyManage;
