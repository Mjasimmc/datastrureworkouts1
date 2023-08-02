class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    // Function to add a vertex (node) to the graph
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, new Set());
      }
    }
  
    // Function to add an edge between two vertices (nodes) in the graph
    addEdge(vertex1, vertex2) {
      if (!this.adjList.has(vertex1) || !this.adjList.has(vertex2)) {
        console.error('Vertex not found in the graph!');
        return;
      }
  
      this.adjList.get(vertex1).add(vertex2);
      this.adjList.get(vertex2).add(vertex1);
    }
  
    // Function to perform BFS traversal from a given starting vertex
    bfs(startingVertex) {
      if (!this.adjList.has(startingVertex)) {
        console.error('Starting vertex not found in the graph!');
        return;
      }
  
      const visited = new Set();
      const queue = [startingVertex];
      visited.add(startingVertex);
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.adjList.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
            visited.add(neighbor);
          }
        }
      }
    }
  
   
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'C');
  
  console.log('BFS traversal from vertex A:');
  graph.bfs('A');
  