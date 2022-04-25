interface ControlsOptions {
    enabled?: boolean;
    enabledMousePointInteractive?: boolean;
    enableZoom?: boolean;
    zoomSpeed?: number;
    zoomMinDistance?: number;
    zoomMaxDistance?: number;
    zoomMinStepDistance?: number;
    zoomMaxStepDistance?: number;
    enableRotate?: boolean;
    enableRotateX?: boolean;
    enableRotateY?: boolean;
    rotateSpeed?: number;
    rotateTiltRange?: {
        max: number;
        min: number;
    };
    enableAutoRotate?: boolean;
    autoRotateSpeed?: number;
    autoRotateClockwise?: boolean;
    enableOutOfScene?: boolean;
    unOffsetOfScene?: number;
    enablePan?: boolean;
    enablePanX?: boolean;
    enablePanY?: boolean;
    enablePanAxisX?: boolean;
    enablePanAxisY?: boolean;
    enablePanAxisZ?: boolean;
    panSpeed?: number;
    [x: string]: any;
}
export { ControlsOptions, };
