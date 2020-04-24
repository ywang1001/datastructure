//course schedule II
var findOrder = function(numCourses, prerequisites) {
    if(numCourses === 0) {
        return [];
    }
    let indegree = [];
    for(let i = 0; i < numCourses; ++i) {
        indegree.push(0);
    }
    for(let i in prerequisites) {
       ++indegree[prerequisites[i][0]]
    }
    let queue = [], res = [];
    for(let i = 0; i < indegree.length; ++i) {
        if(indegree[i] === 0) {
            queue.unshift(i);
            res.push(i);
        }
    }
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; ++i) {
            let tp = queue.pop();
            for(let j in prerequisites) {
                if(prerequisites[j][1] === tp) {
                    --indegree[prerequisites[j][0]];
                    if(indegree[prerequisites[j][0]] === 0) {
                        queue.unshift(prerequisites[j][0]);
                        res.push(prerequisites[j][0]);
                    }
                }
            }
        }
    }
    return res.length === numCourses ? res : [];
};

let prerequisites = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(4,prerequisites));