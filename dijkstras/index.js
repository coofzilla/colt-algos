class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstras(start, end) {
    const queue = new PriorityQueue();
    const distances = {
      [start]: 0,
    };
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex !== start) {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      smallest = queue.dequeue().val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighbor node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //update previous - how got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            queue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex('Tokyo');
graph.addVertex('Seoul');
graph.addVertex('Bangkok');
graph.addVertex('Shanghai');
graph.addVertex('Changi');

graph.addEdge('Seoul', 'Tokyo', 1159);
graph.addEdge('Seoul', 'Bangkok', 3720);
graph.addEdge('Seoul', 'Shanghai', 866);
graph.addEdge('Tokyo', 'Changi', 4613);

graph.dijkstras('Tokyo', 'Changi');
