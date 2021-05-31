/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.root = {};    
    this.endOfWord = "$";
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let ch of word) {      
        node[ch] = node[ch] || {};      
        node = node[ch];    
    }    
    node[this.endOfWord] = this.endOfWord;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;    
    for (let ch of word) {      
        if (!node[ch]) return false;      
        node = node[ch];    
    }    
    return node[this.endOfWord] === this.endOfWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;    
    for (let ch of prefix) {      
        if (!node[ch]) return false;      
        node = node[ch];    
    }    
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */