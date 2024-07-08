enum DeferredState {
	INITIAL,
	RESOLVED,
	REJECTED
}

export class DeferredPromise<T = void> {
	private _resolve: ((value: T | PromiseLike<T>) => void) | undefined = undefined;
	private _reject: ((value?: unknown) => void) | undefined = undefined;
	private promise: Promise<T>;
	private state = DeferredState.INITIAL;
	private stateChangeValue: T | PromiseLike<T> | unknown | undefined;

	constructor() {
		this.promise = new Promise<T>((rs, rj) => {
			this._resolve = rs;
			this._reject = rj;

			if (this.state === DeferredState.RESOLVED) {
				rs(this.stateChangeValue as T | PromiseLike<T>);
			} else if (this.state === DeferredState.REJECTED) {
				rj(this.stateChangeValue);
			}
		});
	}

	public resolve(value: T | PromiseLike<T>) {
		if (this.state === DeferredState.INITIAL) {
			this.state = DeferredState.RESOLVED;

			if (!this._resolve) {
				this.stateChangeValue = value;
			} else {
				this._resolve(value);
			}
		}
	}

	public reject(reason?: unknown) {
		if (this.state === DeferredState.INITIAL) {
			this.state = DeferredState.REJECTED;

			if (!this._reject) {
				this.stateChangeValue = reason;
			} else {
				this._reject(reason);
			}
		}
	}

	public getPromise() {
		return this.promise;
	}
}
