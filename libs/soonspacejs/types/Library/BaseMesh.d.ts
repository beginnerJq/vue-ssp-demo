import { Box3, Vector3, Euler, Mesh, BufferGeometry, Material } from 'three';
import { Tween } from '@tweenjs/tween.js';
import { Position, Rotation, Scale, Level, AnimationOptions, Interpolate } from '../Interface';
import { BaseObject3DInfo } from './BaseObject3D';
declare type BaseMeshInfo = BaseObject3DInfo;
declare class BaseMesh extends Mesh {
    sid: string | number;
    stype: string;
    handleHide: boolean;
    level: Level;
    isEventPropagation: boolean;
    autoUpdate: boolean;
    constructor(geometry: BufferGeometry, material: Material | Material[], param: BaseMeshInfo, type?: string);
    show(): void;
    hide(): void;
    setMove(position: Position | Vector3, options?: AnimationOptions, onUpdate?: (source: Position, tween: Tween<Position>) => void, onStart?: (tween: Tween<Position>) => void): Promise<void>;
    setRotate(rotation: Rotation | Euler, options?: AnimationOptions, onUpdate?: (source: Rotation, tween: Tween<Interpolate>) => void, onStart?: (tween: Tween<Interpolate>) => void): Promise<void>;
    setScale(scale: Scale | Vector3, options?: AnimationOptions, onUpdate?: (source: Scale, tween: Tween<Scale>) => void, onStart?: (tween: Tween<Scale>) => void): Promise<void>;
    getBoundingBox(): Box3;
    eventPropagation(): void;
    sClone(recursive?: boolean): BaseMesh;
    sCopy(source: BaseMesh, recursive?: boolean): BaseMesh;
}
export { BaseMesh, BaseMeshInfo, };
