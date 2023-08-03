class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
  
    search(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children.has(char)) {
          return [];
        }
        node = node.children.get(char);
      }
      return this._findAllWords(node, prefix);
    }
  
    _findAllWords(node, prefix) {
      let suggestions = [];
      if (node.isEndOfWord) {
        suggestions.push(prefix);
      }
      for (let [char, childNode] of node.children) {
        suggestions.push(...this._findAllWords(childNode, prefix + char));
      }
      return suggestions;
    }
  }
  
  // Example usage:
  const dictionary = new Trie();
  dictionary.insert("apple");
  dictionary.insert("appetizer");
  dictionary.insert("banana");
  
  const userTypedWord = "";
  const suggestions = dictionary.search(userTypedWord);
  
  console.log("Suggestions for '" + userTypedWord + "':", suggestions);
  