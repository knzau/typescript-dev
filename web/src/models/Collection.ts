import axios, { AxiosResponse } from "axios";
import { Events } from "./Events";

export class Collection<T, K> {
	models: T[] = [];
	events: Events = new Events();

	constructor(public rootURL: string, public deserialize: (json: K) => T) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootURL).then((response: AxiosResponse) => {
			response.data.forEach((value: K) => {
				this.models.push(this.deserialize(value));
			});

			this.trigger("change");
		});
	}
}
