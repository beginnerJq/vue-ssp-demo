import { MinHeap } from '../../Shared';
/**
* Javascript implementation of Dijkstra's algorithm
* Based on: http://en.wikipedia.org/wiki/Dijkstra's_algorithm
* Author: James Jackson (www.jamesdavidjackson.com)
* Source: http://github.com/nojacko/dijkstras-js/tree/
*
* Useage:
*	const d = new Dijkstras();
*	d.setGraph(
*		[
*			['A', [['B', 20], ['C', 20]] ],
*			['B', [['A', 30], ['C', 100]] ],
*			['C', [['D', 10], ['A', 20]] ],
*			['D', [['C', 10], ['B', 20]] ]
*		]
*	);
*	const path = d.getPath('A', 'D');
*
*/
declare type Graph = number[][];
declare type InputGraph = [number, [number, number][]][];
declare class Dijkstras {
    graph: Graph;
    queue: MinHeap | null;
    distance: number[];
    previous: (number | null)[];
    constructor();
    /**
     * Creates a graph from array.
     * Each element in the array should be in the format:
     * 	[NODE NAME, [[NODE NAME, COST], ...] ]
     *
     * For example: 	[
     *		['A', [['B', 20], ['C', 20]] ],
     *		['B', [['A', 30], ['C', 100]] ],
     *		['C', [['D', 10], ['A', 20]] ],
     *		['D', [['C', 10], ['B', 20]] ]
     *	]
     *
     * @param graphy Array of nodes and vertices.
     **/
    setGraph(graph: InputGraph): void;
    /**
     * Find shortest path
     *
     * @param source The starting node.
     * @param target The target node.
     * @return array Path to target, or empty array if unable to find path.
     */
    getPath(source: number, target: number): number[];
}
export { Graph, InputGraph, Dijkstras, };
