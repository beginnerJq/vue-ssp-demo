interface MinHeapNode {
    nodeIndex: number;
    distance: number;
    depth: number;
    parent: null | number;
    children: number[];
}
declare class MinHeap {
    min: number | null;
    roots: number[];
    nodes: MinHeapNode[];
    constructor();
    shift(): number | null;
    consolidate(): void;
    add(nodeIndex: number, distance: number): void;
    update(nodeIndex: number, distance: number): void;
    remove(nodeIndex: number): void;
    getDistance(nodeIndex: number): number;
}
export { MinHeapNode, MinHeap, };
