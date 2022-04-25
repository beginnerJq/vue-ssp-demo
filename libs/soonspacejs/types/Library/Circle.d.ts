import { IColor } from '../Interface';
import { BaseMesh, BaseMeshInfo } from './BaseMesh';
import { GradientTextureOptions } from '../Shared';
interface CircleInfo extends BaseMeshInfo {
    radius?: number;
    color?: IColor;
    opacity?: number;
    gradient?: GradientTextureOptions;
}
declare type SetOptionsCircleInfo = Omit<CircleInfo, 'id'>;
declare class Circle extends BaseMesh {
    constructor(param: CircleInfo);
    setOptions(params: SetOptionsCircleInfo): void;
}
export { Circle, CircleInfo, SetOptionsCircleInfo, };
