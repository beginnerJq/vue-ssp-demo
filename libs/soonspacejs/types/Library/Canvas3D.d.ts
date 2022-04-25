import { BaseObject3D, BaseObject3DInfo } from './BaseObject3D';
import { BaseMesh } from './BaseMesh';
import { Point, PointInfo } from './Point';
import { Line, LineInfo } from './Line';
import { Polygon, PolygonInfo } from './Polygon';
import { Circle, CircleInfo } from './Circle';
interface Canvas3DInfo extends BaseObject3DInfo {
    points?: PointInfo[];
    lines?: LineInfo[];
    polygons?: PolygonInfo[];
    circles?: CircleInfo[];
}
declare class Canvas3D extends BaseObject3D {
    constructor(param: Canvas3DInfo);
    create(param: Canvas3DInfo): void;
    createPoint(param: PointInfo): Point;
    getPoint(id: PointInfo['id']): Point | null;
    removePoint(id: PointInfo['id']): void;
    createLine(param: LineInfo): Line;
    getLine(id: LineInfo['id']): Line | null;
    removeLine(id: LineInfo['id']): void;
    createPolygon(param: PolygonInfo): Polygon;
    getPolygon(id: PolygonInfo['id']): Polygon | null;
    removePolygon(id: PolygonInfo['id']): void;
    createCircle(param: CircleInfo): Circle;
    getCircle(id: CircleInfo['id']): Circle | null;
    removeCircle(id: CircleInfo['id']): void;
    getChildForType<Type extends BaseMesh>(type: Type['stype'], id: Type['sid']): Type | null;
}
export { Canvas3D, Canvas3DInfo, };
