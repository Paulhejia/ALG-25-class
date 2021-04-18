## Options
### max 
设置 缓存容量

### dispose: Function

删除前 或者改变时 的钩子函数
它在从内部缓存中移除项之前被调用，对项调用

### stale: Boolean
设 true , 当已超过 maxAge  时，能取到 过时的值 get(key)；
默认不设置 或 false 时，它将返回undefined，就好像它已经被删除了一样

### noDisposeOnSet: Boolean
默认情况下，如果您设置了dispose()方法，那么当set()操作覆盖现有的键时，就会调用该方法。如果**设置了这个选项**，则dispose()只会在键从缓存中掉出来时调用，**而不会在键被覆盖时调用**

### updateAgeOnGet
当与maxAge一起使用时间过期条目时，将此设置为true将使每个条目的有效时间从缓存中检索时更新为当前时间

<!-- lruList是指头部是最年轻的，尾部是最年长的。列表中包含Hit对象作为条目。
每个Hit对象都有一个对它的Yallist.Node的引用。这永远不会改变。

缓存是一个映射(或伪映射)，它与Yallist的键相匹配。节点对象。 -->

## Class LRU-cache 原型方法
- Yallist 一个链表，用来跟踪最近的使用情况
- this[LRU_LIST] = new Yallist(); 用 Yallist 生成的链表实例
- cache 是一个哈希表，每个键key 对于一个 Yallist.node 的引用

### 构造器做了啥
1. 根据传进来的 options初始化配置
2. reset ，被call
赋予 cache 一个 哈希表 Map
赋予 lru_list 一个 链表
### forEach、rForEach 

使用链表来查询
```
 forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }
```  
### lengthCalculator：Function 光看语义是 长度计算器
是用来计算这个值的长度 

### isStale
是否需要过期
- 是否需要过期
- 要：则判断过期时间戳
- 不要：则直接return false

### trim 我猜是清空整个缓存
调用了 *del* 方法

### dump()
Return an array of the cache entries ready for serialization and usage with 'destinationCache.load(arr)`.
返回 cache 的数据，过期的缓存不返回
返回一个缓存条目数组，以备序列化并与'destinationCache.load(arr) '一起使用。


### dumpLru()
返回整个 lru-list 链表

### load(cacheEntriesArray)
做了啥 ？
1. reset 整个cache 哈希表，lru-list;
然后把 cacheEntriesArray 循环塞回去 cache 和lru-list, 原本的cache与lru-list 都会被改变

Loads another cache entries array, obtained with sourceCache.dump(), into the cache. The destination cache is reset before loading new entries
将通过sourcache .dump()获得的另一个缓存条目数组加载到缓存中。在加载新条目之前，目标缓存被重置


## 非实例方法

### del
删除 链表对应的key 值
删除 哈希cache表对应的key 值
缩短链表 size 长度

### set (key, value, maxAge)
maxAge 设置时间戳| 默认为 Date.now();
通过计算器 LENGTH_CALCULATOR 计算value 长度 len；
查找哈希cache表是否存在key 映射值
- 若有：
    1. 查看len (value的长度 )是否超过最大长度 this[Max];
    2. 是否需要触发 dispose 钩子，如果设置了 dispose 且 noDisposeOnSet为false 时会触发
    3. 更新当前值的 now 活跃时间、长度属性、maxAge 存活时间


### get

未完待续