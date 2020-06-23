export class Storage {
    name: string;
    version: number;
    db!: IDBDatabase;
    constructor() {
        this.name = 'scene-editor';
        this.version = 1;
    }

    init(fn: Function) {
        const request = indexedDB.open(this.name, this.version);

        request.onupgradeneeded = (event) => {
            const db = request.result;
            if(db.objectStoreNames.contains('states') === false) {
                db.createObjectStore('states');
            }
        }

        request.onsuccess = (event) => {
            this.db = request.result;
            fn();
        }

        request.onerror = (error) => {
            console.error('IndexedDB', error);
        }
    }

    get(fn: Function) {
        const transaction = this.db.transaction(['states'], 'readwrite');
        const objectStore = transaction.objectStore('states');
        const request = objectStore.get(0);

        request.onsuccess = event => {
            fn(request.result);
        }
    }

    set(data: any) {
        const start = performance.now();
        const transaction = this.db.transaction(['states'], 'readwrite');
        const objectStore = transaction.objectStore('states');
        const request = objectStore.put(data, 0);

        request.onsuccess = () => console.log('[' + /\d\d\:\d\d\:\d\d/.exec((new Date()).toString())![0] + ']', 'Saved state to IndexedDB. ' + (performance.now() - start).toFixed(2) + 'ms');
    }

    clear() {
        if(this.db === undefined) return;

        const transaction = this.db.transaction(['states'], 'readwrite');
        const objectStore = transaction.objectStore('states');
        const request = objectStore.clear();

        request.onsuccess = () => console.log('[' + /\d\d\:\d\d\:\d\d/.exec((new Date()).toString())![0] + ']', 'Cleared IndexedDB.');
    }
}