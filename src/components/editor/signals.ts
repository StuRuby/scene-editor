import { Signal } from 'signals';

export class EditorSignals {
    startPlayer: Signal;
    stopPlayer: Signal;
    editorCleared: Signal;
    savingStarted: Signal;
    savingFinished: Signal;
    transformModeChanged: Signal;
    snapChanged: Signal;
    spaceChanged: Signal;
    rendererChanged: Signal;
    rendererUpdated: Signal;
    sceneBackgroundChanged: Signal;
    sceneFogChanged: Signal;
    sceneGraphChanged: Signal;
    sceneRendered: Signal;
    cameraChanged: Signal;
    geometryChanged: Signal;
    objectSelected: Signal;
    objectFocused: Signal;
    objectAdded: Signal;
    objectChanged: Signal;
    objectRemoved: Signal;
    cameraAdded: Signal;
    cameraRemoved: Signal;
    helperAdded: Signal;
    helperRemoved: Signal;
    materialAdded: Signal;
    materialChanged: Signal;
    materialRemoved: Signal;
    windowResize: Signal;
    showGridChanged: Signal;
    refreshSidebarObject3D: Signal;
    historyChanged: Signal;
    viewportCameraChanged: Signal;
    constructor() {
        this.startPlayer = new Signal();
        this.stopPlayer = new Signal();

        this.editorCleared = new Signal();

        this.savingStarted = new Signal();
        this.savingFinished = new Signal();

        this.transformModeChanged = new Signal();
        this.snapChanged = new Signal();
        this.spaceChanged = new Signal();
        this.rendererChanged = new Signal();
        this.rendererUpdated = new Signal();

        this.sceneBackgroundChanged = new Signal();
        this.sceneFogChanged = new Signal();
        this.sceneGraphChanged = new Signal();
        this.sceneRendered = new Signal();

        this.cameraChanged = new Signal();

        this.geometryChanged = new Signal();

        this.objectSelected = new Signal();
        this.objectFocused = new Signal();

        this.objectAdded = new Signal();
        this.objectChanged = new Signal();
        this.objectRemoved = new Signal();

        this.cameraAdded = new Signal();
        this.cameraRemoved = new Signal();

        this.helperAdded = new Signal();
        this.helperRemoved = new Signal();

        this.materialAdded = new Signal();
        this.materialChanged = new Signal();
        this.materialRemoved = new Signal();


        this.windowResize = new Signal();

        this.showGridChanged = new Signal();
        this.refreshSidebarObject3D = new Signal();
        this.historyChanged = new Signal();

        this.viewportCameraChanged = new Signal();
    }
}