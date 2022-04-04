import { HilightAPI } from './api/hilight';

class HilightFixture extends HilightAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // this.$vApp.$store.registerModule('hilight', hilight());

        // do I need the parseconfig line / the line under ?
        this._parseConfig(this.config);
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // this.$vApp.$store.unregisterModule('hilight');
            unwatch();
        };
    }

    // removed(): void {
    //     console.log(`[fixture] ${this.id} removed`);
    //     // this.$vApp.$store.unregisterModule('hilight');
    // }
}

export default HilightFixture;
