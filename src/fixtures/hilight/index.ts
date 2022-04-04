import { HilightAPI } from './api/hilight';
import { type HilightConfig, hilight } from './store';
import HilightV from './hilight.vue';

class HilightFixture extends HilightAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('hilight', hilight());

        // do I need the parseconfig line / the line under ?
        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: HilightConfig | undefined) => this._parseConfig(value)
        );

        const { vNode, destroy, el } = this.mount(HilightV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('hilight');
    }
}

export default HilightFixture;
