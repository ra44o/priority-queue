class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.parent = this;	
		if(this.left == null) {
			this.left = node;
		} else if(this.left != null && this.right == null) {
			this.right = node;
		}
	}

	removeChild(node) {
		this.left.parent = null;
		if(this.left == node) {
			this.left = null;
		}
		else if(this.right == node) {
			this.right = null;
		}
		else if(node != this.left || node != this.right) {
			throw new Error;
		}
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent != null) {
			const swap = this.parent;
			this.parent = this;
		}
	}
}

module.exports = Node;
