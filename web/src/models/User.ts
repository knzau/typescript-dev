// Purpose: Define the User class and its properties and methods.
import { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Events } from "./Events";
import { ApiSync } from "./ApiSync";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface UserProps {
	name?: string;
	age?: number;
	id?: string;
}

const rootURL = "http://localhost:3001/users";

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(new Attributes<UserProps>(attrs), new Events(), new ApiSync<UserProps>(rootURL));
	}

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(rootURL, (json: UserProps) => User.buildUser(json));
	}
}
