import { CubeTexture, Texture } from 'three';
import { IColor } from '../Interface';
declare function getCubeTexture(dirPath: string, fileNames?: string[]): Promise<CubeTexture>;
export { getCubeTexture, };
interface GradientTextureOptions {
    colors: IColor[];
    stops?: number[];
    size?: number;
}
declare function gradientTexture(options?: GradientTextureOptions): Texture | null;
export { GradientTextureOptions, gradientTexture, };
