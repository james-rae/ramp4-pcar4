// a very naughty class indeed.
// a promise that can be resolved from outside. aka a Deferred.
// serves as a nice "i am loaded" indicator on layers and such, things where a promise needs
// to be accessible immediately, but the loading (and thus creating of an actual asynch thread)
// happens later.
// e.g. caller code wants to use a layer property that is not guaranteed until after load.
//      way without this:
//                      if (layer.loaded) {do stuff with layer.property}
//                      else {layer.listenForLoadedEvent(handlerFunction(() => {do stuff with property}))}
//      way with this:
//                      layer.naughtyLoadPromise.getPromise().then(() => { do stuff with property});
//
// the naughty promise should be hidden, and a getter/functon should return the .getPromise() result.
// so the above layer example would have a getter .loaded with guts { return this.naughtyLoadPromise.getPromise() }
//
// yes, yes, very bad and all -- show me a better solution and I'll consider it.

export class DefPromise<T> {
    protected realPromise: Promise<T>;

    resolveMe(v: T): void {
        // i do nothing as i get overwritten;
    }

    rejectMe(): void {
        // i do nothing as i get overwritten;
    }

    getPromise(): Promise<T> {
        return this.realPromise;
    }

    constructor() {
        this.realPromise = new Promise<T>((resolve, reject) => {
            // we map the internal functions to our external methods, allowing outsiders to call them.
            this.resolveMe = resolve;
            this.rejectMe = reject;
        });
    }
}

export class AsyncQ<P, T> {
    protected q: Array<{ param: P; prom: DefPromise<T> }> = [];

    protected idx: number = 0;

    protected processor: (param: P) => Promise<T>;

    add(param: P): Promise<T> {
        const defP = new DefPromise<T>();
        this.q.push({ param, prom: defP });

        if (this.q.length === 1) {
            this.next();
        }

        return defP.getPromise();
    }

    protected next(): void {
        if (this.idx === this.q.length) {
            this.q = [];
            this.idx = 0;
        } else {
            const nugget = this.q[this.idx];
            this.processor(nugget.param).then(result => {
                this.idx++;
                nugget.prom.resolveMe(result);
                this.next();
            });
        }
    }

    constructor(processor: (param: P) => Promise<T>) {
        this.processor = processor;
    }
}
