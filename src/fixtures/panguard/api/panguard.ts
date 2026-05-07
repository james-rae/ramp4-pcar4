import { FixtureInstance } from '@/api';
import { usePanguardStore } from '../store';

export class PanguardAPI extends FixtureInstance {
    /**
     * Whether panguard is currently blocking one-finger touch panning.
     */
    get enabled(): boolean {
        return usePanguardStore(this.$vApp.$pinia).enabled;
    }

    /**
     * Enables the panguard on the map when set to true.
     *
     * @param value whether panguard should block one-finger touch panning
     */
    setEnabled(value: boolean) {
        usePanguardStore(this.$vApp.$pinia).setEnabled(value);
    }
}
