import { GradientTextureOptions } from '../Shared';
import { Position, IColor } from '../Interface';
import { BaseMesh, BaseMeshInfo } from './BaseMesh';
interface LineInfo extends BaseMeshInfo {
    points: Position[];
    width?: number;
    color?: IColor;
    opacity?: number;
    gradient?: GradientTextureOptions;
}
declare type SetOptionsLineInfo = Omit<LineInfo, 'id'>;
declare class Line extends BaseMesh {
    points: Position[];
    params: LineInfo;
    constructor(params: LineInfo, type?: string);
    setOptions(params: SetOptionsLineInfo): void;
}
export { Line, LineInfo, SetOptionsLineInfo, };
