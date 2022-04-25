declare type AnimationMode = 'Linear.None' | 'Quadratic.In' | 'Quadratic.Out' | 'Quadratic.InOut' | 'Cubic.In' | 'Cubic.Out' | 'Cubic.InOut' | 'Quartic.In' | 'Quartic.Out' | 'Quartic.InOut' | 'Quintic.In' | 'Quintic.Out' | 'Quintic.InOut' | 'Sinusoidal.In' | 'Sinusoidal.Out' | 'Sinusoidal.InOut' | 'Exponential.In' | 'Exponential.Out' | 'Exponential.InOut' | 'Circular.In' | 'Circular.Out' | 'Circular.InOut' | 'Elastic.In' | 'Elastic.Out' | 'Elastic.InOut' | 'Back.In' | 'Back.Out' | 'Back.InOut' | 'Bounce.In' | 'Bounce.Out' | 'Bounce.InOut';
declare type AnimationModeEnum = Record<AnimationMode, (amount: number) => number>;
interface AnimationOptions {
    duration?: number;
    delay?: number;
    repeat?: number | boolean;
    mode?: AnimationMode;
    yoyo?: boolean;
}
export { AnimationMode, AnimationModeEnum, AnimationOptions, };
