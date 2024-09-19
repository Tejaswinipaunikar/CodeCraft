# Function to perform DFS
def dfs(graph, vertex, visited):
    # Mark the current node as visited
    visited.add(vertex)
    print(vertex, end=' ')
    
    # Visit all the adjacent vertices
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Driver code
# Graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Set to store visited vertices
visited = set()

# Perform DFS starting from vertex 'A'
print("Depth-First Search Traversal starting from vertex A:")
dfs(graph, 'A', visited)
