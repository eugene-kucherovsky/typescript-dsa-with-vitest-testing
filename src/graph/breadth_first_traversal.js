

// Breadth First Traversal
// ( adjacency matrix - is array, vertices names are numbers )


// Time complexity: O(n + e)
// n - the number of vertices
// e - the number of edges

// Space Complexity: O(n)
// ( since an extra visited array is needed of size n ) 


// constructor from OOP code ---------------------------------
// class Graph{
     
//   constructor(vertices) {
//     this.vertices = vertices;
//     this.adj = new Array(vertices);
//     for(let i = 0; i < this.adj.length; i++)
//         this.adj[i] = [];
//   }

//   addEdge(v, w) {
//       this.adj[v].push(w);
//   }
// }

// let graph = new Graph(5);

// graph.addEdge(0, 2);
// graph.addEdge(0, 3);
// graph.addEdge(1, 0);
// graph.addEdge(1, 4);
// graph.addEdge(2, 1);
// -----------------------------------------------------------



// 0 -> 2 -> 1 -> 0 --- contains 3 cycled verticies 
// 0 -> 3
// 1 -> 4
const graph = [
  [2, 3], 
  [0, 4], 
  [1], 
  [], 
  [],
];

const graph_2 = [ 
  [ 1, 2 ], 
  [ 2 ], 
  [ 0, 3 ], 
  [ 3 ] 
];

function breadth_first_traversal(graph, vertex) {
  let visited = [];

  for (let i = 0; i < graph.length; i++) visited.push(false);

  let queue = [vertex];

  while (queue.length > 0) {
    let curr = queue.shift();

    if (visited[curr] == false) {
      console.log(curr);
      visited[curr] = true;
    }

    for (let node = 0; node < graph[curr].length; node++) {
      if (!visited[graph[curr][node]]) queue.push(graph[curr][node]);
    }
  }
}

breadth_first_traversal(graph, 0); // 0 2 3 1 4
breadth_first_traversal(graph_2, 2); // 2 0 3 1