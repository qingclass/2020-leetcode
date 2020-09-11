function BinarySearchTree () {
    let Node = function (key) {
        this.left = null;
        this.right = null;
        this.key = key;
    };
    let root = null;
    this.getRoot = function () {
        return root;
    };
    //搜索
    this.search = function(key) {
        return searchNode(root, key)
    };
    //最小
    this.min = function() {
        return minNode(root)
    }
    //最大
    this.max = function() {
        return maxNode(root)
    }    
    //中序
    this.inOrderTraverse = function (cb) {
        inOrderTraverseNode(root, cb)
    };
    //前序
    this.preOrderTraverse = function(cb) {
        preOrderTraverseNode(root, cb)
    }
    //后续
    this.postOrderTraverse = function(cb) {
        postOrderTraverseNode(root, cb)
    }
    this.remove = function(key) {
        root = removeNode(root, key)
    }
    this.insert = function (key) {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }
}

function insertNode(root, newNode) {
    if (root.key > newNode.key) {
        if (root.left == null) {
            root.left = newNode;
        } else {
            insertNode(root.left, newNode)
        }
    } else {
        if (root.right == null) {
            root.right = newNode;
        } else {
            insertNode(root.right, newNode);
        }
    }
}

function inOrderTraverseNode(node, cb) {
    if (node !== null) {
        inOrderTraverseNode(node.left, cb)
        cb(node.key)
        inOrderTraverseNode(node.right, cb)
    }
}
function preOrderTraverseNode(node, cb) {
    if(node !== null) {
        cb(node.key)
        preOrderTraverseNode(node.left, cb)
        preOrderTraverseNode(node.right, cb)
    }
}
function postOrderTraverseNode(node, cb) {
    if(node !== null) {
        postOrderTraverseNode(node.left, cb)
        postOrderTraverseNode(node.right, cb)
        cb(node.key)
    }
}
function searchNode(ndoe, key) {
    if(node === null) {
        return false
    }
    if(key < node.key) {
        return searchNode(node.left, key)
    }else if(key > node.key) {
        return searchNode(node.right, key)
    }else {
        return true
    }
}
function minNode(node) {
    if(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node.key
    }
    return null
}
    
function maxNode(node) {
    if(node) {
        while(node && node.right !== null) {
            node = node.right;
        }
        return node.key
    }
    return null
}
function removeNode(node, key) {
    if(node === null) {
        return null
    }
    if(key < node.key) {
        node.left = removeNode(node.left, key)
        return node
    }else if(key > node.key) {
        node.right = removeNode(node.right, key)
        return node
    }else {
        // 一个叶节点
        if(node.left === null && node.right === null) {
            node = null;
            return node
        }
        // 只有一个子节点的节点
        if(node.left === null) {
            node = node.right;
            return node
        }else if(node.right === null) {
            node = node.left;
            return node
        }
        // 有两个子节点的节点情况
        let aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node
    }
}

function findMinNode(node) {
    if(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node
    }
    return null
}
let tree = new BinarySearchTree();

tree.insert(20);
tree.insert(18);
tree.insert(207);
tree.insert(10);
tree.insert(30);
tree.insert(22);
tree.insert(31);
tree.insert(19);
tree.insert(5);
var root = tree.getRoot();
console.log(root)
var printLog = key => console.log(key);
console.log('---------')
tree.inOrderTraverse(printLog)
console.log('---------')
tree.preOrderTraverse(printLog)
console.log('---------')
tree.postOrderTraverse(printLog)
