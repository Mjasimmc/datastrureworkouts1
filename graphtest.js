class Graph{
    constructor(){
        this.List = new Map()
    }
    insertVertex(vertex){
        if(!this.List.has(vertex)){
            this.List.set(vertex,new Set())
        }
    }
    insertEdges(vertex1,vertex2){
        if(!this.List.has(vertex1) || !this.List.has(vertex2)){
        return console.log("invalid vertex")
        }
        this.List.get(vertex1).add(vertex2)
        this.List.get(vertex2).add(vertex1)
    }


    bst(vertex){
        let visited = new Set()
        let queue = [vertex]
        while(queue.length > 0){
            let currnetVertex = queue.shift()
            if(!visited.has(currnetVertex)){
                visited.add(currnetVertex)
                // console.log(currnetVertex)

                const neighbours = this.List.get(currnetVertex)
                console.log(neighbours)
                for(let neighbor of neighbours){
                    if(!visited.has(neighbor)){
                        queue.push(neighbor)
                    }
                }
            }

        }
    }
}
const Tree = new Graph()
Tree.insertVertex("A")
Tree.insertVertex("B")
Tree.insertVertex("C")
Tree.insertVertex("D")
Tree.insertEdges("A","B")
Tree.insertEdges("A","C")
Tree.insertEdges("A","D")
Tree.bst('D')