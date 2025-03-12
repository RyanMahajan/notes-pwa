# CSC460 Test 2
---
### Chapter 5
- CPU Schedule Table (no round robin no ljf)
- CPU Burst? (cycle of io and cpu operations in process)
- Process State Diagram? (process graph)

### Chapter 6
- Mutex, Critical Sections, Synchronization
- lost update (when data is lossed due to asynch)
- race condition?
- shmem
- TSL (test set lock) single computer instruction prevents interupt issues in critical section
- semaphores p() and v()
```p()
if(s>0): 
    s-- 
else:
    block on s
```

### Chapter 7

Product Consumer

#### Producer
```
P(empty) // let n process through
    p(mutex) // let only one of those processess in
        critical section
    v(mutex)
v(full)
```
#### Consumer
```
consumer code
```

#### [Reader Writer](https://docs.google.com/document/d/1KAnh4p8yC8VbXPq4awl9Di0G7TeyCwbTEbZSh01MGl8/edit?tab=t.0#heading=h.exqclaoen5qy)
 /
 /
 \
---
# Testing MD Syntax

- [x] task 1
- [x] task 2

| Syntax    | Description |
| ------    | ----------- |
| Header    | Title       |
| Paragraph | Text        |

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```