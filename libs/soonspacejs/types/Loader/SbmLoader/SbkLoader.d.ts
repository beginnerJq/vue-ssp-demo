import { Sbm, SbmInfo } from '../../Library';
import SDataView from './SDataView';
import { ModelLoadingProgressCallback } from '../../Interface';
import { SbmCache } from '../../Interface/sbmCache';
declare class SbkLoader {
    materials: Map<string, any>;
    sbmInfo: SbmInfo | null;
    constructor();
    /**
     * 加载模型
     * @param sbmInfo 模型信息
     * @param onProgress 模型加载进度回填函数
     */
    load(sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm | {
        sbm: Sbm;
        caches: SbmCache;
    }>;
    /**
     * 解析模型
     * @param buffer 模型二进制原数据
     * @param sbmInfo 模型信息
     * @param onProgress 模型加载进度回填函数
     */
    parseBuffer(buffer: ArrayBuffer, sbmInfo: SbmInfo, onProgress?: ModelLoadingProgressCallback): Promise<Sbm | {
        sbm: Sbm;
        caches: SbmCache;
    }>;
    /**
     * @param dataView
     * @param offset
     * @param onProgress
     */
    _parseV2(dataView: SDataView, onProgress?: ModelLoadingProgressCallback): Promise<{
        sbm: Sbm;
        caches: SbmCache;
    }>;
    /**
     * @param dataView
     * @param offset
     * @param onProgress
     */
    _parseV3(dataView: SDataView, onProgress?: ModelLoadingProgressCallback): Promise<{
        sbm: Sbm;
        caches: SbmCache;
    }>;
    /**
     * 获取材质贴图路径
     * @param modelUrl 模型资源路径
     * @param name     贴图名称
     * @param isPlatform 是否是平台资源
     */
    getTextureUrl(url: string, textureName: string, isPlatform?: boolean): string;
}
export default SbkLoader;
