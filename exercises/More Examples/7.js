
// Binary Tree Implementation

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Insert 
insert(data)
{
    // Creating a node and initialising
    // with data
    var newNode = new Node(data);
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.root === null)
        this.root = newNode;
    else
 
        // find the correct position in the
        // tree and add the node
        this.insertNode(this.root, newNode);
}
 
// Method to insert a node in a tree
// it moves over the tree to find the location
// to insert a node with a given data
insertNode(node, newNode)
{
    // if the data is less than the node
    // data move left of the tree
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
 
            // if left is not null recur until
            // null is found
            this.insertNode(node.left, newNode);
    }
 
    // if the data is more than the node
    // data move right of the tree
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
 
            // if right is not null recur until
            // null is found
            this.insertNode(node.right,newNode);
    }
}

// Tree Traversal
inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

// Preorder
preorder(node)
{
    if(node !== null)
    {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

// Postorder
postorder(node)
{
    if(node !== null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
}

// Usage
// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
						
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 / \ /
// 5 9 17

var root = BST.getRootNode();
			
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with no children
BST.remove(5);
			
			
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 \ /
//	 9 17
			
						
var root = BST.getRootNode();
			
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with one child
BST.remove(7);
			
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27
//		 /
//		 17
			
			
var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with two children
BST.remove(15);
	
//		 17
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);
			
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
