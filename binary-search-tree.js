class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        let current = this.root;
        if (current === null) {
            this.root = new Node(val);
            return this;
        }
        while (current) {
            if (val < current.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(val);
                    return this;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(val);
                    return this;
                }
            }
        }
        return this;
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, node = this.root) {
        if (node === null) {
            this.root = new Node(val);
            return this.root;
        }
        if (val > node.val) {
            if (node.right) {
                return this.insertRecursively(val, node.right);
            } else {
                node.right = new Node(val);
                return this.root;
            }
        } else {
            if (node.left) {
                return this.insertRecursively(val, node.left);
            } else {
                node.left = new Node(val);
                return this.root;
            }
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let current = this.root;
        if (current === null) {
            return undefined;
        }
        while (current) {
            if (val === current.val) return current;
            if (val < current.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    return undefined;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    return undefined;
                }
            }
        }
        return undefined;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, node = this.root) {
        if (node === null) {
            return undefined;
        }
        if (val === node.val) {
            return node;
        } else if (val > node.val) {
            if (node.right) {
                return this.findRecursively(val, node.right);
            } else {
                return undefined;
            }
        } else {
            if (node.left) {
                return this.findRecursively(val, node.left);
            } else {
                return undefined;
            }
        }
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder(node = this.root, nodeOrder = []) {
        nodeOrder.push(node.val);
        if (node.left) this.dfsPreOrder(node.left, nodeOrder);
        if (node.right) this.dfsPreOrder(node.right, nodeOrder);
        return nodeOrder;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder(node = this.root, nodeOrder = []) {
        if (node.left) this.dfsInOrder(node.left, nodeOrder);
        nodeOrder.push(node.val);
        if (node.right) this.dfsInOrder(node.right, nodeOrder);
        return nodeOrder;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder(node = this.root, nodeOrder = []) {
        if (node.left) this.dfsPostOrder(node.left, nodeOrder);
        if (node.right) this.dfsPostOrder(node.right, nodeOrder);
        nodeOrder.push(node.val);
        return nodeOrder;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        let visitedNodes = [];
        const toVisitQueue = [this.root];
        visitedNodes.push(toVisitQueue[0].val);
        while (toVisitQueue.length) {
            let current = toVisitQueue.shift();
            try {
                visitedNodes.push(current.left.val);
                toVisitQueue.push(current.left);
            } catch {}
            try {
                visitedNodes.push(current.right.val);
                toVisitQueue.push(current.right);
            } catch {}
        }
        return visitedNodes;
    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {}

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {}

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {}
}

module.exports = BinarySearchTree;
