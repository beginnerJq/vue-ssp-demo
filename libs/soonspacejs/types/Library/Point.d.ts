import { BaseMesh, BaseMeshInfo } from './BaseMesh';
import { IColor } from '../Interface';
import { GradientTextureOptions } from '../Shared';
interface PointInfo extends BaseMeshInfo {
    radius?: number;
    color?: IColor;
    opacity?: number;
    gradient?: GradientTextureOptions;
}
declare type SetOptionsPointInfo = Omit<PointInfo, 'id'>;
declare class Point extends BaseMesh {
    constructor(param: PointInfo, type?: string);
    setOptions(param: SetOptionsPointInfo): void;
}
export { Point, PointInfo, SetOptionsPointInfo, };
