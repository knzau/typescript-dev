class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}
