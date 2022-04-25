import { Point, PointInfo } from './Point';
import { TopologyNodeGraph } from '../Interface';
interface NodeInfo extends PointInfo {
    graphs: TopologyNodeGraph[];
}
declare class Node extends Point {
    graphs: TopologyNodeGraph[];
    constructor(param: NodeInfo);
}
export { Node, NodeInfo, };
