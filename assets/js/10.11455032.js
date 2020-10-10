(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{463:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"大型系统核心技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大型系统核心技术"}},[t._v("#")]),t._v(" 大型系统核心技术")]),t._v(" "),a("blockquote",[a("p",[t._v("大型系统的设计目标就是为了快速、高效、稳定的处理海量的数据以及高并发的请求。")]),t._v(" "),a("p",[t._v("单机服务受限于硬件，客观存在着资源瓶颈，难以应对不断增长的数据量和请求量，为了打破瓶颈，大型系统基本上都被设计为分布式系统。")]),t._v(" "),a("p",[t._v("分布式系统由于其面临的共性问题，在很多场景下的解决方案往往也存在着共性。因此，我们会发现，很多优秀的大型系统在设计方案上存在着很多的共同点。")]),t._v(" "),a("p",[t._v("本文主要讨论应对分布式系统共性问题的解决方案，这既可以加深对分布式系统运作原理的理解，也可以作为设计大型分布式系统时的借鉴。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1"}},[t._v("分布式事务")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81"}},[t._v("分布式锁")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E4%BA%8E%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81"}},[t._v("基于数据库实现分布式锁")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E4%BA%8E-redis-%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81"}},[t._v("基于 Redis 实现分布式锁")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E4%BA%8E-zookeeper-%E5%AE%9E%E7%8E%B0%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81"}},[t._v("基于 ZooKeeper 实现分布式锁")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F-session"}},[t._v("分布式 Session")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#sticky-sessions"}},[t._v("Sticky Sessions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#session-replication"}},[t._v("Session Replication")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#session-server"}},[t._v("Session Server")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F%E5%AD%98%E5%82%A8"}},[t._v("分布式存储")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F%E7%BC%93%E5%AD%98"}},[t._v("分布式缓存")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97"}},[t._v("分布式计算")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1"}},[t._v("负载均衡")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E7%AE%97%E6%B3%95"}},[t._v("算法")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0"}},[t._v("实现")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%B5%84%E6%96%99"}},[t._v("资料")])])]),t._v(" "),a("h2",{attrs:{id:"分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[t._v("#")]),t._v(" 分布式事务")]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("RouterLink",{attrs:{to:"/architecture/分布式原理.html#4-分布式事务问题"}},[t._v("分布式原理#4-分布式事务问题")])],1)]),t._v(" "),a("h2",{attrs:{id:"分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),a("p",[t._v("Java 原生 API 虽然有并发锁，但并没有提供分布式锁的能力，所以针对分布式场景中的锁需要解决的方案。")]),t._v(" "),a("p",[t._v("分布式锁的解决方案大致有以下几种：")]),t._v(" "),a("ul",[a("li",[t._v("基于数据库实现")]),t._v(" "),a("li",[t._v("基于缓存（redis，memcached 等）实现")]),t._v(" "),a("li",[t._v("基于 Zookeeper 实现")])]),t._v(" "),a("h3",{attrs:{id:"基于数据库实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于数据库实现分布式锁"}},[t._v("#")]),t._v(" 基于数据库实现分布式锁")]),t._v(" "),a("h4",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("h5",{attrs:{id:"_1-创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建表"}},[t._v("#")]),t._v(" 1. 创建表")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("methodLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("method_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'锁定的方法名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'备注信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("update_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'保存数据时间，自动生成'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("uidx_method_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("method_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'锁定中的方法'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"_2-获取锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取锁"}},[t._v("#")]),t._v(" 2. 获取锁")]),t._v(" "),a("p",[t._v("想要锁住某个方法时，执行以下 SQL：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" methodLock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("‘method_name’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("‘"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("因为我们对 "),a("code",[t._v("method_name")]),t._v(" 做了唯一性约束，这里如果有多个请求同时提交到数据库的话，数据库会保证只有一个操作可以成功，那么我们就可以认为操作成功的那个线程获得了该方法的锁，可以执行方法体内容。")]),t._v(" "),a("p",[t._v("成功插入则获取锁。")]),t._v(" "),a("h5",{attrs:{id:"_3-释放锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-释放锁"}},[t._v("#")]),t._v(" 3. 释放锁")]),t._v(" "),a("p",[t._v("当方法执行完毕之后，想要释放锁的话，需要执行以下 Sql:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" methodLock "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" method_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'method_name'")]),t._v("\n")])])]),a("h4",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("ol",[a("li",[t._v("这把锁强依赖数据库的可用性。如果数据库是一个单点，一旦数据库挂掉，会导致业务系统不可用。")]),t._v(" "),a("li",[t._v("这把锁没有失效时间，一旦解锁操作失败，就会导致锁记录一直在数据库中，其他线程无法再获得到锁。")]),t._v(" "),a("li",[t._v("这把锁只能是非阻塞的，因为数据的 insert 操作，一旦插入失败就会直接报错。没有获得锁的线程并不会进入排队队列，要想再次获得锁就要再次触发获得锁操作。")]),t._v(" "),a("li",[t._v("这把锁是非重入的，同一个线程在没有释放锁之前无法再次获得该锁。因为数据中数据已经存在了。")])]),t._v(" "),a("h4",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("ol",[a("li",[t._v("单点问题可以用多数据库实例，同时塞 N 个表，N/2+1 个成功就任务锁定成功")]),t._v(" "),a("li",[t._v("写一个定时任务，隔一段时间清除一次过期的数据。")]),t._v(" "),a("li",[t._v("写一个 while 循环，不断的重试插入，直到成功。")]),t._v(" "),a("li",[t._v("在数据库表中加个字段，记录当前获得锁的机器的主机信息和线程信息，那么下次再获取锁的时候先查询数据库，如果当前机器的主机信息和线程信息在数据库可以查到的话，直接把锁分配给他就可以了。")])]),t._v(" "),a("h4",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[t._v("优点: 直接借助数据库，容易理解。")]),t._v(" "),a("li",[t._v("缺点: 会有各种各样的问题，在解决问题的过程中会使整个方案变得越来越复杂。操作数据库需要一定的开销，性能问题需要考虑。")])]),t._v(" "),a("h3",{attrs:{id:"基于-redis-实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-redis-实现分布式锁"}},[t._v("#")]),t._v(" 基于 Redis 实现分布式锁")]),t._v(" "),a("p",[t._v("相比于用数据库来实现分布式锁，基于缓存实现的分布式锁的性能会更好一些。目前有很多成熟的分布式产品，包括 Redis、memcache、Tair 等。这里以 Redis 举例。")]),t._v(" "),a("h4",{attrs:{id:"redis-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-命令"}},[t._v("#")]),t._v(" Redis 命令")]),t._v(" "),a("ul",[a("li",[t._v("setnx - setnx key val：当且仅当 key 不存在时，set 一个 key 为 val 的字符串，返回 1；若 key 存在，则什么都不做，返回 0。")]),t._v(" "),a("li",[t._v("expire - expire key timeout：为 key 设置一个超时时间，单位为 second，超过这个时间锁会自动释放，避免死锁。")]),t._v(" "),a("li",[t._v("delete - delete key：删除 key")])]),t._v(" "),a("h4",{attrs:{id:"实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("单点实现步骤：")]),t._v(" "),a("ol",[a("li",[t._v("获取锁的使用，使用 setnx 加锁，锁的 value 值为一个随机生成的 UUID，再使用 expire 设置一个过期值。")]),t._v(" "),a("li",[t._v("获取锁的时候还设置一个获取的超时时间，若超过这个时间则放弃获取锁。")]),t._v(" "),a("li",[t._v("释放锁的时候，通过 UUID 判断是不是该锁，若是该锁，则执行 delete 进行锁释放。")])]),t._v(" "),a("h4",{attrs:{id:"问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("ul",[a("li",[t._v("单点问题。如果单机 redis 挂掉了，那么程序会跟着出错。")]),t._v(" "),a("li",[t._v("如果转移使用 slave 节点，复制不是同步复制，会出现多个程序获取锁的情况")])]),t._v(" "),a("h4",{attrs:{id:"小结-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("可以考虑使用 "),a("a",{attrs:{href:"https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("redisson 的解决方案"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"基于-zookeeper-实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-zookeeper-实现分布式锁"}},[t._v("#")]),t._v(" 基于 ZooKeeper 实现分布式锁")]),t._v(" "),a("h4",{attrs:{id:"实现-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("这也是 ZooKeeper 客户端 curator 的分布式锁实现。")]),t._v(" "),a("ol",[a("li",[t._v("创建一个目录 mylock；")]),t._v(" "),a("li",[t._v("线程 A 想获取锁就在 mylock 目录下创建临时顺序节点；")]),t._v(" "),a("li",[t._v("获取 mylock 目录下所有的子节点，然后获取比自己小的兄弟节点，如果不存在，则说明当前线程顺序号最小，获得锁；")]),t._v(" "),a("li",[t._v("线程 B 获取所有节点，判断自己不是最小节点，设置监听比自己次小的节点；")]),t._v(" "),a("li",[t._v("线程 A 处理完，删除自己的节点，线程 B 监听到变更事件，判断自己是不是最小的节点，如果是则获得锁。")])]),t._v(" "),a("h4",{attrs:{id:"小结-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结-3"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("ZooKeeper 版本的分布式锁问题相对比较来说少。")]),t._v(" "),a("ul",[a("li",[t._v("锁的占用时间限制：redis 就有占用时间限制，而 ZooKeeper 则没有，最主要的原因是 redis 目前没有办法知道已经获取锁的客户端的状态，是已经挂了呢还是正在执行耗时较长的业务逻辑。而 ZooKeeper 通过临时节点就能清晰知道，如果临时节点存在说明还在执行业务逻辑，如果临时节点不存在说明已经执行完毕释放锁或者是挂了。由此看来 redis 如果能像 ZooKeeper 一样添加一些与客户端绑定的临时键，也是一大好事。")]),t._v(" "),a("li",[t._v("是否单点故障：redis 本身有很多中玩法，如客户端一致性 hash，服务器端 sentinel 方案或者 cluster 方案，很难做到一种分布式锁方式能应对所有这些方案。而 ZooKeeper 只有一种玩法，多台机器的节点数据是一致的，没有 redis 的那么多的麻烦因素要考虑。")])]),t._v(" "),a("p",[t._v("总体上来说 ZooKeeper 实现分布式锁更加的简单，可靠性更高。但 ZooKeeper 因为需要频繁的创建和删除节点，性能上不如 Redis 方式。")]),t._v(" "),a("h2",{attrs:{id:"分布式-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式-session"}},[t._v("#")]),t._v(" 分布式 Session")]),t._v(" "),a("p",[t._v("在分布式场景下，一个用户的 Session 如果只存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器上，该服务器没有用户的 Session，就可能导致用户需要重新进行登录等操作。")]),t._v(" "),a("p",[t._v("分布式 Session 的几种实现策略：")]),t._v(" "),a("ol",[a("li",[t._v("粘性 session")]),t._v(" "),a("li",[t._v("应用服务器间的 session 复制共享")]),t._v(" "),a("li",[t._v("基于 cache DB 缓存的 session 共享")])]),t._v(" "),a("h3",{attrs:{id:"sticky-sessions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sticky-sessions"}},[t._v("#")]),t._v(" Sticky Sessions")]),t._v(" "),a("p",[t._v("需要配置负载均衡器，使得一个用户的所有请求都路由到一个服务器节点上，这样就可以把用户的 Session 存放在该服务器节点中。")]),t._v(" "),a("p",[t._v("缺点：当服务器节点宕机时，将丢失该服务器节点上的所有 Session。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/MultiNode-StickySessions.jpg"}})]),t._v(" "),a("h3",{attrs:{id:"session-replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-replication"}},[t._v("#")]),t._v(" Session Replication")]),t._v(" "),a("p",[t._v("在服务器节点之间进行 Session 同步操作，这样的话用户可以访问任何一个服务器节点。")]),t._v(" "),a("p",[t._v("缺点：占用过多内存；同步过程占用网络带宽以及服务器处理器时间。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/MultiNode-SessionReplication.jpg"}})]),t._v(" "),a("h3",{attrs:{id:"session-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-server"}},[t._v("#")]),t._v(" Session Server")]),t._v(" "),a("p",[t._v("使用一个单独的服务器存储 Session 数据，可以存在 MySQL 数据库上，也可以存在 Redis 或者 Memcached 这种内存型数据库。")]),t._v(" "),a("p",[t._v("缺点：需要去实现存取 Session 的代码。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/MultiNode-SpringSession.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"分布式存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式存储"}},[t._v("#")]),t._v(" 分布式存储")]),t._v(" "),a("p",[t._v("通常有两种解决方案：")]),t._v(" "),a("ol",[a("li",[t._v("数据分布：就是把数据分块存在不同的服务器上（分库分表）。")]),t._v(" "),a("li",[t._v("数据复制：让所有的服务器都有相同的数据，提供相当的服务。")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("RouterLink",{attrs:{to:"/architecture/分布式原理.html#2-数据分布"}},[t._v("分布式原理.md#2-数据分布")])],1)]),t._v(" "),a("h2",{attrs:{id:"分布式缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存"}},[t._v("#")]),t._v(" 分布式缓存")]),t._v(" "),a("p",[t._v("使用缓存的好处：")]),t._v(" "),a("ul",[a("li",[t._v("提升数据读取速度")]),t._v(" "),a("li",[t._v("提升系统扩展能力，通过扩展缓存，提升系统承载能力")]),t._v(" "),a("li",[t._v("降低存储成本，Cache+DB 的方式可以承担原有需要多台 DB 才能承担的请求量，节省机器成本")])]),t._v(" "),a("p",[t._v("根据业务场景，通常缓存有以下几种使用方式")]),t._v(" "),a("ul",[a("li",[t._v("懒汉式(读时触发)：写入 DB 后, 然后把相关的数据也写入 Cache")]),t._v(" "),a("li",[t._v("饥饿式(写时触发)：先查询 DB 里的数据, 然后把相关的数据写入 Cache")]),t._v(" "),a("li",[t._v("定期刷新：适合周期性的跑数据的任务，或者列表型的数据，而且不要求绝对实时性")])]),t._v(" "),a("p",[t._v("缓存分类：")]),t._v(" "),a("ul",[a("li",[t._v("应用内缓存：如：EHCache")]),t._v(" "),a("li",[t._v("分布式缓存：如：Memached、Redis")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考："),a("RouterLink",{attrs:{to:"/architecture/分布式原理.html#6-分布式缓存问题"}},[t._v("分布式原理.md#6-分布式缓存问题")])],1)]),t._v(" "),a("h2",{attrs:{id:"分布式计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式计算"}},[t._v("#")]),t._v(" 分布式计算")]),t._v(" "),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("h3",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("h4",{attrs:{id:"轮询（round-robin）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轮询（round-robin）"}},[t._v("#")]),t._v(" 轮询（Round Robin）")]),t._v(" "),a("p",[t._v("轮询算法把每个请求轮流发送到每个服务器上。下图中，一共有 6 个客户端产生了 6 个请求，这 6 个请求按 (1, 2, 3, 4, 5, 6) 的顺序发送。最后，(1, 3, 5) 的请求会被发送到服务器 1，(2, 4, 6) 的请求会被发送到服务器 2。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之轮询-01.jpg",width:"640"}})]),t._v(" "),a("p",[t._v("该算法比较适合每个服务器的性能差不多的场景，如果有性能存在差异的情况下，那么性能较差的服务器可能无法承担过大的负载（下图的 Server 2）。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之轮询-02.jpg",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"加权轮询（weighted-round-robbin）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加权轮询（weighted-round-robbin）"}},[t._v("#")]),t._v(" 加权轮询（Weighted Round Robbin）")]),t._v(" "),a("p",[t._v("加权轮询是在轮询的基础上，根据服务器的性能差异，为服务器赋予一定的权值。例如下图中，服务器 1 被赋予的权值为 5，服务器 2 被赋予的权值为 1，那么 (1, 2, 3, 4, 5) 请求会被发送到服务器 1，(6) 请求会被发送到服务器 2。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之加权轮询.jpg",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"最少连接（least-connections）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最少连接（least-connections）"}},[t._v("#")]),t._v(" 最少连接（least Connections）")]),t._v(" "),a("p",[t._v("由于每个请求的连接时间不一样，使用轮询或者加权轮询算法的话，可能会让一台服务器当前连接数过大，而另一台服务器的连接过小，造成负载不均衡。例如下图中，(1, 3, 5) 请求会被发送到服务器 1，但是 (1, 3) 很快就断开连接，此时只有 (5) 请求连接服务器 1；(2, 4, 6) 请求被发送到服务器 2，只有 (2) 的连接断开。该系统继续运行时，服务器 2 会承担过大的负载。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之最少连接-01.jpg",width:"640"}})]),t._v(" "),a("p",[t._v("最少连接算法就是将请求发送给当前最少连接数的服务器上。例如下图中，服务器 1 当前连接数最小，那么新到来的请求 6 就会被发送到服务器 1 上。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之最少连接-02.jpg",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"加权最少连接（weighted-least-connection）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加权最少连接（weighted-least-connection）"}},[t._v("#")]),t._v(" 加权最少连接（Weighted Least Connection）")]),t._v(" "),a("p",[t._v("在最少连接的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之加权最少连接.jpg",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"随机算法（random）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机算法（random）"}},[t._v("#")]),t._v(" 随机算法（Random）")]),t._v(" "),a("p",[t._v("把请求随机发送到服务器上。和轮询算法类似，该算法比较适合服务器性能差不多的场景。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之随机.jpg",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"源地址哈希法-ip-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源地址哈希法-ip-hash"}},[t._v("#")]),t._v(" 源地址哈希法 (IP Hash)")]),t._v(" "),a("p",[t._v("源地址哈希通过对客户端 IP 哈希计算得到的一个数值，用该数值对服务器数量进行取模运算，取模结果便是目标服务器的序号。")]),t._v(" "),a("ul",[a("li",[t._v("优点：保证同一 IP 的客户端都会被 hash 到同一台服务器上。")]),t._v(" "),a("li",[t._v("缺点：不利于集群扩展，后台服务器数量变更都会影响 hash 结果。可以采用一致性 Hash 改进。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/负载均衡算法之IpHash.jpg",width:"640"}})]),t._v(" "),a("h3",{attrs:{id:"实现-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("h4",{attrs:{id:"http-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-重定向"}},[t._v("#")]),t._v(" HTTP 重定向")]),t._v(" "),a("p",[t._v("HTTP 重定向负载均衡服务器收到 HTTP 请求之后会返回服务器的地址，并将该地址写入 HTTP 重定向响应中返回给浏览器，浏览器收到后需要再次发送请求。")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("用户访问的延迟会增加；")]),t._v(" "),a("li",[t._v("如果负载均衡器宕机，就无法访问该站点。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/Http重定向.png",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"dns-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-重定向"}},[t._v("#")]),t._v(" DNS 重定向")]),t._v(" "),a("p",[t._v("使用 DNS 作为负载均衡器，根据负载情况返回不同服务器的 IP 地址。大型网站基本使用了这种方式做为第一级负载均衡手段，然后在内部使用其它方式做第二级负载均衡。")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("DNS 查找表可能会被客户端缓存起来，那么之后的所有请求都会被重定向到同一个服务器。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/Dns重定向.png",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"修改-mac-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-mac-地址"}},[t._v("#")]),t._v(" 修改 MAC 地址")]),t._v(" "),a("p",[t._v("使用 LVS（Linux Virtual Server）这种链路层负载均衡器，根据负载情况修改请求的 MAC 地址。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/修改Mac地址.png",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"修改-ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-ip-地址"}},[t._v("#")]),t._v(" 修改 IP 地址")]),t._v(" "),a("p",[t._v("在网络层修改请求的目的 IP 地址。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/修改IP地址.png",width:"640"}})]),t._v(" "),a("h4",{attrs:{id:"代理自动配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理自动配置"}},[t._v("#")]),t._v(" 代理自动配置")]),t._v(" "),a("p",[t._v("正向代理与反向代理的区别：")]),t._v(" "),a("ul",[a("li",[t._v("正向代理：发生在客户端，是由用户主动发起的。比如翻墙，客户端通过主动访问代理服务器，让代理服务器获得需要的外网数据，然后转发回客户端。")]),t._v(" "),a("li",[t._v("反向代理：发生在服务器端，用户不知道代理的存在。")])]),t._v(" "),a("p",[t._v("PAC 服务器是用来判断一个请求是否要经过代理。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/design/architecture/代理自动配置.jpg",width:"640"}})]),t._v(" "),a("h2",{attrs:{id:"资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[t._v("#")]),t._v(" 资料")]),t._v(" "),a("ul",[a("li",[t._v("https://www.cnblogs.com/savorboard/p/distributed-system-transaction-consistency.html")]),t._v(" "),a("li",[t._v("https://github.com/CyC2018/Interview-Notebook/blob/master/notes/%E5%88%86%E5%B8%83%E5%BC%8F%E9%97%AE%E9%A2%98%E5%88%86%E6%9E%90.md")]),t._v(" "),a("li",[t._v("https://www.jianshu.com/p/453c6e7ff81c")]),t._v(" "),a("li",[t._v("https://juejin.im/post/5a20cd8bf265da43163cdd9a")]),t._v(" "),a("li",[t._v("https://github.com/redisson/redisson/wiki/8.-%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%92%8C%E5%90%8C%E6%AD%A5%E5%99%A8")]),t._v(" "),a("li",[t._v("https://github.com/L316476844/distributed-session")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/entry/57e39e320e3dd90058021bff",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式缓存架构基础"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.toutiao.com/i6533812974807679495/?tt_from=weixin&utm_campaign=client_share&from=singlemessage&timestamp=1521281305&app=news_article&utm_source=weixin&iid=28128279343&utm_medium=toutiao_android&weixin_list=1&wxshare_count=2&pbid=6517746516513195523",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里 P8 技术专家细究分布式缓存问题"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);