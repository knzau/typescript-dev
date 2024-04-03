import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection("http://localhost:3001/users", (json: UserProps) => {
	return User.buildUser(json);
});

users.on("change", () => {
	const root = document.getElementById("root");

	if (root) {
		const userList = new UserList(root, users);
		userList.render();
		console.log({ userList });
	}
});

users.fetch();
