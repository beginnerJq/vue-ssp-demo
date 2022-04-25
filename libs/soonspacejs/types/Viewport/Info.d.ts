import { Scene } from 'three';
import { SignalsState } from '../Interface';
declare class Info {
    readonly scene: Scene;
    readonly signals: SignalsState;
    container: HTMLDivElement;
    state: {
        objects: number;
        vertices: number;
        triangles: number;
        frametime: number;
        lodFrametime: number;
    };
    constructor(scene: Scene, signals: SignalsState);
    addListeners(): void;
}
export default Info;
