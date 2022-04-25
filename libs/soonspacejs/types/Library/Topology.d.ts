import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { Node, NodeInfo } from './Node';
import { Circle, CircleInfo } from './Circle';
import { Link, LinkInfo } from './Link';
import { TopologyNodeInfo, TopologyEffectInfo, TopologyInnerNodeInfo } from '../Interface';
declare type TopologyType = 'line' | 'network';
interface TopologyInfo extends BaseObject3DInfo, TopologyEffectInfo {
    nodes: TopologyNodeInfo[];
    type: TopologyType;
}
interface TopologyInnerInfo extends BaseObject3DInfo, TopologyEffectInfo {
    nodes: TopologyInnerNodeInfo[];
    type: TopologyType;
}
declare class Topology extends BaseObject3D {
    type: TopologyType;
    nodes: Node[];
    links: Link[];
    info: TopologyInnerInfo;
    constructor(param: TopologyInnerInfo);
    create(): void;
    createNode(param: NodeInfo): Node;
    createCircle(param: CircleInfo): Circle;
    createLink(param: LinkInfo): Link;
    resetNodes(newNodes: TopologyInnerNodeInfo[]): void;
}
export { Topology, TopologyInfo, TopologyInnerInfo, };
