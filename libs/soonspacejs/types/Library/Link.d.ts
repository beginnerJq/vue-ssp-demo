import { Position, IColor, AnimationOptions } from '../Interface';
import { BaseMesh, BaseMeshInfo } from './BaseMesh';
interface LinkInfo extends BaseMeshInfo {
    passable?: number;
    restrict?: number;
    start: Position;
    end: Position;
    width?: number;
    color?: IColor;
    opacity?: number;
    imgUrl?: string;
    animation?: boolean | AnimationOptions;
}
declare class Link extends BaseMesh {
    passable: number;
    restrict: number;
    constructor(param: LinkInfo);
}
export { Link, LinkInfo, };
