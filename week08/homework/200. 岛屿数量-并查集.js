class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = new Array(n);
        for(let i = 0; i < n; i++ ) {
            this.parent[i] = i;
        }
    }

    find(p) {
        let root = p;
        while(this.parent[root] !== root) {
            root = this.parent[root];
        }

        while(this.parent[p] != p) {
            let x = p;
            p = this.parent[p];
            this.parent[x] = root; 
        }
        return root;
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if(rootP === rootQ) return;
        this.parent[rootP] = rootQ;
        this.count--;
    }
    getCount() {
        return this.count;
    }
}



var numIslands = function(grid) {
    rows = grid.length;
    if(rows === 0) {
        return 0;
    }
    cols = grid[0].length;
    function getIndex(i, j) {
        return i * cols + j;
    }
    let space = 0;
    let unionFind = new UnionFind(rows * cols);
    const DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] == '1') {
                for(let k = 0; k < DIRECTIONS.length; k++) {
                    const newX = i + DIRECTIONS[k][0];
                    const newY = j + DIRECTIONS[k][1];
                    if(newX >=  0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] == '1') {
                        unionFind.union(getIndex(i, j), getIndex(newX, newY));    
                    }                    
                }
                
            } else {
                space++;
            }
        }
    }
    return unionFind.getCount() - space;
}