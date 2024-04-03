import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
	regions: { [key: string]: Element } = {};
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	regionsMap(): { [key: string]: string } {
		return {};
	}

	eventMap(): { [key: string]: () => void } {
		return {};
	}
	bindModel(): void {
		this.model.on("change", () => this.render());
	}
	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventMap();
		for (let eventName in eventsMap) {
			const [namespace, selector] = eventName.split(":");
			const handler = eventsMap[eventName];

			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(namespace, handler);
			});
		}
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender(): void {}
	render(): void {
		this.parent.innerHTML = "";
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);
		this.onRender();
		this.parent.append(templateElement.content);
	}
}
