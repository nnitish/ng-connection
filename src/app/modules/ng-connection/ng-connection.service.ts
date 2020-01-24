import { Injectable, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {debounceTime, startWith} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class NgConnection {

    private online$: Observable<any>;
    private offline$: Observable<any>;

    private statusEmitter: any = new EventEmitter();

    private isConnected: boolean = navigator.onLine;

    constructor() {
        this.trackingConnection();
    }

    private trackingConnection(): void {
        this.online$ = fromEvent(window, 'online');
        this.offline$ = fromEvent(window, 'offline');

        this.online$.subscribe(_ => {
            this.isConnected = true;
            this.emitNetworkStatus();
        });

        this.offline$.subscribe(_ => {
            this.isConnected = false;
            this.emitNetworkStatus();
        });
    }

    private emitNetworkStatus(): void {
        this.statusEmitter.emit(this.isConnected);
    }

    public connectivity(showCurrentStatus: boolean = true): Observable<boolean> {
        return showCurrentStatus
        ? this.statusEmitter.pipe(debounceTime(300), startWith(this.isConnected))
        : this.statusEmitter.pipe(debounceTime(300));
    }
}
