# Reverse a Stack - Codecraft Challenge

This repository contains a solution to **Question 1** of the **Codecraft Programming Challenge** organized by Encypherist.

## Problem Statement

You are given a stack of integers. Your task is to reverse the order of the elements in the stack using only stack operations (push and pop) and without using any additional data structures.

### Example

- **Input**:  
  Stack = [1, 2, 3, 4, 5]
  
- **Output**:  
  Stack = [5, 4, 3, 2, 1]

### Requirements

- You can only use the stack operations `push` and `pop`.
- No additional data structures (like arrays, lists, etc.) are allowed.

## Approach

The task is to reverse the elements of the stack by only using stack operations. To achieve this:

1. Pop elements from the stack recursively until the stack is empty.
2. Insert each element back into the stack at the correct position to reverse the order.

### Sample Code (Python)

```python
def insert_at_bottom(stack, item):
    if not stack:
        stack.append(item)
    else:
        temp = stack.pop()
        insert_at_bottom(stack, item)
        stack.append(temp)

def reverse_stack(stack):
    if stack:
        temp = stack.pop()
        reverse_stack(stack)
        insert_at_bottom(stack, temp)

# Example Usage:
stack = [1, 2, 3, 4, 5]
reverse_stack(stack)
print(stack)  # Output: [5, 4, 3, 2, 1]
