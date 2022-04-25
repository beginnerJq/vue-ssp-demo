import { Texture, MeshPhongMaterial } from 'three';
/**
 * 生成 sbm 纹理
 * @param url
 */
export declare const generateSbmTexture: (textureUrl: string) => Texture;
/**
 * 生成 sbm 材质
 * @param materialId
 * @param arr
 * @param texture
 */
export declare const generateSbmMaterial: (materialId: string, arr: number[], texture: Texture | null) => MeshPhongMaterial;
