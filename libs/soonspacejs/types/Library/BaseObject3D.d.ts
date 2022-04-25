import { Object3D, Vector3, Euler, BaseEvent, Event } from 'three';
import { Tween } from '@tweenjs/tween.js';
import { Position, Rotation, Scale, Level, AnimationOptions, Interpolate } from '../Interface';
interface BaseObject3DInfo {
    id: string | number;
    name?: string;
    level?: Level;
    visible?: boolean;
    position?: Position;
    rotation?: Rotation;
    scale?: Scale;
    userData?: any;
}
declare class BaseObject3D<E extends BaseEvent = Event> extends Object3D<E> {
    sid: string | number;
    stype: string;
    handleHide: boolean;
    level: Level;
    autoUpdate: boolean;
    constructor(param: BaseObject3DInfo, type?: string);
    show(): void;
    hide(): void;
    setMove(position: Position | Vector3, options?: AnimationOptions, onUpdate?: (source: Position, tween: Tween<Position>) => void, onStart?: (tween: Tween<Position>) => void): Promise<void>;
    setRotate(rotation: Rotation | Euler, options?: AnimationOptions, onUpdate?: (source: Rotation, tween: Tween<Interpolate>) => void, onStart?: (tween: Tween<Interpolate>) => void): Promise<void>;
    setScale(scale: Scale | Vector3, options?: AnimationOptions, onUpdate?: (source: Scale, tween: Tween<Scale>) => void, onStart?: (tween: Tween<Scale>) => void): Promise<void>;
    sClone<T extends BaseObject3D>(recursive?: boolean): T;
    sCopy<T extends BaseObject3D>(source: BaseObject3D, recursive?: boolean): T;
    getSpaceAttribute(isFromWorld?: boolean): {
        position: Vector3;
        rotation: Euler;
        scale: Vector3;
    };
    syncSpaceAttribute(object: Object3D, isFromWorld?: boolean): void;
}
export { BaseObject3D, BaseObject3DInfo, };
