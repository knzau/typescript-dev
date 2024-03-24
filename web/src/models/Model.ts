import { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from "./Events";

interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: string): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: Callback): void;
	trigger(eventName: string): void;
}

interface HasId {
	id?: string;
}

export class Model<T extends HasId> {
	constructor(private attributes: ModelAttributes<T>, private events: Events, private sync: Sync<T>) {}

	on = this.events.on;

	trigger = this.events.trigger;

	get = this.attributes.get;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger("change");
	}
	fetch(): void {
		const id = this.get("id");

		if (typeof id !== "string") {
			throw new Error("Cannot fetch without an id");
		}

		this.sync.fetch(id).then((response: AxiosResponse) => {
			console.log({ data: response.data });

			this.set(response.data);
		});
	}
	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse) => {
				this.trigger("save");
			})
			.catch(() => {
				this.trigger("error");
			});
	}
}
