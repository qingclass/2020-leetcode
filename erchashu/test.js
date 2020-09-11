function BinarySearchTree () {
    let Node =  function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root =  null;
    this.getRoot = function(){
        return root;
    }
    this.insert = function (key) {
        let newNode = new Node(key);
        if(root == null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    }
    this.inOrderTraverse = function(cb){
        inOrderTraverseNode(root,cb);
    }
    this.search = function(key){
        searchNode(root,key)
    }
    this.findMIn = function(){
        findMinNode(root);
    }
}
function findMinNode(root){
    if(node){
        while(node && node.left != null){
           node = node.left
        }
        return node.key
    }
    return null
}
function searchNode(root,key){
    if(root !=  null){
        if(root.key > key){
            return searchNode(root.left,key) 
        }else if(root.key <  key){
           return  searchNode(root.right,key) 
        }else{
            return true
        }
    }else{
        return false;
    }
}

function insertNode(root,newNode){
    if(root.key > newNode.key){
        if(root.left == null){
            root.left =  newNode
        }else{
            insertNode(root.left,newNode);
        }
    }else{
        if(root.right == null){
            root.right =  newNode
        }else{
            insertNode(root.right,newNode);
        }
    }
}
let cb = key => console.log(key);
function inOrderTraverseNode(root,cb){
    if(root != null){
        inOrderTraverseNode(root.left,cb);
        cb(root.key);
        inOrderTraverseNode(root.right,cb);
    }
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
tree.inOrderTraverse(cb)
