import { Tween } from '@tweenjs/tween.js';
import { AnimationOptions } from '../Interface';
declare function Animation<PropType>(source: PropType, target: PropType, options?: AnimationOptions, onUpdate?: (source: PropType, tween: Tween<PropType>) => void, onStart?: (tween: Tween<PropType>) => void): Promise<void>;
export default Animation;
