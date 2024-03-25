import { User } from "../models/User";

export class UserForm {
	constructor(public parent: HTMLElement, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on("change", () => this.render());
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};
	eventMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick
		};
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
	template(): string {
		return `
      <div>
      <h1>User Form</h1>
        <label>Name: ${this.model.get("name")}</label>
        <input type="text">

        <label>Age: ${this.model.get("age")}</label>
        <input type="number">

        <button>Save</button>
        <button class='set-age'>Set Random Age</button>
      </div>
    `;
	}

	render(): void {
		this.parent.innerHTML = "";
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);

		this.parent.append(templateElement.content);
	}
}
