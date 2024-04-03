import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShows";

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		const userShow = new UserShow(itemParent, model);
		console.log({ userShow });
		userShow.render();
	}
}
