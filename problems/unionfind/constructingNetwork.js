function networkSums(cNodes, cFrom, cTo) {
    let sum = cNodes * (cNodes + 1) / 2;
    const res = [];
    const graph = new Graph(cNodes);
    for(let i = 0; i < cFrom.length; i++){
        const f = cFrom[i]-1;
        const t = cTo[i]-1;
        const unionRes = graph.union(f, t);
        if(unionRes !== null) {
            sum -= unionRes + 1;
            res.push(sum);
        } else {
            res.push(sum);
        }
    }
    return res;
 }
  
  
 class Graph {
    constructor(size){
        this.parent = [];
        for(let i = 0; i < size; i++){
            this.parent[i] = i;
        }
    }
  
    find(x){
        if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
  
    union(x, y){
        const fx = this.find(x);
        const fy = this.find(y);
  
        if(fx === fy) return null;
        if(fx > fy){
            this.parent[fy] = fx;
        } else {
            this.parent[fx] = fy;
        }
        return Math.min(fx, fy);
    }
 }
 let cNodes = 5;
 let cFrom = [1,2,1,4];
 let cTo = [2,3,3,5];
 console.log(networkSums(cNodes, cFrom, cTo));
