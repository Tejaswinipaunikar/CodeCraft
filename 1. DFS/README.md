# Depth-First Search (DFS) - Codecraft Challenge

This repository contains a solution to **Question 3** of the **Codecraft Programming Challenge** organized by Encypherist.

## Problem Statement

Implement **Depth-First Search (DFS)** to traverse a graph starting from a given vertex. The graph is represented by an adjacency list.

### Example

- **Input**:  
  Graph:  

Starting Vertex: `1`

- **Output**:  
DFS Traversal: `1 → 2 → 4 → 3 → 5 → 6`

## Approach

The **Depth-First Search (DFS)** algorithm explores as far as possible along each branch before backtracking. In this problem, we will use an adjacency list to represent the graph and traverse it recursively starting from the given vertex.

### Steps:

1. Visit the current node and mark it as visited.
2. Recursively visit each adjacent node that hasn't been visited yet.
3. Backtrack when all adjacent nodes are visited.

### Sample Code (Python)

```python
def dfs(graph, node, visited):
  if node not in visited:
      print(node, end=" ")
      visited.add(node)
      for neighbor in graph[node]:
          dfs(graph, neighbor, visited)

# Example Usage:
graph = {
  1: [2, 3],
  2: [4],
  3: [5, 6],
  4: [],
  5: [],
  6: []
}

visited = set()
dfs(graph, 1, visited)  # Output: 1 2 4 3 5 6
