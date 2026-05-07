import { DrawAPI } from './api/drawApi';
declare class DrawFixture extends DrawAPI {
    private unregisterIdentifyGeometryProvider?;
    init(): Promise<void>;
    added(): Promise<void>;
    removed(): void;
}
export default DrawFixture;
