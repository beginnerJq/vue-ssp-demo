declare class SDataView extends DataView {
    appKeys: number[];
    isLE: boolean;
    constructor(buffer: ArrayBuffer, appKeys: number[]);
    byteRevers(byte: number, offset: number): number;
    getSoonUint8(byteOffset: number): number;
    getSoonUint16(byteOffset: number): number;
    getSoonUint32(byteOffset: number): number;
    getSoonFloat32(byteOffset: number): number;
}
export default SDataView;
