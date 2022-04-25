import { AnimationClip } from 'three';
interface ModelAnimationFindFunc {
    (animation: AnimationClip, index: number, animations: AnimationClip[]): boolean;
}
export { ModelAnimationFindFunc, };
