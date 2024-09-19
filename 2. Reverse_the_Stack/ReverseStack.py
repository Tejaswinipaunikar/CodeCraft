# Function to insert an element at the bottom of the stack
def insert_at_bottom(stack, item):
    if not stack:
        stack.append(item)
    else:
        temp = stack.pop()
        insert_at_bottom(stack, item)
        stack.append(temp)

# Function to reverse the stack
def reverse_stack(stack):
    if stack:
        temp = stack.pop()
        reverse_stack(stack)
        insert_at_bottom(stack, temp)

# Driver code
stack = [1, 2, 3, 4, 5]
print("Original Stack:", stack)

reverse_stack(stack)

print("Reversed Stack:", stack)
