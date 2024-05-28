// Question 2
// Design and implement a data structure for a cache, which has the following functions:
// get(key)
// Return the value associated with the specified key if it exists in the cache, else
// return -1 .
// put(key, value, weight)
// Associate value with key in the cache, such that value might be later retrieved by
// get(key) .
// Cache has a fixed capacity, and when such capacity is reached, key with the least
// score must be invalidated until the number of key s falls within cache capacity. The
// score is calculated as follows:
// weight ∕ [ln(current_time - last_accessed_time + 1) + 1]
// Implementation of the cache should be optimized on the time complexity of get(key) .
// For example, the average time complexity of get(key) could be constant.
// For the purpose of implementing the cache, you could assume that common data
// structures, such as arrays, different types of lists, and hash tables, are available.
// At the end of the answer, give and explain the computational complexity of get(key) and
// put(...) in Big O notation.

// Question 2
// Design and implement a data structure for a cache, which has the following functions:
// get(key)
// Return the value associated with the specified key if it exists in the cache, else
// return -1 .
// put(key, value, weight)
// Associate value with key in the cache, such that value might be later retrieved by
// get(key) .
// Cache has a fixed capacity, and when such capacity is reached, key with the least
// score must be invalidated until the number of key s falls within cache capacity. The
// score is calculated as follows:
// weight ∕ [ln(current_time - last_accessed_time + 1) + 1]
// Implementation of the cache should be optimized on the time complexity of get(key) .
// For example, the average time complexity of get(key) could be constant.
// For the purpose of implementing the cache, you could assume that common data
// structures, such as arrays, different types of lists, and hash tables, are available.
// At the end of the answer, give and explain the computational complexity of get(key) and
// put(...) in Big O notation.

class CacheItem {
  constructor(value, weight, lastAccess) {
    this.value = value;
    this.weight = weight;
    this.lastAccess = lastAccess;
  }
}

class Cache {
  constructor(capacity) {
    this.cache = {};
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache[key]) return -1;

    let cacheItem = this.cache[key];
    cacheItem.lastAccess = Date.now();

    return cacheItem.value;
  }

  put(key, value, weight) {
    let cacheItem = new CacheItem();
    cacheItem.value = value;
    cacheItem.weight = weight;
    //default lastaccess time
    cacheItem.lastAccess = Date.now();

    if (Object.keys(this.cache).length === this.capacity) {
      this.deleteLowest();
      this.cache[key] = cacheItem;
    } else {
      this.cache[key] = cacheItem;
    }
  }

  sort() {
    const current_time = Date.now();
    return Object.fromEntries(
      Object.entries(this.cache).sort(
        ([, a], [, b]) =>
          a.weight / (Math.log(current_time - a.lastAccess + 1) + 1) -
          b.weight / (Math.log(current_time - b.lastAccess + 1) + 1)
      )
    );
  }

  deleteLowest() {
    const sortedObject = this.sort();
    delete this.cache[Object.keys(sortedObject)[0]];
  }
}

function test() {
  let cache = new Cache();
  cache.capacity = 2;
  cache.put("test", 5, 5);
  cache.put("test2", 1, 1);
  cache.put("test3", 3, 3);
  cache.put("test4", 3, 3);
}

test();

//explanation
//get(key): the whole data struture should be O(1) as object get key is used.
//put(...): O(nlog(n)),, as the sorting method is used .
