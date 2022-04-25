import { IColor, PlaneIVector2 } from '../Interface';
import { BaseMesh, BaseMeshInfo } from './BaseMesh';
import { GradientTextureOptions } from '../Shared';
interface PolygonInfo extends BaseMeshInfo {
    yHeight: number;
    points: PlaneIVector2[];
    color?: IColor;
    opacity?: number;
    gradient?: GradientTextureOptions;
}
declare type SetOptionsPolygonInfo = Omit<PolygonInfo, 'id'>;
declare class Polygon extends BaseMesh {
    points: PlaneIVector2[];
    constructor(param: PolygonInfo, type?: string);
    setOptions(param: SetOptionsPolygonInfo): void;
}
export { Polygon, PolygonInfo, SetOptionsPolygonInfo, };
