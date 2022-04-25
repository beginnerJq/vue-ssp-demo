import { Color } from 'three';
interface IVector2 {
    x: number;
    y: number;
}
interface PlaneIVector2 {
    x: number;
    z: number;
}
interface IVector3 extends IVector2 {
    z: number;
}
interface IVector3 extends IVector2 {
    z: number;
}
declare type Position = IVector3;
declare type Rotation = IVector3;
declare type Scale = IVector3;
declare type IColor = string | number | Color;
interface Level {
    max: number | null;
    min: number | null;
}
interface OffsetPoint {
    offsetX: number;
    offsetY: number;
}
declare type FlyToViewpoint = 'current' | 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right' | 'frontTop' | 'backTop' | 'leftTop' | 'rightTop' | 'leftFrontTop' | 'rightFrontTop' | 'leftBackTop' | 'rightBackTop';
declare type AxisType = 'x' | 'y' | 'z';
declare type SceneEventType = 'hover' | 'click' | 'rightClick' | 'dblClick';
declare type PoiNodeType = '2d' | '2D' | '2.5d' | '2.5D' | '3d' | '3D';
interface BaseSelectOptions {
    color?: IColor;
    opacity?: number;
}
interface ObjectEvents<ObjectType> {
    onLoad?: ((object: ObjectType) => void) | null;
    onClick?: ((object: ObjectType) => void) | null;
    onDblClick?: ((object: ObjectType) => void) | null;
    onRightClick?: ((object: ObjectType) => void) | null;
}
export interface ObjectEventsListener {
    type: 'click' | 'rightClick' | 'dblClick';
}
export interface Interpolate {
    t: number;
}
export { IVector2, IVector3, Position, Rotation, Scale, IColor, PlaneIVector2, Level, OffsetPoint, FlyToViewpoint, AxisType, SceneEventType, PoiNodeType, BaseSelectOptions, ObjectEvents, };
