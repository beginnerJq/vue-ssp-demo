import { Vector3, Euler, Box3, Object3D } from 'three';
import { IVector3, AxisType } from '../Interface';
declare function IVector3ToVector3(val: IVector3 | Vector3): Vector3;
declare function IVector3ToEuler(val: IVector3 | Euler): Euler;
declare function getBoundingBox(object: Object3D): Box3;
declare function rotationAxisFix(axis: AxisType, source: Euler, target: Euler): Euler;
declare function rotationAFix(source: Euler, target: Euler): Euler;
declare function deg2Euler(deg: number): number;
declare function euler2Deg(euler: number): number;
/**
 * 从 object 获取 position、rotation、scale
 * @param object
 * @param isFromWorld
 * @returns
 */
declare function getSpaceAttributeFromObject(object: Object3D, isFromWorld?: boolean): {
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
};
/**
 * 同步 source 的 position、rotation、scale 到 target
 * @param target
 * @param source
 * @param isFromWorld
 */
declare function syncSpaceAttributeToObject(target: Object3D, source: Object3D, isFromWorld?: boolean): void;
export { IVector3ToVector3, IVector3ToEuler, getBoundingBox, rotationAxisFix, rotationAFix, deg2Euler, euler2Deg, getSpaceAttributeFromObject, syncSpaceAttributeToObject, };
