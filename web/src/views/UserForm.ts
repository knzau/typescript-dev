import { HasId } from "../models/Model";
import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSaveNameClick = (): void => {
		const input = this.parent.querySelector('input[type="text"]') as HTMLInputElement;
		const name = input.value;
		this.model.set({ name });
	};

	onSaveClick = (): void => {
		this.model.save();
	};
	eventMap(): { [key: string]: () => void } {
		return {
			"click:.set-age": this.onSetAgeClick,
			"click:.save-name": this.onSaveNameClick,
			"click:.save-model": this.onSaveClick
		};
	}

	template(): string {
		return `
      <div>
      <h1>User Form</h1>
      
        <input placeholder="${this.model.get("name")}" type="text">

       <button class="save-name">Change name</button>
        <button class='set-age'>Set Random Age</button>
        <button class="save-model">Save</button>
				</div>
    `;
	}
}
