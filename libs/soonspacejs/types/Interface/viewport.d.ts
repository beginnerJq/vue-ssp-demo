import { Object3D } from 'three';
import { IColor, Position, Rotation, BaseSelectOptions } from './base';
import { AnimationOptions } from './animation';
import { GridHelperOptions } from './manager';
import { ControlsOptions } from './controls';
export declare type ColorSpace = 'Linear' | 'sRGB';
interface CameraViewpointData {
    position: Position;
    rotation: Rotation;
}
interface FlyToObjOptions extends AnimationOptions {
    padding?: number | string;
}
interface SurroundOptions {
    speed?: number;
    angle?: number;
    onStart?: <TweenType>(tween: TweenType) => void;
}
interface LabelOptions {
    mode?: 'scene' | 'screen';
    extendScale?: number;
}
interface InternalOptions {
    enableRenderCss2D: boolean;
    enableRenderCss2DHalf: boolean;
    enableRenderCss3D: boolean;
}
interface SelectModelOptions<TOptions> {
    objects: Object3D[];
    options?: TOptions;
}
interface EdgeSelectOptions {
    color?: IColor;
    hideColor?: IColor;
    edgeThickness?: number;
    edgeStrength?: number;
    pulsePeriod?: number;
}
interface StrokeSelectOptions extends BaseSelectOptions {
    isOpacityShow?: boolean;
    edgeColor?: IColor;
    edgeOpacity?: number;
}
declare type OpacitySelectOptions = BaseSelectOptions;
declare type HighlightSelectOptions = BaseSelectOptions;
interface EmissiveSelectOptions extends BaseSelectOptions {
    minOpacity?: number;
    maxOpacity?: number;
    duration?: number;
}
interface FogOptions {
    color?: IColor;
    near?: number;
    far?: number;
}
interface SkyOptions {
    enable?: boolean;
    position?: Position;
    scalar?: number;
    turbidity?: number;
    rayleigh?: number;
    elevation?: number;
    azimuth?: number;
    exposure?: number;
}
interface ViewportOptions {
    showInfo?: boolean;
    showStats?: boolean;
    showViewHelper?: boolean;
    showGrid?: boolean | GridHelperOptions;
    background?: {
        color?: IColor | null;
        alpha?: boolean;
        img?: string;
        skyBox?: string | {
            dirPath: string;
            fileNames: string[];
        };
    };
    fog?: boolean | FogOptions;
    controls?: ControlsOptions;
    hoverEnabled?: boolean;
    closeInfoLog?: boolean;
    closeWarnLog?: boolean;
    useIndexedDB?: boolean;
    logarithmicDepthBuffer?: boolean;
}
interface ViewportState {
    useFreq: number;
    animationTotal: number;
}
export interface BloomOptions {
    enable?: boolean;
    strength?: number;
    radius?: number;
    threshold?: number;
}
export interface SobelOptions {
    enable?: boolean;
}
export { CameraViewpointData, FlyToObjOptions, SurroundOptions, LabelOptions, InternalOptions, SelectModelOptions, EdgeSelectOptions, StrokeSelectOptions, OpacitySelectOptions, HighlightSelectOptions, EmissiveSelectOptions, FogOptions, SkyOptions, ViewportOptions, ViewportState, };
