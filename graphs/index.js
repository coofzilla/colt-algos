//vertex node
//edge connection between nodes
//un/weighted values assigned to distance between vertices
//un/directed directions assigned to distanced between vertices

//undirected
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    //check if not there, adds vertex
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Seoul');
graph.addVertex('Bangkok');
graph.addVertex('Shanghai');

graph.addEdge('Seoul', 'Tokyo');
graph.addEdge('Seoul', 'Bangkok');
graph.addEdge('Seoul', 'Shanghai');



