export interface MaterialsCache {
    [key: string]: {
        materialInfo: number[];
        textureUrl?: string;
    };
}
export interface MeshsCache {
    [key: string]: {
        materialId: string;
        position: ArrayBuffer;
        uv: ArrayBuffer;
    };
}
export interface SbmCache {
    materialsCache: MaterialsCache;
    meshsCache: MeshsCache;
}
