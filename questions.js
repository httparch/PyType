
/**
 *  category:
 *  question:
 *  answer:
 *  prompt:
 */
const wordlist = [
    {
        category: 'Assigning',
        question: 'Assign the value 10 to a variable named score.',
        answer: 'score = 10',
        prompt: 'Int type of variables should have integer value ...' //tips nalang + message na aralin from IM
    },
    {
        category: 'Declaration',
        question: 'What type of data is x in this line of code " x = 20.5 " .',
        answer: 'float',
        prompt: 'Float are used to store positive and negative numbers with a decimal point.' //tips nalang + message na aralin from IM
    },
    {
        category: 'Declaration',
        question: 'What type of data is y in this line of code " y = [1, 2, 3] "?',
        answer: 'list',
        prompt: 'Lists are used for storing multiple items in an ordered sequence. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z in this line of code " z = {5, 10, 15} "?',
    answer: 'set',
    prompt: 'Sets are used to store unique values without any order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w in this line of code " w = (3 + 4j) "?',
    answer: 'complex',
    prompt: 'Complex numbers can represent imaginary and real parts in mathematical operations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p in this line of code " p = True "?',
    answer: 'bool',
    prompt: 'Booleans are used for true or false values in logical conditions. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q in this line of code " q = memoryview(bytes(10)) "?',
    answer: 'memoryview',
    prompt: 'Memoryview objects provide a way to access the data of bytes-like objects without copying the original data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r in this line of code " r = bytearray(8) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays allow for mutable sequences of bytes, often used for I/O operations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s in this line of code " s = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets are used for storing unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t in this line of code " t = b"Python" "?',
    answer: 'bytes',
    prompt: 'Bytes are often used for storing raw binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u in this line of code " u = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries provide a way to store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v in this line of code " v = frozenset({"cat", "dog", "fish"}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, useful when you want to prevent modifications. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w in this line of code " w = range(10) "?',
    answer: 'range',
    prompt: 'Ranges are useful for generating sequences of numbers, like indexes or countdowns. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x in this line of code " x = False "?',
    answer: 'bool',
    prompt: 'Booleans represent true or false values, often used in conditions. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y in this line of code " y = bytearray(20) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays allow for dynamic storage and modification of byte sequences. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z in this line of code " z = {1, 2, 3, 4, 5} "?',
    answer: 'set',
    prompt: 'Sets are designed for fast access and checking of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p in this line of code " p = 15.3 "?',
    answer: 'float',
    prompt: 'Floats can store numbers with decimals, suitable for various calculations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q in this line of code " q = {"apple", "banana", "grape"} "?',
    answer: 'set',
    prompt: 'Sets are efficient for storing collections of items without duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a in this line of code " a = 100 "?',
    answer: 'int',
    prompt: 'Integers are used to store whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b in this line of code " b = "Python" "?',
    answer: 'str',
    prompt: 'Strings are used to store text or sequences of characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c in this line of code " c = 5.75 "?',
    answer: 'float',
    prompt: 'Floats store numbers with decimal points and can represent fractional values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d in this line of code " d = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists can store multiple items in a specific order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e in this line of code " e = { "name": "Bob", "age": 30 } "?',
    answer: 'dict',
    prompt: 'Dictionaries store data as key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f in this line of code " f = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples store a fixed collection of items and are immutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g in this line of code " g = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets are collections of unique, unordered items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h in this line of code " h = frozenset({"red", "blue", "green"}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, useful when you need a collection that cannot be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i in this line of code " i = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes represent raw binary data and are often used for I/O operations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j in this line of code " j = memoryview(b"hello") "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow you to view and access the data of bytes-like objects without copying the data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k in this line of code " k = True "?',
    answer: 'bool',
    prompt: 'Booleans are used for logical operations, storing either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l in this line of code " l = {"John", "Doe"} "?',
    answer: 'set',
    prompt: 'Sets hold unique elements in no particular order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m in this line of code " m = range(5) "?',
    answer: 'range',
    prompt: 'Ranges represent sequences of numbers and are often used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is n in this line of code " n = 4.2 "?',
    answer: 'float',
    prompt: 'Floats are used for numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o in this line of code " o = {"name": "Alice"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p in this line of code " p = (5, 10, 15) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences of values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q in this line of code " q = 30 "?',
    answer: 'int',
    prompt: 'Integers store whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r in this line of code " r = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets store unique elements and do not guarantee any particular order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s in this line of code " s = "Hello, World!" "?',
    answer: 'str',
    prompt: 'Strings are used for representing textual data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t in this line of code " t = frozenset({"x", "y", "z"}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are sets that cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u in this line of code " u = 3 + 4j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v in this line of code " v = ["apple", "banana", "cherry"] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can hold multiple items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w in this line of code " w = { "key1": "value1", "key2": "value2" } "?',
    answer: 'dict',
    prompt: 'Dictionaries are used to store key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x in this line of code " x = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets contain unique, unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y in this line of code " y = "Good morning" "?',
    answer: 'str',
    prompt: 'Strings represent sequences of characters, useful for text-based data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z in this line of code " z = range(10) "?',
    answer: 'range',
    prompt: 'Ranges represent sequences of numbers that can be used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a1 in this line of code " a1 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets store unique and unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b1 in this line of code " b1 = 12.34 "?',
    answer: 'float',
    prompt: 'Floats store numbers with decimal points and can represent fractional values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c1 in this line of code " c1 = ("apple", "orange") "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered collections of elements and are immutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d1 in this line of code " d1 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes store binary data and are used in various data manipulation tasks. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e1 in this line of code " e1 = 500 "?',
    answer: 'int',
    prompt: 'Integers store whole numbers and can be used for counting, indexing, and more. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f1 in this line of code " f1 = True "?',
    answer: 'bool',
    prompt: 'Booleans store values representing true or false. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g1 in this line of code " g1 = memoryview(bytes(5)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews provide a view of memory buffers without copying the data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h1 in this line of code " h1 = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists are mutable, ordered collections that can hold a variety of data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i1 in this line of code " i1 = {"apple": 1, "banana": 2} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j1 in this line of code " j1 = 5j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real and imaginary part, represented as a + bj. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k1 in this line of code " k1 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets and cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l1 in this line of code " l1 = 7.8 "?',
    answer: 'float',
    prompt: 'Floats represent decimal numbers and can store fractional values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m1 in this line of code " m1 = ["apple", 1, 2.5] "?',
    answer: 'list',
    prompt: 'Lists can hold items of different data types. You may visit the learning material to review.'
    }, 
    {
    category: 'Declaration',
    question: 'What type of data is n1 in this line of code " n1 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and ordered collections, often used for fixed data groups. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o1 in this line of code " o1 = 2.718 "?',
    answer: 'float',
    prompt: 'Floating-point numbers represent decimal values and can be used in mathematical operations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p1 in this line of code " p1 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q1 in this line of code " q1 = True "?',
    answer: 'bool',
    prompt: 'Booleans are used to represent logical values, typically true or false. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r1 in this line of code " r1 = "123" "?',
    answer: 'str',
    prompt: 'Strings represent sequences of characters and are often used for textual data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s1 in this line of code " s1 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers and are commonly used in counting or indexing. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t1 in this line of code " t1 = bytearray(3) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays represent mutable sequences of bytes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u1 in this line of code " u1 = b"Python" "?',
    answer: 'bytes',
    prompt: 'Bytes store raw binary data and are often used for encoding or file manipulation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v1 in this line of code " v1 = 10j "?',
    answer: 'complex',
    prompt: 'Complex numbers are written as a real part and an imaginary part (e.g., a + bj). You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w1 in this line of code " w1 = memoryview(b"Hello") "?',
    answer: 'memoryview',
    prompt: 'Memoryviews provide a view of the memory without copying the data, useful for large data sets. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x1 in this line of code " x1 = ["dog", "cat"] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections that can hold multiple data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y1 in this line of code " y1 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data as key-value pairs, where the key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z1 in this line of code " z1 = (4, 5, 6) "?',
    answer: 'tuple',
    prompt: 'Tuples are similar to lists but are immutable, meaning their values cannot be changed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a2 in this line of code " a2 = [1, "Hello", 3.14] "?',
    answer: 'list',
    prompt: 'Lists can hold items of different types, such as integers, strings, and floats. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b2 in this line of code " b2 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that store unique elements, with no duplicates allowed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c2 in this line of code " c2 = range(0, 5) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers, often used in loops for iteration. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d2 in this line of code " d2 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e2 in this line of code " e2 = 3.14 "?',
    answer: 'float',
    prompt: 'Floating-point numbers are used to represent decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f2 in this line of code " f2 = "Python" "?',
    answer: 'str',
    prompt: 'Strings represent sequences of characters, commonly used to store text. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g2 in this line of code " g2 = 200 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers that do not have a fractional part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h2 in this line of code " h2 = {"apple": 10, "banana": 5} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i2 in this line of code " i2 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j2 in this line of code " j2 = (4, 5, 6) "?',
    answer: 'tuple',
    prompt: 'Tuples are similar to lists but immutable, meaning their elements cannot be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k2 in this line of code " k2 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of bytes, often used in binary data processing. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l2 in this line of code " l2 = 3.14 "?',
    answer: 'float',
    prompt: 'Floating-point numbers represent decimal values, used in calculations involving precision. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m2 in this line of code " m2 = bytearray(5) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, used when working with binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is n2 in this line of code " n2 = range(0, 10) "?',
    answer: 'range',
    prompt: 'Range objects represent a sequence of numbers and are typically used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o2 in this line of code " o2 = 10j "?',
    answer: 'complex',
    prompt: 'Complex numbers are composed of real and imaginary parts, written as a + bj. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p2 in this line of code " p2 = ["cat", "dog"] "?',
    answer: 'list',
    prompt: 'Lists are ordered and mutable, allowing for the storage of multiple items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q2 in this line of code " q2 = {"a", "b", "c"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r2 in this line of code " r2 = {"name": "Alice", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, where the key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s2 in this line of code " s2 = False "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values, either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t2 in this line of code " t2 = "Python3" "?',
    answer: 'str',
    prompt: 'Strings are used to store textual data, such as words and sentences. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u2 in this line of code " u2 = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets contain unique elements, and duplicates are automatically removed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v2 in this line of code " v2 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays represent mutable sequences of bytes, often used for handling binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w2 in this line of code " w2 = 42 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers without decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x2 in this line of code " x2 = 9.81 "?',
    answer: 'float',
    prompt: 'Floating-point numbers are used for decimal values and are often used in scientific calculations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y2 in this line of code " y2 = (3.14, 2.71) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered and immutable collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z2 in this line of code " z2 = 10j "?',
    answer: 'complex',
    prompt: 'Complex numbers contain a real and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a3 in this line of code " a3 = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists are ordered and mutable, allowing the modification of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b3 in this line of code " b3 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, used for storing unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c3 in this line of code " c3 = {"apple": 10, "banana": 20} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d3 in this line of code " d3 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values, either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e3 in this line of code " e3 = range(5) "?',
    answer: 'range',
    prompt: 'Range objects are used to represent a sequence of numbers in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f3 in this line of code " f3 = [True, False, True] "?',
    answer: 'list',
    prompt: 'Lists can store different types of elements, including booleans, numbers, or strings. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g3 in this line of code " g3 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes store immutable sequences of bytes, often used in binary data handling. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h3 in this line of code " h3 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences of elements, used to store multiple items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i3 in this line of code " i3 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that only contain unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j3 in this line of code " j3 = [1.5, 3.7, 9.2] "?',
    answer: 'list',
    prompt: 'Lists can contain floating-point numbers or integers, and they can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k3 in this line of code " k3 = "123" "?',
    answer: 'str',
    prompt: 'Strings are used to represent sequences of characters and are enclosed in quotes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l3 in this line of code " l3 = 5 + 3j "?',
    answer: 'complex',
    prompt: 'Complex numbers are represented with a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m3 in this line of code " m3 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data as key-value pairs, where the key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is n3 in this line of code " n3 = range(10, 20) "?',
    answer: 'range',
    prompt: 'A range object generates a sequence of numbers used mainly in for-loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o3 in this line of code " o3 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets contain unique elements, and duplicate values are automatically removed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p3 in this line of code " p3 = "OpenAI" "?',
    answer: 'str',
    prompt: 'Strings are used to represent textual data, and they can be manipulated or concatenated. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q3 in this line of code " q3 = 7.89 "?',
    answer: 'float',
    prompt: 'Floating-point numbers represent decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r3 in this line of code " r3 = [1, "apple", 3.14] "?',
    answer: 'list',
    prompt: 'Lists can store multiple types of data, including integers, strings, and floats. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s3 in this line of code " s3 = ("apple", 3, True) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered and immutable, used to store heterogeneous data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t3 in this line of code " t3 = {True, False} "?',
    answer: 'set',
    prompt: 'Sets only contain unique elements and are unordered collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u3 in this line of code " u3 = {"apple": 1, "banana": 2} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v3 in this line of code " v3 = 9.5 "?',
    answer: 'float',
    prompt: 'Float numbers are used for decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w3 in this line of code " w3 = "Python" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters enclosed in quotes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x4 in this line of code " x4 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes represent immutable sequences of bytes and are commonly used for binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y4 in this line of code " y4 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets and contain only unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z4 in this line of code " z4 = 15j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a4 in this line of code " a4 = range(5, 10) "?',
    answer: 'range',
    prompt: 'Range objects represent a sequence of numbers, useful for iteration in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b4 in this line of code " b4 = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets contain unordered, unique elements and can be used for membership testing. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c4 in this line of code " c4 = 8 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d4 in this line of code " d4 = [1, 2, 3] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e4 in this line of code " e4 = ("dog", "cat", "fish") "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and ordered collections of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f4 in this line of code " f4 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets contain unique elements and do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g4 in this line of code " g4 = {"key": "value"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h4 in this line of code " h4 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floating-point numbers are used for real numbers, including decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i4 in this line of code " i4 = True "?',
    answer: 'bool',
    prompt: 'Booleans are used to represent truth values, either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j5 in this line of code " j5 = [10, 20, 30] "?',
    answer: 'list',
    prompt: 'Lists store ordered collections of items, and their elements can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k5 in this line of code " k5 = ("apple", "banana") "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable ordered collections, and once created, their elements cannot be changed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l5 in this line of code " l5 = 3j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, represented by the letter "j". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m5 in this line of code " m5 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements, and they do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is n5 in this line of code " n5 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o5 in this line of code " o5 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p5 in this line of code " p5 = "Hello World" "?',
    answer: 'str',
    prompt: 'Strings represent sequences of characters enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q5 in this line of code " q5 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers without decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r5 in this line of code " r5 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floats are used for real numbers that have decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s5 in this line of code " s5 = b"Python" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of bytes used to store binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t5 in this line of code " t5 = bytearray(5) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, useful for handling binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u5 in this line of code " u5 = memoryview(bytes(5)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews are used to access the data of byte-like objects without copying the data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v5 in this line of code " v5 = range(1, 5) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers, commonly used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w5 in this line of code " w5 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that do not contain duplicate elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x5 in this line of code " x5 = {"a": 10, "b": 20} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs and allow for fast lookup by keys. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y5 in this line of code " y5 = 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers have a real and imaginary part, and are represented with a "j". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z5 in this line of code " z5 = 100.0 "?',
    answer: 'float',
    prompt: 'Floats are used to store numbers with decimal points, including real and fractional parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is a6 in this line of code " a6 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections, useful for fixed collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is b6 in this line of code " b6 = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. They do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is c6 in this line of code " c6 = "Python" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters, such as letters or numbers, enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is d6 in this line of code " d6 = {"name": "Tom", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, where the key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is e6 in this line of code " e6 = 42 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers without decimal points, and can be positive or negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is f6 in this line of code " f6 = 42.0 "?',
    answer: 'float',
    prompt: 'Floats are used to represent real numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is g6 in this line of code " g6 = [10, 20, 30] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections that can store items of different data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is h6 in this line of code " h6 = (10, 20, 30) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered collections, but unlike lists, they cannot be modified once created. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is i6 in this line of code " i6 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats represent real numbers with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is j6 in this line of code " j6 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes store binary data and are immutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is k6 in this line of code " k6 = bytearray(3) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, unlike bytes, which are immutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is l6 in this line of code " l6 = memoryview(bytes(5)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow you to access the internal data of byte-like objects without copying them. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is m6 in this line of code " m6 = range(3) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers and are typically used in for loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is n6 in this line of code " n6 = {1, 2, 3, 4, 5} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is o6 in this line of code " o6 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections, and elements cannot be duplicated. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is p6 in this line of code " p6 = {1: "apple", 2: "banana"} "?',
    answer: 'dict',
    prompt: 'Dictionaries are collections of key-value pairs, where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is q6 in this line of code " q6 = 10j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, and the imaginary part is represented by "j". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is r6 in this line of code " r6 = "Goodbye" "?',
    answer: 'str',
    prompt: 'Strings store sequences of characters and can include spaces and punctuation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is s6 in this line of code " s6 = 0.99 "?',
    answer: 'float',
    prompt: 'Floats are numbers that include a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is t6 in this line of code " t6 = [1, 2, 3] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can hold multiple items, including different data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is u6 in this line of code " u6 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are similar to lists but are immutable, meaning their elements cannot be changed after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is v6 in this line of code " v6 = True "?',
    answer: 'bool',
    prompt: 'Boolean values represent truth values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is w6 in this line of code " w6 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements and do not allow duplicate values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is x7 in this line of code " x7 = "12345" "?',
    answer: 'str',
    prompt: 'A string is a sequence of characters enclosed in quotation marks, including digits or letters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is y7 in this line of code " y7 = frozenset({"a", "b", "c"}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable versions of sets, meaning their elements cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is z7 in this line of code " z7 = memoryview(bytes(10)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow you to access memory buffers and manipulate data without copying it. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is aa7 in this line of code " aa7 = bytearray(4) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, used for binary data manipulation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ab7 in this line of code " ab7 = range(5) "?',
    answer: 'range',
    prompt: 'A range represents a sequence of numbers, typically used in for loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ac7 in this line of code " ac7 = 7j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, represented by the letter "j". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ad7 in this line of code " ad7 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements that can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ae7 in this line of code " ae7 = "Hello World" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters and can be used to store text data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is af7 in this line of code " af7 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers without a fractional part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ag7 in this line of code " ag7 = [3.14, 2.71, 1.61] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can store multiple values of different types, including floats. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ah7 in this line of code " ah7 = {"John", "Jane", "Joe"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. They cannot contain duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ai7 in this line of code " ai7 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries are collections of key-value pairs, where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is aj7 in this line of code " aj7 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floats are used to represent real numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ak7 in this line of code " ak7 = b"Python" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of bytes and are used to store binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is al7 in this line of code " al7 = (10, 20, 30) "?',
    answer: 'tuple',
    prompt: 'Tuples are similar to lists but are immutable and cannot be changed after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is am7 in this line of code " am7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements and do not allow duplicate values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is an7 in this line of code " an7 = {10: "apple", 20: "banana"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ao7 in this line of code " ao7 = "True" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters and can include letters, digits, and symbols. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ap7 in this line of code " ap7 = 1000 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers and can be positive, negative, or zero. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is aq7 in this line of code " aq7 = 0.99 "?',
    answer: 'float',
    prompt: 'Floats represent real numbers, often used to store decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ar7 in this line of code " ar7 = [5, 10, 15] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can hold multiple items, including numbers and strings. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is as7 in this line of code " as7 = (5, 10, 15) "?',
    answer: 'tuple',
    prompt: 'Tuples are similar to lists, but they are immutable, meaning they cannot be changed after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is at7 in this line of code " at7 = frozenset({"apple", "banana"}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is au7 in this line of code " au7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent true/false values, commonly used for conditional statements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is av7 in this line of code " av7 = bytearray(3) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes used to manipulate binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is aw7 in this line of code " aw7 = memoryview(bytes(10)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews provide a way to access the data of a byte array or other data types without copying the data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ax7 in this line of code " ax7 = range(10) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers, used primarily in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ay7 in this line of code " ay7 = 1j "?',
    answer: 'complex',
    prompt: 'Complex numbers are represented as a real part and an imaginary part, denoted by the letter "j". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is az7 in this line of code " az7 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that contain unique elements with no duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ba7 in this line of code " ba7 = "Python" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters that can represent text, including letters and digits. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bb7 in this line of code " bb7 = [1.1, 2.2, 3.3] "?',
    answer: 'list',
    prompt: 'Lists can store multiple data types, including floats. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bc7 in this line of code " bc7 = {"key": "value"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bd7 in this line of code " bd7 = {"apple", "orange"} "?',
    answer: 'set',
    prompt: 'Sets are collections of unordered and unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is be7 in this line of code " be7 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats are used to represent numbers with a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bf7 in this line of code " bf7 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers and are used for counting. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bg7 in this line of code " bg7 = (10, 20, 30) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bh7 in this line of code " bh7 = "True" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters that can include letters, digits, and symbols. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bi7 in this line of code " bi7 = range(5) "?',
    answer: 'range',
    prompt: 'Ranges are sequences of numbers used for looping. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bj7 in this line of code " bj7 = 1 + 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, represented as "a + bj". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bk7 in this line of code " bk7 = {"name": "Alice", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, with each key being unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bl7 in this line of code " bl7 = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can hold different types of data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bm7 in this line of code " bm7 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floats are used to represent real numbers, including decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bn7 in this line of code " bn7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, meaning their contents cannot be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bo7 in this line of code " bo7 = "Python is awesome" "?',
    answer: 'str',
    prompt: 'Strings represent sequences of characters, including letters and spaces. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bp7 in this line of code " bp7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets store unique values without any order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bq7 in this line of code " bq7 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes used for binary data manipulation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is br7 in this line of code " br7 = memoryview(bytes(8)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow for efficient handling of data without copying it. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bs7 in this line of code " bs7 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections with no duplicate elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bt7 in this line of code " bt7 = [3, "apple", 10.5] "?',
    answer: 'list',
    prompt: 'Lists can hold elements of different data types, including integers, floats, and strings. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bu7 in this line of code " bu7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values, either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bv7 in this line of code " bv7 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes represent immutable sequences of byte data, commonly used for encoding. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bw7 in this line of code " bw7 = 1 + 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, often written as a + bj. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bx7 in this line of code " bx7 = ["dog", "cat", "fish"] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can store multiple items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is by7 in this line of code " by7 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats are used to represent real numbers with a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is bz7 in this line of code " bz7 = ("apple", "banana") "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ca7 in this line of code " ca7 = 42 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cb7 in this line of code " cb7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets store unique, unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cc7 in this line of code " cc7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are used to represent binary data, like file contents or encoded strings. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cd7 in this line of code " cd7 = {"name": "John", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ce7 in this line of code " ce7 = (10, 20, 30) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable, ordered collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cf7 in this line of code " cf7 = range(10) "?',
    answer: 'range',
    prompt: 'Ranges are used to represent a sequence of numbers, often in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cg7 in this line of code " cg7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ch7 in this line of code " ch7 = 1000 "?',
    answer: 'int',
    prompt: 'Integers are used for whole numbers, positive or negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ci7 in this line of code " ci7 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets contain unique, unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cj7 in this line of code " cj7 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ck7 in this line of code " ck7 = 2.5 "?',
    answer: 'float',
    prompt: 'Floats are used for numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cl7 in this line of code " cl7 = [1, 2, 3] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cm7 in this line of code " cm7 = {"apple", "orange", "grape"} "?',
    answer: 'set',
    prompt: 'Sets are collections of unique, unordered items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cn7 in this line of code " cn7 = (1, 2, 3, 4) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered and immutable collections of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is co7 in this line of code " co7 = range(5, 15) "?',
    answer: 'range',
    prompt: 'Range is used to generate a sequence of numbers, commonly for looping. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cp7 in this line of code " cp7 = frozenset(["apple", "banana", "cherry"]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cq7 in this line of code " cq7 = 15.99 "?',
    answer: 'float',
    prompt: 'Floats are numbers that contain decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cr7 in this line of code " cr7 = {"name": "John", "age": 29} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, where each key is unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cs7 in this line of code " cs7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent binary values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ct7 in this line of code " ct7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes represent immutable sequences of bytes, typically used for encoding data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cu7 in this line of code " cu7 = 3 + 4j "?',
    answer: 'complex',
    prompt: 'Complex numbers have both real and imaginary parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cv7 in this line of code " cv7 = ["apple", "banana", "cherry"] "?',
    answer: 'list',
    prompt: 'Lists are mutable and ordered collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cw7 in this line of code " cw7 = 10 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cx7 in this line of code " cx7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cy7 in this line of code " cy7 = {"name": "Alice", "age": 24} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where keys are unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is cz7 in this line of code " cz7 = (4, 5, 6) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered and immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is da7 in this line of code " da7 = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists are ordered and mutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is db7 in this line of code " db7 = range(2, 10) "?',
    answer: 'range',
    prompt: 'Range is used to generate a sequence of numbers, often used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dc7 in this line of code " dc7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable versions of sets. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dd7 in this line of code " dd7 = 99.99 "?',
    answer: 'float',
    prompt: 'Floats represent real numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is de7 in this line of code " de7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent either True or False values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is df7 in this line of code " df7 = {"name": "Alice", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dg7 in this line of code " dg7 = (3, 6, 9) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered and immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dh7 in this line of code " dh7 = ["apple", "orange", "pear"] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is di7 in this line of code " di7 = 4 + 7j "?',
    answer: 'complex',
    prompt: 'Complex numbers include both a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dj7 in this line of code " dj7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dk7 in this line of code " dk7 = range(10) "?',
    answer: 'range',
    prompt: 'Range objects are used to generate a sequence of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dl7 in this line of code " dl7 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dm7 in this line of code " dm7 = frozenset([4, 5, 6]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dn7 in this line of code " dn7 = 11 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is do7 in this line of code " do7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent true or false values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dp7 in this line of code " dp7 = "hello world" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters, often used for text. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dq7 in this line of code " dq7 = 99.9 "?',
    answer: 'float',
    prompt: 'Floats are numbers with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dr7 in this line of code " dr7 = (7, 8, 9) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered collections that cannot be changed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ds7 in this line of code " ds7 = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dt7 in this line of code " dt7 = 2 + 3j "?',
    answer: 'complex',
    prompt: 'Complex numbers have both real and imaginary parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is du7 in this line of code " du7 = {"name": "Alice", "city": "Paris"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store values in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dv7 in this line of code " dv7 = range(2, 10, 2) "?',
    answer: 'range',
    prompt: 'Ranges generate a sequence of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dw7 in this line of code " dw7 = frozenset([7, 8, 9]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable collections that do not allow changes after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dx7 in this line of code " dx7 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dy7 in this line of code " dy7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is dz7 in this line of code " dz7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets contain unique values without duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ea7 in this line of code " ea7 = ("apple", 10, True) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences, meaning their elements cannot be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eb7 in this line of code " eb7 = [1, 2, 3, 4] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ec7 in this line of code " ec7 = {"first_name": "John", "last_name": "Doe"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store values in key-value pairs, providing fast access to data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ed7 in this line of code " ed7 = 5.75 "?',
    answer: 'float',
    prompt: 'Floats represent decimal numbers. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ee7 in this line of code " ee7 = range(1, 11) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers, often used for iteration. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ef7 in this line of code " ef7 = 42 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers, both positive and negative. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eg7 in this line of code " eg7 = 2 + 5j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eh7 in this line of code " eh7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, meaning they cannot be changed after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ei7 in this line of code " ei7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent true or false values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ej7 in this line of code " ej7 = "Python" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters, commonly used for text. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ek7 in this line of code " ek7 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of byte values, allowing modification. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is el7 in this line of code " el7 = b"hello" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is em7 in this line of code " em7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets store unordered, unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is en7 in this line of code " en7 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences of elements, like lists but unchangeable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eo7 in this line of code " eo7 = ["apple", "banana", "cherry"] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ep7 in this line of code " ep7 = {"x": 10, "y": 20} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs for fast lookups. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eq7 in this line of code " eq7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that cannot be altered once created. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is er7 in this line of code " er7 = False "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values, either True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is es7 in this line of code " es7 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are collections of unique elements that are unordered. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is et7 in this line of code " et7 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats are used for decimal numbers and fractions. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is eu7 in this line of code " eu7 = (10, "apple") "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ev7 in this line of code " ev7 = range(5) "?',
    answer: 'range',
    prompt: 'Ranges generate a sequence of numbers, typically used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ew7 in this line of code " ew7 = "abc" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters used for text representation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ex7 in this line of code " ex7 = 1 + 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part, represented as "a + bj". You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ey7 in this line of code " ey7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets contain unique and unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ez7 in this line of code " ez7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fa7 in this line of code " fa7 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers without fractions or decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fb7 in this line of code " fb7 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floats are numbers with a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fc7 in this line of code " fc7 = 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers have both a real and imaginary component. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fd7 in this line of code " fd7 = ["apple", "banana", "cherry"] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections that allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fe7 in this line of code " fe7 = {1, 2, 3, 4} "?',
    answer: 'set',
    prompt: 'Sets are collections of unique items without duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ff7 in this line of code " ff7 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key maps to a value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fg7 in this line of code " fg7 = "True" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters used to store text. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fh7 in this line of code " fh7 = range(1, 10) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers and are often used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fi7 in this line of code " fi7 = {1.5, 2.5, 3.5} "?',
    answer: 'set',
    prompt: 'Sets are collections of unique values and do not store duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fj7 in this line of code " fj7 = {"red", "blue", "green"} "?',
    answer: 'set',
    prompt: 'Sets store unique elements and do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fk7 in this line of code " fk7 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fl7 in this line of code " fl7 = {"apple": 1, "banana": 2} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where keys are unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fm7 in this line of code " fm7 = 9j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fn7 in this line of code " fn7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte values, often used for binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fo7 in this line of code " fo7 = {"John", "Doe"} "?',
    answer: 'set',
    prompt: 'Sets store unique, unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fp7 in this line of code " fp7 = True "?',
    answer: 'bool',
    prompt: 'Booleans are used to represent logical values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fq7 in this line of code " fq7 = [10, 20, 30] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can contain different data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fr7 in this line of code " fr7 = "Python" "?',
    answer: 'str',
    prompt: 'Strings represent text and are enclosed in quotes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fs7 in this line of code " fs7 = {"apple": 1, "banana": 2, "cherry": 3} "?',
    answer: 'dict',
    prompt: 'Dictionaries map keys to values in an unordered collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ft7 in this line of code " ft7 = {True, False} "?',
    answer: 'set',
    prompt: 'Sets contain unique elements and do not store duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fu7 in this line of code " fu7 = 1 + 4j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fv7 in this line of code " fv7 = 7.5 "?',
    answer: 'float',
    prompt: 'Floats are numbers that can represent fractions or decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fw7 in this line of code " fw7 = (1, 2, "three") "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fx7 in this line of code " fx7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fy7 in this line of code " fy7 = [1, "apple", 3.5] "?',
    answer: 'list',
    prompt: 'Lists can store multiple types of data in an ordered collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is fz7 in this line of code " fz7 = None "?',
    answer: 'NoneType',
    prompt: 'NoneType represents the absence of a value. It is often used to indicate no value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ga7 in this line of code " ga7 = (5, 10) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and ordered collections of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gb7 in this line of code " gb7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets, meaning they cannot be modified after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gc7 in this line of code " gc7 = bytearray(3) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gd7 in this line of code " gd7 = {5, 10, 15} "?',
    answer: 'set',
    prompt: 'Sets contain unique, unordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ge7 in this line of code " ge7 = [True, False, True] "?',
    answer: 'list',
    prompt: 'Lists can hold a collection of boolean values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gf7 in this line of code " gf7 = 4 + 3j "?',
    answer: 'complex',
    prompt: 'Complex numbers have both real and imaginary parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gg7 in this line of code " gg7 = "Python is fun" "?',
    answer: 'str',
    prompt: 'Strings represent text data, which can include letters, numbers, and special characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gh7 in this line of code " gh7 = 3.14159 "?',
    answer: 'float',
    prompt: 'Floats represent decimal numbers, and they are useful for precision. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gi7 in this line of code " gi7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets store unique and unordered values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gj7 in this line of code " gj7 = [10, "orange", 2.5] "?',
    answer: 'list',
    prompt: 'Lists can store mixed data types in a sequential collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gk7 in this line of code " gk7 = {"John": 30, "Jane": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key maps to a value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gl7 in this line of code " gl7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable versions of sets. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gm7 in this line of code " gm7 = bytearray(4) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, useful for binary data manipulation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gn7 in this line of code " gn7 = {"name": "Alice", "age": 28} "?',
    answer: 'dict',
    prompt: 'Dictionaries map unique keys to corresponding values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is go7 in this line of code " go7 = [7, 14, 21] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections of items that can store multiple types of data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gp7 in this line of code " gp7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent true/false values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gq7 in this line of code " gq7 = {"apple", "orange", "grape"} "?',
    answer: 'set',
    prompt: 'Sets store unique elements in an unordered collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gr7 in this line of code " gr7 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable, ordered collections of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gs7 in this line of code " gs7 = 42 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers, both positive and negative, without decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gt7 in this line of code " gt7 = b"Hello" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of bytes, commonly used for binary data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gu7 in this line of code " gu7 = range(10) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers and are commonly used in loops. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gv7 in this line of code " gv7 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats represent decimal numbers. They are useful for precise calculations. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gw7 in this line of code " gw7 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets contain unique elements and do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gx7 in this line of code " gx7 = {"name": "Alice", "age": 25} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs where each key maps to a specific value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gy7 in this line of code " gy7 = 1 + 2x "?',
    answer: 'complex',
    prompt: 'Complex numbers contain both a real part and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is gz7 in this line of code " gz7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ha7 in this line of code " ha7 = [True, False, True] "?',
    answer: 'list',
    prompt: 'Lists can store boolean values as part of their collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hb7 in this line of code " hb7 = None "?',
    answer: 'NoneType',
    prompt: 'NoneType represents the absence of a value or a null value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hc7 in this line of code " hc7 = [1.5, 2.5, 3.5] "?',
    answer: 'list',
    prompt: 'Lists can store floating-point numbers as part of their collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hd7 in this line of code " hd7 = 100 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers, both positive and negative, without decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is he7 in this line of code " he7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets store unordered collections of unique items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hf7 in this line of code " hf7 = (4, 5, 6) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable collections of ordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hg7 in this line of code " hg7 = "Python" "?',
    answer: 'str',
    prompt: 'Strings represent text data enclosed in quotes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hh7 in this line of code " hh7 = 3.5 "?',
    answer: 'float',
    prompt: 'Floats are used to represent numbers with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hi7 in this line of code " hi7 = {1, 2, 3} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hj7 in this line of code " hj7 = {"apple": 1, "banana": 2} "?',
    answer: 'dict',
    prompt: 'Dictionaries map keys to values. Each key must be unique. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hk7 in this line of code " hk7 = [10, 20, 30] "?',
    answer: 'list',
    prompt: 'Lists store ordered collections of elements and can be of mixed data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hl7 in this line of code " hl7 = True "?',
    answer: 'bool',
    prompt: 'Booleans represent truth values: True or False. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hm7 in this line of code " hm7 = 1 + 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers are numbers with a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hn7 in this line of code " hn7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets. Once created, elements cannot be added or removed. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ho7 in this line of code " ho7 = {10, 20, 30, 40} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hp7 in this line of code " hp7 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and ordered collections of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hq7 in this line of code " hq7 = b"Hello World" "?',
    answer: 'bytes',
    prompt: 'Bytes represent a sequence of immutable byte data, typically used for binary files. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hr7 in this line of code " hr7 = bytearray(4) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes, which allow modification after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hs7 in this line of code " hs7 = 0.1 "?',
    answer: 'float',
    prompt: 'Floats are used to store numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ht7 in this line of code " ht7 = 0j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real part and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hu7 in this line of code " hu7 = "Hello, world!" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters enclosed in quotes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hv7 in this line of code " hv7 = {10: "apple", 20: "banana"} "?',
    answer: 'dict',
    prompt: 'Dictionaries store key-value pairs, where each key maps to a corresponding value. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hw7 in this line of code " hw7 = range(10, 20) "?',
    answer: 'range',
    prompt: 'Ranges represent a sequence of numbers and are used in loops and iteration. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hx7 in this line of code " hx7 = {1, 2, 3, 4, 5} "?',
    answer: 'set',
    prompt: 'Sets store unique elements and do not maintain order. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hy7 in this line of code " hy7 = [1.5, 2.5, 3.5] "?',
    answer: 'list',
    prompt: 'Lists are ordered, mutable collections that can contain elements of different data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is hz7 in this line of code " hz7 = 100.0 "?',
    answer: 'float',
    prompt: 'Floats are numbers that contain decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ia7 in this line of code " ia7 = [True, False] "?',
    answer: 'list',
    prompt: 'Lists can store Boolean values as part of their collection. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ib7 in this line of code " ib7 = frozenset([1, 2, 3]) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets that prevent any modification after creation. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ic7 in this line of code " ic7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections with no duplicate elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is id7 in this line of code " id7 = (1, 2, 3) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences, useful for storing related items. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ie7 in this line of code " ie7 = "Python" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is if7 in this line of code " if7 = {"name": "Alice", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ig7 in this line of code " ig7 = 3.14 "?',
    answer: 'float',
    prompt: 'Floats are numbers that include a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ih7 in this line of code " ih7 = 7 + 2j "?',
    answer: 'complex',
    prompt: 'Complex numbers have a real and an imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ii7 in this line of code " ii7 = [True, False, True] "?',
    answer: 'list',
    prompt: 'Lists can store Boolean values and other data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ij7 in this line of code " ij7 = (1, "apple", True) "?',
    answer: 'tuple',
    prompt: 'Tuples can store mixed data types but are immutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ik7 in this line of code " ik7 = {"apple", "banana", "cherry"} "?',
    answer: 'set',
    prompt: 'Sets store unique elements in an unordered way. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is il7 in this line of code " il7 = b"hello" "?',
    answer: 'bytes',
    prompt: 'Bytes represent a sequence of immutable byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is im7 in this line of code " im7 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is in7 in this line of code " in7 = memoryview(bytes(10)) "?',
    answer: 'memoryview',
    prompt: 'Memoryview objects allow you to access the internal data of a buffer. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is io7 in this line of code " io7 = 45 "?',
    answer: 'int',
    prompt: 'Integers represent whole numbers without decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ip7 in this line of code " ip7 = "hello world" "?',
    answer: 'str',
    prompt: 'Strings are used to store sequences of characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iq7 in this line of code " iq7 = 25.6 "?',
    answer: 'float',
    prompt: 'Floats represent numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ir7 in this line of code " ir7 = {10, 20} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections with no duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is is7 in this line of code " is7 = [5, "apple", False] "?',
    answer: 'list',
    prompt: 'Lists can contain elements of different data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is it7 in this line of code " it7 = (1, 2, 3, 4) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences that can store multiple elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iu7 in this line of code " iu7 = { "name": "John", "age": 28 } "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iv7 in this line of code " iv7 = 3 + 5j "?',
    answer: 'complex',
    prompt: 'Complex numbers have both real and imaginary parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iw7 in this line of code " iw7 = [True, False] "?',
    answer: 'list',
    prompt: 'Lists can store Boolean values as well as other data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ix7 in this line of code " ix7 = ( "apple", 5, 3.5 ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and can store mixed data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iy7 in this line of code " iy7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets store unordered collections with no duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is iz7 in this line of code " iz7 = b"data" "?',
    answer: 'bytes',
    prompt: 'Bytes are immutable sequences of byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ja7 in this line of code " ja7 = bytearray(10) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of bytes. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jb7 in this line of code " jb7 = memoryview(bytes(5)) "?',
    answer: 'memoryview',
    prompt: 'Memoryview objects allow you to access the internal data of a buffer. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jc7 in this line of code " jc7 = 7 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers without decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jd7 in this line of code " jd7 = "apple" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is je7 in this line of code " je7 = 5.5 "?',
    answer: 'float',
    prompt: 'Floats represent decimal numbers. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jf7 in this line of code " jf7 = { 10, 20 } "?',
    answer: 'set',
    prompt: 'Sets are unordered collections of unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jg7 in this line of code " jg7 = [ 1, 2, 3 ] "?',
    answer: 'list',
    prompt: 'Lists can store elements of different data types and can be modified. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jh7 in this line of code " jh7 = ( "x", "y", "z" ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable and can contain elements of any data type. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ji7 in this line of code " ji7 = { 1: "one", 2: "two" } "?',
    answer: 'dict',
    prompt: 'Dictionaries store data as key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jj7 in this line of code " jj7 = 8 + 9j "?',
    answer: 'complex',
    prompt: 'Complex numbers are represented by a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jk7 in this line of code " jk7 = [ "apple", 2, 3.5 ] "?',
    answer: 'list',
    prompt: 'Lists can store different types of data, including strings, numbers, and more. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jl7 in this line of code " jl7 = ( "John", 25, True ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable collections that can hold multiple data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jm7 in this line of code " jm7 = { 1, 2, 3 } "?',
    answer: 'set',
    prompt: 'Sets store unique values and do not allow duplicates. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jn7 in this line of code " jn7 = frozenset({1, 2, 3}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable versions of sets. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jo7 in this line of code " jo7 = True "?',
    answer: 'bool',
    prompt: 'Booleans are used to store either True or False values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jp7 in this line of code " jp7 = b"Python" "?',
    answer: 'bytes',
    prompt: 'Bytes represent immutable sequences of byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jq7 in this line of code " jq7 = bytearray(3) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jr7 in this line of code " jr7 = memoryview(b"Hello") "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow access to the internal data of a buffer. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is js7 in this line of code " js7 = 15 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers without decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jt7 in this line of code " jt7 = "apple" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ju7 in this line of code " ju7 = 10.5 "?',
    answer: 'float',
    prompt: 'Floats represent numbers with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jv7 in this line of code " jv7 = {10, 20, 30} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections with unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jw7 in this line of code " jw7 = ["apple", "banana"] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can store multiple data types. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jx7 in this line of code " jx7 = ( 3, 5, 7 ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences of values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jy7 in this line of code " jy7 = { "name": "Alice", "age": 30 } "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is jz7 in this line of code " jz7 = 3 + 4j "?',
    answer: 'complex',
    prompt: 'Complex numbers are made up of a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ka7 in this line of code " ka7 = [ "dog", "cat" ] "?',
    answer: 'list',
    prompt: 'Lists can hold elements of different types and are mutable. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kb7 in this line of code " kb7 = ("apple", 1, True) "?',
    answer: 'tuple',
    prompt: 'Tuples are ordered, immutable collections of values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kc7 in this line of code " kc7 = { "a", "b", "c" } "?',
    answer: 'set',
    prompt: 'Sets store unique, unordered values. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kd7 in this line of code " kd7 = frozenset({1, 2, 3}) "?',
    answer: 'frozenset',
    prompt: 'Frozensets are immutable sets. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ke7 in this line of code " ke7 = 2.718 "?',
    answer: 'float',
    prompt: 'Floats represent numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kf7 in this line of code " kf7 = {"apple", "banana"} "?',
    answer: 'set',
    prompt: 'Sets are unordered collections with unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kg7 in this line of code " kg7 = ( 1, "a", True ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable collections of ordered elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kh7 in this line of code " kh7 = { "name": "Bob", "age": 25 } "?',
    answer: 'dict',
    prompt: 'Dictionaries store data as key-value pairs. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ki7 in this line of code " ki7 = 1 + 5j "?',
    answer: 'complex',
    prompt: 'Complex numbers consist of a real and imaginary part. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kj7 in this line of code " kj7 = 100 "?',
    answer: 'int',
    prompt: 'Integers are whole numbers without decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kk7 in this line of code " kk7 = 2.5 "?',
    answer: 'float',
    prompt: 'Floats represent numbers with decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kl7 in this line of code " kl7 = "Good morning" "?',
    answer: 'str',
    prompt: 'Strings are sequences of characters, such as text. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is km7 in this line of code " km7 = b"Python is fun" "?',
    answer: 'bytes',
    prompt: 'Bytes represent immutable sequences of byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kn7 in this line of code " kn7 = bytearray(4) "?',
    answer: 'bytearray',
    prompt: 'Bytearrays are mutable sequences of byte data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ko7 in this line of code " ko7 = memoryview(bytes(5)) "?',
    answer: 'memoryview',
    prompt: 'Memoryviews allow access to the internal data of a buffer. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kp7 in this line of code " kp7 = [ "dog", "cat", 5 ] "?',
    answer: 'list',
    prompt: 'Lists are ordered collections that can store different types of elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kq7 in this line of code " kq7 = { "apple", "banana" } "?',
    answer: 'set',
    prompt: 'Sets are unordered collections that contain unique elements. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kr7 in this line of code " kr7 = {"name": "Alice", "age": 30} "?',
    answer: 'dict',
    prompt: 'Dictionaries store data in key-value pairs, like a real-world dictionary. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ks7 in this line of code " ks7 = ( "a", "b", "c" ) "?',
    answer: 'tuple',
    prompt: 'Tuples are immutable sequences of data. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kt7 in this line of code " kt7 = 100 + 3.5 "?',
    answer: 'float',
    prompt: 'Floats are numbers with a decimal point. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is ku7 in this line of code " ku7 = 1j "?',
    answer: 'complex',
    prompt: 'Complex numbers include both real and imaginary parts. You may visit the learning material to review.'
    },
    {
    category: 'Declaration',
    question: 'What type of data is kv7 in this line of code " kv7 = {"apple", "orange", "banana"} "?',
    answer: 'set',
    prompt: 'Sets only store unique items and are unordered. You may visit the learning material to review.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023c in this line of code "u023c = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023d in this line of code "u023d = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023e in this line of code "u023e = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023f in this line of code "u023f = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0240 in this line of code "u0240 = (1+2q)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0241 in this line of code "u0241 = 542.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0242 in this line of code "u0242 = 760" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0243 in this line of code "u0243 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0244 in this line of code "u0244 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0245 in this line of code "u0245 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0246 in this line of code "u0246 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0247 in this line of code "u0247 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0248 in this line of code "u0248 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0249 in this line of code "u0249 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024a in this line of code "u024a = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024b in this line of code "u024b = 970.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024c in this line of code "u024c = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024d in this line of code "u 024d = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024e in this line of code "u024e = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u024f in this line of code "u024f = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0250 in this line of code "u0250 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0251 in this line of code "u0251 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0252 in this line of code "u0252 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0253 in this line of code "u0253 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0254 in this line of code "u0254 = (1+2w)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021c in this line of code "u021c = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021d in this line of code "u021d = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021e in this line of code "u021e = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021f in this line of code "u021f = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0220 in this line of code "u0220 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0221 in this line of code "u0221 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0222 in this line of code "u0222 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0223 in this line of code "u0223 = 460.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0224 in this line of code "u0224 = 60" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0225 in this line of code "u0225 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0226 in this line of code "u0226 = banana" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0227 in this line of code "u0227 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0228 in this line of code "u0228 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0229 in this line of code "u0229 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022a in this line of code "u022a = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022b in this line of code "u022b = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022c in this line of code "u022c = (1+2e)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022d in this line of code " u022d = 654.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022e in this line of code "u022e = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u022f in this line of code "u022f = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0230 in this line of code "u0230 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0231 in this line of code "u0231 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0232 in this line of code "u0232 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0233 in this line of code "u0233 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0234 in this line of code "u0234 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0235 in this line of code "u0235 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0236 in this line of code "u0236 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0237 in this line of code "u0237 = 630.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0238 in this line of code "u0238 = 5290" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0239 in this line of code "u0239 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023a in this line of code "u023a = apple" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u023b in this line of code "u023b = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01fa in this line of code "u01fa = (1+2r)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01fb in this line of code "u01fb = 20.539" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01fc in this line of code "u01fc = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01fd in this line of code "u01fd = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01fe in this line of code "u01fe = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ff in this line of code "u01ff = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0200 in this line of code "u0200 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0201 in this line of code "u0201 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0202 in this line of code "u0202 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0203 in this line of code "u0203 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0204 in this line of code "u0204 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0205 in this line of code "u0205 = 1.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0206 in this line of code "u0206 = 890" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0207 in this line of code "u0207 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0208 in this line of code "u0208 = grapes" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0209 in this line of code "u0209 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020a in this line of code "u020a = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020b in this line of code "u020b = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020c in this line of code "u020c = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020d in this line of code "u020d = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020e in this line of code "u020e = (1+2t)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u020f in this line of code "u020f = 2538.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0210 in this line of code "u0210 = 20" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0211 in this line of code "u0211 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0212 in this line of code "u0212 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0213 in this line of code "u0213 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0214 in this line of code "u0214 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0215 in this line of code "u0215 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0216 in this line of code "u0216 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0217 in this line of code "u0217 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0218 in this line of code "u0218 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0219 in this line of code "u0219 = 973.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021a in this line of code "u021a = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u021b in this line of code "u021b = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d6 in this line of code "u01d6 = cellphone" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d7 in this line of code "u01d7 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d8 in this line of code "u01d8 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d9 in this line of code "u01d9 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01da in this line of code "u01da = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01db in this line of code "u01db = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01dc in this line of code "u01dc = (1+2y)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01dd in this line of code "u01dd = 9640.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01de in this line of code "u01de = 30" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01df in this line of code "u01df = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e0 in this line of code "u01e0 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e1 in this line of code "u01e1 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e2 in this line of code "u01e2 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e3 in this line of code "u01e3 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e4 in this line of code "u01e4 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e5 in this line of code "u01e5 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e6 in this line of code "u01e6 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category : 'Declaration',
        question: 'What type of data is u01e7 in this line of code "u01e7 = 2590.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e8 in this line of code "u01e8 = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01e9 in this line of code "u01e9 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ea in this line of code "u01ea = notebook" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01eb in this line of code "u01eb = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ec in this line of code "u01ec = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ed in this line of code "u01ed = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ee in this line of code "u01ee = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ef in this line of code "u01ef = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f0 in this line of code "u01f0 = (1+2u)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f1 in this line of code "u01f1 = 25.85" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f2 in this line of code "u01f2 = 40" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f3 in this line of code "u01f3 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f4 in this line of code "u01f4 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f5 in this line of code "u01f5 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f6 in this line of code "u01f6 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f7 in this line of code "u01f7 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f8 in this line of code "u01f8 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01f9 in this line of code "u01f9 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b3 in this line of code "u01b3 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b4 in this line of code "u01b4 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b5 in this line of code "u01b5 = 426.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b6 in this line of code "u01b6 = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b7 in this line of code "u01b7 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b8 in this line of code "u01b8 = laptop" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b9 in this line of code "u01b9 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ba in this line of code "u01ba = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01bb in this line of code "u01bb = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01bc in this line of code "u01bc = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01bd in this line of code "u01bd = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01be in this line of code "u01be = (1+2i)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01bf in this line of code "u01bf = 39.4" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c0 in this line of code "u01c0 = 50" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c1 in this line of code "u01c1 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c2 in this line of code "u01c2 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c3 in this line of code "u01c3 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c4 in this line of code "u01c4 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c5 in this line of code "u01c5 = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c6 in this line of code "u01c6 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c7 in this line of code "u01c7 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c8 in this line of code "u01c8 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01c9 in this line of code "u01c9 = 5490.87" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ca in this line of code "u01ca = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01cb in this line of code "u01cb = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01cc in this line of code "u01cc = lollipop" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01cd in this line of code "u01cd = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ce in this line of code "u01ce = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01cf in this line of code "u01cf = {"key": "value"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d0 in this line of code "u01d0 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d1 in this line of code "u01d1 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d2 in this line of code "u01d2 = (1+2o)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d3 in this line of code "u01d3 = 225.65" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d4 in this line of code "u01d4 = 60" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01d5 in this line of code "u01d5 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0191 in this line of code "u0191 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0192 in this line of code "u0192 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0193 in this line of code "u0193 = {1: "chocolate"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0194 in this line of code "u0194 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0195 in this line of code "u0195 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0196 in this line of code "u0196 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0197 in this line of code "u0197 = 25.76" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0198 in this line of code "u0198 = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0199 in this line of code "u0199 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019a in this line of code "u019a = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019b in this line of code "u019b = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019c in this line of code "u019c = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019d in this line of code "u019d = {1: "candy"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019e in this line of code "u019e = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u019f in this line of code "u019f = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a0 in this line of code "u01a0 = (1+2p)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a1 in this line of code "u01a1 = 20.79" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a2 in this line of code "u01a2 = 70" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a3 in this line of code "u01a3 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a4 in this line of code "u01a4 = folder" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a5 in this line of code "u01a5 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a6 in this line of code "u01a6 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a7 in this line of code "u01a7 = {1: "keyboard"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a8 in this line of code "u01a8 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01a9 in this line of code "u01a9 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01aa in this line of code "u01aa = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ab in this line of code "u01ab = 770.88" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ac in this line of code "u01ac = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ad in this line of code "u01ad = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01ae in this line of code "u01ae = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01af in this line of code "u01af = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b0 in this line of code "u01b0 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b1 in this line of code "u01b1 = {1: "computer"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u01b2 in this line of code "u01b2 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0170 in this line of code "u0170 = 80" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0171 in this line of code "u0171 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0172 in this line of code "u0172 = mouse" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0173 in this line of code "u0173 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0174 in this line of code "u0174 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0175 in this line of code "u0175 = {1: "bag"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0176 in this line of code "u0176 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0177 in this line of code "u0177 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0178 in this line of code "u0178 = (1+2a)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0179 in this line of code "u0179 = 640.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017a in this line of code "u017a = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017b in this line of code "u017b = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017c in this line of code "u017c = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017d in this line of code "u017d = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017e in this line of code "u017e = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u017f in this line of code "u017f = {"Name": "John"}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0180 in this line of code "u0180 = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0181 in this line of code "u018 1 = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0182 in this line of code "u0182 = (1+2j)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0183 in this line of code "u0183 = 980.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0184 in this line of code "u0184 = 90" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0185 in this line of code "u0185 = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0186 in this line of code "u0186 = strawberry" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0187 in this line of code "u0187 = [1, 2, 3]" .',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0188 in this line of code "u0188 = (1, 2)" .',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0189 in this line of code "u0189 = {"Age": 21}" .',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018a in this line of code "u018a = {1, 2, 3}" .',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018b in this line of code "u018b = None" .',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018c in this line of code "u018c = (1+2s)" .',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018d in this line of code "u018d = 670.5" .',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018e in this line of code "u018e = 10" .',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u018f in this line of code "u018f = True" .',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0190 in this line of code "u0190 = hello" .',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013c in this line of code "u013c = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013d in this line of code "u013d = 540.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013e in this line of code "u013e = 110"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013f in this line of code "u013f = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0140 in this line of code "u0140 = avocado"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0141 in this line of code "u0141 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0142 in this line of code "u0142 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0143 in this line of code "u0143 = {"Id": 28}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0144 in this line of code "u0144 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0145 in this line of code "u0145 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0146 in this line of code "u0146 = (1+2d)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0147 in this line of code "u0147 = 150.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0148 in this line of code "u0148 = 10"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0149 in this line of code "u0149 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014a in this line of code "u014a = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014b in this line of code "u014b = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014c in this line of code "u014c = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014d in this line of code " u014d = {"Name": "Mark"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014e in this line of code "u014e = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u014f in this line of code "u014f = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0150 in this line of code "u0150 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0151 in this line of code "u0151 = 70.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0152 in this line of code "u0152 = 120"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0153 in this line of code "u0153 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0154 in this line of code "u0154 = green"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0155 in this line of code "u0155 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0156 in this line of code "u0156 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0157 in this line of code "u0157 = {"Age": "34"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0158 in this line of code "u0158 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0159 in this line of code "u0159 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u015a in this line of code "u015a = (1+2f)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u015b in this line of code "u015b = 38.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u015c in this line of code "u015c = 10"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u015d in this line of code "u015d = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u015e in this line of code "u015e = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'u015f in this line of code "u015f = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0160 in this line of code "u0160 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0161 in this line of code "u0161 = {1: "cat"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0162 in this line of code "u0162 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0163 in this line of code "u0163 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0164 in this line of code "u0164 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0165 in this line of code "u0165 = 330.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0166 in this line of code "u0166 = 130"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0167 in this line of code "u0167 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0168 in this line of code "u0168 = red"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0169 in this line of code "u0169 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016a in this line of code "u016a = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016b in this line of code "u016b = {1: "dog"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016c in this line of code "u016c = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016d in this line of code "u016d = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016e in this line of code "u016e = (1+2g)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u016f in this line of code "u016f = 60.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010a in this line of code: "u010a = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010b in this line of code: "u010b = 99.9"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010c in this line of code: "u010c = 140"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010d in this line of code: "u010d = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010e in this line of code: "u010e = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u010f in this line of code: "u010f = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0110 in this line of code: "u0110 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0111 in this line of code: "u0111 = {1: "ballpen"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0112 in this line of code: "u0112 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0113 in this line of code: "u0113 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0114 in this line of code: "u0114 = (1+2h)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0115 in this line of code: "u0115 = 790.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0116 in this line of code: "u0116 = 150"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0117 in this line of code: "u0117 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0118 in this line of code: "u0118 = orange"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0119 in this line of code: "u0119 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011a in this line of code: "u011a = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011b in this line of code: "u011b = {1: "TV"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011c in this line of code: "u011c = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011d in this line of code: "u011d = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011e in this line of code: "u011e = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u011f in this line of code: "u011f = 100.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0120 in this line of code: "u0120 = 150"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0121 in this line of code: "u0121 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0122 in this line of code: "u0122 = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0123 in this line of code: "u0123 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0124 in this line of code: "u0124 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0125 in this line of code: "u0125 = {"Age": 33}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0126 in this line of code: "u0126 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0127 in this line of code: "u0127 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0128 in this line of code: "u0128 = (1+2k)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0129 in this line of code: "u0129 = 980.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012a in this line of code: "u012a = 10"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012b in this line of code: "u012b = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values .'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012c in this line of code: "u012c = yellow"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012d in this line of code: "u012d = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012e in this line of code: "u012e = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u012f in this line of code: "u012f = {1: "laptop"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0130 in this line of code: "u0130 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0131 in this line of code: "u0131 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0132 in this line of code: "u0132 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0133 in this line of code: "u0133 = 340.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0134 in this line of code: "u0134 = 160"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0135 in this line of code: "u0135 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0136 in this line of code: "u0136 = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0137 in this line of code: "u0137 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0138 in this line of code: "u0138 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0139 in this line of code: "u0139 = {1: "hotdog"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013a in this line of code: "u013a = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u013b in this line of code: "u013b = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'In the line of code u00d8 = (1+2z)", what is the data type of u00d8?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is assigned to u00d9 in the statement "u00d9 = 5620.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00da in this line: "u00da = 10".',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00db represent in "u00db = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What kind of data is u00dc in the assignment "u00dc = green"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00dd in this line of code: "u00dd = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'Determine the data type of u00de in "u00de = (1, 2)".',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00df in the expression "u00df = {"Name": "Mayson"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00e0 hold in "u00e0 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00e1 in the line "u00e1 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'Identify the type of data represented by u00e2 in "u00e2 = (1+2j)".',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00e3 in this line of code: "u00e3 = 20.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What data type is assigned to u00e4 in "u00e4 = 170"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00e5 represent in "u00e5 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00e6 in the assignment "u00e6 = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00e7 in the line "u00e7 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00e8 in this code: "u00e8 = (1, 2)".',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00e9 in the line "u00e9 = {1: "Lizard"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00ea represent in "u00ea = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00eb in the line "u00eb = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ec in this line of code: "u00ec = (1+2x)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ed in this line of code: "u00ed = 420.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ee in this line of code: "u00ee = 10"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ef in this line of code: "u00ef = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f0 in this line of code: "u00f0 = blue"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f1 in this line of code: "u00f1 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f2 in this line of code: "u00f2 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f3 in this line of code: "u00f3 = {1: "mug"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f4 in this line of code: "u00f4 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f5 in this line of code: "u00f5 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f6 in this line of code: "u00f6 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f7 in this line of code: "u00f7 = 69.69"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f8 in this line of code: "u00f8 = 180"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00f9 in this line of code: "u00f9 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00fa in this line of code: "u00fa = hello "?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00fb in this line of code: "u00fb = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00fc in this line of code: "u00fc = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00fd in this line of code: "u00fd = {"Name": "Laura"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00fe in this line of code: "u00fe = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ff in this line of code: "u00ff = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0100 in this line of code: "u0100 = (1+2c)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0101 in this line of code: "u0101 = 67.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0102 in this line of code: "u0102 = 190"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0103 in this line of code: "u0103 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0104 in this line of code: "u0104 = indigo"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0105 in this line of code: "u0105 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0106 in this line of code: "u0106 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0107 in this line of code: "u0107 = {1: "cabbage"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0108 in this line of code: "u0108 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u0109 in this line of code: "u0109 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'In the line of code "u00a9 = True", what is the data type of u00a9?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00aa represent in the statement "u00aa = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00ab in this line: "u00ab = [1, 2, 3]".',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ac in the assignment "u00ac = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00ad in this code: "u00ad = {1: "ball"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'Determine the data type of u00ae in "u00ae = {1, 2, 3}".',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00af in the expression "u00af = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u00b0 in this line of code: "u00b0 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'In the code "u00b1 = 30.5", what is the data type of u00b1?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What kind of data is represented by u00b2 in "u00b2 = 200"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00b3 hold in "u00b3 = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00b4 in this assignment: "u00b4 = violet".',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00b5 in the line "u00b5 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00b6 in the code "u00b6 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00b7 represent in "u00b7 = {1: "snake"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What is the type of data for u00b8 in "u00b8 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'In the line "u00b9 = None", what is the data type of u00b9?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ba in this code: "u00ba = (1+2v)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u00bb in the line "u00bb = 10.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00bc represent in "u00bc = 210"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00bd in the statement "u00bd = True".',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00be in the line "u00be = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00bf hold in "u00bf = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00c0 in the assignment "u00c0 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00c1 in "u00c1 = {1: "Rice"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00c2 represent in "u00c2 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'In the line "u00c3 = None", what is the data type of u00c3?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00c4 in this code: "u00c4 = (1+2j)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u00c5 in the line "u00c5 = 22.6"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00c6 hold in "u00c6 = 220"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00c7 in the statement "u00c7 = True".',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00c8 in the line "u00c8 = pink"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00c9 represent in "u00c9 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ca in the assignment "u00ca = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00cb in "u00cb = {1: "Lion"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00cc hold in "u00cc = {1, 2, 3}"?',
     answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'In the line "u00cd = None", what is the data type of u00cd?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00ce in this code: "u00ce = (1+2b)"?',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u00cf in the line "u00cf = 27.7"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00d0 represent in "u00d0 = 10"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u00d1 in the statement "u00d1 = True".',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00d2 in the line "u00d2 = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'What data type does u00d3 hold in "u00d3 = [1, 2, 3]"?',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u00d4 in the assignment "u00d4 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00d5 in "u00d5 = {1: "Tiger"}"?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00d6 represent in "u00d6 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'In the line "u00d7 = None", what is the data type of u00d7?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'In the line of code "u0093 = 19.3", what data type is u0093?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'What kind of data is represented by u0094 in "u0094 = 230"?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'Identify the data type of u0095 in this code: "u0095 = True".',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u0096 represent in "u0096 = sun"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'Determine the data type of u0097 in the statement "u0097 = [1, 2, 3]".',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u0098 in the line "u0098 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'In the expression "u0099 = {1: "Crocodile"}", what type of data is u0099?',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u009a hold in "u009a = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u009b in the line "u009b = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'Identify the type of data for u009c in this code: "u009c = (1+2j)".',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u009d in "u009d = 13.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'In the assignment "u009e = 10", what is the data type of u009e?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
        category: 'Declaration',
        question: 'What type of data is u009f in the statement "u009f = True"?',
        answer: 'bool',
        prompt: 'Booleans store True or False values.'
    },
    {
        category: 'Declaration',
        question: 'What kind of data does u00a0 represent in "u00a0 = hello"?',
        answer: 'str',
        prompt: 'Strings store sequences of characters, enclosed in quotes.'
    },
    {
        category: 'Declaration',
        question: 'Determine the data type of u00a1 in "u00a1 = [1, 2, 3]".',
        answer: 'list',
        prompt: 'Lists store ordered collections of items, which can be of mixed types.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00a2 in the code "u00a2 = (1, 2)"?',
        answer: 'tuple',
        prompt: 'Tuples are immutable, ordered collections of items.'
    },
    {
        category: 'Declaration',
        question: 'Identify the type of data for u00a3 in "u00a3 = {1: "Lamb"}".',
        answer: 'dict',
        prompt: 'Dictionaries store key-value pairs.'
    },
    {
        category: 'Declaration',
        question: 'What type of data does u00a4 hold in "u00a4 = {1, 2, 3}"?',
        answer: 'set',
        prompt: 'Sets store unique, unordered items.'
    },
    {
        category: 'Declaration',
        question: 'What is the data type of u00a5 in the line "u00a5 = None"?',
        answer: 'NoneType',
        prompt: 'NoneType represents the absence of a value.'
    },
    {
        category: 'Declaration',
        question: 'Identify the type of data for u00a6 in this code: "u00a6 = (1+2n)".',
        answer: 'complex',
        prompt: 'Complex numbers consist of a real and an imaginary part.'
    },
    {
        category: 'Declaration',
        question: 'What data type is u00a7 in "u00a7 = 56.5"?',
        answer: 'float',
        prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
    },
    {
        category: 'Declaration',
        question: 'In the assignment "u00a8 = 240", what is the data type of u00a8?',
        answer: 'int',
        prompt: 'Integers are whole numbers, both positive and negative.'
    },
    {
            category: 'Declaration',
            question: 'What type of data is a in this line of code " a = 34.5 " .',
            answer: 'float',
            prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is b in this line of code " b = 10 " .',
            answer: 'int',
            prompt: 'Integers are whole numbers, both positive and negative.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is c in this line of code " c = True " .',
            answer: 'bool',
            prompt: 'Booleans store True or False values.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is d in this line of code " d = moon" .',
            answer: 'str',
            prompt: 'Strings store sequences of characters, enclosed in quotes.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is e in this line of code " e = [1, 2, 3] " .',
            answer: 'list',
            prompt: 'Lists store ordered collections of items, which can be of mixed types.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is f in this line of code " f = (1, 2) " .',
            answer: 'tuple',
            prompt: 'Tuples are immutable, ordered collections of items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is g in this line of code " g = {"key": "value"} " .',
            answer: 'dict',
            prompt: 'Dictionaries store key-value pairs.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is h in this line of code " h = {1, 2, 3} " .',
            answer: 'set',
            prompt: 'Sets store unique, unordered items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is i in this line of code " i = None " .',
            answer: 'NoneType',
            prompt: 'NoneType represents the absence of a value.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is j in this line of code " j = (1+2j) " .',
            answer: 'complex',
            prompt: 'Complex numbers consist of a real and an imaginary part.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is k in this line of code " k = 2040.5 " .',
            answer: 'float',
            prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is l in this line of code " l = 250 " .',
            answer: 'int',
            prompt: 'Integers are whole numbers, both positive and negative.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is m in this line of code " m = True " .',
            answer: 'bool',
            prompt: 'Booleans store True or False values.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is n in this line of code " n = hello " .',
            answer: 'str',
            prompt: 'Strings store sequences of characters, enclosed in quotes.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is o in this line of code " o = [1, 2, 3] " .',
            answer: 'list',
            prompt: 'Lists store ordered collections of items, which can be of mixed types.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is p in this line of code " p = (1, 2) " .',
            answer: 'tuple',
            prompt: 'Tuples are immutable, ordered collections of items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is q in this line of code " q = {"key": "value"} " .',
            answer: 'dict',
            prompt: 'Dictionaries store key-value pairs.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is r in this line of code " r = {1, 2, 3} " .',
            answer: 'set',
            prompt: 'Sets store unique, unordered items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is s in this line of code " s = None " .',
            answer: 'NoneType',
            prompt: 'NoneType represents the absence of a value.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is t in this line of code " t = (1+2m) " .',
            answer: 'complex',
            prompt: 'Complex numbers consist of a real and an imaginary part.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u in this line of code " u = 34.5 " .',
            answer: 'float',
            prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is v in this line of code " v = 10 " .',
            answer: 'int',
            prompt: 'Integers are whole numbers, both positive and negative.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is w in this line of code " w = True " .',
            answer: 'bool',
            prompt: 'Booleans store True or False values.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is x in this line of code " x = star" .',
            answer: 'str',
            prompt: 'Strings store sequences of characters, enclosed in quotes.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is y in this line of code " y = [1, 2, 3] " .',
            answer: 'list',
            prompt: 'Lists store ordered collections of items, which can be of mixed types.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is z in this line of code " z = (1, 2) " .',
            answer: 'tuple',
            prompt: 'Tuples are immutable, ordered collections of items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is { in this line of code " { = {"key": "value"} " .',
            answer: 'dict',
            prompt: 'Dictionaries store key-value pairs.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is | in this line of code " | = {1, 2, 3} " .',
            answer: 'set',
            prompt: 'Sets store unique, unordered items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is } in this line of code " } = None " .',
            answer: 'NoneType',
            prompt: 'NoneType represents the absence of a value.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is ~ in this line of code " ~ = (1+2j) " .',
            answer: 'complex',
            prompt: 'Complex numbers consist of a real and an imaginary part.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u007f in this line of code "u007f = 20.5 " .',
            answer: 'float',
            prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0080 in this line of code "u0080 = 260 " .',
            answer: 'int',
            prompt: 'Integers are whole numbers, both positive and negative.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0081 in this line of code "u0081 = True " .',
            answer: 'bool',
            prompt: 'Booleans store True or False values.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0082 in this line of code "u0082 = hello " .',
            answer: 'str',
            prompt: 'Strings store sequences of characters, enclosed in quotes.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0083 in this line of code "u0083 = [1, 2, 3] " .',
            answer: 'list',
            prompt: 'Lists store ordered collections of items, which can be of mixed types.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0084 in this line of code "u0084 = (1, 2) " .',
            answer: 'tuple',
            prompt: 'Tuples are immutable, ordered collections of items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0085 in this line of code "u0085 = {"key": "value"} " .',
            answer: 'dict',
            prompt: 'Dictionaries store key-value pairs.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0086 in this line of code "u0086 = {1, 2, 3} " .',
            answer: 'set',
            prompt: 'Sets store unique, unordered items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0087 in this line of code "u0087 = None " .',
            answer: 'NoneType',
            prompt: 'NoneType represents the absence of a value.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0088 in this line of code "u0088 = (1+2l) " .',
            answer: 'complex',
            prompt: 'Complex numbers consist of a real and an imaginary part.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0089 in this line of code "u0089 = 55.5 " .',
            answer: 'float',
            prompt: 'Floats are used to store positive and negative numbers with a decimal point.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008a in this line of code "u008a = 10 " .',
            answer: 'int',
            prompt: 'Integers are whole numbers, both positive and negative.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008b in this line of code "u008b = True " .',
            answer: 'bool',
            prompt: 'Booleans store True or False values.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008c in this line of code "u008c = jupiter" .',
            answer: 'str',
            prompt: 'Strings store sequences of characters, enclosed in quotes.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008d in this line of code "u008d = [1, 2, 3] " .',
            answer: 'list',
            prompt: 'Lists store ordered collections of items, which can be of mixed types.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008e in this line of code "u008e = (1, 2) " .',
            answer: 'tuple',
            prompt: 'Tuples are immutable, ordered collections of items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u008f in this line of code "u008f = {"key": "value"} " .',
            answer: 'dict',
            prompt: 'Dictionaries store key-value pairs.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0090 in this line of code "u0090 = {1, 2, 3} " .',
            answer: 'set',
            prompt: 'Sets store unique, unordered items.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0091 in this line of code "u0091 = None " .',
            answer: 'NoneType',
            prompt: 'NoneType represents the absence of a value.'
        },
        {
            category: 'Declaration',
            question: 'What type of data is u0092 in this line of code "u0092 = (1+2j) " .',
            answer: 'complex',
            prompt: 'Complex numbers consist of a real and an imaginary part.'
        },
    {
    category: 'Assigning',
    question: 'Assign the string "Machine Learning" to a variable named ml_topic.' ,
    answer: 'ml_topic = "Machine Learning"',
    prompt: 'Strings can be used to represent important topics, like Machine Learning. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 60 to a variable named study_hours.' ,
    answer: 'study_hours = 60',
    prompt: 'Integers can represent quantities, such as the number of hours spent studying. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"color": "blue", "size": "medium"} to a variable named shirt_details.' ,
    answer: 'shirt_details = {"color": "blue", "size": "medium"}',
    prompt: 'Dictionaries can store attributes of items, like the color and size of a shirt. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["mercury", "venus", "earth"] to a variable named planets.' ,
    answer: 'planets = ["mercury", "venus", "earth"]',
    prompt: 'Lists can hold collections of related items, such as the names of planets. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14159 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14159',
    prompt: 'Floats are useful for representing values like the mathematical constant pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (8, 15, 22) to a variable named ages_in_group.' ,
    answer: 'ages_in_group = (8, 15, 22)',
    prompt: 'Tuples can be used to store fixed sets of values, such as ages in a group. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 365 to a variable named days_in_year.' ,
    answer: 'days_in_year = 365',
    prompt: 'Integers are commonly used to represent the number of days in a year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "JavaScript" to a variable named web_language.' ,
    answer: 'web_language = "JavaScript"',
    prompt: 'Strings can represent programming languages, such as JavaScript. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "hamster"] to a variable named pet_family.' ,
    answer: 'pet_family = ["dog", "cat", "hamster"]',
    prompt: 'Lists are useful for grouping items, like types of pets in a family. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 18.25 to a variable named student_height.' ,
    answer: 'student_height = 18.25',
    prompt: 'Floats are often used to store measurements, such as a student’s height. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"product": "laptop", "price": 1200} to a variable named product_info.' ,
    answer: 'product_info = {"product": "laptop", "price": 1200}',
    prompt: 'Dictionaries are great for storing key-value pairs like product names and prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1000 to a variable named target_score.' ,
    answer: 'target_score = 1000',
    prompt: 'Integers can represent a desired score or goal. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Python" to a variable named favorite_language.' ,
    answer: 'favorite_language = "Python"',
    prompt: 'Strings can be used to represent your favorite programming language, such as Python. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3, 4) to a variable named counting_numbers.' ,
    answer: 'counting_numbers = (1, 2, 3, 4)',
    prompt: 'Tuples are helpful for representing ordered collections, such as counting numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 4, 6, 8] to a variable named even_numbers.' ,
    answer: 'even_numbers = [2, 4, 6, 8]',
    prompt: 'Lists can store even numbers or other ordered collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.81 to a variable named gravity.' ,
    answer: 'gravity = 9.81',
    prompt: 'Floats are commonly used for physical constants, like the acceleration due to gravity. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"season": "winter", "temperature": -5} to a variable named weather_info.' ,
    answer: 'weather_info = {"season": "winter", "temperature": -5}',
    prompt: 'Dictionaries are useful for storing weather data, such as season and temperature. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named total_pages.' ,
    answer: 'total_pages = 50',
    prompt: 'Integers can represent the total number of pages in a document or book. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors.' ,
    answer: 'colors = ["red", "green", "blue"]',
    prompt: 'Lists can hold a collection of colors, like primary colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "5G" to a variable named network_type.' ,
    answer: 'network_type = "5G"',
    prompt: 'Strings can represent technologies, such as network types like 5G. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 30 to a variable named max_tries.' ,
    answer: 'max_tries = 30',
    prompt: 'Integers are often used to represent limits, such as the maximum number of attempts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.15 to a variable named discount_rate.' ,
    answer: 'discount_rate = 0.15',
    prompt: 'Floats are useful for storing percentages or rates, such as discount rates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "1234" to a variable named password.' ,
    answer: 'password = "1234"',
    prompt: 'Strings can be used to store text-based values, like passwords. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15, 20] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15, 20]',
    prompt: 'Lists are ideal for storing sets of related values, like multiples of five. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("apple", "banana", "cherry") to a variable named fruits.' ,
    answer: 'fruits = ("apple", "banana", "cherry")',
    prompt: 'Tuples are useful for storing fixed collections of items, such as types of fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "John", "age": 30} to a variable named person_info.' ,
    answer: 'person_info = {"name": "John", "age": 30}',
    prompt: 'Dictionaries store key-value pairs, such as a person’s name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "openai" to a variable named company_name.' ,
    answer: 'company_name = "openai"',
    prompt: 'Strings can represent the names of organizations or companies. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 10 to a variable named max_items_in_cart.' ,
    answer: 'max_items_in_cart = 10',
    prompt: 'Integers are useful for tracking quantities, such as the maximum items in a shopping cart. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 7.5 to a variable named temperature.' ,
    answer: 'temperature = 7.5',
    prompt: 'Floats can represent decimal values, such as temperature readings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (12, 24, 36) to a variable named multiples_of_twelve.' ,
    answer: 'multiples_of_twelve = (12, 24, 36)',
    prompt: 'Tuples are useful for storing ordered sequences, such as multiples of a number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [0, 1, 2, 3, 4] to a variable named first_five_numbers.' ,
    answer: 'first_five_numbers = [0, 1, 2, 3, 4]',
    prompt: 'Lists are excellent for storing ordered collections, such as the first five numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 42 to a variable named answer_to_life.' ,
    answer: 'answer_to_life = 42',
    prompt: 'Integers can be used to store famous or symbolic numbers, such as the answer to life. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "hello" to a variable named greeting_message.' ,
    answer: 'greeting_message = "hello"',
    prompt: 'Strings are often used to represent messages, such as greetings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"city": "Paris", "country": "France"} to a variable named location_info.' ,
    answer: 'location_info = {"city": "Paris", "country": "France"}',
    prompt: 'Dictionaries are great for storing location-related information, like a city and country. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named score.' ,
    answer: 'score = 100',
    prompt: 'Integers are often used for tracking points or scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "red" to a variable named color_choice.' ,
    answer: 'color_choice = "red"',
    prompt: 'Strings can represent colors, like red. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 99.9 to a variable named humidity_percentage.' ,
    answer: 'humidity_percentage = 99.9',
    prompt: 'Floats are perfect for representing measurements, such as humidity percentages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("dog", "cat", "bird") to a variable named pets.' ,
    answer: 'pets = ("dog", "cat", "bird")',
    prompt: 'Tuples can be used to represent collections of items, like pets. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["Python", "Java", "C++"] to a variable named languages_list.' ,
    answer: 'languages_list = ["Python", "Java", "C++"]',
    prompt: 'Lists are useful for grouping similar items, such as programming languages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "apple pie" to a variable named favorite_dessert.' ,
    answer: 'favorite_dessert = "apple pie"',
    prompt: 'Strings are used to store text-based information, such as names of desserts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 5 to a variable named number_of_teams.' ,
    answer: 'number_of_teams = 5',
    prompt: 'Integers are perfect for counting quantities, like the number of teams. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 15.75 to a variable named price_per_item.' ,
    answer: 'price_per_item = 15.75',
    prompt: 'Floats are often used to represent values with decimal points, such as prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named first_five_numbers.' ,
    answer: 'first_five_numbers = [1, 2, 3, 4, 5]',
    prompt: 'Lists are used to store ordered collections of elements, such as numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Jane", "age": 28} to a variable named profile_info.' ,
    answer: 'profile_info = {"name": "Jane", "age": 28}',
    prompt: 'Dictionaries are used to store key-value pairs, such as profile details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "goodbye" to a variable named farewell_message.' ,
    answer: 'farewell_message = "goodbye"',
    prompt: 'Strings can represent different types of messages, such as farewells. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 12 to a variable named hour_of_day.' ,
    answer: 'hour_of_day = 12',
    prompt: 'Integers are used to represent whole numbers, such as the hour of the day. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 23.4 to a variable named distance_in_km.' ,
    answer: 'distance_in_km = 23.4',
    prompt: 'Floats are commonly used for measurements with decimals, such as distances. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 3, 5, 7) to a variable named odd_numbers.' ,
    answer: 'odd_numbers = (1, 3, 5, 7)',
    prompt: 'Tuples are often used to store ordered collections, like odd numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "user123" to a variable named username.' ,
    answer: 'username = "user123"',
    prompt: 'Strings are often used to store identifiers, such as usernames. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 200 to a variable named max_score.' ,
    answer: 'max_score = 200',
    prompt: 'Integers can be used to store numerical limits, such as the maximum score. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.99 to a variable named discount_percentage.' ,
    answer: 'discount_percentage = 0.99',
    prompt: 'Floats are great for representing percentages, like a discount rate. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "blue", "green"] to a variable named color_palette.' ,
    answer: 'color_palette = ["red", "blue", "green"]',
    prompt: 'Lists are used to group related elements, such as color options. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (10, 20, 30, 40) to a variable named multiples_of_ten.' ,
    answer: 'multiples_of_ten = (10, 20, 30, 40)',
    prompt: 'Tuples are useful for storing ordered sequences, such as multiples of ten. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"id": 1, "name": "Alice"} to a variable named employee_info.' ,
    answer: 'employee_info = {"id": 1, "name": "Alice"}',
    prompt: 'Dictionaries are helpful for storing data with labels, like employee information. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named task_status.' ,
    answer: 'task_status = "completed"',
    prompt: 'Strings can represent states or statuses, such as task completion. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 0 to a variable named attempt_count.' ,
    answer: 'attempt_count = 0',
    prompt: 'Integers are often used to track counts or attempts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 8.2 to a variable named average_score.' ,
    answer: 'average_score = 8.2',
    prompt: 'Floats can be used to store numerical averages, like average scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "rabbit"] to a variable named pet_names.' ,
    answer: 'pet_names = ["dog", "cat", "rabbit"]',
    prompt: 'Lists are ideal for storing collections of items, such as pet names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (100, 200, 300) to a variable named three_hundred_values.' ,
    answer: 'three_hundred_values = (100, 200, 300)',
    prompt: 'Tuples store ordered data, such as a set of numeric values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 60 to a variable named time_limit.' ,
    answer: 'time_limit = 60',
    prompt: 'Integers are useful for time-related values, such as time limits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "thank you" to a variable named appreciation_message.' ,
    answer: 'appreciation_message = "thank you"',
    prompt: 'Strings are great for storing messages, like expressions of gratitude. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14',
    prompt: 'Floats are often used to store numerical constants, such as the value of pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [3, 6, 9, 12] to a variable named multiples_of_three.' ,
    answer: 'multiples_of_three = [3, 6, 9, 12]',
    prompt: 'Lists are perfect for storing sequences of numbers, such as multiples of three. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"title": "Inception", "director": "Nolan"} to a variable named movie_info.' ,
    answer: 'movie_info = {"title": "Inception", "director": "Nolan"}',
    prompt: 'Dictionaries are helpful for storing attributes, such as movie details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 4, 7) to a variable named odd_numbers_set.' ,
    answer: 'odd_numbers_set = (1, 4, 7)',
    prompt: 'Tuples can store ordered elements, like a set of odd numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 150 to a variable named goal_points.' ,
    answer: 'goal_points = 150',
    prompt: 'Integers are often used to represent target values, such as goal points. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "blue" to a variable named favorite_color.' ,
    answer: 'favorite_color = "blue"',
    prompt: 'Strings can represent color preferences, such as a favorite color. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 12.5 to a variable named payment_amount.' ,
    answer: 'payment_amount = 12.5',
    prompt: 'Floats are ideal for monetary values, like payment amounts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["A", "B", "C", "D"] to a variable named grade_list.' ,
    answer: 'grade_list = ["A", "B", "C", "D"]',
    prompt: 'Lists are commonly used to store items like grades. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (2, 4, 6) to a variable named even_numbers_set.' ,
    answer: 'even_numbers_set = (2, 4, 6)',
    prompt: 'Tuples are useful for grouping related values, such as even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 10 to a variable named max_retries.' ,
    answer: 'max_retries = 10',
    prompt: 'Integers are commonly used for retry limits or counts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "New York" to a variable named city_name.' ,
    answer: 'city_name = "New York"',
    prompt: 'Strings are perfect for storing location names, such as a city. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.81 to a variable named gravity_constant.' ,
    answer: 'gravity_constant = 9.81',
    prompt: 'Floats can represent scientific constants, like the acceleration due to gravity. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "john_doe", "password": "password123"} to a variable named user_credentials.' ,
    answer: 'user_credentials = {"username": "john_doe", "password": "password123"}',
    prompt: 'Dictionaries are useful for storing key-value pairs, such as user credentials. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "universe" to a variable named subject.' ,
    answer: 'subject = "universe"',
    prompt: 'Strings can represent a topic or subject, such as the universe. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1000 to a variable named total_sales.' ,
    answer: 'total_sales = 1000',
    prompt: 'Integers are used to track totals, like total sales. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 45.67 to a variable named height_in_meters.' ,
    answer: 'height_in_meters = 45.67',
    prompt: 'Floats are often used to represent measurements, such as height. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruits.' ,
    answer: 'fruits = ["apple", "banana", "cherry"]',
    prompt: 'Lists can store multiple items, such as a list of fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"year": 2024, "month": "November"} to a variable named current_date.' ,
    answer: 'current_date = {"year": 2024, "month": "November"}',
    prompt: 'Dictionaries are ideal for storing multiple related pieces of information, such as dates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "hello world" to a variable named greeting.' ,
    answer: 'greeting = "hello world"',
    prompt: 'Strings are perfect for storing text-based information, such as greetings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 75 to a variable named score.' ,
    answer: 'score = 75',
    prompt: 'Integers are commonly used to represent scores or points. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 99.99 to a variable named price.' ,
    answer: 'price = 99.99',
    prompt: 'Floats are ideal for representing prices and other decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (10, 20, 30, 40, 50) to a variable named multiples_of_ten.' ,
    answer: 'multiples_of_ten = (10, 20, 30, 40, 50)',
    prompt: 'Tuples can store ordered sets of values, like multiples of ten. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "London" to a variable named capital_city.' ,
    answer: 'capital_city = "London"',
    prompt: 'Strings are used for text, such as names of cities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors.' ,
    answer: 'colors = ["red", "green", "blue"]',
    prompt: 'Lists can hold collections of related items, such as colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 25 to a variable named max_age.' ,
    answer: 'max_age = 25',
    prompt: 'Integers are often used to store age or age limits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15) to a variable named intervals.' ,
    answer: 'intervals = (5, 10, 15)',
    prompt: 'Tuples can store sequences of related numbers, like time intervals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"course": "Python", "level": "beginner"} to a variable named course_info.' ,
    answer: 'course_info = {"course": "Python", "level": "beginner"}',
    prompt: 'Dictionaries are used to store information in key-value pairs, like course details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Monday" to a variable named day_of_week.' ,
    answer: 'day_of_week = "Monday"',
    prompt: 'Strings are useful for storing day names or any textual data. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15, 20] to a variable named even_numbers.' ,
    answer: 'even_numbers = [5, 10, 15, 20]',
    prompt: 'Lists are great for grouping similar items, such as even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 30 to a variable named threshold.' ,
    answer: 'threshold = 30',
    prompt: 'Integers can represent thresholds or limits in various contexts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.5 to a variable named rating.' ,
    answer: 'rating = 3.5',
    prompt: 'Floats are often used to store numerical ratings or scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "sunshine" to a variable named weather_condition.' ,
    answer: 'weather_condition = "sunshine"',
    prompt: 'Strings are used to represent descriptions, such as weather conditions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 3, 5, 7) to a variable named prime_numbers.' ,
    answer: 'prime_numbers = (1, 3, 5, 7)',
    prompt: 'Tuples can be used to store a series of prime numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named total_cost.' ,
    answer: 'total_cost = 100',
    prompt: 'Integers can be used to represent total costs, like in pricing. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 6.75 to a variable named discount_rate.' ,
    answer: 'discount_rate = 6.75',
    prompt: 'Floats can be used to represent percentage values, such as discount rates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named status_message.' ,
    answer: 'status_message = "success"',
    prompt: 'Strings can be used to convey messages, like status updates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named max_limit.' ,
    answer: 'max_limit = 50',
    prompt: 'Integers are often used to represent limits, such as maximum values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 12.99 to a variable named item_price.' ,
    answer: 'item_price = 12.99',
    prompt: 'Floats are commonly used to store prices and monetary values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named numbers.' ,
    answer: 'numbers = [1, 2, 3, 4, 5]',
    prompt: 'Lists can store a collection of numbers or other data types. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Alice", "age": 25} to a variable named person_info.' ,
    answer: 'person_info = {"name": "Alice", "age": 25}',
    prompt: 'Dictionaries store key-value pairs, like personal details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "apple" to a variable named fruit.' ,
    answer: 'fruit = "apple"',
    prompt: 'Strings are used to store textual information, such as names of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (2, 4, 6, 8) to a variable named even_numbers.' ,
    answer: 'even_numbers = (2, 4, 6, 8)',
    prompt: 'Tuples are perfect for storing a sequence of numbers, such as even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Python" to a variable named language.' ,
    answer: 'language = "Python"',
    prompt: 'Strings are used to represent words or names, like programming languages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 42 to a variable named answer.' ,
    answer: 'answer = 42',
    prompt: 'Integers are used to store whole numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14',
    prompt: 'Floats are used to store decimal values, such as the value of pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "rabbit"] to a variable named pets.' ,
    answer: 'pets = ["dog", "cat", "rabbit"]',
    prompt: 'Lists can store items of the same type, like names of pets. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"id": 1, "name": "John"} to a variable named student.' ,
    answer: 'student = {"id": 1, "name": "John"}',
    prompt: 'Dictionaries can store structured data, such as student details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "guitar" to a variable named instrument.' ,
    answer: 'instrument = "guitar"',
    prompt: 'Strings are useful for storing names of objects, like musical instruments. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, "banana", 3.14) to a variable named mixed_data.' ,
    answer: 'mixed_data = (1, "banana", 3.14)',
    prompt: 'Tuples can store mixed data types, such as integers, strings, and floats. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 99.9 to a variable named temperature.' ,
    answer: 'temperature = 99.9',
    prompt: 'Floats can be used to represent real-world measurements, like temperature. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "evening" to a variable named time_of_day.' ,
    answer: 'time_of_day = "evening"',
    prompt: 'Strings can be used to store time-related values, like parts of the day. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"city": "New York", "population": 8419600} to a variable named city_info.' ,
    answer: 'city_info = {"city": "New York", "population": 8419600}',
    prompt: 'Dictionaries can store key-value pairs for more complex data, such as city details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30] to a variable named scores.' ,
    answer: 'scores = [10, 20, 30]',
    prompt: 'Lists are useful for grouping items together, like a set of scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "blue" to a variable named color.' ,
    answer: 'color = "blue"',
    prompt: 'Strings are ideal for storing color names or any other textual information. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Mercedes" to a variable named car_brand.' ,
    answer: 'car_brand = "Mercedes"',
    prompt: 'Strings can store names of brands, people, and places. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (4, 8, 12) to a variable named multiples_of_4.' ,
    answer: 'multiples_of_4 = (4, 8, 12)',
    prompt: 'Tuples are ideal for storing ordered data, such as multiples of a number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.75 to a variable named fraction.' ,
    answer: 'fraction = 0.75',
    prompt: 'Floats can represent fractional values, such as a part of a whole. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors.' ,
    answer: 'colors = ["red", "green", "blue"]',
    prompt: 'Lists are great for grouping related items, like colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named total_amount.' ,
    answer: 'total_amount = 100',
    prompt: 'Integers are often used for counting or keeping track of quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Bob", "age": 30} to a variable named user_profile.' ,
    answer: 'user_profile = {"name": "Bob", "age": 30}',
    prompt: 'Dictionaries are ideal for storing data with associated keys, like a user profile. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "sunny" to a variable named weather_condition.' ,
    answer: 'weather_condition = "sunny"',
    prompt: 'Strings are often used to describe conditions, such as weather. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruits.' ,
    answer: 'fruits = ["apple", "banana", "cherry"]',
    prompt: 'Lists are perfect for grouping related items, such as fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, "a", 3.14) to a variable named mixed_elements.' ,
    answer: 'mixed_elements = (1, "a", 3.14)',
    prompt: 'Tuples can hold elements of different data types. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 15 to a variable named age.' ,
    answer: 'age = 15',
    prompt: 'Integers can be used to represent whole numbers, such as age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 8.0 to a variable named score_average.' ,
    answer: 'score_average = 8.0',
    prompt: 'Floats are used to represent numbers that have decimals, such as average scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "dog" to a variable named animal.' ,
    answer: 'animal = "dog"',
    prompt: 'Strings can be used to store names of animals, people, or things. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named numbers_list.' ,
    answer: 'numbers_list = [1, 2, 3, 4, 5]',
    prompt: 'Lists can hold multiple values of the same type, such as numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"title": "Inception", "year": 2010} to a variable named movie_info.' ,
    answer: 'movie_info = {"title": "Inception", "year": 2010}',
    prompt: 'Dictionaries are useful for storing structured data, such as movie details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "night" to a variable named time_period.' ,
    answer: 'time_period = "night"',
    prompt: 'Strings are commonly used to represent times of day or other textual information. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 10 to a variable named num_items.' ,
    answer: 'num_items = 10',
    prompt: 'Integers are used to represent whole numbers, such as counts of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30] to a variable named values.' ,
    answer: 'values = [10, 20, 30]',
    prompt: 'Lists can store multiple values, such as a collection of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (7, "dog", 10.5) to a variable named mixed_data_tuple.' ,
    answer: 'mixed_data_tuple = (7, "dog", 10.5)',
    prompt: 'Tuples can hold a combination of different data types. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Java" to a variable named programming_language.' ,
    answer: 'programming_language = "Java"',
    prompt: 'Strings are perfect for storing names of programming languages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 3 to a variable named index.' ,
    answer: 'index = 3',
    prompt: 'Integers are often used as index values for accessing elements in lists or arrays. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 56.4 to a variable named distance.' ,
    answer: 'distance = 56.4',
    prompt: 'Floats are commonly used to represent measurements, such as distance. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Eve", "role": "developer"} to a variable named employee.' ,
    answer: 'employee = {"name": "Eve", "role": "developer"}',
    prompt: 'Dictionaries are ideal for storing data with multiple attributes, like employee details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 4, 9, 16] to a variable named squares.' ,
    answer: 'squares = [1, 4, 9, 16]',
    prompt: 'Lists are helpful for grouping numbers together, like squares of integers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "evening" to a variable named time_of_day.' ,
    answer: 'time_of_day = "evening"',
    prompt: 'Strings can represent different times of the day, such as evening. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 18 to a variable named student_age.' ,
    answer: 'student_age = 18',
    prompt: 'Integers can represent various kinds of data, such as age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "green" to a variable named favorite_color.' ,
    answer: 'favorite_color = "green"',
    prompt: 'Strings are ideal for storing personal preferences, like favorite colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"animal": "elephant", "weight": 6000} to a variable named animal_info.' ,
    answer: 'animal_info = {"animal": "elephant", "weight": 6000}',
    prompt: 'Dictionaries are great for organizing detailed information about an object. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 3, 5, 7, 11] to a variable named prime_numbers.' ,
    answer: 'prime_numbers = [2, 3, 5, 7, 11]',
    prompt: 'Lists can store a sequence of numbers, like prime numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "morning" to a variable named part_of_day.' ,
    answer: 'part_of_day = "morning"',
    prompt: 'Strings can store specific times of the day or other textual data. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.99 to a variable named discount_rate.' ,
    answer: 'discount_rate = 0.99',
    prompt: 'Floats can represent decimal values, such as discount rates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (9, 16, 25) to a variable named perfect_squares.' ,
    answer: 'perfect_squares = (9, 16, 25)',
    prompt: 'Tuples are useful for storing immutable sequences, like a set of perfect squares. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 2023 to a variable named current_year.' ,
    answer: 'current_year = 2023',
    prompt: 'Integers are often used to represent specific years or counts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "blue" to a variable named sky_color.' ,
    answer: 'sky_color = "blue"',
    prompt: 'Strings can represent objects or concepts, such as the color of the sky. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["January", "February", "March"] to a variable named months.' ,
    answer: 'months = ["January", "February", "March"]',
    prompt: 'Lists can hold elements of the same type, like the names of months. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"title": "The Hobbit", "author": "J.R.R. Tolkien"} to a variable named book_info.' ,
    answer: 'book_info = {"title": "The Hobbit", "author": "J.R.R. Tolkien"}',
    prompt: 'Dictionaries are great for storing information with multiple attributes, such as book details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named price.' ,
    answer: 'price = 50',
    prompt: 'Integers are commonly used to represent prices or quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14159 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14159',
    prompt: 'Floats are perfect for representing numbers with decimal places, like the value of pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["John", "Sarah", "Emily"] to a variable named students.' ,
    answer: 'students = ["John", "Sarah", "Emily"]',
    prompt: 'Lists are useful for storing collections of items, such as names of students. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "cloudy" to a variable named weather.' ,
    answer: 'weather = "cloudy"',
    prompt: 'Strings are ideal for describing conditions like the weather. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3) to a variable named simple_tuple.' ,
    answer: 'simple_tuple = (1, 2, 3)',
    prompt: 'Tuples are often used to store ordered data that should not change. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"city": "Paris", "country": "France"} to a variable named location.' ,
    answer: 'location = {"city": "Paris", "country": "France"}',
    prompt: 'Dictionaries are perfect for storing related pairs of data, like location details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 7 to a variable named lucky_number.' ,
    answer: 'lucky_number = 7',
    prompt: 'Integers are used for counting or representing specific values, like a lucky number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15]',
    prompt: 'Lists can store multiples of a number, like multiples of five. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 2.71828 to a variable named e_value.' ,
    answer: 'e_value = 2.71828',
    prompt: 'Floats are used for representing numbers with decimals, such as the value of e. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "apple" to a variable named fruit.' ,
    answer: 'fruit = "apple"',
    prompt: 'Strings are perfect for storing names of objects, like fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Alice", "age": 25} to a variable named person_info.' ,
    answer: 'person_info = {"name": "Alice", "age": 25}',
    prompt: 'Dictionaries allow you to store related pieces of information, like personal details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [0, 1, 2, 3] to a variable named counting_numbers.' ,
    answer: 'counting_numbers = [0, 1, 2, 3]',
    prompt: 'Lists are useful for representing sequences of numbers, like counting numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "green", "blue") to a variable named primary_colors.' ,
    answer: 'primary_colors = ("red", "green", "blue")',
    prompt: 'Tuples can be used to store an ordered set of elements, like primary colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1000 to a variable named population.' ,
    answer: 'population = 1000',
    prompt: 'Integers are ideal for representing counts, like population numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 10.5 to a variable named average_height.' ,
    answer: 'average_height = 10.5',
    prompt: 'Floats are useful for representing average values, such as average height. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "snowy" to a variable named weather_condition.' ,
    answer: 'weather_condition = "snowy"',
    prompt: 'Strings are commonly used to describe weather conditions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 4, 6] to a variable named even_numbers.' ,
    answer: 'even_numbers = [2, 4, 6]',
    prompt: 'Lists are great for storing sequences of even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, "banana", 20.0) to a variable named fruit_data.' ,
    answer: 'fruit_data = (5, "banana", 20.0)',
    prompt: 'Tuples are used for storing ordered data of different types, such as quantities and descriptions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "morning" to a variable named time_of_day.' ,
    answer: 'time_of_day = "morning"',
    prompt: 'Strings are great for describing specific moments, like times of the day. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 12 to a variable named num_months.' ,
    answer: 'num_months = 12',
    prompt: 'Integers are useful for representing values that are counted, such as the number of months in a year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 98.6 to a variable named body_temperature.' ,
    answer: 'body_temperature = 98.6',
    prompt: 'Floats are useful for storing values that have decimal points, such as body temperature. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Charlie", "age": 30, "job": "teacher"} to a variable named person_details.' ,
    answer: 'person_details = {"name": "Charlie", "age": 30, "job": "teacher"}',
    prompt: 'Dictionaries are perfect for storing related data, such as personal details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [7, 14, 21] to a variable named multiples_of_seven.' ,
    answer: 'multiples_of_seven = [7, 14, 21]',
    prompt: 'Lists are useful for grouping numbers that share a common factor, like multiples of seven. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Python" to a variable named language.' ,
    answer: 'language = "Python"',
    prompt: 'Strings are commonly used to represent names of programming languages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (100, "USD") to a variable named price_in_usd.' ,
    answer: 'price_in_usd = (100, "USD")',
    prompt: 'Tuples can store multiple elements of different types, like a price and currency. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"title": "1984", "author": "George Orwell"} to a variable named book_details.' ,
    answer: 'book_details = {"title": "1984", "author": "George Orwell"}',
    prompt: 'Dictionaries allow you to store complex data, such as information about a book. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "sunny" to a variable named weather_status.' ,
    answer: 'weather_status = "sunny"',
    prompt: 'Strings are ideal for describing weather conditions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [3, 6, 9] to a variable named multiples_of_three.' ,
    answer: 'multiples_of_three = [3, 6, 9]',
    prompt: 'Lists are useful for storing multiples of a given number, like multiples of three. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 45 to a variable named temperature.' ,
    answer: 'temperature = 45',
    prompt: 'Integers can be used to represent temperature values or other measurements. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("cat", "dog", "fish") to a variable named pets.' ,
    answer: 'pets = ("cat", "dog", "fish")',
    prompt: 'Tuples are helpful when you need an ordered, immutable collection of items, like pet names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "summer" to a variable named season.' ,
    answer: 'season = "summer"',
    prompt: 'Strings are often used to represent names of seasons or times of year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 42 to a variable named answer.' ,
    answer: 'answer = 42',
    prompt: 'Integers can represent a wide range of values, including answers to questions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 3, 5, 7] to a variable named odd_numbers.' ,
    answer: 'odd_numbers = [1, 3, 5, 7]',
    prompt: 'Lists are useful for grouping numbers, such as odd numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.8 to a variable named gravity.' ,
    answer: 'gravity = 9.8',
    prompt: 'Floats are great for representing scientific constants, such as the gravitational constant. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "blue" to a variable named color.' ,
    answer: 'color = "blue"',
    prompt: 'Strings are often used to represent colors or other descriptive characteristics. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 8 to a variable named hours_in_day.' ,
    answer: 'hours_in_day = 8',
    prompt: 'Integers are useful for representing quantities like the number of hours in a day. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"student": "Tom", "grade": "A"} to a variable named student_info.' ,
    answer: 'student_info = {"student": "Tom", "grade": "A"}',
    prompt: 'Dictionaries can store pairs of related data, such as a student’s name and grade. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruits.' ,
    answer: 'fruits = ["apple", "banana", "cherry"]',
    prompt: 'Lists are great for storing multiple items, such as a collection of fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 99.99 to a variable named price.' ,
    answer: 'price = 99.99',
    prompt: 'Floats are commonly used for representing monetary values, such as prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (4, 8, 12, 16) to a variable named multiples_of_four.' ,
    answer: 'multiples_of_four = (4, 8, 12, 16)',
    prompt: 'Tuples are useful for storing a set of related data, such as multiples of a number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "goodbye" to a variable named farewell.' ,
    answer: 'farewell = "goodbye"',
    prompt: 'Strings can represent words or phrases, like farewells. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 2024 to a variable named current_year.' ,
    answer: 'current_year = 2024',
    prompt: 'Integers can be used for representing specific points in time, such as the current year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 7.25 to a variable named distance.' ,
    answer: 'distance = 7.25',
    prompt: 'Floats are perfect for representing measurements or distances. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [15, 30, 45, 60] to a variable named multiples_of_fifteen.' ,
    answer: 'multiples_of_fifteen = [15, 30, 45, 60]',
    prompt: 'Lists are useful for storing numbers that follow a specific pattern, like multiples of fifteen. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Emily", "age": 22} to a variable named person_data.' ,
    answer: 'person_data = {"name": "Emily", "age": 22}',
    prompt: 'Dictionaries are great for storing related information, like a person’s name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "morning" to a variable named time_of_day.' ,
    answer: 'time_of_day = "morning"',
    prompt: 'Strings are often used to represent parts of the day, like morning, afternoon, or evening. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named total_students.' ,
    answer: 'total_students = 100',
    prompt: 'Integers can represent quantities, like the total number of students in a class. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "green", "blue") to a variable named color_palette.' ,
    answer: 'color_palette = ("red", "green", "blue")',
    prompt: 'Tuples can store ordered, unchangeable collections of values, such as color palettes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 64.4 to a variable named height.' ,
    answer: 'height = 64.4',
    prompt: 'Floats are useful for storing measurements, such as height. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30, 40] to a variable named numbers.' ,
    answer: 'numbers = [10, 20, 30, 40]',
    prompt: 'Lists can hold a collection of similar items, like numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "rainy" to a variable named weather_condition.' ,
    answer: 'weather_condition = "rainy"',
    prompt: 'Strings are used to describe states or conditions, such as weather. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, "apple", 5.5) to a variable named product_info.' ,
    answer: 'product_info = (1, "apple", 5.5)',
    prompt: 'Tuples can store multiple types of information in an ordered, immutable collection. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 15 to a variable named total_items.' ,
    answer: 'total_items = 15',
    prompt: 'Integers are used to represent whole numbers, such as a count of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Python programming" to a variable named course_name.' ,
    answer: 'course_name = "Python programming"',
    prompt: 'Strings are commonly used to store the names of courses or subjects. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 56.78 to a variable named balance.' ,
    answer: 'balance = 56.78',
    prompt: 'Floats are used for storing decimal values, like account balances. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15, 20] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15, 20]',
    prompt: 'Lists are perfect for storing sequences of numbers, such as multiples of five. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"color": "blue", "shade": "light"} to a variable named blue_shade.' ,
    answer: 'blue_shade = {"color": "blue", "shade": "light"}',
    prompt: 'Dictionaries store pairs of key-value data, like color descriptions. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Saturday" to a variable named day_of_week.' ,
    answer: 'day_of_week = "Saturday"',
    prompt: 'Strings can represent days of the week, like Saturday. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 200 to a variable named total_sales.' ,
    answer: 'total_sales = 200',
    prompt: 'Integers are used to represent sales numbers or other countable quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "blue", "green") to a variable named primary_colors.' ,
    answer: 'primary_colors = ("red", "blue", "green")',
    prompt: 'Tuples are a good choice when you need to store a set of fixed items, such as primary colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "rabbit"] to a variable named pets_list.' ,
    answer: 'pets_list = ["dog", "cat", "rabbit"]',
    prompt: 'Lists can store multiple items, such as pet names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "healthy" to a variable named food_status.' ,
    answer: 'food_status = "healthy"',
    prompt: 'Strings are ideal for labeling or describing states, such as the status of food. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 90 to a variable named passing_score.' ,
    answer: 'passing_score = 90',
    prompt: 'Integers can represent thresholds or limits, like the passing score in an exam. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 100.5 to a variable named total_cost.' ,
    answer: 'total_cost = 100.5',
    prompt: 'Floats are useful for storing precise values, such as cost or price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4] to a variable named counting_numbers.' ,
    answer: 'counting_numbers = [1, 2, 3, 4]',
    prompt: 'Lists are perfect for sequences of numbers, such as counting numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"id": 101, "name": "Alice"} to a variable named student_info.' ,
    answer: 'student_info = {"id": 101, "name": "Alice"}',
    prompt: 'Dictionaries are helpful for storing information with identifiers, like student IDs. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "full" to a variable named storage_status.' ,
    answer: 'storage_status = "full"',
    prompt: 'Strings are often used to represent states or conditions, like whether a storage space is full. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 3 to a variable named quarter_number.' ,
    answer: 'quarter_number = 3',
    prompt: 'Integers are often used to represent months or periods, like the number of a fiscal quarter. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("apple", "orange", "banana") to a variable named fruit_basket.' ,
    answer: 'fruit_basket = ("apple", "orange", "banana")',
    prompt: 'Tuples are great for representing ordered data that does not change, like a collection of fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "rainy day" to a variable named weather_condition.' ,
    answer: 'weather_condition = "rainy day"',
    prompt: 'Strings are useful for describing various conditions, such as weather. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 300 to a variable named total_revenue.' ,
    answer: 'total_revenue = 300',
    prompt: 'Integers are often used to represent financial amounts, like total revenue. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 4.25 to a variable named price_per_item.' ,
    answer: 'price_per_item = 4.25',
    prompt: 'Floats are ideal for storing values that require precision, such as prices per item. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["cat", "dog", "parrot"] to a variable named animals.' ,
    answer: 'animals = ["cat", "dog", "parrot"]',
    prompt: 'Lists are great for storing collections of similar items, such as animal names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"age": 25, "height": 5.9} to a variable named person_attributes.' ,
    answer: 'person_attributes = {"age": 25, "height": 5.9}',
    prompt: 'Dictionaries are useful for storing a set of attributes related to a person. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "happy" to a variable named mood.' ,
    answer: 'mood = "happy"',
    prompt: 'Strings can represent feelings or states, such as mood. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named threshold.' ,
    answer: 'threshold = 50',
    prompt: 'Integers are useful for setting limits or thresholds, such as a minimum value. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3) to a variable named count_numbers.' ,
    answer: 'count_numbers = (1, 2, 3)',
    prompt: 'Tuples are suitable for storing fixed, ordered data, like counting numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30] to a variable named numbers_list.' ,
    answer: 'numbers_list = [10, 20, 30]',
    prompt: 'Lists are perfect for collections of values, such as numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Sunday" to a variable named day.' ,
    answer: 'day = "Sunday"',
    prompt: 'Strings can represent specific days of the week, like Sunday. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14',
    prompt: 'Floats are often used to represent decimal values, like the value of Pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"car": "sedan", "year": 2022} to a variable named car_details.' ,
    answer: 'car_details = {"car": "sedan", "year": 2022}',
    prompt: 'Dictionaries are great for representing a set of related data, like car details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "moon" to a variable named celestial_body.' ,
    answer: 'celestial_body = "moon"',
    prompt: 'Strings can be used to represent astronomical objects, like the moon. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 500 to a variable named total_population.' ,
    answer: 'total_population = 500',
    prompt: 'Integers can be used to represent population counts or other numerical quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors.' ,
    answer: 'colors = ["red", "green", "blue"]',
    prompt: 'Lists are ideal for storing collections of colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.99 to a variable named discount.' ,
    answer: 'discount = 9.99',
    prompt: 'Floats are useful for storing monetary values like discounts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "winter" to a variable named season.' ,
    answer: 'season = "winter"',
    prompt: 'Strings are perfect for representing seasons, such as winter. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"city": "New York", "population": 8000000} to a variable named city_info.' ,
    answer: 'city_info = {"city": "New York", "population": 8000000}',
    prompt: 'Dictionaries are great for storing information about locations, like cities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15) to a variable named increments.' ,
    answer: 'increments = (5, 10, 15)',
    prompt: 'Tuples are ideal for storing ordered data that does not change, like increments. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 150 to a variable named max_capacity.' ,
    answer: 'max_capacity = 150',
    prompt: 'Integers are often used to represent capacity or limits, such as the maximum capacity. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruit_basket.' ,
    answer: 'fruit_basket = ["apple", "banana", "cherry"]',
    prompt: 'Lists are ideal for storing multiple items of the same type, like fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 6.67 to a variable named average_score.' ,
    answer: 'average_score = 6.67',
    prompt: 'Floats are commonly used to store decimal values like averages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "beginner" to a variable named level.' ,
    answer: 'level = "beginner"',
    prompt: 'Strings can represent levels or stages, like beginner in a course. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"brand": "Nike", "size": 10} to a variable named shoe_info.' ,
    answer: 'shoe_info = {"brand": "Nike", "size": 10}',
    prompt: 'Dictionaries are useful for storing key-value pairs, like shoe brand and size. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 7 to a variable named days_in_week.' ,
    answer: 'days_in_week = 7',
    prompt: 'Integers are often used for counting, such as the number of days in a week. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "summer" to a variable named season.' ,
    answer: 'season = "summer"',
    prompt: 'Strings can represent different seasons, such as summer. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 4, 6, 8] to a variable named even_numbers.' ,
    answer: 'even_numbers = [2, 4, 6, 8]',
    prompt: 'Lists can be used to store sequences of even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "John", "age": 30} to a variable named person.' ,
    answer: 'person = {"name": "John", "age": 30}',
    prompt: 'Dictionaries are perfect for storing a collection of attributes, like a person’s name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 12 to a variable named months_in_year.' ,
    answer: 'months_in_year = 12',
    prompt: 'Integers can represent quantities such as the number of months in a year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 12.50 to a variable named hourly_rate.' ,
    answer: 'hourly_rate = 12.50',
    prompt: 'Floats are used to represent values like hourly rates or prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["green", "blue", "yellow"] to a variable named color_palette.' ,
    answer: 'color_palette = ["green", "blue", "yellow"]',
    prompt: 'Lists are great for storing collections of colors in a palette. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3, 4) to a variable named sequence.' ,
    answer: 'sequence = (1, 2, 3, 4)',
    prompt: 'Tuples are ideal for storing ordered, fixed data like a sequence of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named status.' ,
    answer: 'status = "completed"',
    prompt: 'Strings can represent the status of a task, such as completed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 250 to a variable named total_distance.' ,
    answer: 'total_distance = 250',
    prompt: 'Integers are commonly used to represent distance or other measurable quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["pen", "pencil", "eraser"] to a variable named stationery.' ,
    answer: 'stationery = ["pen", "pencil", "eraser"]',
    prompt: 'Lists are great for storing items like stationery. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "blue" to a variable named color.' ,
    answer: 'color = "blue"',
    prompt: 'Strings can be used to represent different colors, such as blue. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 99.99 to a variable named item_price.' ,
    answer: 'item_price = 99.99',
    prompt: 'Floats are often used to represent monetary amounts, such as item prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "python_programming" to a variable named course_name.' ,
    answer: 'course_name = "python_programming"',
    prompt: 'Strings are ideal for naming variables that describe a course or topic. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (4, 8, 12) to a variable named multiples_of_four.' ,
    answer: 'multiples_of_four = (4, 8, 12)',
    prompt: 'Tuples are great for storing ordered data that should not change, like multiples of four. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named max_score.' ,
    answer: 'max_score = 100',
    prompt: 'Integers are commonly used to represent maximum values, like the max score in a test. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "orange", "yellow"] to a variable named traffic_lights.' ,
    answer: 'traffic_lights = ["red", "orange", "yellow"]',
    prompt: 'Lists can store multiple items that share a common theme, like traffic light colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named status_update.' ,
    answer: 'status_update = "active"',
    prompt: 'Strings can represent various statuses, such as active. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"product": "laptop", "price": 1200} to a variable named product_info.' ,
    answer: 'product_info = {"product": "laptop", "price": 1200}',
    prompt: 'Dictionaries are useful for storing information about a product, such as name and price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.5 to a variable named rating.' ,
    answer: 'rating = 9.5',
    prompt: 'Floats are great for representing values like ratings that require decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["bread", "milk", "eggs"] to a variable named shopping_list.' ,
    answer: 'shopping_list = ["bread", "milk", "eggs"]',
    prompt: 'Lists are perfect for storing collections of items like a shopping list. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named result.' ,
    answer: 'result = "success"',
    prompt: 'Strings can represent outcomes, like success. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 21 to a variable named age.' ,
    answer: 'age = 21',
    prompt: 'Integers are often used to represent age or other quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (100, 200, 300) to a variable named prices.' ,
    answer: 'prices = (100, 200, 300)',
    prompt: 'Tuples are useful for storing fixed sets of values, such as prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "rabbit"] to a variable named pets.' ,
    answer: 'pets = ["dog", "cat", "rabbit"]',
    prompt: 'Lists are ideal for storing groups of similar items, like pets. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named task_status.' ,
    answer: 'task_status = "completed"',
    prompt: 'Strings can represent the state of a task, such as completed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 5.75 to a variable named item_weight.' ,
    answer: 'item_weight = 5.75',
    prompt: 'Floats are perfect for representing values like weight. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Alice", "age": 25} to a variable named person_data.' ,
    answer: 'person_data = {"name": "Alice", "age": 25}',
    prompt: 'Dictionaries are great for representing complex data, such as a person’s information. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named total_items.' ,
    answer: 'total_items = 50',
    prompt: 'Integers are often used to represent the total count of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["summer", "autumn", "winter"] to a variable named seasons.' ,
    answer: 'seasons = ["summer", "autumn", "winter"]',
    prompt: 'Lists can be used to store different seasons of the year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "in_progress" to a variable named task_state.' ,
    answer: 'task_state = "in_progress"',
    prompt: 'Strings can be used to represent the current state of a task, like in progress. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "student" to a variable named user_type.' ,
    answer: 'user_type = "student"',
    prompt: 'Strings can be used to represent roles or types of users, such as student. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 40 to a variable named completed_tasks.' ,
    answer: 'completed_tasks = 40',
    prompt: 'Integers are often used to represent counts, like the number of completed tasks. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "green", "blue") to a variable named primary_colors.' ,
    answer: 'primary_colors = ("red", "green", "blue")',
    prompt: 'Tuples are perfect for storing a fixed sequence of elements, like primary colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4] to a variable named numbers.' ,
    answer: 'numbers = [1, 2, 3, 4]',
    prompt: 'Lists are ideal for storing a collection of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "processing" to a variable named status_message.' ,
    answer: 'status_message = "processing"',
    prompt: 'Strings can represent the current process, such as processing. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 32 to a variable named temperature.' ,
    answer: 'temperature = 32',
    prompt: 'Integers can be used to represent temperature or other measurable quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 15.25 to a variable named price_per_item.' ,
    answer: 'price_per_item = 15.25',
    prompt: 'Floats are commonly used to represent prices or monetary amounts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"author": "J.K. Rowling", "book": "Harry Potter"} to a variable named book_info.' ,
    answer: 'book_info = {"author": "J.K. Rowling", "book": "Harry Potter"}',
    prompt: 'Dictionaries are useful for storing key-value pairs like author and book title. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named result_message.' ,
    answer: 'result_message = "success"',
    prompt: 'Strings can represent messages, such as success. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15) to a variable named intervals.' ,
    answer: 'intervals = (5, 10, 15)',
    prompt: 'Tuples are great for storing ordered data that won’t change, such as time intervals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named status_flag.' ,
    answer: 'status_flag = "active"',
    prompt: 'Strings can be used for flags indicating whether a process is active. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15, 20] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15, 20]',
    prompt: 'Lists are ideal for storing multiples of a number, such as multiples of five. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 90 to a variable named total_marks.' ,
    answer: 'total_marks = 90',
    prompt: 'Integers are frequently used to store scores or marks, like total marks in a test. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"type": "car", "color": "red"} to a variable named vehicle_info.' ,
    answer: 'vehicle_info = {"type": "car", "color": "red"}',
    prompt: 'Dictionaries are useful for organizing attributes like vehicle type and color. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "hello world" to a variable named greeting.' ,
    answer: 'greeting = "hello world"',
    prompt: 'Strings can store simple phrases like greetings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14',
    prompt: 'Floats are often used for mathematical constants, such as Pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [3, 6, 9] to a variable named multiples_of_three.' ,
    answer: 'multiples_of_three = [3, 6, 9]',
    prompt: 'Lists are perfect for storing sequences of numbers, like multiples of three. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named task_status.' ,
    answer: 'task_status = "completed"',
    prompt: 'Strings can represent the status of a task, such as completed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 0 to a variable named zero_value.' ,
    answer: 'zero_value = 0',
    prompt: 'Integers can be used to represent zero, which is often important in calculations. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("apple", "banana", "cherry") to a variable named fruits.' ,
    answer: 'fruits = ("apple", "banana", "cherry")',
    prompt: 'Tuples are useful for grouping data that should not change, such as fruit names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "urgent" to a variable named priority_level.' ,
    answer: 'priority_level = "urgent"',
    prompt: 'Strings can be used to assign priority levels, like urgent. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"item": "laptop", "price": 900} to a variable named product_details.' ,
    answer: 'product_details = {"item": "laptop", "price": 900}',
    prompt: 'Dictionaries are great for organizing data about products, such as name and price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 7 to a variable named week_number.' ,
    answer: 'week_number = 7',
    prompt: 'Integers are often used to represent a week number in a year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "python" to a variable named language_name.' ,
    answer: 'language_name = "python"',
    prompt: 'Strings are useful for representing programming language names, such as Python. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named numbers_list.' ,
    answer: 'numbers_list = [1, 2, 3, 4, 5]',
    prompt: 'Lists can hold multiple numbers, useful for processing collections. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "error" to a variable named status_code.' ,
    answer: 'status_code = "error"',
    prompt: 'Strings can represent various states, such as error codes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15, 20) to a variable named even_numbers.' ,
    answer: 'even_numbers = (5, 10, 15, 20)',
    prompt: 'Tuples are ideal for storing a fixed set of ordered numbers, such as even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 10.99 to a variable named total_amount.' ,
    answer: 'total_amount = 10.99',
    prompt: 'Floats are commonly used to represent amounts, such as total prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["Alice", "Bob", "Charlie"] to a variable named names_list.' ,
    answer: 'names_list = ["Alice", "Bob", "Charlie"]',
    prompt: 'Lists are perfect for storing collections of names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "incomplete" to a variable named task_status.' ,
    answer: 'task_status = "incomplete"',
    prompt: 'Strings can represent the status of a task, such as incomplete. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 5 to a variable named level_number.' ,
    answer: 'level_number = 5',
    prompt: 'Integers are often used for numbering levels, such as in a game. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"item": "book", "price": 15} to a variable named store_item.' ,
    answer: 'store_item = {"item": "book", "price": 15}',
    prompt: 'Dictionaries are useful for representing key-value pairs like product names and prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named outcome.' ,
    answer: 'outcome = "success"',
    prompt: 'Strings can represent results, such as the outcome of a process. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (2, 4, 6) to a variable named even_numbers.' ,
    answer: 'even_numbers = (2, 4, 6)',
    prompt: 'Tuples are perfect for storing a set of even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named user_status.' ,
    answer: 'user_status = "active"',
    prompt: 'Strings can represent states or statuses, such as active. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 8 to a variable named grade.' ,
    answer: 'grade = 8',
    prompt: 'Integers are often used to represent scores or grades. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 5.5 to a variable named average_score.' ,
    answer: 'average_score = 5.5',
    prompt: 'Floats are commonly used to store average values, such as average scores. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("cat", "dog", "bird") to a variable named animals.' ,
    answer: 'animals = ("cat", "dog", "bird")',
    prompt: 'Tuples are great for storing ordered collections of items that do not change, such as animal names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30] to a variable named values.' ,
    answer: 'values = [10, 20, 30]',
    prompt: 'Lists are ideal for storing collections of values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "welcome" to a variable named greeting_message.' ,
    answer: 'greeting_message = "welcome"',
    prompt: 'Strings are often used to store greeting messages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "John", "age": 30} to a variable named person_info.' ,
    answer: 'person_info = {"name": "John", "age": 30}',
    prompt: 'Dictionaries are useful for storing related data about a person, such as name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named task_result.' ,
    answer: 'task_result = "completed"',
    prompt: 'Strings can represent the status of a task, like completed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named total_items.' ,
    answer: 'total_items = 100',
    prompt: 'Integers are commonly used for counting items or objects. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 15.75 to a variable named item_price.' ,
    answer: 'item_price = 15.75',
    prompt: 'Floats are used to store decimal values, such as prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "available" to a variable named item_status.' ,
    answer: 'item_status = "available"',
    prompt: 'Strings can represent availability states, such as available. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [7, 14, 21] to a variable named multiples_of_seven.' ,
    answer: 'multiples_of_seven = [7, 14, 21]',
    prompt: 'Lists are great for storing multiples of a number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named max_value.' ,
    answer: 'max_value = 50',
    prompt: 'Integers can be used to represent a maximum value, like a limit. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "admin" to a variable named role.' ,
    answer: 'role = "admin"',
    prompt: 'Strings are useful for storing user roles, such as admin. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"color": "blue", "size": "medium"} to a variable named shirt_details.' ,
    answer: 'shirt_details = {"color": "blue", "size": "medium"}',
    prompt: 'Dictionaries are perfect for storing attributes related to an item, such as color and size. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "open" to a variable named status.' ,
    answer: 'status = "open"',
    prompt: 'Strings can represent states, like whether a system or task is open. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 3 to a variable named month_number.' ,
    answer: 'month_number = 3',
    prompt: 'Integers can be used to represent the number of a month in the year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 3, 5, 7, 9] to a variable named odd_numbers.' ,
    answer: 'odd_numbers = [1, 3, 5, 7, 9]',
    prompt: 'Lists are ideal for storing sequences, like odd numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named user_state.' ,
    answer: 'user_state = "active"',
    prompt: 'Strings can represent a user’s current state, like active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 45.6 to a variable named temperature.' ,
    answer: 'temperature = 45.6',
    prompt: 'Floats can represent decimal values, such as temperature measurements. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "green", "blue") to a variable named colors.' ,
    answer: 'colors = ("red", "green", "blue")',
    prompt: 'Tuples are useful for storing a fixed collection of items, such as colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "failure" to a variable named status_code.' ,
    answer: 'status_code = "failure"',
    prompt: 'Strings can represent various states, such as failure. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 120 to a variable named duration.' ,
    answer: 'duration = 120',
    prompt: 'Integers can be used to represent durations, like the number of minutes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [12, 24, 36] to a variable named multiples_of_twelve.' ,
    answer: 'multiples_of_twelve = [12, 24, 36]',
    prompt: 'Lists can store multiples of a number, like multiples of twelve. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "processed" to a variable named task_status.' ,
    answer: 'task_status = "processed"',
    prompt: 'Strings can be used to indicate the state of a task, such as processed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1 to a variable named step_number.' ,
    answer: 'step_number = 1',
    prompt: 'Integers are often used to represent steps or stages, like step 1. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Jane", "age": 28} to a variable named person_data.' ,
    answer: 'person_data = {"name": "Jane", "age": 28}',
    prompt: 'Dictionaries are great for storing attributes of a person, like name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "yes" to a variable named response.' ,
    answer: 'response = "yes"',
    prompt: 'Strings can be used to store responses, such as yes or no. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "yellow", "blue"] to a variable named primary_colors.' ,
    answer: 'primary_colors = ["red", "yellow", "blue"]',
    prompt: 'Lists are perfect for storing primary colors in a collection. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3) to a variable named initial_values.' ,
    answer: 'initial_values = (1, 2, 3)',
    prompt: 'Tuples are useful for storing ordered collections of data. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "waiting" to a variable named process_status.' ,
    answer: 'process_status = "waiting"',
    prompt: 'Strings can represent various statuses, such as waiting for processing. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 8.25 to a variable named amount_due.' ,
    answer: 'amount_due = 8.25',
    prompt: 'Floats are useful for representing amounts, especially when dealing with currency. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15, 20] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15, 20]',
    prompt: 'Lists are perfect for storing multiples of a number, such as five. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"brand": "Nike", "model": "AirMax"} to a variable named shoe_details.' ,
    answer: 'shoe_details = {"brand": "Nike", "model": "AirMax"}',
    prompt: 'Dictionaries can store product details, like brand and model. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 200 to a variable named account_balance.' ,
    answer: 'account_balance = 200',
    prompt: 'Integers can represent values such as a bank account balance. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named task_result.' ,
    answer: 'task_result = "completed"',
    prompt: 'Strings are used to represent the result of a task, like completed or pending. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruits.' ,
    answer: 'fruits = ["apple", "banana", "cherry"]',
    prompt: 'Lists are useful for storing items like fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "admin", "password": "12345"} to a variable named credentials.' ,
    answer: 'credentials = {"username": "admin", "password": "12345"}',
    prompt: 'Dictionaries are perfect for storing key-value pairs, like username and password. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "error" to a variable named status_code.' ,
    answer: 'status_code = "error"',
    prompt: 'Strings can represent various error statuses, like error or success. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 0 to a variable named counter.' ,
    answer: 'counter = 0',
    prompt: 'Integers are commonly used for counters or indices, such as starting from zero. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 19.99 to a variable named item_price.' ,
    answer: 'item_price = 19.99',
    prompt: 'Floats can be used for prices or amounts that require decimal points. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "open" to a variable named task_state.' ,
    answer: 'task_state = "open"',
    prompt: 'Strings can represent the state of a task, such as open or closed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 4, 6, 8] to a variable named even_numbers.' ,
    answer: 'even_numbers = [2, 4, 6, 8]',
    prompt: 'Lists are ideal for storing even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (10, 20, 30) to a variable named numbers.' ,
    answer: 'numbers = (10, 20, 30)',
    prompt: 'Tuples are useful for storing ordered data, like numbers in a sequence. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named order_status.' ,
    answer: 'order_status = "completed"',
    prompt: 'Strings can be used to track the status of an order, like completed or pending. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"first_name": "Alice", "last_name": "Smith"} to a variable named user_info.' ,
    answer: 'user_info = {"first_name": "Alice", "last_name": "Smith"}',
    prompt: 'Dictionaries are ideal for storing information with key-value pairs, such as names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 25 to a variable named age.' ,
    answer: 'age = 25',
    prompt: 'Integers are used to represent values like age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 1.75 to a variable named height.' ,
    answer: 'height = 1.75',
    prompt: 'Floats are useful for representing measurements, like height. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "inactive" to a variable named user_status.' ,
    answer: 'user_status = "inactive"',
    prompt: 'Strings can represent states such as inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors_list.' ,
    answer: 'colors_list = ["red", "green", "blue"]',
    prompt: 'Lists are perfect for storing colors or other collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1000 to a variable named account_balance.' ,
    answer: 'account_balance = 1000',
    prompt: 'Integers are often used for representing balance amounts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("apple", "orange", "grape") to a variable named fruit_basket.' ,
    answer: 'fruit_basket = ("apple", "orange", "grape")',
    prompt: 'Tuples are great for storing a fixed collection of items, like fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "user123", "password": "password123"} to a variable named user_data.' ,
    answer: 'user_data = {"username": "user123", "password": "password123"}',
    prompt: 'Dictionaries are ideal for storing credentials or any key-value pair data. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named status.' ,
    answer: 'status = "active"',
    prompt: 'Strings are useful for representing statuses like active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 50 to a variable named points.' ,
    answer: 'points = 50',
    prompt: 'Integers can represent numeric values like points in a game. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.14 to a variable named pi_value.' ,
    answer: 'pi_value = 3.14',
    prompt: 'Floats are useful for representing numbers with decimals, like the value of pi. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [2, 4, 6, 8, 10] to a variable named even_numbers_list.' ,
    answer: 'even_numbers_list = [2, 4, 6, 8, 10]',
    prompt: 'Lists are perfect for storing even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("dog", "cat", "fish") to a variable named pets.' ,
    answer: 'pets = ("dog", "cat", "fish")',
    prompt: 'Tuples are ideal for storing a collection of items that do not change. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"color": "blue", "size": "medium"} to a variable named shirt_details.' ,
    answer: 'shirt_details = {"color": "blue", "size": "medium"}',
    prompt: 'Dictionaries are useful for storing attributes of objects, such as color and size. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "pending" to a variable named order_status.' ,
    answer: 'order_status = "pending"',
    prompt: 'Strings can represent different stages of an order, like pending or shipped. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 15 to a variable named age.' ,
    answer: 'age = 15',
    prompt: 'Integers can be used for ages or similar data. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.99 to a variable named price.' ,
    answer: 'price = 9.99',
    prompt: 'Floats are useful for representing prices and monetary values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruit_list.' ,
    answer: 'fruit_list = ["apple", "banana", "cherry"]',
    prompt: 'Lists are perfect for storing collections like fruit names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "John", "age": 30, "city": "New York"} to a variable named user_info_dict.' ,
    answer: 'user_info_dict = {"name": "John", "age": 30, "city": "New York"}',
    prompt: 'Dictionaries store information in key-value pairs, like personal details. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3) to a variable named numbers_tuple.' ,
    answer: 'numbers_tuple = (1, 2, 3)',
    prompt: 'Tuples are often used for storing ordered data that does not need to change. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named result_status.' ,
    answer: 'result_status = "success"',
    prompt: 'Strings can represent result statuses, such as success or failure. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 10 to a variable named score.' ,
    answer: 'score = 10',
    prompt: 'Integers are often used to store scores, points, or quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [5, 10, 15] to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = [5, 10, 15]',
    prompt: 'Lists can be used to store multiples of a number. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 8.0 to a variable named rating.' ,
    answer: 'rating = 8.0',
    prompt: 'Floats can represent ratings or scores that involve decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "inactive" to a variable named status_code.' ,
    answer: 'status_code = "inactive"',
    prompt: 'Strings are ideal for representing states, like active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"product": "laptop", "price": 1500} to a variable named product_info.' ,
    answer: 'product_info = {"product": "laptop", "price": 1500}',
    prompt: 'Dictionaries are great for storing details about products, like product name and price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (100, 200, 300) to a variable named values.' ,
    answer: 'values = (100, 200, 300)',
    prompt: 'Tuples are ideal for storing ordered data that doesn’t need modification. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "error" to a variable named message_type.' ,
    answer: 'message_type = "error"',
    prompt: 'Strings can represent error messages or status codes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 3, 5, 7] to a variable named odd_numbers.' ,
    answer: 'odd_numbers = [1, 3, 5, 7]',
    prompt: 'Lists are perfect for storing sequences of odd numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 5 to a variable named attempts.' ,
    answer: 'attempts = 5',
    prompt: 'Integers are commonly used for counting attempts or attempts at solving a problem. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named status_flag.' ,
    answer: 'status_flag = "completed"',
    prompt: 'Strings are often used to represent the final state of a task, like completed or failed. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3, 4) to a variable named numbers_set.' ,
    answer: 'numbers_set = (1, 2, 3, 4)',
    prompt: 'Tuples are used to store immutable collections of items. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Sarah", "age": 22} to a variable named person_info.' ,
    answer: 'person_info = {"name": "Sarah", "age": 22}',
    prompt: 'Dictionaries are excellent for storing data such as a person’s name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "processing" to a variable named job_status.' ,
    answer: 'job_status = "processing"',
    prompt: 'Strings can indicate different job or task statuses. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named score_points.' ,
    answer: 'score_points = 100',
    prompt: 'Integers are commonly used to represent score points in games or assessments. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.5 to a variable named discount.' ,
    answer: 'discount = 0.5',
    prompt: 'Floats can be used to represent discounts or percentages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["John", "Alice", "Bob"] to a variable named team_members.' ,
    answer: 'team_members = ["John", "Alice", "Bob"]',
    prompt: 'Lists are ideal for storing names or collections of team members. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"city": "Paris", "country": "France"} to a variable named location_info.' ,
    answer: 'location_info = {"city": "Paris", "country": "France"}',
    prompt: 'Dictionaries are great for storing location-based information like cities and countries. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 12 to a variable named month.' ,
    answer: 'month = 12',
    prompt: 'Integers are useful for representing values like months or dates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 5.25 to a variable named total_amount.' ,
    answer: 'total_amount = 5.25',
    prompt: 'Floats are used for representing total amounts, especially with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "processing" to a variable named order_status.' ,
    answer: 'order_status = "processing"',
    prompt: 'Strings are often used to represent the current status of an order or task. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (10, 20, 30, 40) to a variable named numbers.' ,
    answer: 'numbers = (10, 20, 30, 40)',
    prompt: 'Tuples are great for storing fixed sequences of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30] to a variable named values_list.' ,
    answer: 'values_list = [10, 20, 30]',
    prompt: 'Lists are useful for storing sequences of values that can be changed or modified. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "user1", "password": "securePass"} to a variable named login_info.' ,
    answer: 'login_info = {"username": "user1", "password": "securePass"}',
    prompt: 'Dictionaries are ideal for storing login credentials like username and password. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "inactive" to a variable named activity_status.' ,
    answer: 'activity_status = "inactive"',
    prompt: 'Strings can indicate the status of activity, like active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 200 to a variable named user_score.' ,
    answer: 'user_score = 200',
    prompt: 'Integers are commonly used for representing scores, achievements, or counts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 7.89 to a variable named average_score.' ,
    answer: 'average_score = 7.89',
    prompt: 'Floats are useful for representing averages or scores with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["math", "science", "history"] to a variable named subjects_list.' ,
    answer: 'subjects_list = ["math", "science", "history"]',
    prompt: 'Lists are perfect for storing multiple items like subjects. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (50, 100, 150) to a variable named quantity_set.' ,
    answer: 'quantity_set = (50, 100, 150)',
    prompt: 'Tuples are ideal for storing fixed sets of values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "open" to a variable named ticket_status.' ,
    answer: 'ticket_status = "open"',
    prompt: 'Strings are great for representing states, like open or closed for tickets. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "car", "price": 20000} to a variable named product_details.' ,
    answer: 'product_details = {"name": "car", "price": 20000}',
    prompt: 'Dictionaries are useful for storing product details, such as name and price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 25 to a variable named days.' ,
    answer: 'days = 25',
    prompt: 'Integers are often used to store values related to days, counts, or quantities. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 4.56 to a variable named price_value.' ,
    answer: 'price_value = 4.56',
    prompt: 'Floats are useful for representing prices with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named number_list.' ,
    answer: 'number_list = [1, 2, 3, 4, 5]',
    prompt: 'Lists are ideal for storing ordered sequences of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("a", "b", "c") to a variable named alphabet_tuple.' ,
    answer: 'alphabet_tuple = ("a", "b", "c")',
    prompt: 'Tuples can store immutable collections, such as alphabet letters. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named status_type.' ,
    answer: 'status_type = "active"',
    prompt: 'Strings are perfect for representing the status of something, like active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "guest", "access": "limited"} to a variable named user_access.' ,
    answer: 'user_access = {"username": "guest", "access": "limited"}',
    prompt: 'Dictionaries are useful for mapping user credentials to access levels. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "grapes"] to a variable named fruits.' ,
    answer: 'fruits = ["apple", "banana", "grapes"]',
    prompt: 'Lists are perfect for storing collections like fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 45 to a variable named age_group.' ,
    answer: 'age_group = 45',
    prompt: 'Integers are commonly used to represent numerical values like age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.75 to a variable named percentage.' ,
    answer: 'percentage = 0.75',
    prompt: 'Floats are commonly used to represent percentages or decimal-based values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("green", "red", "blue") to a variable named color_palette.' ,
    answer: 'color_palette = ("green", "red", "blue")',
    prompt: 'Tuples are used for storing immutable collections like color palettes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [3.14, 2.71, 1.61] to a variable named constants.' ,
    answer: 'constants = [3.14, 2.71, 1.61]',
    prompt: 'Lists are useful for storing multiple constant values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "error occurred" to a variable named error_message.' ,
    answer: 'error_message = "error occurred"',
    prompt: 'Strings are often used to store descriptive error messages. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"car_model": "Tesla", "year": 2020} to a variable named car_details.' ,
    answer: 'car_details = {"car_model": "Tesla", "year": 2020}',
    prompt: 'Dictionaries are great for storing detailed information like car model and year. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 9.99 to a variable named price.' ,
    answer: 'price = 9.99',
    prompt: 'Floats are commonly used to represent prices or amounts with decimals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1000 to a variable named user_balance.' ,
    answer: 'user_balance = 1000',
    prompt: 'Integers are used to represent numerical values such as balance or count. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15, 20) to a variable named increments.' ,
    answer: 'increments = (5, 10, 15, 20)',
    prompt: 'Tuples are ideal for storing ordered values like increments. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "bird"] to a variable named animals.' ,
    answer: 'animals = ["dog", "cat", "bird"]',
    prompt: 'Lists are perfect for storing sequences of items like animals. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "complete" to a variable named task_status.' ,
    answer: 'task_status = "complete"',
    prompt: 'Strings are used to represent the state of a task, like complete or pending. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 500 to a variable named user_points.' ,
    answer: 'user_points = 500',
    prompt: 'Integers are often used to track points or score. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"product_id": 1234, "product_name": "headphones"} to a variable named product_info.' ,
    answer: 'product_info = {"product_id": 1234, "product_name": "headphones"}',
    prompt: 'Dictionaries are ideal for organizing product information like IDs and names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruit_basket.' ,
    answer: 'fruit_basket = ["apple", "banana", "cherry"]',
    prompt: 'Lists are useful for storing collections like a fruit basket. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named operation_status.' ,
    answer: 'operation_status = "success"',
    prompt: 'Strings can indicate the outcome of an operation, like success or failure. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 2.5 to a variable named multiplier.' ,
    answer: 'multiplier = 2.5',
    prompt: 'Floats are often used as multipliers or factors in calculations. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("red", "green", "blue") to a variable named primary_colors.' ,
    answer: 'primary_colors = ("red", "green", "blue")',
    prompt: 'Tuples are ideal for storing immutable collections of data like primary colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 60 to a variable named minutes.' ,
    answer: 'minutes = 60',
    prompt: 'Integers are commonly used to represent time values, like minutes or hours. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "in progress" to a variable named project_status.' ,
    answer: 'project_status = "in progress"',
    prompt: 'Strings are useful for tracking the status of ongoing projects. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.25 to a variable named fraction.' ,
    answer: 'fraction = 0.25',
    prompt: 'Floats can represent fractions or decimal values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [4, 8, 12, 16] to a variable named multiples_of_4.' ,
    answer: 'multiples_of_4 = [4, 8, 12, 16]',
    prompt: 'Lists are great for storing multiples or sequences of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Welcome to the course" to a variable named greeting_message.' ,
    answer: 'greeting_message = "Welcome to the course"',
    prompt: 'Strings are often used to display welcome messages or greetings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"first_name": "John", "last_name": "Doe"} to a variable named user_info.' ,
    answer: 'user_info = {"first_name": "John", "last_name": "Doe"}',
    prompt: 'Dictionaries can hold multiple pieces of information like first name and last name. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [10, 20, 30, 40] to a variable named even_numbers.' ,
    answer: 'even_numbers = [10, 20, 30, 40]',
    prompt: 'Lists can be used to store sequences of even numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 7.25 to a variable named item_weight.' ,
    answer: 'item_weight = 7.25',
    prompt: 'Floats are useful for storing values that represent measurements like weight. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 1 to a variable named success_code.' ,
    answer: 'success_code = 1',
    prompt: 'Integers are often used as status codes, with 1 typically indicating success. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("apple", "banana", "grapes") to a variable named fruits.' ,
    answer: 'fruits = ("apple", "banana", "grapes")',
    prompt: 'Tuples are great for storing ordered data, such as a list of fruits. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "active" to a variable named status.' ,
    answer: 'status = "active"',
    prompt: 'Strings can represent states or conditions, such as active or inactive. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 9 to a variable named level_number.' ,
    answer: 'level_number = 9',
    prompt: 'Integers are often used for numerical values, such as level numbers in games. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"name": "Sarah", "age": 30} to a variable named person_details.' ,
    answer: 'person_details = {"name": "Sarah", "age": 30}',
    prompt: 'Dictionaries are excellent for representing details about a person, like name and age. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 3.5 to a variable named height.' ,
    answer: 'height = 3.5',
    prompt: 'Floats are commonly used to store values like height or length. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [1, 2, 3, 4, 5] to a variable named numbers_list.' ,
    answer: 'numbers_list = [1, 2, 3, 4, 5]',
    prompt: 'Lists are useful for storing ordered sets of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Python Programming" to a variable named course_title.' ,
    answer: 'course_title = "Python Programming"',
    prompt: 'Strings are used to store the titles or names of courses. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"color": "blue", "shape": "circle"} to a variable named object_properties.' ,
    answer: 'object_properties = {"color": "blue", "shape": "circle"}',
    prompt: 'Dictionaries are great for storing attributes of objects, like color and shape. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 100 to a variable named threshold.' ,
    answer: 'threshold = 100',
    prompt: 'Integers can represent thresholds or limits, such as a maximum value. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["red", "green", "blue"] to a variable named colors.' ,
    answer: 'colors = ["red", "green", "blue"]',
    prompt: 'Lists are perfect for storing multiple items like colors. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "not found" to a variable named error_message.' ,
    answer: 'error_message = "not found"',
    prompt: 'Strings are useful for storing error messages or status updates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 0.99 to a variable named discount_rate.' ,
    answer: 'discount_rate = 0.99',
    prompt: 'Floats are commonly used to represent decimal values like discount rates. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 42 to a variable named answer.' ,
    answer: 'answer = 42',
    prompt: 'Integers can represent answers, such as to a question or problem. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "Hello, world!" to a variable named greeting.' ,
    answer: 'greeting = "Hello, world!"',
    prompt: 'Strings are often used for simple messages like greetings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (1, 2, 3, 4) to a variable named number_sequence.' ,
    answer: 'number_sequence = (1, 2, 3, 4)',
    prompt: 'Tuples are useful for storing an ordered collection of numbers. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["dog", "cat", "mouse"] to a variable named animals.' ,
    answer: 'animals = ["dog", "cat", "mouse"]',
    prompt: 'Lists are great for storing multiple items, such as animal names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 500 to a variable named max_limit.' ,
    answer: 'max_limit = 500',
    prompt: 'Integers are used for numerical limits, like maximum values. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "goodbye" to a variable named farewell.' ,
    answer: 'farewell = "goodbye"',
    prompt: 'Strings can store various messages like farewell notes. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"username": "admin", "password": "1234"} to a variable named login_details.' ,
    answer: 'login_details = {"username": "admin", "password": "1234"}',
    prompt: 'Dictionaries can store key-value pairs, such as login credentials. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 12.75 to a variable named item_price.' ,
    answer: 'item_price = 12.75',
    prompt: 'Floats are often used to represent prices, such as item prices. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list [3, 6, 9] to a variable named multiples_of_three.' ,
    answer: 'multiples_of_three = [3, 6, 9]',
    prompt: 'Lists are helpful for storing sequences of numbers, such as multiples. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 0 to a variable named failure_code.' ,
    answer: 'failure_code = 0',
    prompt: 'Integers can represent error or failure codes, with 0 indicating failure in some contexts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "completed" to a variable named status_message.' ,
    answer: 'status_message = "completed"',
    prompt: 'Strings can indicate the status of tasks, such as completed or pending. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"first_name": "Alice", "last_name": "Smith"} to a variable named employee_info.' ,
    answer: 'employee_info = {"first_name": "Alice", "last_name": "Smith"}',
    prompt: 'Dictionaries are useful for storing personal details, like employee information. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple ("January", "February", "March") to a variable named months.' ,
    answer: 'months = ("January", "February", "March")',
    prompt: 'Tuples are ideal for storing fixed collections of data, such as months. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the float 5.9 to a variable named height_in_meters.' ,
    answer: 'height_in_meters = 5.9',
    prompt: 'Floats can represent real-world measurements, like height in meters. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 250 to a variable named budget_amount.' ,
    answer: 'budget_amount = 250',
    prompt: 'Integers are useful for tracking numerical values like budget amounts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "warning" to a variable named alert_message.' ,
    answer: 'alert_message = "warning"',
    prompt: 'Strings can be used for messages or alerts, like warnings. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the list ["apple", "banana", "cherry"] to a variable named fruit_list.' ,
    answer: 'fruit_list = ["apple", "banana", "cherry"]',
    prompt: 'Lists are useful for storing multiple items, such as fruit names. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the integer 999 to a variable named high_score.' ,
    answer: 'high_score = 999',
    prompt: 'Integers can represent high scores in games or other contexts. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the string "success" to a variable named status_update.' ,
    answer: 'status_update = "success"',
    prompt: 'Strings can be used to update the status of a task or operation. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the dictionary {"item": "book", "price": 12.5} to a variable named product_info.' ,
    answer: 'product_info = {"item": "book", "price": 12.5}',
    prompt: 'Dictionaries are excellent for representing product information, like an item and its price. You may visit the learning material to review.'
    },
    {
    category: 'Assigning',
    question: 'Assign the tuple (5, 10, 15) to a variable named multiples_of_five.' ,
    answer: 'multiples_of_five = (5, 10, 15)',
    prompt: 'Tuples are useful for storing fixed collections of related data, like multiples of a number. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value 10 to a variable named score.',
        answer: 'score = 10',
        prompt: 'Use the equals sign to assign a value to a variable. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "John" to a variable named firstName.',
        answer: 'firstName = "John"',
        prompt: 'Strings should be enclosed in quotation marks when assigning to a variable. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 3.14 to a variable named pi.',
        answer: 'pi = 3.14',
        prompt: 'Float values include numbers with a decimal point. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False',
        prompt: 'Boolean values are either True or False. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 1, 2, and 3 to a variable named numbers.',
        answer: 'numbers = [1, 2, 3]',
        prompt: 'Lists are created using square brackets and can contain multiple values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named data.',
        answer: 'data = None',
        prompt: 'None represents the absence of a value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Python" to a variable named language.',
        answer: 'language = "Python"',
        prompt: 'Use quotation marks to define a string value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 100 to a variable named count.',
        answer: 'count = 100',
        prompt: 'Integers are whole numbers without a decimal point. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 20.5 to a variable named height.',
        answer: 'height = 20.5',
        prompt: 'Floats are numbers with a decimal point. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True',
        prompt: 'Boolean values help represent binary conditions. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 4, 5, 6 to a variable named points.',
        answer: 'points = (4, 5, 6)',
        prompt: 'Tuples are immutable and are created using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named items.',
        answer: 'items = []',
        prompt: 'Use empty square brackets to create an empty list. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "OpenAI" to a variable named company.',
        answer: 'company = "OpenAI"',
        prompt: 'Strings are enclosed in either single or double quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value -10 to a variable named temperature.',
        answer: 'temperature = -10',
        prompt: 'Integers can be positive, negative, or zero. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 0.0 to a variable named balance.',
        answer: 'balance = 0.0',
        prompt: 'A float can represent zero or non-zero decimal values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isLoggedIn.',
        answer: 'isLoggedIn = False',
        prompt: 'Booleans represent binary logic: True or False. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "car", "bike", and "bus" to a variable named vehicles.',
        answer: 'vehicles = ["car", "bike", "bus"]',
        prompt: 'Lists can contain strings, numbers, or other data types. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named user.',
        answer: 'user = None',
        prompt: 'None is a placeholder for no value or undefined value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Welcome" to a variable named greeting.',
        answer: 'greeting = "Welcome"',
        prompt: 'Strings represent text and should be in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 200 to a variable named maxScore.',
        answer: 'maxScore = 200',
        prompt: 'Integers are numeric values without decimals. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81',
        prompt: 'Floats are numbers with decimal points, often used for precise values like measurements. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True',
        prompt: 'Booleans represent binary states, True or False. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 7, 8, and 9 to a variable named coordinates.',
        answer: 'coordinates = [7, 8, 9]',
        prompt: 'Lists can hold multiple values, defined within square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named message.',
        answer: 'message = ""',
        prompt: 'An empty string is represented by two quotation marks without any characters inside. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "AI" to a variable named subject.',
        answer: 'subject = "AI"',
        prompt: 'Strings should be enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 50 to a variable named quantity.',
        answer: 'quantity = 50',
        prompt: 'Integers are whole numbers, defined without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1.618 to a variable named phi.',
        answer: 'phi = 1.618',
        prompt: 'Floats represent numbers with decimal points, useful for non-integer values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False',
        prompt: 'Boolean values help represent logical states, such as tasks being complete or incomplete. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "dog", "cat", and "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]',
        prompt: 'Lists can store multiple strings, each enclosed in quotation marks and separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named session.',
        answer: 'session = None',
        prompt: 'The None value represents the absence of a value or a null state. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "admin" to a variable named role.',
        answer: 'role = "admin"',
        prompt: 'Use quotation marks for strings and assign them to variables. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 0 to a variable named index.',
        answer: 'index = 0',
        prompt: 'Integers can include zero as a value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 12.34 to a variable named amount.',
        answer: 'amount = 12.34',
        prompt: 'Floats can be used to represent monetary or fractional values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPremium.',
        answer: 'isPremium = True',
        prompt: 'Booleans help indicate states, like whether a feature is active. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "red", "green", "blue" to a variable named colors.',
        answer: 'colors = ("red", "green", "blue")',
        prompt: 'Tuples are immutable collections of values, defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty dictionary to a variable named data.',
        answer: 'data = {}',
        prompt: 'Dictionaries can be empty initially, represented by curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "coding" to a variable named hobby.',
        answer: 'hobby = "coding"',
        prompt: 'Strings can describe actions, like "coding". Remember to enclose them in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 64 to a variable named bitRate.',
        answer: 'bitRate = 64',
        prompt: 'Integers can represent fixed values, such as a bit rate. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.99 to a variable named price.',
        answer: 'price = 99.99',
        prompt: 'Floats are ideal for representing prices or other decimal values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasAccess.',
        answer: 'hasAccess = False',
        prompt: 'Booleans help represent permission states, like whether access is granted or denied. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "January", "February", and "March" to a variable named months.',
        answer: 'months = ["January", "February", "March"]',
        prompt: 'Lists are collections of items enclosed in square brackets, separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named error.',
        answer: 'error = None',
        prompt: 'None is used to represent the absence of a value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Hello, World!" to a variable named phrase.',
        answer: 'phrase = "Hello, World!"',
        prompt: 'Strings should be enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42',
        prompt: 'Integers are whole numbers that don’t require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 45.67 to a variable named weight.',
        answer: 'weight = 45.67',
        prompt: 'Floats are numbers with decimals, often used for precise measurements. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isReady.',
        answer: 'isReady = True',
        prompt: 'Boolean values represent logical states, True or False. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 10, 20, and 30 to a variable named multiples.',
        answer: 'multiples = [10, 20, 30]',
        prompt: 'Lists are used to store multiple values within square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty set to a variable named ids.',
        answer: 'ids = set()',
        prompt: 'Sets are collections of unique items, and an empty set is initialized using set(). You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "developer" to a variable named jobTitle.',
        answer: 'jobTitle = "developer"',
        prompt: 'Strings are enclosed in quotation marks to represent text values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 500 to a variable named limit.',
        answer: 'limit = 500',
        prompt: 'Integers are whole numbers without decimal points. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 7.77 to a variable named average.',
        answer: 'average = 7.77',
        prompt: 'Floating-point numbers represent decimals for accurate calculations. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isEnabled.',
        answer: 'isEnabled = False',
        prompt: 'Boolean values help indicate whether something is enabled or disabled. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 4, 8, 12 to a variable named evens.',
        answer: 'evens = [4, 8, 12]',
        prompt: 'Lists allow storing multiple related values in one variable. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named result.',
        answer: 'result = None',
        prompt: 'None is used to define variables that have no value yet. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "test" to a variable named keyword.',
        answer: 'keyword = "test"',
        prompt: 'Strings are text enclosed in either single or double quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 250 to a variable named speed.',
        answer: 'speed = 250',
        prompt: 'Integers are ideal for representing whole numerical values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 123.456 to a variable named precision.',
        answer: 'precision = 123.456',
        prompt: 'Floats are used for numbers with decimals to represent precision. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isStudent.',
        answer: 'isStudent = True',
        prompt: 'Booleans represent states, such as whether a user is a student. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the strings "up", "down", "left", and "right" to a variable named directions.',
        answer: 'directions = ["up", "down", "left", "right"]',
        prompt: 'Lists can store multiple string values, each enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named status.',
        answer: 'status = None',
        prompt: 'Use None to indicate a variable that has no value assigned. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "earth" to a variable named planet.',
        answer: 'planet = "earth"',
        prompt: 'Strings are always enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 16 to a variable named square.',
        answer: 'square = 16',
        prompt: 'Integers are whole numbers without any need for quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 88.88 to a variable named discount.',
        answer: 'discount = 88.88',
        prompt: 'Floats are numbers with decimals. Assign them directly without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isEditable.',
        answer: 'isEditable = False',
        prompt: 'Booleans represent true/false states and don’t need quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the strings "html", "css", and "js" to a variable named techStack.',
        answer: 'techStack = ["html", "css", "js"]',
        prompt: 'Lists can store multiple string values, each enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named feedback.',
        answer: 'feedback = None',
        prompt: 'Assign None to indicate a variable with no value yet. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "guest" to a variable named userType.',
        answer: 'userType = "guest"',
        prompt: 'Use quotation marks to enclose string values. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 30 to a variable named length.',
        answer: 'length = 30',
        prompt: 'Whole numbers are integers and do not require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 6.022 to a variable named avogadro.',
        answer: 'avogadro = 6.022',
        prompt: 'Floating-point numbers have decimal points and are directly assigned. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPublished.',
        answer: 'isPublished = True',
        prompt: 'Booleans (True/False) are logical states assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 1, 2, 3 to a variable named coordinates.',
        answer: 'coordinates = (1, 2, 3)',
        prompt: 'Tuples are immutable collections, enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty tuple to a variable named emptyTuple.',
        answer: 'emptyTuple = ()',
        prompt: 'Use parentheses to create an empty tuple. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "password123" to a variable named password.',
        answer: 'password = "password123"',
        prompt: 'Strings are enclosed in quotation marks for textual data. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 99 to a variable named version.',
        answer: 'version = 99',
        prompt: 'Integers are whole numbers and do not use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 2.71 to a variable named e.',
        answer: 'e = 2.71',
        prompt: 'Floats include decimal points and are assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasPermission.',
        answer: 'hasPermission = False',
        prompt: 'Boolean values like False represent logical states and don’t need quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "first", "second", and "third" to a variable named positions.',
        answer: 'positions = ["first", "second", "third"]',
        prompt: 'Lists allow storing multiple strings enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named token.',
        answer: 'token = None',
        prompt: 'None signifies no value has been assigned yet. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Mars" to a variable named destination.',
        answer: 'destination = "Mars"',
        prompt: 'Strings, like "Mars", should be enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 5 to a variable named attempts.',
        answer: 'attempts = 5',
        prompt: 'Integers are whole numbers and can be assigned directly without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 0.01 to a variable named increment.',
        answer: 'increment = 0.01',
        prompt: 'Floating-point values include decimals and don’t require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True',
        prompt: 'Boolean values, like True, are logical states and don’t use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "red", "yellow", and "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ["red", "yellow", "blue"]',
        prompt: 'Lists are used to store multiple strings enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named log.',
        answer: 'log = None',
        prompt: 'Assign None to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 21 to a variable named age.',
        answer: 'age = 21',
        prompt: 'Whole numbers, or integers, do not require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Hello" to a variable named greeting.',
        answer: 'greeting = "Hello"',
        prompt: 'Strings should always be enclosed in double or single quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 7.5 to a variable named weight.',
        answer: 'weight = 7.5',
        prompt: 'Floats include decimals and are assigned directly without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isAdult.',
        answer: 'isAdult = False',
        prompt: 'Booleans, like False, are logical states and don’t require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 2, 4, 6, and 8 to a variable named evenNumbers.',
        answer: 'evenNumbers = [2, 4, 6, 8]',
        prompt: 'Lists can store multiple integers, enclosed in square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named email.',
        answer: 'email = None',
        prompt: 'Use None to indicate a variable that has no value assigned. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Python Programming" to a variable named course.',
        answer: 'course = "Python Programming"',
        prompt: 'Strings are enclosed in quotation marks to store textual data. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 300 to a variable named distance.',
        answer: 'distance = 300',
        prompt: 'Integers are assigned directly without using quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 15.75 to a variable named width.',
        answer: 'width = 15.75',
        prompt: 'Floating-point values are numbers with decimals and require no quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isCompleted.',
        answer: 'isCompleted = True',
        prompt: 'Boolean values, like True, represent logical states and don’t need quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 3, 5, and 7 to a variable named primeNumbers.',
        answer: 'primeNumbers = (3, 5, 7)',
        prompt: 'Tuples are immutable collections enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named queue.',
        answer: 'queue = []',
        prompt: 'Use square brackets to create an empty list. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Tesla" to a variable named carBrand.',
        answer: 'carBrand = "Tesla"',
        prompt: 'Strings, like "Tesla," should be enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value -50 to a variable named loss.',
        answer: 'loss = -50',
        prompt: 'Integers, even negative ones, are assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 100.1 to a variable named temperature.',
        answer: 'temperature = 100.1',
        prompt: 'Floating-point numbers are directly assigned without using quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False',
        prompt: 'Boolean values, like False, represent logical states and don’t require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "rose", "lily", and "daisy" to a variable named flowers.',
        answer: 'flowers = ["rose", "lily", "daisy"]',
        prompt: 'Lists can store multiple strings, each enclosed in quotation marks, separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named lastLogin.',
        answer: 'lastLogin = None',
        prompt: 'Assign None to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "MacBook" to a variable named device.',
        answer: 'device = "MacBook"',
        prompt: 'Strings should always be enclosed in double or single quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404',
        prompt: 'Integers are whole numbers and do not require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 89.99 to a variable named price.',
        answer: 'price = 89.99',
        prompt: 'Floating-point values include decimals and are directly assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPaid.',
        answer: 'isPaid = True',
        prompt: 'Boolean values, like True, are logical states and don’t use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing 11, 13, and 17 to a variable named primes.',
        answer: 'primes = [11, 13, 17]',
        prompt: 'Lists store multiple integers and are enclosed in square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named output.',
        answer: 'output = ""',
        prompt: 'An empty string is represented by two consecutive quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Laptop" to a variable named gadget.',
        answer: 'gadget = "Laptop"',
        prompt: 'Strings, like "Laptop," are enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1024 to a variable named memory.',
        answer: 'memory = 1024',
        prompt: 'Whole numbers are assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 12.12 to a variable named tax.',
        answer: 'tax = 12.12',
        prompt: 'Floating-point numbers include decimals and are assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False',
        prompt: 'Booleans, like False, represent logical states and don’t need quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "apple", "orange", and "grape" to a variable named fruitBasket.',
        answer: 'fruitBasket = ["apple", "orange", "grape"]',
        prompt: 'Lists can store multiple strings, each enclosed in quotes and separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named config.',
        answer: 'config = None',
        prompt: 'Use None to indicate a variable that has no value assigned. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Manager" to a variable named position.',
        answer: 'position = "Manager"',
        prompt: 'Strings are enclosed in quotation marks to represent textual data. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 888 to a variable named luckyNumber.',
        answer: 'luckyNumber = 888',
        prompt: 'Integers are assigned directly without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 45.6 to a variable named height.',
        answer: 'height = 45.6',
        prompt: 'Floats include decimals and are directly assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isCorrect.',
        answer: 'isCorrect = True',
        prompt: 'Boolean values, like True, represent logical states and do not use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "red", "blue", "yellow" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "blue", "yellow")',
        prompt: 'Tuples are immutable collections enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False',
        prompt: 'Boolean values, like False, represent logical states and don’t require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "rose", "lily", and "daisy" to a variable named flowers.',
        answer: 'flowers = ["rose", "lily", "daisy"]',
        prompt: 'Lists can store multiple strings, each enclosed in quotation marks, separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named lastLogin.',
        answer: 'lastLogin = None',
        prompt: 'Assign None to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "MacBook" to a variable named device.',
        answer: 'device = "MacBook"',
        prompt: 'Strings should always be enclosed in double or single quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404',
        prompt: 'Integers are whole numbers and do not require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 89.99 to a variable named price.',
        answer: 'price = 89.99',
        prompt: 'Floating-point values include decimals and are directly assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPaid.',
        answer: 'isPaid = True',
        prompt: 'Boolean values, like True, are logical states and don’t use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing 11, 13, and 17 to a variable named primes.',
        answer: 'primes = [11, 13, 17]',
        prompt: 'Lists store multiple integers and are enclosed in square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named output.',
        answer: 'output = ""',
        prompt: 'An empty string is represented by two consecutive quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Laptop" to a variable named gadget.',
        answer: 'gadget = "Laptop"',
        prompt: 'Strings, like "Laptop," are enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1024 to a variable named memory.',
        answer: 'memory = 1024',
        prompt: 'Whole numbers are assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 12.12 to a variable named tax.',
        answer: 'tax = 12.12',
        prompt: 'Floating-point numbers include decimals and are assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False',
        prompt: 'Booleans, like False, represent logical states and don’t need quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "apple", "orange", and "grape" to a variable named fruitBasket.',
        answer: 'fruitBasket = ["apple", "orange", "grape"]',
        prompt: 'Lists can store multiple strings, each enclosed in quotes and separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named config.',
        answer: 'config = None',
        prompt: 'Use None to indicate a variable that has no value assigned. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Manager" to a variable named position.',
        answer: 'position = "Manager"',
        prompt: 'Strings are enclosed in quotation marks to represent textual data. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 888 to a variable named luckyNumber.',
        answer: 'luckyNumber = 888',
        prompt: 'Integers are assigned directly without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 45.6 to a variable named height.',
        answer: 'height = 45.6',
        prompt: 'Floats include decimals and are directly assigned without quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isCorrect.',
        answer: 'isCorrect = True',
        prompt: 'Boolean values, like True, represent logical states and do not use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "red", "blue", "yellow" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "blue", "yellow")',
        prompt: 'Tuples are immutable collections enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 16 to a variable named byteSize.',
        answer: 'byteSize = 16',
        prompt: 'Integers, like 16, are whole numbers and do not require quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 18.9 to a variable named speed.',
        answer: 'speed = 18.9',
        prompt: 'Floating-point numbers include decimal points and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True',
        prompt: 'Boolean values, like True, represent logical states and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "rock", "paper", and "scissors" to a variable named gameChoices.',
        answer: 'gameChoices = ["rock", "paper", "scissors"]',
        prompt: 'Lists can store multiple items, and string items are enclosed in quotes within square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named lastActivity.',
        answer: 'lastActivity = None',
        prompt: 'Use None to indicate a variable with no assigned value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "testUser" to a variable named username.',
        answer: 'username = "testUser"',
        prompt: 'Strings, like "testUser," should always be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42',
        prompt: 'Integers, such as 42, are assigned without using quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 3.14159 to a variable named pi.',
        answer: 'pi = 3.14159',
        prompt: 'Floating-point numbers, like 3.14159, include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isVisible.',
        answer: 'isVisible = False',
        prompt: 'Boolean values, such as False, are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "dog", "cat", and "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]',
        prompt: 'Lists store multiple values and are enclosed in square brackets. String values within the list must be in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named sessionID.',
        answer: 'sessionID = None',
        prompt: 'The value None represents an uninitialized or null variable. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "chocolate" to a variable named favoriteFlavor.',
        answer: 'favoriteFlavor = "chocolate"',
        prompt: 'Strings should always be enclosed in single or double quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1000 to a variable named salary.',
        answer: 'salary = 1000',
        prompt: 'Integers are whole numbers and do not use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 29.99 to a variable named salePrice.',
        answer: 'salePrice = 29.99',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True',
        prompt: 'Boolean values, such as True, represent logical states and do not use quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the numbers 9, 8, and 7 to a variable named countdown.',
        answer: 'countdown = (9, 8, 7)',
        prompt: 'Tuples store multiple items and are defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named shoppingCart.',
        answer: 'shoppingCart = []',
        prompt: 'An empty list is created using square brackets: []. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "New York" to a variable named city.',
        answer: 'city = "New York"',
        prompt: 'Strings, such as "New York," should always be enclosed in quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 123 to a variable named productCode.',
        answer: 'productCode = 123',
        prompt: 'Integers are whole numbers that are assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 0.99 to a variable named taxRate.',
        answer: 'taxRate = 0.99',
        prompt: 'Floating-point numbers, like 0.99, include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isSubscribed.',
        answer: 'isSubscribed = False',
        prompt: 'Boolean values, like False, represent logical states and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "alpha", "beta", and "gamma" to a variable named greekLetters.',
        answer: 'greekLetters = ["alpha", "beta", "gamma"]',
        prompt: 'Lists store multiple items, and each string item must be enclosed in quotes within square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named lastUpdate.',
        answer: 'lastUpdate = None',
        prompt: 'Use None to represent an uninitialized or null value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "developer" to a variable named role.',
        answer: 'role = "developer"',
        prompt: 'Strings, like "developer," should always be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 7 to a variable named daysInWeek.',
        answer: 'daysInWeek = 7',
        prompt: 'Integers are whole numbers that do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 37.5 to a variable named bodyTemperature.',
        answer: 'bodyTemperature = 37.5',
        prompt: 'Floating-point numbers, like 37.5, include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True',
        prompt: 'Boolean values, such as True, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "Monday", "Tuesday", and "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ["Monday", "Tuesday", "Wednesday"]',
        prompt: 'Lists store multiple items, with strings enclosed in quotes inside square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty tuple to a variable named emptyCoordinates.',
        answer: 'emptyCoordinates = ()',
        prompt: 'An empty tuple is defined by parentheses: (). You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Sunset Boulevard" to a variable named street.',
        answer: 'street = "Sunset Boulevard"',
        prompt: 'Strings, like "Sunset Boulevard," should be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 64 to a variable named bits.',
        answer: 'bits = 64',
        prompt: 'Integers are whole numbers assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 88.7 to a variable named frequency.',
        answer: 'frequency = 88.7',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isRaining.',
        answer: 'isRaining = False',
        prompt: 'Boolean values, such as False, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "triangle", "square", and "circle" to a variable named shapes.',
        answer: 'shapes = ["triangle", "square", "circle"]',
        prompt: 'Lists store multiple values, with strings in quotes and items separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named cache.',
        answer: 'cache = None',
        prompt: 'The value None is used for variables with no assigned value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "diamond" to a variable named gem.',
        answer: 'gem = "diamond"',
        prompt: 'Strings, like "diamond," must be enclosed in single or double quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 8 to a variable named cores.',
        answer: 'cores = 8',
        prompt: 'Integers, such as 8, are assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 120.5 to a variable named speedLimit.',
        answer: 'speedLimit = 120.5',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isOn.',
        answer: 'isOn = True',
        prompt: 'Boolean values, such as True, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the letters "a", "b", and "c" to a variable named alphabet.',
        answer: 'alphabet = ("a", "b", "c")',
        prompt: 'Tuples store multiple items in parentheses, with strings enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty dictionary to a variable named phoneBook.',
        answer: 'phoneBook = {}',
        prompt: 'Dictionaries are defined using curly braces: {}. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "2024" to a variable named year.',
        answer: 'year = "2024"',
        prompt: 'Strings, such as "2024," should be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 15 to a variable named ageLimit.',
        answer: 'ageLimit = 15',
        prompt: 'Integers, such as 15, are whole numbers and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 4.0 to a variable named gpa.',
        answer: 'gpa = 4.0',
        prompt: 'Floating-point numbers include a decimal point and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False',
        prompt: 'Boolean values, like False, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "fork", "knife", and "spoon" to a variable named utensils.',
        answer: 'utensils = ["fork", "knife", "spoon"]',
        prompt: 'Lists store multiple items, with strings enclosed in quotes inside square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named reference.',
        answer: 'reference = None',
        prompt: 'Use None to indicate a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "administrator" to a variable named userRole.',
        answer: 'userRole = "administrator"',
        prompt: 'Strings should always be enclosed in single or double quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 9 to a variable named lives.',
        answer: 'lives = 9',
        prompt: 'Integers are whole numbers assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 2.5 to a variable named interestRate.',
        answer: 'interestRate = 2.5',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isProcessing.',
        answer: 'isProcessing = True',
        prompt: 'Boolean values, like True, are logical states and not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 10, 20, 30, and 40 to a variable named multiplesOfTen.',
        answer: 'multiplesOfTen = [10, 20, 30, 40]',
        prompt: 'Lists store multiple values in square brackets, separated by commas. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named placeholder.',
        answer: 'placeholder = ""',
        prompt: 'Strings, even empty ones, must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "rock" to a variable named musicGenre.',
        answer: 'musicGenre = "rock"',
        prompt: 'Strings, like "rock," should be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 44 to a variable named jerseyNumber.',
        answer: 'jerseyNumber = 44',
        prompt: 'Integers are whole numbers assigned without quotation marks. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 13.75 to a variable named density.',
        answer: 'density = 13.75',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isVerified.',
        answer: 'isVerified = False',
        prompt: 'Boolean values, like False, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "Homer", "Bart", and "Lisa" to a variable named simpsonsFamily.',
        answer: 'simpsonsFamily = ["Homer", "Bart", "Lisa"]',
        prompt: 'Lists store multiple items, with strings enclosed in quotes inside square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named subscription.',
        answer: 'subscription = None',
        prompt: 'None is used to signify a variable without a value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "admin" to a variable named accountType.',
        answer: 'accountType = "admin"',
        prompt: 'Strings must be enclosed in quotes, whether single or double. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 90 to a variable named angle.',
        answer: 'angle = 90',
        prompt: 'Integers like 90 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 55.55 to a variable named humidity.',
        answer: 'humidity = 55.55',
        prompt: 'Floating-point numbers like 55.55 include a decimal point and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isSignedIn.',
        answer: 'isSignedIn = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 5, 10, 15 to a variable named multiplesOfFive.',
        answer: 'multiplesOfFive = (5, 10, 15)',
        prompt: 'Tuples are ordered collections and are defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty set to a variable named uniqueVisitors.',
        answer: 'uniqueVisitors = set()',
        prompt: 'Sets are collections of unique values defined using set(). You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "California" to a variable named state.',
        answer: 'state = "California"',
        prompt: 'Strings are enclosed in quotes, such as "California." You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 255 to a variable named maxColorValue.',
        answer: 'maxColorValue = 255',
        prompt: 'Integers like 255 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 4.8 to a variable named rating.',
        answer: 'rating = 4.8',
        prompt: 'Floating-point numbers like 4.8 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasPassword.',
        answer: 'hasPassword = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "C", "C++", "Python" to a variable named programmingLanguages.',
        answer: 'programmingLanguages = ["C", "C++", "Python"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named currentTask.',
        answer: 'currentTask = None',
        prompt: 'None is used to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "5.1.0" to a variable named version.',
        answer: 'version = "5.1.0"',
        prompt: 'Strings, like "5.1.0," are enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365',
        prompt: 'Integers are whole numbers and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 98.6 to a variable named normalBodyTemperature.',
        answer: 'normalBodyTemperature = 98.6',
        prompt: 'Floating-point numbers like 98.6 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasLicense.',
        answer: 'hasLicense = True',
        prompt: 'Boolean values, like True, represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 1, 2, and 3 to a variable named primeNumbers.',
        answer: 'primeNumbers = (1, 2, 3)',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named emptyQueue.',
        answer: 'emptyQueue = []',
        prompt: 'Lists are ordered collections defined using square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "password123" to a variable named userPassword.',
        answer: 'userPassword = "password123"',
        prompt: 'Strings like "password123" must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 50 to a variable named halfCentury.',
        answer: 'halfCentury = 50',
        prompt: 'Integers like 50 are whole numbers and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 76.45 to a variable named latitude.',
        answer: 'latitude = 76.45',
        prompt: 'Floating-point numbers include decimals and do not require quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasError.',
        answer: 'hasError = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "apple", "banana", and "orange" to a variable named fruits.',
        answer: 'fruits = ["apple", "banana", "orange"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named nextItem.',
        answer: 'nextItem = None',
        prompt: 'None is used to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "error" to a variable named status.',
        answer: 'status = "error"',
        prompt: 'Strings, like "error," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 8080 to a variable named port.',
        answer: 'port = 8080',
        prompt: 'Integers like 8080 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.99 to a variable named discount.',
        answer: 'discount = 99.99',
        prompt: 'Floating-point numbers like 99.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isEnabled.',
        answer: 'isEnabled = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "red", "green", and "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "green", "blue")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty set to a variable named emptyCollection.',
        answer: 'emptyCollection = set()',
        prompt: 'Sets are collections of unique elements defined using set(). You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Machine Learning" to a variable named course.',
        answer: 'course = "Machine Learning"',
        prompt: 'Strings, like "Machine Learning," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 150 to a variable named weight.',
        answer: 'weight = 150',
        prompt: 'Integers like 150 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 72.34 to a variable named altitude.',
        answer: 'altitude = 72.34',
        prompt: 'Floating-point numbers like 72.34 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isCompleted.',
        answer: 'isCompleted = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 2, 4, 6, and 8 to a variable named evenNumbers.',
        answer: 'evenNumbers = [2, 4, 6, 8]',
        prompt: 'Lists store multiple items inside square brackets. Numbers are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty dictionary to a variable named studentData.',
        answer: 'studentData = {}',
        prompt: 'Dictionaries store key-value pairs and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Python" to a variable named favoriteLanguage.',
        answer: 'favoriteLanguage = "Python"',
        prompt: 'Strings, like "Python," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 30 to a variable named minutes.',
        answer: 'minutes = 30',
        prompt: 'Integers like 30 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 15.99 to a variable named subscriptionFee.',
        answer: 'subscriptionFee = 15.99',
        prompt: 'Floating-point numbers like 15.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isLoggedIn.',
        answer: 'isLoggedIn = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the elements "red", "blue", and "yellow" to a variable named colors.',
        answer: 'colors = ("red", "blue", "yellow")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the elements 3, 6, and 9 to a variable named multiplesOfThree.',
        answer: 'multiplesOfThree = {3, 6, 9}',
        prompt: 'Sets contain unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Google" to a variable named company.',
        answer: 'company = "Google"',
        prompt: 'Strings, like "Google," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 500 to a variable named maxPoints.',
        answer: 'maxPoints = 500',
        prompt: 'Integers like 500 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 67.89 to a variable named weightInKg.',
        answer: 'weightInKg = 67.89',
        prompt: 'Floating-point numbers like 67.89 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isArchived.',
        answer: 'isArchived = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the strings "car", "bike", and "train" to a variable named transportModes.',
        answer: 'transportModes = ["car", "bike", "train"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named temporaryInput.',
        answer: 'temporaryInput = ""',
        prompt: 'An empty string is represented by two quotes with nothing between them. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "admin" to a variable named accessLevel.',
        answer: 'accessLevel = "admin"',
        prompt: 'Strings, like "admin," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 120 to a variable named frameRate.',
        answer: 'frameRate = 120',
        prompt: 'Integers like 120 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81',
        prompt: 'Floating-point numbers like 9.81 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPublic.',
        answer: 'isPublic = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 1990, 2000, and 2010 to a variable named years.',
        answer: 'years = (1990, 2000, 2010)',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the elements "oak", "maple", and "pine" to a variable named treeTypes.',
        answer: 'treeTypes = ["oak", "maple", "pine"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Tesla" to a variable named carBrand.',
        answer: 'carBrand = "Tesla"',
        prompt: 'Strings, like "Tesla," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 256 to a variable named blockSize.',
        answer: 'blockSize = 256',
        prompt: 'Integers like 256 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 22.22 to a variable named growthRate.',
        answer: 'growthRate = 22.22',
        prompt: 'Floating-point numbers like 22.22 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isDeprecated.',
        answer: 'isDeprecated = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the elements "north", "east", "west" to a variable named directions.',
        answer: 'directions = {"north", "east", "west"}',
        prompt: 'Sets contain unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named userSession.',
        answer: 'userSession = None',
        prompt: 'None is used to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "puzzle" to a variable named gameType.',
        answer: 'gameType = "puzzle"',
        prompt: 'Strings, like "puzzle," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 400 to a variable named maximumRetries.',
        answer: 'maximumRetries = 400',
        prompt: 'Integers like 400 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 1.618',
        prompt: 'Floating-point numbers like 1.618 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPrimary.',
        answer: 'isPrimary = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the elements "x", "y", and "z" to a variable named axes.',
        answer: 'axes = ("x", "y", "z")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "English", "Math", and "Science" to a variable named subjects.',
        answer: 'subjects = ["English", "Math", "Science"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Success" to a variable named responseMessage.',
        answer: 'responseMessage = "Success"',
        prompt: 'Strings, like "Success," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 48 to a variable named hoursInTwoDays.',
        answer: 'hoursInTwoDays = 48',
        prompt: 'Integers like 48 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.999 to a variable named accuracy.',
        answer: 'accuracy = 99.999',
        prompt: 'Floating-point numbers like 99.999 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasAdminPrivileges.',
        answer: 'hasAdminPrivileges = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "January", "February", and "March" to a variable named firstQuarterMonths.',
        answer: 'firstQuarterMonths = ["January", "February", "March"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "yes" to a variable named confirmation.',
        answer: 'confirmation = "yes"',
        prompt: 'Strings, like "yes," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 20 to a variable named classSize.',
        answer: 'classSize = 20',
        prompt: 'Integers like 20 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 8.23 to a variable named fuelEfficiency.',
        answer: 'fuelEfficiency = 8.23',
        prompt: 'Floating-point numbers like 8.23 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isanswerCorrect.',
        answer: 'isanswerCorrect = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the values 4, 5, 6 to a variable named boxDimensions.',
        answer: 'boxDimensions = (4, 5, 6)',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "A", "B", "C" to a variable named grades.',
        answer: 'grades = {"A", "B", "C"}',
        prompt: 'Sets contain unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named backupFile.',
        answer: 'backupFile = None',
        prompt: 'None is used to represent a variable with no value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "New York" to a variable named city.',
        answer: 'city = "New York"',
        prompt: 'Strings, like "New York," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 10 to a variable named score.',
        answer: 'score = 10',
        prompt: 'Integers like 10 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 29.76 to a variable named price.',
        answer: 'price = 29.76',
        prompt: 'Floating-point numbers like 29.76 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasPassed.',
        answer: 'hasPassed = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "soccer", "basketball", and "tennis" to a variable named sports.',
        answer: 'sports = ["soccer", "basketball", "tennis"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty tuple to a variable named coordinates.',
        answer: 'coordinates = ()',
        prompt: 'Tuples are ordered collections defined using parentheses. An empty tuple has no elements inside. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Cloud Computing" to a variable named subject.',
        answer: 'subject = "Cloud Computing"',
        prompt: 'Strings, like "Cloud Computing," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 360 to a variable named degrees.',
        answer: 'degrees = 360',
        prompt: 'Integers like 360 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1234.56 to a variable named accountBalance.',
        answer: 'accountBalance = 1234.56',
        prompt: 'Floating-point numbers like 1234.56 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isSubscribed.',
        answer: 'isSubscribed = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "name" and "age" and values "Bob" and 25 to a variable named userInfo.',
        answer: 'userInfo = {"name": "Bob", "age": 25}',
        prompt: 'Dictionaries store key-value pairs inside curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "water" to a variable named beverage.',
        answer: 'beverage = "water"',
        prompt: 'Strings, like "water," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 7000 to a variable named distanceInMeters.',
        answer: 'distanceInMeters = 7000',
        prompt: 'Integers like 7000 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 100.25 to a variable named transactionAmount.',
        answer: 'transactionAmount = 100.25',
        prompt: 'Floating-point numbers like 100.25 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "gold", "silver", and "bronze" to a variable named medals.',
        answer: 'medals = ["gold", "silver", "bronze"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "Monday", "Tuesday", and "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ("Monday", "Tuesday", "Wednesday")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Einstein" to a variable named scientist.',
        answer: 'scientist = "Einstein"',
        prompt: 'Strings, like "Einstein," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 2048 to a variable named maxStorage.',
        answer: 'maxStorage = 2048',
        prompt: 'Integers like 2048 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 5.55 to a variable named taxRate.',
        answer: 'taxRate = 5.55',
        prompt: 'Floating-point numbers like 5.55 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isStudent.',
        answer: 'isStudent = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "title" and "author" and values "1984" and "George Orwell" to a variable named book.',
        answer: 'book = {"title": "1984", "author": "George Orwell"}',
        prompt: 'Dictionaries store key-value pairs inside curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "biology" to a variable named major.',
        answer: 'major = "biology"',
        prompt: 'Strings, like "biology," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 75 to a variable named age.',
        answer: 'age = 75',
        prompt: 'Integers like 75 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 8.88 to a variable named discount.',
        answer: 'discount = 8.88',
        prompt: 'Floating-point numbers like 8.88 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the elements "circle", "square", and "triangle" to a variable named shapes.',
        answer: 'shapes = {"circle", "square", "triangle"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty dictionary to a variable named productCatalog.',
        answer: 'productCatalog = {}',
        prompt: 'Dictionaries store key-value pairs and are defined using curly braces. An empty dictionary has no key-value pairs. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "teacher" to a variable named occupation.',
        answer: 'occupation = "teacher"',
        prompt: 'Strings, like "teacher," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 980 to a variable named followers.',
        answer: 'followers = 980',
        prompt: 'Integers like 980 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 45.67 to a variable named percentage.',
        answer: 'percentage = 45.67',
        prompt: 'Floating-point numbers like 45.67 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasCoupon.',
        answer: 'hasCoupon = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the values "sun", "moon", and "stars" to a variable named celestialBodies.',
        answer: 'celestialBodies = ["sun", "moon", "stars"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing 128, 256, and 512 to a variable named memorySizes.',
        answer: 'memorySizes = (128, 256, 512)',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "sword" to a variable named weapon.',
        answer: 'weapon = "sword"',
        prompt: 'Strings, like "sword," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 37 to a variable named heartRate.',
        answer: 'heartRate = 37',
        prompt: 'Integers like 37 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 101.01 to a variable named shippingCost.',
        answer: 'shippingCost = 101.01',
        prompt: 'Floating-point numbers like 101.01 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the elements 5, 10, and 15 to a variable named steps.',
        answer: 'steps = {5, 10, 15}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the value None to a variable named pendingOrder.',
        answer: 'pendingOrder = None',
        prompt: 'None is a special value in Python used to represent the absence of a value. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "administrator" to a variable named role.',
        answer: 'role = "administrator"',
        prompt: 'Strings, like "administrator," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 255 to a variable named colorDepth.',
        answer: 'colorDepth = 255',
        prompt: 'Integers like 255 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 13.14 to a variable named averageScore.',
        answer: 'averageScore = 13.14',
        prompt: 'Floating-point numbers like 13.14 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isConfirmed.',
        answer: 'isConfirmed = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "username" and "password" and values "user123" and "pass123" to a variable named loginCredentials.',
        answer: 'loginCredentials = {"username": "user123", "password": "pass123"}',
        prompt: 'Dictionaries store key-value pairs, and keys/values are separated by a colon. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "mobile" to a variable named deviceType.',
        answer: 'deviceType = "mobile"',
        prompt: 'Strings, like "mobile," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1024 to a variable named dataLimit.',
        answer: 'dataLimit = 1024',
        prompt: 'Integers like 1024 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 77.77 to a variable named jackpot.',
        answer: 'jackpot = 77.77',
        prompt: 'Floating-point numbers like 77.77 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isPremium.',
        answer: 'isPremium = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "Python" to a variable named language.',
        answer: 'language = "Python"',
        prompt: 'Strings, like "Python," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 200 to a variable named speed.',
        answer: 'speed = 200',
        prompt: 'Integers like 200 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 3.14159 to a variable named pi.',
        answer: 'pi = 3.14159',
        prompt: 'Floating-point numbers like 3.14159 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "red", "green", "blue" to a variable named colors.',
        answer: 'colors = ["red", "green", "blue"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "Rome", "Paris", "Berlin" to a variable named cities.',
        answer: 'cities = ("Rome", "Paris", "Berlin")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "data science" to a variable named field.',
        answer: 'field = "data science"',
        prompt: 'Strings, like "data science," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 7 to a variable named daysOfWeek.',
        answer: 'daysOfWeek = 7',
        prompt: 'Integers like 7 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.99 to a variable named totalAmount.',
        answer: 'totalAmount = 99.99',
        prompt: 'Floating-point numbers like 99.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the values "apple", "banana", "orange" to a variable named fruits.',
        answer: 'fruits = {"apple", "banana", "orange"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named shoppingCart.',
        answer: 'shoppingCart = []',
        prompt: 'An empty list contains no elements and is defined using square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "mountain" to a variable named terrain.',
        answer: 'terrain = "mountain"',
        prompt: 'Strings, like "mountain," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 144 to a variable named squareNumber.',
        answer: 'squareNumber = 144',
        prompt: 'Integers like 144 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 42.42 to a variable named percentageCompleted.',
        answer: 'percentageCompleted = 42.42',
        prompt: 'Floating-point numbers like 42.42 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named hasLicense.',
        answer: 'hasLicense = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "cat", "dog", "rabbit" to a variable named pets.',
        answer: 'pets = ["cat", "dog", "rabbit"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "January", "February", "March" to a variable named months.',
        answer: 'months = ("January", "February", "March")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "electric" to a variable named carType.',
        answer: 'carType = "electric"',
        prompt: 'Strings, like "electric," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 180 to a variable named angle.',
        answer: 'angle = 180',
        prompt: 'Integers like 180 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 9.87 to a variable named score.',
        answer: 'score = 9.87',
        prompt: 'Floating-point numbers like 9.87 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "country" and "capital" and values "Italy" and "Rome" to a variable named countryInfo.',
        answer: 'countryInfo = {"country": "Italy", "capital": "Rome"}',
        prompt: 'Dictionaries store key-value pairs, and keys/values are separated by a colon. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "puzzle" to a variable named gameType.',
        answer: 'gameType = "puzzle"',
        prompt: 'Strings, like "puzzle," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 20 to a variable named ageLimit.',
        answer: 'ageLimit = 20',
        prompt: 'Integers like 20 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 65.43 to a variable named batteryPercentage.',
        answer: 'batteryPercentage = 65.43',
        prompt: 'Floating-point numbers like 65.43 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isRaining.',
        answer: 'isRaining = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the elements "north", "south", "east", "west" to a variable named directions.',
        answer: 'directions = {"north", "south", "east", "west"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty tuple to a variable named emptyData.',
        answer: 'emptyData = ()',
        prompt: 'An empty tuple contains no elements and is defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "climate change" to a variable named topic.',
        answer: 'topic = "climate change"',
        prompt: 'Strings, like "climate change," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 800 to a variable named resolution.',
        answer: 'resolution = 800',
        prompt: 'Integers like 800 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 250.50 to a variable named finalCost.',
        answer: 'finalCost = 250.50',
        prompt: 'Floating-point numbers like 250.50 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isSecure.',
        answer: 'isSecure = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the values 1, 2, 3, 4 to a variable named numbers.',
        answer: 'numbers = [1, 2, 3, 4]',
        prompt: 'Lists store multiple items inside square brackets. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "alpha", "beta", "gamma" to a variable named greekLetters.',
        answer: 'greekLetters = ("alpha", "beta", "gamma")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "tea" to a variable named favoriteDrink.',
        answer: 'favoriteDrink = "tea"',
        prompt: 'Strings, like "tea," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1001 to a variable named userId.',
        answer: 'userId = 1001',
        prompt: 'Integers like 1001 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 0.99 to a variable named probability.',
        answer: 'probability = 0.99',
        prompt: 'Floating-point numbers like 0.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isHidden.',
        answer: 'isHidden = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the values "rock", "paper", "scissors" to a variable named gameOptions.',
        answer: 'gameOptions = {"rock", "paper", "scissors"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "first_name" and "last_name" and values "John" and "Doe" to a variable named userProfile.',
        answer: 'userProfile = {"first_name": "John", "last_name": "Doe"}',
        prompt: 'Dictionaries store key-value pairs, and keys/values are separated by a colon. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "desert" to a variable named ecosystem.',
        answer: 'ecosystem = "desert"',
        prompt: 'Strings, like "desert," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404',
        prompt: 'Integers like 404 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 12.34 to a variable named costPerUnit.',
        answer: 'costPerUnit = 12.34',
        prompt: 'Floating-point numbers like 12.34 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasPermission.',
        answer: 'hasPermission = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the values "sunny", "rainy", "cloudy" to a variable named weatherConditions.',
        answer: 'weatherConditions = ["sunny", "rainy", "cloudy"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "one", "two", "three" to a variable named numbersAsWords.',
        answer: 'numbersAsWords = ("one", "two", "three")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "developer" to a variable named jobTitle.',
        answer: 'jobTitle = "developer"',
        prompt: 'Strings, like "developer," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 500 to a variable named maxScore.',
        answer: 'maxScore = 500',
        prompt: 'Integers like 500 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 8.88 to a variable named rating.',
        answer: 'rating = 8.88',
        prompt: 'Floating-point numbers like 8.88 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isConnected.',
        answer: 'isConnected = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "summer", "winter", "spring" to a variable named seasons.',
        answer: 'seasons = {"summer", "winter", "spring"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty dictionary to a variable named emptyMap.',
        answer: 'emptyMap = {}',
        prompt: 'An empty dictionary contains no key-value pairs and is defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "administrator" to a variable named role.',
        answer: 'role = "administrator"',
        prompt: 'Strings, like "administrator," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 32 to a variable named temperature.',
        answer: 'temperature = 32',
        prompt: 'Integers like 32 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1234.56 to a variable named balance.',
        answer: 'balance = 1234.56',
        prompt: 'Floating-point numbers like 1234.56 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "Sun", "Moon", "Earth" to a variable named celestialBodies.',
        answer: 'celestialBodies = ("Sun", "Moon", "Earth")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing the numbers 10, 20, 30, 40, 50 to a variable named scores.',
        answer: 'scores = [10, 20, 30, 40, 50]',
        prompt: 'Lists store multiple items inside square brackets, with numbers not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "chocolate" to a variable named flavor.',
        answer: 'flavor = "chocolate"',
        prompt: 'Strings, like "chocolate," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 64 to a variable named totalItems.',
        answer: 'totalItems = 64',
        prompt: 'Integers like 64 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 7.23 to a variable named hourlyRate.',
        answer: 'hourlyRate = 7.23',
        prompt: 'Floating-point numbers like 7.23 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isPublic.',
        answer: 'isPublic = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "A", "B", "C" to a variable named gradeSet.',
        answer: 'gradeSet = {"A", "B", "C"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty string to a variable named emptyText.',
        answer: 'emptyText = ""',
        prompt: 'An empty string contains no characters and is defined with two quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "sunflower" to a variable named favoriteFlower.',
        answer: 'favoriteFlower = "sunflower"',
        prompt: 'Strings, like "sunflower," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 2024 to a variable named year.',
        answer: 'year = 2024',
        prompt: 'Integers like 2024 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 15.55 to a variable named discount.',
        answer: 'discount = 15.55',
        prompt: 'Floating-point numbers like 15.55 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isComplete.',
        answer: 'isComplete = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "bread", "butter", "jam" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["bread", "butter", "jam"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "Africa", "Asia", "Europe" to a variable named continents.',
        answer: 'continents = ("Africa", "Asia", "Europe")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "triangle" to a variable named shape.',
        answer: 'shape = "triangle"',
        prompt: 'Strings, like "triangle," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 90 to a variable named degree.',
        answer: 'degree = 90',
        prompt: 'Integers like 90 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.01 to a variable named testScore.',
        answer: 'testScore = 99.01',
        prompt: 'Floating-point numbers like 99.01 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isVerified.',
        answer: 'isVerified = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "username" and "email" and values "user123" and "user@example.com" to a variable named userInfo.',
        answer: 'userInfo = {"username": "user123", "email": "user@example.com"}',
        prompt: 'Dictionaries are collections of key-value pairs enclosed in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "sunny" to a variable named weather.',
        answer: 'weather = "sunny"',
        prompt: 'Strings, like "sunny," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 25 to a variable named grade.',
        answer: 'grade = 25',
        prompt: 'Integers like 25 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 11.11 to a variable named pricePerUnit.',
        answer: 'pricePerUnit = 11.11',
        prompt: 'Floating-point numbers like 11.11 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isVisible.',
        answer: 'isVisible = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "admin", "editor", "viewer" to a variable named userRoles.',
        answer: 'userRoles = {"admin", "editor", "viewer"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign an empty list to a variable named availableSlots.',
        answer: 'availableSlots = []',
        prompt: 'An empty list is defined with square brackets and contains no elements. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "rectangle" to a variable named geometry.',
        answer: 'geometry = "rectangle"',
        prompt: 'Strings, like "rectangle," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 75 to a variable named percentage.',
        answer: 'percentage = 75',
        prompt: 'Integers like 75 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 22.22 to a variable named taxAmount.',
        answer: 'taxAmount = 22.22',
        prompt: 'Floating-point numbers like 22.22 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "first_name" and "age" and values "Emily" and 30 to a variable named person.',
        answer: 'person = {"first_name": "Emily", "age": 30}',
        prompt: 'Dictionaries are collections of key-value pairs enclosed in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "project" to a variable named taskType.',
        answer: 'taskType = "project"',
        prompt: 'Strings, like "project," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1800 to a variable named sales.',
        answer: 'sales = 1800',
        prompt: 'Integers like 1800 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 300.75 to a variable named bonus.',
        answer: 'bonus = 300.75',
        prompt: 'Floating-point numbers like 300.75 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "Toyota", "Ford", "BMW" to a variable named carBrands.',
        answer: 'carBrands = ["Toyota", "Ford", "BMW"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "north", "south", "west" to a variable named directions.',
        answer: 'directions = ("north", "south", "west")',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "apple" to a variable named fruit.',
        answer: 'fruit = "apple"',
        prompt: 'Strings, like "apple," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "unicorn" to a variable named mythicalAnimal.',
        answer: 'mythicalAnimal = "unicorn"',
        prompt: 'Strings, like "unicorn," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 144 to a variable named fibonacciNumber.',
        answer: 'fibonacciNumber = 144',
        prompt: 'Integers like 144 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 3.1416 to a variable named piApproximation.',
        answer: 'piApproximation = 3.1416',
        prompt: 'Floating-point numbers like 3.1416 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named hasPermission.',
        answer: 'hasPermission = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "January", "February", "March" to a variable named firstQuarter.',
        answer: 'firstQuarter = ["January", "February", "March"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "model" and "year" and values "Tesla" and 2020 to a variable named car.',
        answer: 'car = {"model": "Tesla", "year": 2020}',
        prompt: 'Dictionaries are collections of key-value pairs enclosed in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "rose" to a variable named favoritePlant.',
        answer: 'favoritePlant = "rose"',
        prompt: 'Strings, like "rose," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404',
        prompt: 'Integers like 404 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 299.99 to a variable named laptopPrice.',
        answer: 'laptopPrice = 299.99',
        prompt: 'Floating-point numbers like 299.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isDebugMode.',
        answer: 'isDebugMode = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the numbers 1, 4, and 9 to a variable named squares.',
        answer: 'squares = (1, 4, 9)',
        prompt: 'Tuples are ordered collections defined using parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "dog", "cat", "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "constellation" to a variable named skyFeature.',
        answer: 'skyFeature = "constellation"',
        prompt: 'Strings, like "constellation," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1024 to a variable named fileSize.',
        answer: 'fileSize = 1024',
        prompt: 'Integers like 1024 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 1.618',
        prompt: 'Floating-point numbers like 1.618 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isLightOn.',
        answer: 'isLightOn = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing the values 5, 10, and 15 to a variable named multiplesOfFive.',
        answer: 'multiplesOfFive = {5, 10, 15}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "python" to a variable named programmingLanguage.',
        answer: 'programmingLanguage = "python"',
        prompt: 'Strings, like "python," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 12 to a variable named hoursInDay.',
        answer: 'hoursInDay = 12',
        prompt: 'Integers like 12 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 32.78 to a variable named averageTemperature.',
        answer: 'averageTemperature = 32.78',
        prompt: 'Floating-point numbers like 32.78 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isWindowOpen.',
        answer: 'isWindowOpen = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "circle", "square", "triangle" to a variable named shapes.',
        answer: 'shapes = ("circle", "square", "triangle")',
        prompt: 'Tuples store multiple items, similar to lists, but they are immutable and enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "username" and "password" and values "user123" and "pass123" to a variable named credentials.',
        answer: 'credentials = {"username": "user123", "password": "pass123"}',
        prompt: 'Dictionaries store key-value pairs in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "fall" to a variable named season.',
        answer: 'season = "fall"',
        prompt: 'Strings, like "fall," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 2025 to a variable named nextYear.',
        answer: 'nextYear = 2025',
        prompt: 'Integers like 2025 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 88.88 to a variable named luckyNumber.',
        answer: 'luckyNumber = 88.88',
        prompt: 'Floating-point numbers like 88.88 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "pencil", "pen", "eraser" to a variable named stationeryItems.',
        answer: 'stationeryItems = ["pencil", "pen", "eraser"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "Facebook", "Twitter", "Instagram" to a variable named socialMedia.',
        answer: 'socialMedia = {"Facebook", "Twitter", "Instagram"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "midnight" to a variable named timeOfDay.',
        answer: 'timeOfDay = "midnight"',
        prompt: 'Strings, like "midnight," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 1000 to a variable named population.',
        answer: 'population = 1000',
        prompt: 'Integers like 1000 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 77.77 to a variable named salePrice.',
        answer: 'salePrice = 77.77',
        prompt: 'Floating-point numbers like 77.77 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isMuted.',
        answer: 'isMuted = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "title" and "author" and values "1984" and "Orwell" to a variable named book.',
        answer: 'book = {"title": "1984", "author": "Orwell"}',
        prompt: 'Dictionaries store key-value pairs in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "gold" to a variable named favoriteColor.',
        answer: 'favoriteColor = "gold"',
        prompt: 'Strings, like "gold," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 7 to a variable named daysInWeek.',
        answer: 'daysInWeek = 7',
        prompt: 'Integers like 7 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 99.99 to a variable named specialOfferPrice.',
        answer: 'specialOfferPrice = 99.99',
        prompt: 'Floating-point numbers like 99.99 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isSubscribed.',
        answer: 'isSubscribed = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "bread", "milk", "cheese" to a variable named groceryItems.',
        answer: 'groceryItems = ["bread", "milk", "cheese"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "Rome", "Paris", "London" to a variable named capitals.',
        answer: 'capitals = ("Rome", "Paris", "London")',
        prompt: 'Tuples store multiple items, similar to lists, but they are immutable and enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "sapphire" to a variable named gemstone.',
        answer: 'gemstone = "sapphire"',
        prompt: 'Strings, like "sapphire," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 12 to a variable named monthsInYear.',
        answer: 'monthsInYear = 12',
        prompt: 'Integers like 12 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 1.2345 to a variable named precisionValue.',
        answer: 'precisionValue = 1.2345',
        prompt: 'Floating-point numbers like 1.2345 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isProcessing.',
        answer: 'isProcessing = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "Mercedes", "Audi", "BMW" to a variable named luxuryCars.',
        answer: 'luxuryCars = ["Mercedes", "Audi", "BMW"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a set containing "one", "two", "three" to a variable named numberWords.',
        answer: 'numberWords = {"one", "two", "three"}',
        prompt: 'Sets store unique elements and are defined using curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "spider" to a variable named insect.',
        answer: 'insect = "spider"',
        prompt: 'Strings, like "spider," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "dolphin" to a variable named aquaticAnimal.',
        answer: 'aquaticAnimal = "dolphin"',
        prompt: 'Strings, like "dolphin," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 64 to a variable named chessSquares.',
        answer: 'chessSquares = 64',
        prompt: 'Integers like 64 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 98.6 to a variable named bodyTemperature.',
        answer: 'bodyTemperature = 98.6',
        prompt: 'Floating-point numbers like 98.6 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "red", "green", "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ["red", "green", "blue"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing the numbers 2, 4, and 6 to a variable named evenNumbers.',
        answer: 'evenNumbers = (2, 4, 6)',
        prompt: 'Tuples store multiple items, similar to lists, but they are immutable and enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "meteor" to a variable named celestialEvent.',
        answer: 'celestialEvent = "meteor"',
        prompt: 'Strings, like "meteor," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365',
        prompt: 'Integers like 365 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 12.34 to a variable named stockPrice.',
        answer: 'stockPrice = 12.34',
        prompt: 'Floating-point numbers like 12.34 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isLocked.',
        answer: 'isLocked = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "north", "south", "east", "west" to a variable named directions.',
        answer: 'directions = ["north", "south", "east", "west"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "firstName" and "lastName" and values "John" and "Doe" to a variable named person.',
        answer: 'person = {"firstName": "John", "lastName": "Doe"}',
        prompt: 'Dictionaries store key-value pairs in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "diamond" to a variable named favoriteGem.',
        answer: 'favoriteGem = "diamond"',
        prompt: 'Strings, like "diamond," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 52 to a variable named weeksInYear.',
        answer: 'weeksInYear = 52',
        prompt: 'Integers like 52 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81',
        prompt: 'Floating-point numbers like 9.81 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "earth", "wind", "fire" to a variable named elements.',
        answer: 'elements = ("earth", "wind", "fire")',
        prompt: 'Tuples store multiple items, similar to lists, but they are immutable and enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "desert" to a variable named landscape.',
        answer: 'landscape = "desert"',
        prompt: 'Strings, like "desert," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 9 to a variable named planetsInSolarSystem.',
        answer: 'planetsInSolarSystem = 9',
        prompt: 'Integers like 9 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 0.333 to a variable named fractionalValue.',
        answer: 'fractionalValue = 0.333',
        prompt: 'Floating-point numbers like 0.333 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isInvisible.',
        answer: 'isInvisible = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "piano", "guitar", "drums" to a variable named musicalInstruments.',
        answer: 'musicalInstruments = ["piano", "guitar", "drums"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a dictionary with keys "make" and "model" and values "Ford" and "Mustang" to a variable named carInfo.',
        answer: 'carInfo = {"make": "Ford", "model": "Mustang"}',
        prompt: 'Dictionaries store key-value pairs in curly braces. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "jungle" to a variable named habitat.',
        answer: 'habitat = "jungle"',
        prompt: 'Strings, like "jungle," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 3 to a variable named triangleSides.',
        answer: 'triangleSides = 3',
        prompt: 'Integers like 3 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 42.42 to a variable named answerToEverything.',
        answer: 'answerToEverything = 42.42',
        prompt: 'Floating-point numbers like 42.42 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value True to a variable named isWinner.',
        answer: 'isWinner = True',
        prompt: 'Booleans like True represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a tuple containing "gold", "silver", "bronze" to a variable named medalColors.',
        answer: 'medalColors = ("gold", "silver", "bronze")',
        prompt: 'Tuples store multiple items, similar to lists, but they are immutable and enclosed in parentheses. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the string "mountain" to a variable named terrain.',
        answer: 'terrain = "mountain"',
        prompt: 'Strings, like "mountain," must be enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the integer value 206 to a variable named bonesInHumanBody.',
        answer: 'bonesInHumanBody = 206',
        prompt: 'Integers like 206 are whole numbers and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the floating-point value 2.718 to a variable named eulerNumber.',
        answer: 'eulerNumber = 2.718',
        prompt: 'Floating-point numbers like 2.718 have decimals and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False',
        prompt: 'Booleans like False represent logical states and are not enclosed in quotes. You may visit the learning material to review.'
    },
    {
        category: 'Assigning',
        question: 'Assign a list containing "bread", "butter", "jam" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["bread", "butter", "jam"]',
        prompt: 'Lists store multiple items inside square brackets, with strings in quotes. You may visit the learning material to review.'
    }
      /*
    {
        question: 'Assign the string "John" to a variable named firstName.',
        answer: 'firstName = "John"'
    },
    {
        question: 'Assign the floating-point value 3.14 to a variable named pi.',
        answer: 'pi = 3.14'
    },
    {
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False'
    },
    {
        question: 'Assign a list containing the numbers 1, 2, and 3 to a variable named numbers.',
        answer: 'numbers = [1, 2, 3]'
    },
    {
        question: 'Assign the value None to a variable named data.',
        answer: 'data = None'
    },
    {
        question: 'Assign the string "Python" to a variable named language.',
        answer: 'language = "Python"'
    },
    {
        question: 'Assign the integer value 100 to a variable named count.',
        answer: 'count = 100'
    },
    {
        question: 'Assign the floating-point value 20.5 to a variable named height.',
        answer: 'height = 20.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a tuple containing 4, 5, 6 to a variable named points.',
        answer: 'points = (4, 5, 6)'
    },
    {
        question: 'Assign an empty list to a variable named items.',
        answer: 'items = []'
    },
    {
        question: 'Assign the string "OpenAI" to a variable named company.',
        answer: 'company = "OpenAI"'
    },
    {
        question: 'Assign the integer value -10 to a variable named temperature.',
        answer: 'temperature = -10'
    },
    {
        question: 'Assign the floating-point value 0.0 to a variable named balance.',
        answer: 'balance = 0.0'
    },
    {
        question: 'Assign the boolean value False to a variable named isLoggedIn.',
        answer: 'isLoggedIn = False'
    },
    {
        question: 'Assign a list containing "car", "bike", and "bus" to a variable named vehicles.',
        answer: 'vehicles = ["car", "bike", "bus"]'
    },
    {
        question: 'Assign the value None to a variable named user.',
        answer: 'user = None'
    },
    {
        question: 'Assign the string "Welcome" to a variable named greeting.',
        answer: 'greeting = "Welcome"'
    },
    {
        question: 'Assign the integer value 200 to a variable named maxScore.',
        answer: 'maxScore = 200'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True'
    },
    {
        question: 'Assign a list containing the numbers 7, 8, and 9 to a variable named coordinates.',
        answer: 'coordinates = [7, 8, 9]'
    },
    {
        question: 'Assign an empty string to a variable named message.',
        answer: 'message = ""'
    },
    {
        question: 'Assign the string "AI" to a variable named subject.',
        answer: 'subject = "AI"'
    },
    {
        question: 'Assign the integer value 50 to a variable named quantity.',
        answer: 'quantity = 50'
    },
    {
        question: 'Assign the floating-point value 1.618 to a variable named phi.',
        answer: 'phi = 1.618'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "dog", "cat", and "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]'
    },
    {
        question: 'Assign the value None to a variable named session.',
        answer: 'session = None'
    },
    {
        question: 'Assign the string "admin" to a variable named role.',
        answer: 'role = "admin"'
    },
    {
        question: 'Assign the integer value 0 to a variable named index.',
        answer: 'index = 0'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named amount.',
        answer: 'amount = 12.34'
    },
    {
        question: 'Assign the boolean value True to a variable named isPremium.',
        answer: 'isPremium = True'
    },
    {
        question: 'Assign a tuple containing "red", "green", "blue" to a variable named colors.',
        answer: 'colors = ("red", "green", "blue")'
    },
    {
        question: 'Assign an empty dictionary to a variable named data.',
        answer: 'data = {}'
    },
    {
        question: 'Assign the string "coding" to a variable named hobby.',
        answer: 'hobby = "coding"'
    },
    {
        question: 'Assign the integer value 64 to a variable named bitRate.',
        answer: 'bitRate = 64'
    },
    {
        question: 'Assign the floating-point value 99.99 to a variable named price.',
        answer: 'price = 99.99'
    },
    {
        question: 'Assign the boolean value False to a variable named hasAccess.',
        answer: 'hasAccess = False'
    },
    {
        question: 'Assign a list containing "January", "February", and "March" to a variable named months.',
        answer: 'months = ["January", "February", "March"]'
    },
    {
        question: 'Assign the value None to a variable named error.',
        answer: 'error = None'
    },
    {
        question: 'Assign the string "Hello, World!" to a variable named phrase.',
        answer: 'phrase = "Hello, World!"'
    },
    {
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42'
    },
    {
        question: 'Assign the floating-point value 45.67 to a variable named weight.',
        answer: 'weight = 45.67'
    },
    {
        question: 'Assign the boolean value True to a variable named isReady.',
        answer: 'isReady = True'
    },
    {
        question: 'Assign a list containing the numbers 10, 20, and 30 to a variable named multiples.',
        answer: 'multiples = [10, 20, 30]'
    },
    {
        question: 'Assign an empty set to a variable named ids.',
        answer: 'ids = set()'
    },
    {
        question: 'Assign the string "developer" to a variable named jobTitle.',
        answer: 'jobTitle = "developer"'
    },
    {
        question: 'Assign the integer value 500 to a variable named limit.',
        answer: 'limit = 500'
    },
    {
        question: 'Assign the floating-point value 7.77 to a variable named average.',
        answer: 'average = 7.77'
    },
    {
        question: 'Assign the boolean value False to a variable named isEnabled.',
        answer: 'isEnabled = False'
    },
    {
        question: 'Assign a list containing the numbers 4, 8, 12 to a variable named evens.',
        answer: 'evens = [4, 8, 12]'
    },
    {
        question: 'Assign the value None to a variable named result.',
        answer: 'result = None'
    },
    {
        question: 'Assign the string "test" to a variable named keyword.',
        answer: 'keyword = "test"'
    },
    {
        question: 'Assign the integer value 250 to a variable named speed.',
        answer: 'speed = 250'
    },
    {
        question: 'Assign the floating-point value 123.456 to a variable named precision.',
        answer: 'precision = 123.456'
    },
    {
        question: 'Assign the boolean value True to a variable named isStudent.',
        answer: 'isStudent = True'
    },
    {
        question: 'Assign a list containing the strings "up", "down", "left", and "right" to a variable named directions.',
        answer: 'directions = ["up", "down", "left", "right"]'
    },
    {
        question: 'Assign the value None to a variable named status.',
        answer: 'status = None'
    },
    {
        question: 'Assign the string "earth" to a variable named planet.',
        answer: 'planet = "earth"'
    },
    {
        question: 'Assign the integer value 16 to a variable named square.',
        answer: 'square = 16'
    },
    {
        question: 'Assign the floating-point value 88.88 to a variable named discount.',
        answer: 'discount = 88.88'
    },
    {
        question: 'Assign the boolean value False to a variable named isEditable.',
        answer: 'isEditable = False'
    },
    {
        question: 'Assign a list containing the strings "html", "css", and "js" to a variable named techStack.',
        answer: 'techStack = ["html", "css", "js"]'
    },
    {
        question: 'Assign the value None to a variable named feedback.',
        answer: 'feedback = None'
    },
    {
        question: 'Assign the string "guest" to a variable named userType.',
        answer: 'userType = "guest"'
    },
    {
        question: 'Assign the integer value 30 to a variable named length.',
        answer: 'length = 30'
    },
    {
        question: 'Assign the floating-point value 6.022 to a variable named avogadro.',
        answer: 'avogadro = 6.022'
    },
    {
        question: 'Assign the boolean value True to a variable named isPublished.',
        answer: 'isPublished = True'
    },
    {
        question: 'Assign a tuple containing 1, 2, 3 to a variable named coordinates.',
        answer: 'coordinates = (1, 2, 3)'
    },
    {
        question: 'Assign an empty tuple to a variable named emptyTuple.',
        answer: 'emptyTuple = ()'
    },
    {
        question: 'Assign the string "password123" to a variable named password.',
        answer: 'password = "password123"'
    },
    {
        question: 'Assign the integer value 99 to a variable named version.',
        answer: 'version = 99'
    },
    {
        question: 'Assign the floating-point value 2.71 to a variable named e.',
        answer: 'e = 2.71'
    },
    {
        question: 'Assign the boolean value False to a variable named hasPermission.',
        answer: 'hasPermission = False'
    },
    {
        question: 'Assign a list containing "first", "second", and "third" to a variable named positions.',
        answer: 'positions = ["first", "second", "third"]'
    },
    {
        question: 'Assign the value None to a variable named token.',
        answer: 'token = None'
    },
    {
        question: 'Assign the string "Mars" to a variable named destination.',
        answer: 'destination = "Mars"'
    },
    {
        question: 'Assign the integer value 5 to a variable named attempts.',
        answer: 'attempts = 5'
    },
    {
        question: 'Assign the floating-point value 0.01 to a variable named increment.',
        answer: 'increment = 0.01'
    },
    {
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True'
    },
    {
        question: 'Assign a list containing "red", "yellow", and "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ["red", "yellow", "blue"]'
    },
    {
        question: 'Assign the value None to a variable named log.',
        answer: 'log = None'
    },
    {
        question: 'Assign the integer value 21 to a variable named age.',
        answer: 'age = 21'
    },
    {
        question: 'Assign the string "Hello" to a variable named greeting.',
        answer: 'greeting = "Hello"'
    },
    {
        question: 'Assign the floating-point value 7.5 to a variable named weight.',
        answer: 'weight = 7.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isAdult.',
        answer: 'isAdult = False'
    },
    {
        question: 'Assign a list containing the numbers 2, 4, 6, and 8 to a variable named evenNumbers.',
        answer: 'evenNumbers = [2, 4, 6, 8]'
    },
    {
        question: 'Assign the value None to a variable named email.',
        answer: 'email = None'
    },
    {
        question: 'Assign the string "Python Programming" to a variable named course.',
        answer: 'course = "Python Programming"'
    },
    {
        question: 'Assign the integer value 300 to a variable named distance.',
        answer: 'distance = 300'
    },
    {
        question: 'Assign the floating-point value 15.75 to a variable named width.',
        answer: 'width = 15.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isCompleted.',
        answer: 'isCompleted = True'
    },
    {
        question: 'Assign a tuple containing 3, 5, and 7 to a variable named primeNumbers.',
        answer: 'primeNumbers = (3, 5, 7)'
    },
    {
        question: 'Assign an empty list to a variable named queue.',
        answer: 'queue = []'
    },
    {
        question: 'Assign the string "Tesla" to a variable named carBrand.',
        answer: 'carBrand = "Tesla"'
    },
    {
        question: 'Assign the integer value -50 to a variable named loss.',
        answer: 'loss = -50'
    },
    {
        question: 'Assign the floating-point value 100.1 to a variable named temperature.',
        answer: 'temperature = 100.1'
    },
    {
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False'
    },
    {
        question: 'Assign a list containing "rose", "lily", and "daisy" to a variable named flowers.',
        answer: 'flowers = ["rose", "lily", "daisy"]'
    },
    {
        question: 'Assign the value None to a variable named lastLogin.',
        answer: 'lastLogin = None'
    },
    {
        question: 'Assign the string "MacBook" to a variable named device.',
        answer: 'device = "MacBook"'
    },
    {
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404'
    },
    {
        question: 'Assign the floating-point value 89.99 to a variable named price.',
        answer: 'price = 89.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isPaid.',
        answer: 'isPaid = True'
    },
    {
        question: 'Assign a list containing 11, 13, and 17 to a variable named primes.',
        answer: 'primes = [11, 13, 17]'
    },
    {
        question: 'Assign an empty string to a variable named output.',
        answer: 'output = ""'
    },
    {
        question: 'Assign the string "Laptop" to a variable named gadget.',
        answer: 'gadget = "Laptop"'
    },
    {
        question: 'Assign the integer value 1024 to a variable named memory.',
        answer: 'memory = 1024'
    },
    {
        question: 'Assign the floating-point value 12.12 to a variable named tax.',
        answer: 'tax = 12.12'
    },
    {
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False'
    },
    {
        question: 'Assign a list containing "apple", "orange", and "grape" to a variable named fruitBasket.',
        answer: 'fruitBasket = ["apple", "orange", "grape"]'
    },
    {
        question: 'Assign the value None to a variable named config.',
        answer: 'config = None'
    },
    {
        question: 'Assign the string "Manager" to a variable named position.',
        answer: 'position = "Manager"'
    },
    {
        question: 'Assign the integer value 888 to a variable named luckyNumber.',
        answer: 'luckyNumber = 888'
    },
    {
        question: 'Assign the floating-point value 45.6 to a variable named height.',
        answer: 'height = 45.6'
    },
    {
        question: 'Assign the boolean value True to a variable named isCorrect.',
        answer: 'isCorrect = True'
    },
    {
        question: 'Assign a tuple containing "red", "blue", "yellow" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "blue", "yellow")'
    },
    {
        question: 'Assign an empty dictionary to a variable named database.',
        answer: 'database = {}'
    },
    {
        question: 'Assign the string "sunny" to a variable named weather.',
        answer: 'weather = "sunny"'
    },
    {
        question: 'Assign the integer value 99 to a variable named totalItems.',
        answer: 'totalItems = 99'
    },
    {
        question: 'Assign the floating-point value 72.5 to a variable named averageScore.',
        answer: 'averageScore = 72.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isOpen.',
        answer: 'isOpen = False'
    },
    {
        question: 'Assign a list containing "ball", "bat", and "glove" to a variable named sportsEquipment.',
        answer: 'sportsEquipment = ["ball", "bat", "glove"]'
    },
    {
        question: 'Assign the value None to a variable named token.',
        answer: 'token = None'
    },
    {
        question: 'Assign the string "Galaxy" to a variable named phoneModel.',
        answer: 'phoneModel = "Galaxy"'
    },
    {
        question: 'Assign the integer value 128 to a variable named maxConnections.',
        answer: 'maxConnections = 128'
    },
    {
        question: 'Assign the floating-point value 45.0 to a variable named percentage.',
        answer: 'percentage = 45.0'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True'
    },
    {
        question: 'Assign a list containing the numbers 14, 28, and 42 to a variable named multiplesOfSeven.',
        answer: 'multiplesOfSeven = [14, 28, 42]'
    },
    {
        question: 'Assign an empty set to a variable named uniqueIds.',
        answer: 'uniqueIds = set()'
    },
    {
        question: 'Assign the string "pizza" to a variable named favoriteFood.',
        answer: 'favoriteFood = "pizza"'
    },
    {
        question: 'Assign the integer value 256 to a variable named storageCapacity.',
        answer: 'storageCapacity = 256'
    },
    {
        question: 'Assign the floating-point value 101.1 to a variable named altitude.',
        answer: 'altitude = 101.1'
    },
    {
        question: 'Assign the boolean value False to a variable named isEditable.',
        answer: 'isEditable = False'
    },
    {
        question: 'Assign a list containing "north", "south", "east", and "west" to a variable named directions.',
        answer: 'directions = ["north", "south", "east", "west"]'
    },
    {
        question: 'Assign the value None to a variable named statusCode.',
        answer: 'statusCode = None'
    },
    {
        question: 'Assign the string "Spaceship" to a variable named vehicle.',
        answer: 'vehicle = "Spaceship"'
    },
    {
        question: 'Assign the integer value 16 to a variable named byteSize.',
        answer: 'byteSize = 16'
    },
    {
        question: 'Assign the floating-point value 18.9 to a variable named speed.',
        answer: 'speed = 18.9'
    },
    {
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True'
    },
    {
        question: 'Assign a list containing "rock", "paper", and "scissors" to a variable named gameChoices.',
        answer: 'gameChoices = ["rock", "paper", "scissors"]'
    },
    {
        question: 'Assign the value None to a variable named lastActivity.',
        answer: 'lastActivity = None'
    },
    {
        question: 'Assign the string "testUser" to a variable named username.',
        answer: 'username = "testUser"'
    },
    {
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42'
    },
    {
        question: 'Assign the floating-point value 3.14159 to a variable named pi.',
        answer: 'pi = 3.14159'
    },
    {
        question: 'Assign the boolean value False to a variable named isVisible.',
        answer: 'isVisible = False'
    },
    {
        question: 'Assign a list containing "dog", "cat", and "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]'
    },
    {
        question: 'Assign the value None to a variable named sessionID.',
        answer: 'sessionID = None'
    },
    {
        question: 'Assign the string "chocolate" to a variable named favoriteFlavor.',
        answer: 'favoriteFlavor = "chocolate"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named salary.',
        answer: 'salary = 1000'
    },
    {
        question: 'Assign the floating-point value 29.99 to a variable named salePrice.',
        answer: 'salePrice = 29.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a tuple containing the numbers 9, 8, and 7 to a variable named countdown.',
        answer: 'countdown = (9, 8, 7)'
    },
    {
        question: 'Assign an empty list to a variable named shoppingCart.',
        answer: 'shoppingCart = []'
    },
    {
        question: 'Assign the string "New York" to a variable named city.',
        answer: 'city = "New York"'
    },
    {
        question: 'Assign the integer value 123 to a variable named productCode.',
        answer: 'productCode = 123'
    },
    {
        question: 'Assign the floating-point value 0.99 to a variable named taxRate.',
        answer: 'taxRate = 0.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isSubscribed.',
        answer: 'isSubscribed = False'
    },
    {
        question: 'Assign a list containing "alpha", "beta", and "gamma" to a variable named greekLetters.',
        answer: 'greekLetters = ["alpha", "beta", "gamma"]'
    },
    {
        question: 'Assign the value None to a variable named lastUpdate.',
        answer: 'lastUpdate = None'
    },
    {
        question: 'Assign the string "developer" to a variable named role.',
        answer: 'role = "developer"'
    },
    {
        question: 'Assign the integer value 7 to a variable named daysInWeek.',
        answer: 'daysInWeek = 7'
    },
    {
        question: 'Assign the floating-point value 37.5 to a variable named bodyTemperature.',
        answer: 'bodyTemperature = 37.5'
    },
    {
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True'
    },
    {
        question: 'Assign a list containing "Monday", "Tuesday", and "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ["Monday", "Tuesday", "Wednesday"]'
    },
    {
        question: 'Assign an empty tuple to a variable named emptyCoordinates.',
        answer: 'emptyCoordinates = ()'
    },
    {
        question: 'Assign the string "Sunset Boulevard" to a variable named street.',
        answer: 'street = "Sunset Boulevard"'
    },
    {
        question: 'Assign the integer value 64 to a variable named bits.',
        answer: 'bits = 64'
    },
    {
        question: 'Assign the floating-point value 88.7 to a variable named frequency.',
        answer: 'frequency = 88.7'
    },
    {
        question: 'Assign the boolean value False to a variable named isRaining.',
        answer: 'isRaining = False'
    },
    {
        question: 'Assign a list containing "triangle", "square", and "circle" to a variable named shapes.',
        answer: 'shapes = ["triangle", "square", "circle"]'
    },
    {
        question: 'Assign the value None to a variable named cache.',
        answer: 'cache = None'
    },
    {
        question: 'Assign the string "diamond" to a variable named gem.',
        answer: 'gem = "diamond"'
    },
    {
        question: 'Assign the integer value 8 to a variable named cores.',
        answer: 'cores = 8'
    },
    {
        question: 'Assign the floating-point value 120.5 to a variable named speedLimit.',
        answer: 'speedLimit = 120.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isOn.',
        answer: 'isOn = True'
    },
    {
        question: 'Assign a tuple containing the letters "a", "b", and "c" to a variable named alphabet.',
        answer: 'alphabet = ("a", "b", "c")'
    },
    {
        question: 'Assign an empty dictionary to a variable named phoneBook.',
        answer: 'phoneBook = {}'
    },
    {
        question: 'Assign the string "2024" to a variable named year.',
        answer: 'year = "2024"'
    },
    {
        question: 'Assign the integer value 15 to a variable named ageLimit.',
        answer: 'ageLimit = 15'
    },
    {
        question: 'Assign the floating-point value 4.0 to a variable named gpa.',
        answer: 'gpa = 4.0'
    },
    {
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False'
    },
    {
        question: 'Assign a list containing "fork", "knife", and "spoon" to a variable named utensils.',
        answer: 'utensils = ["fork", "knife", "spoon"]'
    },
    {
        question: 'Assign the value None to a variable named reference.',
        answer: 'reference = None'
    },
    {
        question: 'Assign the string "administrator" to a variable named userRole.',
        answer: 'userRole = "administrator"'
    },
    {
        question: 'Assign the integer value 9 to a variable named lives.',
        answer: 'lives = 9'
    },
    {
        question: 'Assign the floating-point value 2.5 to a variable named interestRate.',
        answer: 'interestRate = 2.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isProcessing.',
        answer: 'isProcessing = True'
    },
    {
        question: 'Assign a list containing the numbers 10, 20, 30, and 40 to a variable named multiplesOfTen.',
        answer: 'multiplesOfTen = [10, 20, 30, 40]'
    },
    {
        question: 'Assign an empty string to a variable named placeholder.',
        answer: 'placeholder = ""'
    },
    {
        question: 'Assign the string "rock" to a variable named musicGenre.',
        answer: 'musicGenre = "rock"'
    },
    {
        question: 'Assign the integer value 44 to a variable named jerseyNumber.',
        answer: 'jerseyNumber = 44'
    },
    {
        question: 'Assign the floating-point value 13.75 to a variable named density.',
        answer: 'density = 13.75'
    },
    {
        question: 'Assign the boolean value False to a variable named isVerified.',
        answer: 'isVerified = False'
    },
    {
        question: 'Assign a list containing "Homer", "Bart", and "Lisa" to a variable named simpsonsFamily.',
        answer: 'simpsonsFamily = ["Homer", "Bart", "Lisa"]'
    },
    {
        question: 'Assign the value None to a variable named subscription.',
        answer: 'subscription = None'
    },
    {
        question: 'Assign the string "admin" to a variable named accountType.',
        answer: 'accountType = "admin"'
    },
    {
        question: 'Assign the integer value 90 to a variable named angle.',
        answer: 'angle = 90'
    },
    {
        question: 'Assign the floating-point value 55.55 to a variable named humidity.',
        answer: 'humidity = 55.55'
    },
    {
        question: 'Assign the boolean value True to a variable named isSignedIn.',
        answer: 'isSignedIn = True'
    },
    {
        question: 'Assign a tuple containing 5, 10, 15 to a variable named multiplesOfFive.',
        answer: 'multiplesOfFive = (5, 10, 15)'
    },
    {
        question: 'Assign an empty set to a variable named uniqueVisitors.',
        answer: 'uniqueVisitors = set()'
    },
    {
        question: 'Assign the integer value 255 to a variable named maxColorValue.',
        answer: 'maxColorValue = 255'
    },
    {
        question: 'Assign the floating-point value 4.8 to a variable named rating.',
        answer: 'rating = 4.8'
    },
    {
        question: 'Assign the boolean value False to a variable named hasPassword.',
        answer: 'hasPassword = False'
    },
    {
        question: 'Assign a list containing "C", "C++", "Python" to a variable named programmingLanguages.',
        answer: 'programmingLanguages = ["C", "C++", "Python"]'
    },
    {
        question: 'Assign the value None to a variable named currentTask.',
        answer: 'currentTask = None'
    },
    {
        question: 'Assign the string "5.1.0" to a variable named version.',
        answer: 'version = "5.1.0"'
    },
    {
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365'
    },
    {
        question: 'Assign the floating-point value 98.6 to a variable named normalBodyTemperature.',
        answer: 'normalBodyTemperature = 98.6'
    },
    {
        question: 'Assign the boolean value True to a variable named hasLicense.',
        answer: 'hasLicense = True'
    },
    {
        question: 'Assign a tuple containing 1, 2, and 3 to a variable named primeNumbers.',
        answer: 'primeNumbers = (1, 2, 3)'
    },
    {
        question: 'Assign an empty list to a variable named emptyQueue.',
        answer: 'emptyQueue = []'
    },
    {
        question: 'Assign the string "password123" to a variable named userPassword.',
        answer: 'userPassword = "password123"'
    },
    {
        question: 'Assign the integer value 50 to a variable named halfCentury.',
        answer: 'halfCentury = 50'
    },
    {
        question: 'Assign the floating-point value 76.45 to a variable named latitude.',
        answer: 'latitude = 76.45'
    },
    {
        question: 'Assign the boolean value False to a variable named hasError.',
        answer: 'hasError = False'
    },
    {
        question: 'Assign a list containing "apple", "banana", and "orange" to a variable named fruits.',
        answer: 'fruits = ["apple", "banana", "orange"]'
    },
    {
        question: 'Assign the value None to a variable named nextItem.',
        answer: 'nextItem = None'
    },
    {
        question: 'Assign the string "error" to a variable named status.',
        answer: 'status = "error"'
    },
    {
        question: 'Assign the integer value 8080 to a variable named port.',
        answer: 'port = 8080'
    },
    {
        question: 'Assign the floating-point value 99.99 to a variable named discount.',
        answer: 'discount = 99.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isEnabled.',
        answer: 'isEnabled = True'
    },
    {
        question: 'Assign a tuple containing "red", "green", and "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "green", "blue")'
    },
    {
        question: 'Assign an empty set to a variable named emptyCollection.',
        answer: 'emptyCollection = set()'
    },
    {
        question: 'Assign the string "Machine Learning" to a variable named course.',
        answer: 'course = "Machine Learning"'
    },
    {
        question: 'Assign the integer value 150 to a variable named weight.',
        answer: 'weight = 150'
    },
    {
        question: 'Assign the floating-point value 72.34 to a variable named altitude.',
        answer: 'altitude = 72.34'
    },
    {
        question: 'Assign the boolean value False to a variable named isCompleted.',
        answer: 'isCompleted = False'
    },
    {
        question: 'Assign a list containing the numbers 2, 4, 6, and 8 to a variable named evenNumbers.',
        answer: 'evenNumbers = [2, 4, 6, 8]'
    },
    {
        question: 'Assign an empty dictionary to a variable named studentData.',
        answer: 'studentData = {}'
    },
    {
        question: 'Assign the string "Python" to a variable named favoriteLanguage.',
        answer: 'favoriteLanguage = "Python"'
    },
    {
        question: 'Assign the integer value 30 to a variable named minutes.',
        answer: 'minutes = 30'
    },
    {
        question: 'Assign the floating-point value 15.99 to a variable named subscriptionFee.',
        answer: 'subscriptionFee = 15.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isLoggedIn.',
        answer: 'isLoggedIn = True'
    },
    {
        question: 'Assign a tuple containing the elements "red", "blue", and "yellow" to a variable named colors.',
        answer: 'colors = ("red", "blue", "yellow")'
    },
    {
        question: 'Assign a set containing the elements 3, 6, and 9 to a variable named multiplesOfThree.',
        answer: 'multiplesOfThree = {3, 6, 9}'
    },
    {
        question: 'Assign the string "Google" to a variable named company.',
        answer: 'company = "Google"'
    },
    {
        question: 'Assign the integer value 500 to a variable named maxPoints.',
        answer: 'maxPoints = 500'
    },
    {
        question: 'Assign the floating-point value 67.89 to a variable named weightInKg.',
        answer: 'weightInKg = 67.89'
    },
    {
        question: 'Assign the boolean value False to a variable named isArchived.',
        answer: 'isArchived = False'
    },
    {
        question: 'Assign a list containing the strings "car", "bike", and "train" to a variable named transportModes.',
        answer: 'transportModes = ["car", "bike", "train"]'
    },
    {
        question: 'Assign an empty string to a variable named temporaryInput.',
        answer: 'temporaryInput = ""'
    },
    {
        question: 'Assign the string "admin" to a variable named accessLevel.',
        answer: 'accessLevel = "admin"'
    },
    {
        question: 'Assign the integer value 120 to a variable named frameRate.',
        answer: 'frameRate = 120'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value True to a variable named isPublic.',
        answer: 'isPublic = True'
    },
    {
        question: 'Assign a tuple containing 1990, 2000, and 2010 to a variable named years.',
        answer: 'years = (1990, 2000, 2010)'
    },
    {
        question: 'Assign a list containing the elements "oak", "maple", and "pine" to a variable named treeTypes.',
        answer: 'treeTypes = ["oak", "maple", "pine"]'
    },
    {
        question: 'Assign the string "Tesla" to a variable named carBrand.',
        answer: 'carBrand = "Tesla"'
    },
    {
        question: 'Assign the integer value 256 to a variable named blockSize.',
        answer: 'blockSize = 256'
    },
    {
        question: 'Assign the floating-point value 22.22 to a variable named growthRate.',
        answer: 'growthRate = 22.22'
    },
    {
        question: 'Assign the boolean value False to a variable named isDeprecated.',
        answer: 'isDeprecated = False'
    },
    {
        question: 'Assign a set containing the elements "north", "east", "west" to a variable named directions.',
        answer: 'directions = {"north", "east", "west"}'
    },
    {
        question: 'Assign the value None to a variable named userSession.',
        answer: 'userSession = None'
    },
    {
        question: 'Assign the string "puzzle" to a variable named gameType.',
        answer: 'gameType = "puzzle"'
    },
    {
        question: 'Assign the integer value 400 to a variable named maximumRetries.',
        answer: 'maximumRetries = 400'
    },
    {
        question: 'Assign the floating-point value 1.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 1.618'
    },
    {
        question: 'Assign the boolean value True to a variable named isPrimary.',
        answer: 'isPrimary = True'
    },
    {
        question: 'Assign a tuple containing the elements "x", "y", and "z" to a variable named axes.',
        answer: 'axes = ("x", "y", "z")'
    },
    {
        question: 'Assign a list containing "English", "Math", and "Science" to a variable named subjects.',
        answer: 'subjects = ["English", "Math", "Science"]'
    },
    {
        question: 'Assign the string "Success" to a variable named responseMessage.',
        answer: 'responseMessage = "Success"'
    },
    {
        question: 'Assign the integer value 48 to a variable named hoursInTwoDays.',
        answer: 'hoursInTwoDays = 48'
    },
    {
        question: 'Assign the floating-point value 99.999 to a variable named accuracy.',
        answer: 'accuracy = 99.999'
    },
    {
        question: 'Assign the boolean value False to a variable named hasAdminPrivileges.',
        answer: 'hasAdminPrivileges = False'
    },
    {
        question: 'Assign a list containing "January", "February", and "March" to a variable named firstQuarterMonths.',
        answer: 'firstQuarterMonths = ["January", "February", "March"]'
    },
    {
        question: 'Assign the string "yes" to a variable named confirmation.',
        answer: 'confirmation = "yes"'
    },
    {
        question: 'Assign the integer value 20 to a variable named classSize.',
        answer: 'classSize = 20'
    },
    {
        question: 'Assign the floating-point value 8.23 to a variable named fuelEfficiency.',
        answer: 'fuelEfficiency = 8.23'
    },
    {
        question: 'Assign the boolean value True to a variable named isAnswerCorrect.',
        answer: 'isAnswerCorrect = True'
    },
    {
        question: 'Assign a tuple containing the values 4, 5, 6 to a variable named boxDimensions.',
        answer: 'boxDimensions = (4, 5, 6)'
    },
    {
        question: 'Assign a set containing "A", "B", "C" to a variable named grades.',
        answer: 'grades = {"A", "B", "C"}'
    },
    {
        question: 'Assign the value None to a variable named backupFile.',
        answer: 'backupFile = None'
    },
    {
        question: 'Assign the string "New York" to a variable named city.',
        answer: 'city = "New York"'
    },
    {
        question: 'Assign the integer value 10 to a variable named score.',
        answer: 'score = 10'
    },
    {
        question: 'Assign the floating-point value 29.76 to a variable named price.',
        answer: 'price = 29.76'
    },
    {
        question: 'Assign the boolean value True to a variable named hasPassed.',
        answer: 'hasPassed = True'
    },
    {
        question: 'Assign a list containing "soccer", "basketball", and "tennis" to a variable named sports.',
        answer: 'sports = ["soccer", "basketball", "tennis"]'
    },
    {
        question: 'Assign an empty tuple to a variable named coordinates.',
        answer: 'coordinates = ()'
    },
    {
        question: 'Assign the string "Cloud Computing" to a variable named subject.',
        answer: 'subject = "Cloud Computing"'
    },
    {
        question: 'Assign the integer value 360 to a variable named degrees.',
        answer: 'degrees = 360'
    },
    {
        question: 'Assign the floating-point value 1234.56 to a variable named accountBalance.',
        answer: 'accountBalance = 1234.56'
    },
    {
        question: 'Assign the boolean value False to a variable named isSubscribed.',
        answer: 'isSubscribed = False'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Bob" and 25 to a variable named userInfo.',
        answer: 'userInfo = {"name": "Bob", "age": 25}'
    },
    {
        question: 'Assign the string "water" to a variable named beverage.',
        answer: 'beverage = "water"'
    },
    {
        question: 'Assign the integer value 7000 to a variable named distanceInMeters.',
        answer: 'distanceInMeters = 7000'
    },
    {
        question: 'Assign the floating-point value 100.25 to a variable named transactionAmount.',
        answer: 'transactionAmount = 100.25'
    },
    {
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True'
    },
    {
        question: 'Assign a list containing "gold", "silver", and "bronze" to a variable named medals.',
        answer: 'medals = ["gold", "silver", "bronze"]'
    },
    {
        question: 'Assign a tuple containing "Monday", "Tuesday", and "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ("Monday", "Tuesday", "Wednesday")'
    },
    {
        question: 'Assign the string "Einstein" to a variable named scientist.',
        answer: 'scientist = "Einstein"'
    },
    {
        question: 'Assign the integer value 2048 to a variable named maxStorage.',
        answer: 'maxStorage = 2048'
    },
    {
        question: 'Assign the floating-point value 5.55 to a variable named taxRate.',
        answer: 'taxRate = 5.55'
    },
    {
        question: 'Assign the boolean value False to a variable named isStudent.',
        answer: 'isStudent = False'
    },
    {
        question: 'Assign a dictionary with keys "title" and "author" and values "1984" and "George Orwell" to a variable named book.',
        answer: 'book = {"title": "1984", "author": "George Orwell"}'
    },
    {
        question: 'Assign the string "biology" to a variable named major.',
        answer: 'major = "biology"'
    },
    {
        question: 'Assign the integer value 75 to a variable named age.',
        answer: 'age = 75'
    },
    {
        question: 'Assign the floating-point value 8.88 to a variable named discount.',
        answer: 'discount = 8.88'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a set containing the elements "circle", "square", and "triangle" to a variable named shapes.',
        answer: 'shapes = {"circle", "square", "triangle"}'
    },
    {
        question: 'Assign an empty dictionary to a variable named productCatalog.',
        answer: 'productCatalog = {}'
    },
    {
        question: 'Assign the string "teacher" to a variable named occupation.',
        answer: 'occupation = "teacher"'
    },
    {
        question: 'Assign the integer value 980 to a variable named followers.',
        answer: 'followers = 980'
    },
    {
        question: 'Assign the floating-point value 45.67 to a variable named percentage.',
        answer: 'percentage = 45.67'
    },
    {
        question: 'Assign the boolean value False to a variable named hasCoupon.',
        answer: 'hasCoupon = False'
    },
    {
        question: 'Assign a list containing the values "sun", "moon", and "stars" to a variable named celestialBodies.',
        answer: 'celestialBodies = ["sun", "moon", "stars"]'
    },
    {
        question: 'Assign a tuple containing 128, 256, and 512 to a variable named memorySizes.',
        answer: 'memorySizes = (128, 256, 512)'
    },
    {
        question: 'Assign the string "sword" to a variable named weapon.',
        answer: 'weapon = "sword"'
    },
    {
        question: 'Assign the integer value 37 to a variable named heartRate.',
        answer: 'heartRate = 37'
    },
    {
        question: 'Assign the floating-point value 101.01 to a variable named shippingCost.',
        answer: 'shippingCost = 101.01'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True'
    },
    {
        question: 'Assign a set containing the elements 5, 10, and 15 to a variable named steps.',
        answer: 'steps = {5, 10, 15}'
    },
    {
        question: 'Assign the value None to a variable named pendingOrder.',
        answer: 'pendingOrder = None'
    },
    {
        question: 'Assign the string "administrator" to a variable named role.',
        answer: 'role = "administrator"'
    },
    {
        question: 'Assign the integer value 255 to a variable named colorDepth.',
        answer: 'colorDepth = 255'
    },
    {
        question: 'Assign the floating-point value 13.14 to a variable named averageScore.',
        answer: 'averageScore = 13.14'
    },
    {
        question: 'Assign the boolean value False to a variable named isConfirmed.',
        answer: 'isConfirmed = False'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "user123" and "pass123" to a variable named loginCredentials.',
        answer: 'loginCredentials = {"username": "user123", "password": "pass123"}'
    },
    {
        question: 'Assign the string "mobile" to a variable named deviceType.',
        answer: 'deviceType = "mobile"'
    },
    {
        question: 'Assign the integer value 1024 to a variable named dataLimit.',
        answer: 'dataLimit = 1024'
    },
    {
        question: 'Assign the floating-point value 77.77 to a variable named jackpot.',
        answer: 'jackpot = 77.77'
    },
    {
        question: 'Assign the boolean value True to a variable named isPremium.',
        answer: 'isPremium = True'
    },
    {
        question: 'Assign the string "Python" to a variable named language.',
        answer: 'language = "Python"'
    },
    {
        question: 'Assign the integer value 200 to a variable named speed.',
        answer: 'speed = 200'
    },
    {
        question: 'Assign the floating-point value 3.14159 to a variable named pi.',
        answer: 'pi = 3.14159'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "red", "green", "blue" to a variable named colors.',
        answer: 'colors = ["red", "green", "blue"]'
    },
    {
        question: 'Assign a tuple containing "Rome", "Paris", "Berlin" to a variable named cities.',
        answer: 'cities = ("Rome", "Paris", "Berlin")'
    },
    {
        question: 'Assign the string "data science" to a variable named field.',
        answer: 'field = "data science"'
    },
    {
        question: 'Assign the integer value 7 to a variable named daysOfWeek.',
        answer: 'daysOfWeek = 7'
    },
    {
        question: 'Assign the floating-point value 99.99 to a variable named totalAmount.',
        answer: 'totalAmount = 99.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True'
    },
    {
        question: 'Assign a set containing the values "apple", "banana", "orange" to a variable named fruits.',
        answer: 'fruits = {"apple", "banana", "orange"}'
    },
    {
        question: 'Assign an empty list to a variable named shoppingCart.',
        answer: 'shoppingCart = []'
    },
    {
        question: 'Assign the string "mountain" to a variable named terrain.',
        answer: 'terrain = "mountain"'
    },
    {
        question: 'Assign the integer value 144 to a variable named squareNumber.',
        answer: 'squareNumber = 144'
    },
    {
        question: 'Assign the floating-point value 42.42 to a variable named percentageCompleted.',
        answer: 'percentageCompleted = 42.42'
    },
    {
        question: 'Assign the boolean value False to a variable named hasLicense.',
        answer: 'hasLicense = False'
    },
    {
        question: 'Assign a list containing "cat", "dog", "rabbit" to a variable named pets.',
        answer: 'pets = ["cat", "dog", "rabbit"]'
    },
    {
        question: 'Assign a tuple containing "January", "February", "March" to a variable named months.',
        answer: 'months = ("January", "February", "March")'
    },
    {
        question: 'Assign the string "electric" to a variable named carType.',
        answer: 'carType = "electric"'
    },
    {
        question: 'Assign the integer value 180 to a variable named angle.',
        answer: 'angle = 180'
    },
    {
        question: 'Assign the floating-point value 9.87 to a variable named score.',
        answer: 'score = 9.87'
    },
    {
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True'
    },
    {
        question: 'Assign a dictionary with keys "country" and "capital" and values "Italy" and "Rome" to a variable named countryInfo.',
        answer: 'countryInfo = {"country": "Italy", "capital": "Rome"}'
    },
    {
        question: 'Assign the string "puzzle" to a variable named gameType.',
        answer: 'gameType = "puzzle"'
    },
    {
        question: 'Assign the integer value 20 to a variable named ageLimit.',
        answer: 'ageLimit = 20'
    },
    {
        question: 'Assign the floating-point value 65.43 to a variable named batteryPercentage.',
        answer: 'batteryPercentage = 65.43'
    },
    {
        question: 'Assign the boolean value False to a variable named isRaining.',
        answer: 'isRaining = False'
    },
    {
        question: 'Assign a set containing the elements "north", "south", "east", "west" to a variable named directions.',
        answer: 'directions = {"north", "south", "east", "west"}'
    },
    {
        question: 'Assign an empty tuple to a variable named emptyData.',
        answer: 'emptyData = ()'
    },
    {
        question: 'Assign the string "climate change" to a variable named topic.',
        answer: 'topic = "climate change"'
    },
    {
        question: 'Assign the integer value 800 to a variable named resolution.',
        answer: 'resolution = 800'
    },
    {
        question: 'Assign the floating-point value 250.50 to a variable named finalCost.',
        answer: 'finalCost = 250.50'
    },
    {
        question: 'Assign the boolean value True to a variable named isSecure.',
        answer: 'isSecure = True'
    },
    {
        question: 'Assign a list containing the values 1, 2, 3, 4 to a variable named numbers.',
        answer: 'numbers = [1, 2, 3, 4]'
    },
    {
        question: 'Assign a tuple containing "alpha", "beta", "gamma" to a variable named greekLetters.',
        answer: 'greekLetters = ("alpha", "beta", "gamma")'
    },
    {
        question: 'Assign the string "tea" to a variable named favoriteDrink.',
        answer: 'favoriteDrink = "tea"'
    },
    {
        question: 'Assign the integer value 1001 to a variable named userId.',
        answer: 'userId = 1001'
    },
    {
        question: 'Assign the floating-point value 0.99 to a variable named probability.',
        answer: 'probability = 0.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isHidden.',
        answer: 'isHidden = False'
    },
    {
        question: 'Assign a set containing the values "rock", "paper", "scissors" to a variable named gameOptions.',
        answer: 'gameOptions = {"rock", "paper", "scissors"}'
    },
    {
        question: 'Assign a dictionary with keys "first_name" and "last_name" and values "John" and "Doe" to a variable named userProfile.',
        answer: 'userProfile = {"first_name": "John", "last_name": "Doe"}'
    },
    {
        question: 'Assign the string "desert" to a variable named ecosystem.',
        answer: 'ecosystem = "desert"'
    },
    {
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named costPerUnit.',
        answer: 'costPerUnit = 12.34'
    },
    {
        question: 'Assign the boolean value True to a variable named hasPermission.',
        answer: 'hasPermission = True'
    },
    {
        question: 'Assign a list containing the values "sunny", "rainy", "cloudy" to a variable named weatherConditions.',
        answer: 'weatherConditions = ["sunny", "rainy", "cloudy"]'
    },
    {
        question: 'Assign a tuple containing "one", "two", "three" to a variable named numbersAsWords.',
        answer: 'numbersAsWords = ("one", "two", "three")'
    },
    {
        question: 'Assign the string "developer" to a variable named jobTitle.',
        answer: 'jobTitle = "developer"'
    },
    {
        question: 'Assign the integer value 500 to a variable named maxScore.',
        answer: 'maxScore = 500'
    },
    {
        question: 'Assign the floating-point value 8.88 to a variable named rating.',
        answer: 'rating = 8.88'
    },
    {
        question: 'Assign the boolean value False to a variable named isConnected.',
        answer: 'isConnected = False'
    },
    {
        question: 'Assign a set containing "summer", "winter", "spring" to a variable named seasons.',
        answer: 'seasons = {"summer", "winter", "spring"}'
    },
    {
        question: 'Assign an empty dictionary to a variable named emptyMap.',
        answer: 'emptyMap = {}'
    },
    {
        question: 'Assign the string "administrator" to a variable named role.',
        answer: 'role = "administrator"'
    },
    {
        question: 'Assign the integer value 32 to a variable named temperature.',
        answer: 'temperature = 32'
    },
    {
        question: 'Assign the floating-point value 1234.56 to a variable named balance.',
        answer: 'balance = 1234.56'
    },
    {
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True'
    },
    {
        question: 'Assign a tuple containing "Sun", "Moon", "Earth" to a variable named celestialBodies.',
        answer: 'celestialBodies = ("Sun", "Moon", "Earth")'
    },
    {
        question: 'Assign a list containing the numbers 10, 20, 30, 40, 50 to a variable named scores.',
        answer: 'scores = [10, 20, 30, 40, 50]'
    },
    {
        question: 'Assign the string "chocolate" to a variable named flavor.',
        answer: 'flavor = "chocolate"'
    },
    {
        question: 'Assign the integer value 64 to a variable named totalItems.',
        answer: 'totalItems = 64'
    },
    {
        question: 'Assign the floating-point value 7.23 to a variable named hourlyRate.',
        answer: 'hourlyRate = 7.23'
    },
    {
        question: 'Assign the boolean value False to a variable named isPublic.',
        answer: 'isPublic = False'
    },
    {
        question: 'Assign a set containing "A", "B", "C" to a variable named gradeSet.',
        answer: 'gradeSet = {"A", "B", "C"}'
    },
    {
        question: 'Assign an empty string to a variable named emptyText.',
        answer: 'emptyText = ""'
    },
    {
        question: 'Assign the string "sunflower" to a variable named favoriteFlower.',
        answer: 'favoriteFlower = "sunflower"'
    },
    {
        question: 'Assign the integer value 2024 to a variable named year.',
        answer: 'year = 2024'
    },
    {
        question: 'Assign the floating-point value 15.55 to a variable named discount.',
        answer: 'discount = 15.55'
    },
    {
        question: 'Assign the boolean value True to a variable named isComplete.',
        answer: 'isComplete = True'
    },
    {
        question: 'Assign a list containing "bread", "butter", "jam" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["bread", "butter", "jam"]'
    },
    {
        question: 'Assign a tuple containing "Africa", "Asia", "Europe" to a variable named continents.',
        answer: 'continents = ("Africa", "Asia", "Europe")'
    },
    {
        question: 'Assign the string "triangle" to a variable named shape.',
        answer: 'shape = "triangle"'
    },
    {
        question: 'Assign the integer value 90 to a variable named degree.',
        answer: 'degree = 90'
    },
    {
        question: 'Assign the floating-point value 99.01 to a variable named testScore.',
        answer: 'testScore = 99.01'
    },
    {
        question: 'Assign the boolean value False to a variable named isVerified.',
        answer: 'isVerified = False'
    },
    {
        question: 'Assign a dictionary with keys "username" and "email" and values "user123" and "user@example.com" to a variable named userInfo.',
        answer: 'userInfo = {"username": "user123", "email": "user@example.com"}'
    },
    {
        question: 'Assign the string "sunny" to a variable named weather.',
        answer: 'weather = "sunny"'
    },
    {
        question: 'Assign the integer value 25 to a variable named grade.',
        answer: 'grade = 25'
    },
    {
        question: 'Assign the floating-point value 11.11 to a variable named pricePerUnit.',
        answer: 'pricePerUnit = 11.11'
    },
    {
        question: 'Assign the boolean value True to a variable named isVisible.',
        answer: 'isVisible = True'
    },
    {
        question: 'Assign a set containing "admin", "editor", "viewer" to a variable named userRoles.',
        answer: 'userRoles = {"admin", "editor", "viewer"}'
    },
    {
        question: 'Assign an empty list to a variable named availableSlots.',
        answer: 'availableSlots = []'
    },
    {
        question: 'Assign the string "rectangle" to a variable named geometry.',
        answer: 'geometry = "rectangle"'
    },
    {
        question: 'Assign the integer value 75 to a variable named percentage.',
        answer: 'percentage = 75'
    },
    {
        question: 'Assign the floating-point value 22.22 to a variable named taxAmount.',
        answer: 'taxAmount = 22.22'
    },
    {
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False'
    },
    {
        question: 'Assign a dictionary with keys "first_name" and "age" and values "Emily" and 30 to a variable named person.',
        answer: 'person = {"first_name": "Emily", "age": 30}'
    },
    {
        question: 'Assign the string "project" to a variable named taskType.',
        answer: 'taskType = "project"'
    },
    {
        question: 'Assign the integer value 1800 to a variable named sales.',
        answer: 'sales = 1800'
    },
    {
        question: 'Assign the floating-point value 300.75 to a variable named bonus.',
        answer: 'bonus = 300.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a list containing "Toyota", "Ford", "BMW" to a variable named carBrands.',
        answer: 'carBrands = ["Toyota", "Ford", "BMW"]'
    },
    {
        question: 'Assign a tuple containing "north", "south", "west" to a variable named directions.',
        answer: 'directions = ("north", "south", "west")'
    },
    {
        question: 'Assign the string "apple" to a variable named fruit.',
        answer: 'fruit = "apple"'
    },
    {
        question: 'Assign the string "unicorn" to a variable named mythicalAnimal.',
        answer: 'mythicalAnimal = "unicorn"'
    },
    {
        question: 'Assign the integer value 144 to a variable named fibonacciNumber.',
        answer: 'fibonacciNumber = 144'
    },
    {
        question: 'Assign the floating-point value 3.1416 to a variable named piApproximation.',
        answer: 'piApproximation = 3.1416'
    },
    {
        question: 'Assign the boolean value True to a variable named hasPermission.',
        answer: 'hasPermission = True'
    },
    {
        question: 'Assign a list containing "January", "February", "March" to a variable named firstQuarter.',
        answer: 'firstQuarter = ["January", "February", "March"]'
    },
    {
        question: 'Assign a dictionary with keys "model" and "year" and values "Tesla" and 2020 to a variable named car.',
        answer: 'car = {"model": "Tesla", "year": 2020}'
    },
    {
        question: 'Assign the string "rose" to a variable named favoritePlant.',
        answer: 'favoritePlant = "rose"'
    },
    {
        question: 'Assign the integer value 404 to a variable named errorCode.',
        answer: 'errorCode = 404'
    },
    {
        question: 'Assign the floating-point value 299.99 to a variable named laptopPrice.',
        answer: 'laptopPrice = 299.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isDebugMode.',
        answer: 'isDebugMode = False'
    },
    {
        question: 'Assign a tuple containing the numbers 1, 4, and 9 to a variable named squares.',
        answer: 'squares = (1, 4, 9)'
    },
    {
        question: 'Assign a list containing "dog", "cat", "rabbit" to a variable named pets.',
        answer: 'pets = ["dog", "cat", "rabbit"]'
    },
    {
        question: 'Assign the string "constellation" to a variable named skyFeature.',
        answer: 'skyFeature = "constellation"'
    },
    {
        question: 'Assign the integer value 1024 to a variable named fileSize.',
        answer: 'fileSize = 1024'
    },
    {
        question: 'Assign the floating-point value 1.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 1.618'
    },
    {
        question: 'Assign the boolean value True to a variable named isLightOn.',
        answer: 'isLightOn = True'
    },
    {
        question: 'Assign a set containing the values 5, 10, and 15 to a variable named multiplesOfFive.',
        answer: 'multiplesOfFive = {5, 10, 15}'
    },
    {
        question: 'Assign the string "python" to a variable named programmingLanguage.',
        answer: 'programmingLanguage = "python"'
    },
    {
        question: 'Assign the integer value 12 to a variable named hoursInDay.',
        answer: 'hoursInDay = 12'
    },
    {
        question: 'Assign the floating-point value 32.78 to a variable named averageTemperature.',
        answer: 'averageTemperature = 32.78'
    },
    {
        question: 'Assign the boolean value False to a variable named isWindowOpen.',
        answer: 'isWindowOpen = False'
    },
    {
        question: 'Assign a tuple containing "circle", "square", "triangle" to a variable named shapes.',
        answer: 'shapes = ("circle", "square", "triangle")'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "user123" and "pass123" to a variable named credentials.',
        answer: 'credentials = {"username": "user123", "password": "pass123"}'
    },
    {
        question: 'Assign the string "fall" to a variable named season.',
        answer: 'season = "fall"'
    },
    {
        question: 'Assign the integer value 2025 to a variable named nextYear.',
        answer: 'nextYear = 2025'
    },
    {
        question: 'Assign the floating-point value 88.88 to a variable named luckyNumber.',
        answer: 'luckyNumber = 88.88'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True'
    },
    {
        question: 'Assign a list containing "pencil", "pen", "eraser" to a variable named stationeryItems.',
        answer: 'stationeryItems = ["pencil", "pen", "eraser"]'
    },
    {
        question: 'Assign a set containing "Facebook", "Twitter", "Instagram" to a variable named socialMedia.',
        answer: 'socialMedia = {"Facebook", "Twitter", "Instagram"}'
    },
    {
        question: 'Assign the string "midnight" to a variable named timeOfDay.',
        answer: 'timeOfDay = "midnight"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named population.',
        answer: 'population = 1000'
    },
    {
        question: 'Assign the floating-point value 77.77 to a variable named salePrice.',
        answer: 'salePrice = 77.77'
    },
    {
        question: 'Assign the boolean value False to a variable named isMuted.',
        answer: 'isMuted = False'
    },
    {
        question: 'Assign a dictionary with keys "title" and "author" and values "1984" and "Orwell" to a variable named book.',
        answer: 'book = {"title": "1984", "author": "Orwell"}'
    },
    {
        question: 'Assign the string "gold" to a variable named favoriteColor.',
        answer: 'favoriteColor = "gold"'
    },
    {
        question: 'Assign the integer value 7 to a variable named daysInWeek.',
        answer: 'daysInWeek = 7'
    },
    {
        question: 'Assign the floating-point value 99.99 to a variable named specialOfferPrice.',
        answer: 'specialOfferPrice = 99.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isSubscribed.',
        answer: 'isSubscribed = True'
    },
    {
        question: 'Assign a list containing "bread", "milk", "cheese" to a variable named groceryItems.',
        answer: 'groceryItems = ["bread", "milk", "cheese"]'
    },
    {
        question: 'Assign a tuple containing "Rome", "Paris", "London" to a variable named capitals.',
        answer: 'capitals = ("Rome", "Paris", "London")'
    },
    {
        question: 'Assign the string "sapphire" to a variable named gemstone.',
        answer: 'gemstone = "sapphire"'
    },
    {
        question: 'Assign the integer value 12 to a variable named monthsInYear.',
        answer: 'monthsInYear = 12'
    },
    {
        question: 'Assign the floating-point value 1.2345 to a variable named precisionValue.',
        answer: 'precisionValue = 1.2345'
    },
    {
        question: 'Assign the boolean value False to a variable named isProcessing.',
        answer: 'isProcessing = False'
    },
    {
        question: 'Assign a list containing "Mercedes", "Audi", "BMW" to a variable named luxuryCars.',
        answer: 'luxuryCars = ["Mercedes", "Audi", "BMW"]'
    },
    {
        question: 'Assign a set containing "one", "two", "three" to a variable named numberWords.',
        answer: 'numberWords = {"one", "two", "three"}'
    },
    {
        question: 'Assign the string "spider" to a variable named insect.',
        answer: 'insect = "spider"'
    },
    {
        question: 'Assign the string "dolphin" to a variable named aquaticAnimal.',
        answer: 'aquaticAnimal = "dolphin"'
    },
    {
        question: 'Assign the integer value 64 to a variable named chessSquares.',
        answer: 'chessSquares = 64'
    },
    {
        question: 'Assign the floating-point value 98.6 to a variable named bodyTemperature.',
        answer: 'bodyTemperature = 98.6'
    },
    {
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True'
    },
    {
        question: 'Assign a list containing "red", "green", "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ["red", "green", "blue"]'
    },
    {
        question: 'Assign a tuple containing the numbers 2, 4, and 6 to a variable named evenNumbers.',
        answer: 'evenNumbers = (2, 4, 6)'
    },
    {
        question: 'Assign the string "meteor" to a variable named celestialEvent.',
        answer: 'celestialEvent = "meteor"'
    },
    {
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named stockPrice.',
        answer: 'stockPrice = 12.34'
    },
    {
        question: 'Assign the boolean value False to a variable named isLocked.',
        answer: 'isLocked = False'
    },
    {
        question: 'Assign a list containing "north", "south", "east", "west" to a variable named directions.',
        answer: 'directions = ["north", "south", "east", "west"]'
    },
    {
        question: 'Assign a dictionary with keys "firstName" and "lastName" and values "John" and "Doe" to a variable named person.',
        answer: 'person = {"firstName": "John", "lastName": "Doe"}'
    },
    {
        question: 'Assign the string "diamond" to a variable named favoriteGem.',
        answer: 'favoriteGem = "diamond"'
    },
    {
        question: 'Assign the integer value 52 to a variable named weeksInYear.',
        answer: 'weeksInYear = 52'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True'
    },
    {
        question: 'Assign a tuple containing "earth", "wind", "fire" to a variable named elements.',
        answer: 'elements = ("earth", "wind", "fire")'
    },
    {
        question: 'Assign the string "desert" to a variable named landscape.',
        answer: 'landscape = "desert"'
    },
    {
        question: 'Assign the integer value 9 to a variable named planetsInSolarSystem.',
        answer: 'planetsInSolarSystem = 9'
    },
    {
        question: 'Assign the floating-point value 0.333 to a variable named fractionalValue.',
        answer: 'fractionalValue = 0.333'
    },
    {
        question: 'Assign the boolean value False to a variable named isInvisible.',
        answer: 'isInvisible = False'
    },
    {
        question: 'Assign a list containing "piano", "guitar", "drums" to a variable named musicalInstruments.',
        answer: 'musicalInstruments = ["piano", "guitar", "drums"]'
    },
    {
        question: 'Assign a dictionary with keys "make" and "model" and values "Ford" and "Mustang" to a variable named carInfo.',
        answer: 'carInfo = {"make": "Ford", "model": "Mustang"}'
    },
    {
        question: 'Assign the string "jungle" to a variable named habitat.',
        answer: 'habitat = "jungle"'
    },
    {
        question: 'Assign the integer value 3 to a variable named triangleSides.',
        answer: 'triangleSides = 3'
    },
    {
        question: 'Assign the floating-point value 42.42 to a variable named answerToEverything.',
        answer: 'answerToEverything = 42.42'
    },
    {
        question: 'Assign the boolean value True to a variable named isWinner.',
        answer: 'isWinner = True'
    },
    {
        question: 'Assign a tuple containing "gold", "silver", "bronze" to a variable named medalColors.',
        answer: 'medalColors = ("gold", "silver", "bronze")'
    },
    {
        question: 'Assign the string "mountain" to a variable named terrain.',
        answer: 'terrain = "mountain"'
    },
    {
        question: 'Assign the integer value 206 to a variable named bonesInHumanBody.',
        answer: 'bonesInHumanBody = 206'
    },
    {
        question: 'Assign the floating-point value 2.718 to a variable named eulerNumber.',
        answer: 'eulerNumber = 2.718'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "bread", "butter", "jam" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["bread", "butter", "jam"]'
    },
    {
        question: 'Assign a dictionary with keys "city" and "country" and values "Paris" and "France" to a variable named location.',
        answer: 'location = {"city": "Paris", "country": "France"}'
    },
    {
        question: 'Assign the string "galaxy" to a variable named cosmicStructure.',
        answer: 'cosmicStructure = "galaxy"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named bytesInKilobyte.',
        answer: 'bytesInKilobyte = 1000'
    },
    {
        question: 'Assign the floating-point value 5.5 to a variable named halfValue.',
        answer: 'halfValue = 5.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isPrimeMember.',
        answer: 'isPrimeMember = True'
    },
    {
        question: 'Assign a tuple containing "Mercury", "Venus", "Mars" to a variable named innerPlanets.',
        answer: 'innerPlanets = ("Mercury", "Venus", "Mars")'
    },
    {
        question: 'Assign the string "cityscape" to a variable named urbanScene.',
        answer: 'urbanScene = "cityscape"'
    },
    {
        question: 'Assign the integer value 45 to a variable named averageAge.',
        answer: 'averageAge = 45'
    },
    {
        question: 'Assign the floating-point value 1.732 to a variable named sqrtThree.',
        answer: 'sqrtThree = 1.732'
    },
    {
        question: 'Assign the boolean value False to a variable named isPlayerActive.',
        answer: 'isPlayerActive = False'
    },
    {
        question: 'Assign a list containing "apple", "orange", "grape" to a variable named fruitsList.',
        answer: 'fruitsList = ["apple", "orange", "grape"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "director" and values "Inception" and "Nolan" to a variable named movie.',
        answer: 'movie = {"title": "Inception", "director": "Nolan"}'
    },
    {
        question: 'Assign the string "tiger" to a variable named wildAnimal.',
        answer: 'wildAnimal = "tiger"'
    },
    {
        question: 'Assign the integer value 30 to a variable named daysInMonth.',
        answer: 'daysInMonth = 30'
    },
    {
        question: 'Assign the floating-point value 13.13 to a variable named luckyFloat.',
        answer: 'luckyFloat = 13.13'
    },
    {
        question: 'Assign the boolean value True to a variable named isLoggedIn.',
        answer: 'isLoggedIn = True'
    },
    {
        question: 'Assign a tuple containing "keyboard", "mouse", "monitor" to a variable named computerAccessories.',
        answer: 'computerAccessories = ("keyboard", "mouse", "monitor")'
    },
    {
        question: 'Assign the string "waterfall" to a variable named naturalWonder.',
        answer: 'naturalWonder = "waterfall"'
    },
    {
        question: 'Assign the integer value 360 to a variable named degreesInCircle.',
        answer: 'degreesInCircle = 360'
    },
    {
        question: 'Assign the floating-point value 0.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 0.618'
    },
    {
        question: 'Assign the boolean value False to a variable named isPublic.',
        answer: 'isPublic = False'
    },
    {
        question: 'Assign a list containing "January", "February", "March" to a variable named firstQuarterMonths.',
        answer: 'firstQuarterMonths = ["January", "February", "March"]'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "admin" and "1234" to a variable named credentials.',
        answer: 'credentials = {"username": "admin", "password": "1234"}'
    },
    {
        question: 'Assign the string "sunflower" to a variable named favoriteFlower.',
        answer: 'favoriteFlower = "sunflower"'
    },
    {
        question: 'Assign the integer value 24 to a variable named hoursInDay.',
        answer: 'hoursInDay = 24'
    },
    {
        question: 'Assign the floating-point value 7.07 to a variable named piApproximation.',
        answer: 'piApproximation = 7.07'
    },
    {
        question: 'Assign the boolean value True to a variable named isSubscribed.',
        answer: 'isSubscribed = True'
    },
    {
        question: 'Assign a tuple containing "circle", "square", "triangle" to a variable named basicShapes.',
        answer: 'basicShapes = ("circle", "square", "triangle")'
    },
    {
        question: 'Assign the string "mountain lion" to a variable named predator.',
        answer: 'predator = "mountain lion"'
    },
    {
        question: 'Assign the integer value 100 to a variable named century.',
        answer: 'century = 100'
    },
    {
        question: 'Assign the floating-point value 6.022 to a variable named avogadroNumber.',
        answer: 'avogadroNumber = 6.022'
    },
    {
        question: 'Assign the boolean value False to a variable named isDefective.',
        answer: 'isDefective = False'
    },
    {
        question: 'Assign a list containing "Mercury", "Venus", "Earth" to a variable named closestPlanets.',
        answer: 'closestPlanets = ["Mercury", "Venus", "Earth"]'
    },
    {
        question: 'Assign a dictionary with keys "model" and "year" and values "Corolla" and "2022" to a variable named car.',
        answer: 'car = {"model": "Corolla", "year": "2022"}'
    },
    {
        question: 'Assign the string "comet" to a variable named spaceObject.',
        answer: 'spaceObject = "comet"'
    },
    {
        question: 'Assign the integer value 3600 to a variable named secondsInHour.',
        answer: 'secondsInHour = 3600'
    },
    {
        question: 'Assign the floating-point value 9.99 to a variable named salePrice.',
        answer: 'salePrice = 9.99'
    },
    {
        question: 'Assign the boolean value True to a variable named hasPermissions.',
        answer: 'hasPermissions = True'
    },
    {
        question: 'Assign a tuple containing "hot", "cold", "mild" to a variable named weatherConditions.',
        answer: 'weatherConditions = ("hot", "cold", "mild")'
    },
    {
        question: 'Assign the string "canyon" to a variable named landFeature.',
        answer: 'landFeature = "canyon"'
    },
    {
        question: 'Assign the integer value 52 to a variable named cardsInDeck.',
        answer: 'cardsInDeck = 52'
    },
    {
        question: 'Assign the floating-point value 14.7 to a variable named airPressure.',
        answer: 'airPressure = 14.7'
    },
    {
        question: 'Assign the boolean value False to a variable named isElectric.',
        answer: 'isElectric = False'
    },
    {
        question: 'Assign a list containing "pen", "pencil", "eraser" to a variable named stationery.',
        answer: 'stationery = ["pen", "pencil", "eraser"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Alice" and 30 to a variable named user.',
        answer: 'user = {"name": "Alice", "age": 30}'
    },
    {
        question: 'Assign the string "rover" to a variable named explorationVehicle.',
        answer: 'explorationVehicle = "rover"'
    },
    {
        question: 'Assign the integer value 64 to a variable named bitsInByte.',
        answer: 'bitsInByte = 64'
    },
    {
        question: 'Assign the floating-point value 32.1 to a variable named altitude.',
        answer: 'altitude = 32.1'
    },
    {
        question: 'Assign the string "dolphin" to a variable named aquaticAnimal.',
        answer: 'aquaticAnimal = "dolphin"'
    },
    {
        question: 'Assign the integer value 64 to a variable named chessSquares.',
        answer: 'chessSquares = 64'
    },
    {
        question: 'Assign the floating-point value 98.6 to a variable named bodyTemperature.',
        answer: 'bodyTemperature = 98.6'
    },
    {
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True'
    },
    {
        question: 'Assign a list containing "red", "green", "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ["red", "green", "blue"]'
    },
    {
        question: 'Assign a tuple containing the numbers 2, 4, and 6 to a variable named evenNumbers.',
        answer: 'evenNumbers = (2, 4, 6)'
    },
    {
        question: 'Assign the string "meteor" to a variable named celestialEvent.',
        answer: 'celestialEvent = "meteor"'
    },
    {
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named stockPrice.',
        answer: 'stockPrice = 12.34'
    },
    {
        question: 'Assign the boolean value False to a variable named isLocked.',
        answer: 'isLocked = False'
    },
    {
        question: 'Assign a list containing "north", "south", "east", "west" to a variable named directions.',
        answer: 'directions = ["north", "south", "east", "west"]'
    },
    {
        question: 'Assign a dictionary with keys "firstName" and "lastName" and values "John" and "Doe" to a variable named person.',
        answer: 'person = {"firstName": "John", "lastName": "Doe"}'
    },
    {
        question: 'Assign the string "diamond" to a variable named favoriteGem.',
        answer: 'favoriteGem = "diamond"'
    },
    {
        question: 'Assign the integer value 52 to a variable named weeksInYear.',
        answer: 'weeksInYear = 52'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value True to a variable named isAdmin.',
        answer: 'isAdmin = True'
    },
    {
        question: 'Assign a tuple containing "earth", "wind", "fire" to a variable named elements.',
        answer: 'elements = ("earth", "wind", "fire")'
    },
    {
        question: 'Assign the string "desert" to a variable named landscape.',
        answer: 'landscape = "desert"'
    },
    {
        question: 'Assign the integer value 9 to a variable named planetsInSolarSystem.',
        answer: 'planetsInSolarSystem = 9'
    },
    {
        question: 'Assign the floating-point value 0.333 to a variable named fractionalValue.',
        answer: 'fractionalValue = 0.333'
    },
    {
        question: 'Assign the boolean value False to a variable named isInvisible.',
        answer: 'isInvisible = False'
    },
    {
        question: 'Assign a list containing "piano", "guitar", "drums" to a variable named musicalInstruments.',
        answer: 'musicalInstruments = ["piano", "guitar", "drums"]'
    },
    {
        question: 'Assign a dictionary with keys "make" and "model" and values "Ford" and "Mustang" to a variable named carInfo.',
        answer: 'carInfo = {"make": "Ford", "model": "Mustang"}'
    },
    {
        question: 'Assign the string "jungle" to a variable named habitat.',
        answer: 'habitat = "jungle"'
    },
    {
        question: 'Assign the integer value 3 to a variable named triangleSides.',
        answer: 'triangleSides = 3'
    },
    {
        question: 'Assign the floating-point value 42.42 to a variable named answerToEverything.',
        answer: 'answerToEverything = 42.42'
    },
    {
        question: 'Assign the boolean value True to a variable named isWinner.',
        answer: 'isWinner = True'
    },
    {
        question: 'Assign a tuple containing "gold", "silver", "bronze" to a variable named medalColors.',
        answer: 'medalColors = ("gold", "silver", "bronze")'
    },
    {
        question: 'Assign the string "mountain" to a variable named terrain.',
        answer: 'terrain = "mountain"'
    },
    {
        question: 'Assign the integer value 206 to a variable named bonesInHumanBody.',
        answer: 'bonesInHumanBody = 206'
    },
    {
        question: 'Assign the floating-point value 2.718 to a variable named eulerNumber.',
        answer: 'eulerNumber = 2.718'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "bread", "butter", "jam" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["bread", "butter", "jam"]'
    },
    {
        question: 'Assign a dictionary with keys "city" and "country" and values "Paris" and "France" to a variable named location.',
        answer: 'location = {"city": "Paris", "country": "France"}'
    },
    {
        question: 'Assign the string "galaxy" to a variable named cosmicStructure.',
        answer: 'cosmicStructure = "galaxy"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named bytesInKilobyte.',
        answer: 'bytesInKilobyte = 1000'
    },
    {
        question: 'Assign the floating-point value 5.5 to a variable named halfValue.',
        answer: 'halfValue = 5.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isPrimeMember.',
        answer: 'isPrimeMember = True'
    },
    {
        question: 'Assign a tuple containing "Mercury", "Venus", "Mars" to a variable named innerPlanets.',
        answer: 'innerPlanets = ("Mercury", "Venus", "Mars")'
    },
    {
        question: 'Assign the string "cityscape" to a variable named urbanScene.',
        answer: 'urbanScene = "cityscape"'
    },
    {
        question: 'Assign the integer value 45 to a variable named averageAge.',
        answer: 'averageAge = 45'
    },
    {
        question: 'Assign the floating-point value 1.732 to a variable named sqrtThree.',
        answer: 'sqrtThree = 1.732'
    },
    {
        question: 'Assign the boolean value False to a variable named isPlayerActive.',
        answer: 'isPlayerActive = False'
    },
    {
        question: 'Assign a list containing "apple", "orange", "grape" to a variable named fruitsList.',
        answer: 'fruitsList = ["apple", "orange", "grape"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "director" and values "Inception" and "Nolan" to a variable named movie.',
        answer: 'movie = {"title": "Inception", "director": "Nolan"}'
    },
    {
        question: 'Assign the string "tiger" to a variable named wildAnimal.',
        answer: 'wildAnimal = "tiger"'
    },
    {
        question: 'Assign the integer value 30 to a variable named daysInMonth.',
        answer: 'daysInMonth = 30'
    },
    {
        question: 'Assign the floating-point value 13.13 to a variable named luckyFloat.',
        answer: 'luckyFloat = 13.13'
    },
    {
        question: 'Assign the boolean value True to a variable named isLoggedIn.',
        answer: 'isLoggedIn = True'
    },
    {
        question: 'Assign a tuple containing "keyboard", "mouse", "monitor" to a variable named computerAccessories.',
        answer: 'computerAccessories = ("keyboard", "mouse", "monitor")'
    },
    {
        question: 'Assign the string "waterfall" to a variable named naturalWonder.',
        answer: 'naturalWonder = "waterfall"'
    },
    {
        question: 'Assign the integer value 360 to a variable named degreesInCircle.',
        answer: 'degreesInCircle = 360'
    },
    {
        question: 'Assign the floating-point value 0.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 0.618'
    },
    {
        question: 'Assign the boolean value False to a variable named isPublic.',
        answer: 'isPublic = False'
    },
    {
        question: 'Assign a list containing "January", "February", "March" to a variable named firstQuarterMonths.',
        answer: 'firstQuarterMonths = ["January", "February", "March"]'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "admin" and "1234" to a variable named credentials.',
        answer: 'credentials = {"username": "admin", "password": "1234"}'
    },
    {
        question: 'Assign the string "sunflower" to a variable named favoriteFlower.',
        answer: 'favoriteFlower = "sunflower"'
    },
    {
        question: 'Assign the integer value 24 to a variable named hoursInDay.',
        answer: 'hoursInDay = 24'
    },
    {
        question: 'Assign the floating-point value 7.07 to a variable named piApproximation.',
        answer: 'piApproximation = 7.07'
    },
    {
        question: 'Assign the boolean value True to a variable named isSubscribed.',
        answer: 'isSubscribed = True'
    },
    {
        question: 'Assign a tuple containing "circle", "square", "triangle" to a variable named basicShapes.',
        answer: 'basicShapes = ("circle", "square", "triangle")'
    },
    {
        question: 'Assign the string "mountain lion" to a variable named predator.',
        answer: 'predator = "mountain lion"'
    },
    {
        question: 'Assign the integer value 100 to a variable named century.',
        answer: 'century = 100'
    },
    {
        question: 'Assign the floating-point value 6.022 to a variable named avogadroNumber.',
        answer: 'avogadroNumber = 6.022'
    },
    {
        question: 'Assign the boolean value False to a variable named isDefective.',
        answer: 'isDefective = False'
    },
    {
        question: 'Assign a list containing "Mercury", "Venus", "Earth" to a variable named closestPlanets.',
        answer: 'closestPlanets = ["Mercury", "Venus", "Earth"]'
    },
    {
        question: 'Assign a dictionary with keys "model" and "year" and values "Corolla" and "2022" to a variable named car.',
        answer: 'car = {"model": "Corolla", "year": "2022"}'
    },
    {
        question: 'Assign the string "comet" to a variable named spaceObject.',
        answer: 'spaceObject = "comet"'
    },
    {
        question: 'Assign the integer value 3600 to a variable named secondsInHour.',
        answer: 'secondsInHour = 3600'
    },
    {
        question: 'Assign the floating-point value 9.99 to a variable named salePrice.',
        answer: 'salePrice = 9.99'
    },
    {
        question: 'Assign the boolean value True to a variable named hasPermissions.',
        answer: 'hasPermissions = True'
    },
    {
        question: 'Assign a tuple containing "hot", "cold", "mild" to a variable named weatherConditions.',
        answer: 'weatherConditions = ("hot", "cold", "mild")'
    },
    {
        question: 'Assign the string "canyon" to a variable named landFeature.',
        answer: 'landFeature = "canyon"'
    },
    {
        question: 'Assign the integer value 52 to a variable named cardsInDeck.',
        answer: 'cardsInDeck = 52'
    },
    {
        question: 'Assign the floating-point value 14.7 to a variable named airPressure.',
        answer: 'airPressure = 14.7'
    },
    {
        question: 'Assign the boolean value False to a variable named isElectric.',
        answer: 'isElectric = False'
    },
    {
        question: 'Assign a list containing "pen", "pencil", "eraser" to a variable named stationery.',
        answer: 'stationery = ["pen", "pencil", "eraser"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Alice" and 30 to a variable named user.',
        answer: 'user = {"name": "Alice", "age": 30}'
    },
    {
        question: 'Assign the string "rover" to a variable named explorationVehicle.',
        answer: 'explorationVehicle = "rover"'
    },
    {
        question: 'Assign the integer value 64 to a variable named bitsInByte.',
        answer: 'bitsInByte = 64'
    },
    {
        question: 'Assign the floating-point value 32.1 to a variable named altitude.',
        answer: 'altitude = 32.1'
    },
    {
        question: 'Assign the string "waterfall" to a variable named naturalFeature.',
        answer: 'naturalFeature = "waterfall"'
    },
    {
        question: 'Assign the integer value 2023 to a variable named currentYear.',
        answer: 'currentYear = 2023'
    },
    {
        question: 'Assign the floating-point value 123.45 to a variable named accountBalance.',
        answer: 'accountBalance = 123.45'
    },
    {
        question: 'Assign the boolean value True to a variable named hasLicense.',
        answer: 'hasLicense = True'
    },
    {
        question: 'Assign a list containing "table", "chair", "sofa" to a variable named furniture.',
        answer: 'furniture = ["table", "chair", "sofa"]'
    },
    {
        question: 'Assign a tuple containing the values "small", "medium", "large" to a variable named sizes.',
        answer: 'sizes = ("small", "medium", "large")'
    },
    {
        question: 'Assign the string "python" to a variable named programmingLanguage.',
        answer: 'programmingLanguage = "python"'
    },
    {
        question: 'Assign the integer value 40 to a variable named workHours.',
        answer: 'workHours = 40'
    },
    {
        question: 'Assign the floating-point value 27.5 to a variable named temperature.',
        answer: 'temperature = 27.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isAdmin.',
        answer: 'isAdmin = False'
    },
    {
        question: 'Assign a list containing "red", "blue", "green" to a variable named colors.',
        answer: 'colors = ["red", "blue", "green"]'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "guest" and "qwerty" to a variable named loginCredentials.',
        answer: 'loginCredentials = {"username": "guest", "password": "qwerty"}'
    },
    {
        question: 'Assign the string "tiger" to a variable named endangeredSpecies.',
        answer: 'endangeredSpecies = "tiger"'
    },
    {
        question: 'Assign the integer value 5280 to a variable named feetInMile.',
        answer: 'feetInMile = 5280'
    },
    {
        question: 'Assign the floating-point value 19.99 to a variable named productPrice.',
        answer: 'productPrice = 19.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isConnected.',
        answer: 'isConnected = True'
    },
    {
        question: 'Assign a tuple containing "sun", "moon", "stars" to a variable named celestialObjects.',
        answer: 'celestialObjects = ("sun", "moon", "stars")'
    },
    {
        question: 'Assign the string "chocolate" to a variable named favoriteFlavor.',
        answer: 'favoriteFlavor = "chocolate"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named maxCapacity.',
        answer: 'maxCapacity = 1000'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named taxRate.',
        answer: 'taxRate = 12.34'
    },
    {
        question: 'Assign the boolean value False to a variable named isLocked.',
        answer: 'isLocked = False'
    },
    {
        question: 'Assign a list containing "triangle", "hexagon", "pentagon" to a variable named polygons.',
        answer: 'polygons = ["triangle", "hexagon", "pentagon"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "author" and values "1984" and "George Orwell" to a variable named book.',
        answer: 'book = {"title": "1984", "author": "George Orwell"}'
    },
    {
        question: 'Assign the string "sunny" to a variable named weatherCondition.',
        answer: 'weatherCondition = "sunny"'
    },
    {
        question: 'Assign the integer value 5000 to a variable named stepsGoal.',
        answer: 'stepsGoal = 5000'
    },
    {
        question: 'Assign the floating-point value 45.67 to a variable named totalScore.',
        answer: 'totalScore = 45.67'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a tuple containing "circle", "oval", "ellipse" to a variable named shapes3D.',
        answer: 'shapes3D = ("circle", "oval", "ellipse")'
    },
    {
        question: 'Assign the string "superman" to a variable named hero.',
        answer: 'hero = "superman"'
    },
    {
        question: 'Assign the integer value 123 to a variable named serialNumber.',
        answer: 'serialNumber = 123'
    },
    {
        question: 'Assign the floating-point value 1.23 to a variable named growthRate.',
        answer: 'growthRate = 1.23'
    },
    {
        question: 'Assign the boolean value False to a variable named isHidden.',
        answer: 'isHidden = False'
    },
    {
        question: 'Assign a list containing "rose", "daffodil", "daisy" to a variable named springFlowers.',
        answer: 'springFlowers = ["rose", "daffodil", "daisy"]'
    },
    {
        question: 'Assign a dictionary with keys "company" and "year" and values "Tesla" and 2020 to a variable named electricCar.',
        answer: 'electricCar = {"company": "Tesla", "year": 2020}'
    },
    {
        question: 'Assign the string "mountain" to a variable named landform.',
        answer: 'landform = "mountain"'
    },
    {
        question: 'Assign the integer value 20 to a variable named totalItems.',
        answer: 'totalItems = 20'
    },
    {
        question: 'Assign the floating-point value 2.718 to a variable named eValue.',
        answer: 'eValue = 2.718'
    },
    {
        question: 'Assign the boolean value True to a variable named isMember.',
        answer: 'isMember = True'
    },
    {
        question: 'Assign a tuple containing "red", "yellow", "green" to a variable named trafficLights.',
        answer: 'trafficLights = ("red", "yellow", "green")'
    },
    {
        question: 'Assign the string "forest" to a variable named habitat.',
        answer: 'habitat = "forest"'
    },
    {
        question: 'Assign the integer value 365 to a variable named daysInLeapYear.',
        answer: 'daysInLeapYear = 365'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "hat", "scarf", "gloves" to a variable named winterClothes.',
        answer: 'winterClothes = ["hat", "scarf", "gloves"]'
    },
    {
        question: 'Assign a dictionary with keys "language" and "version" and values "Python" and 3.9 to a variable named softwareInfo.',
        answer: 'softwareInfo = {"language": "Python", "version": 3.9}'
    },
    {
        question: 'Assign the string "pebble" to a variable named stoneType.',
        answer: 'stoneType = "pebble"'
    },
    {
        question: 'Assign the integer value 400 to a variable named pageCount.',
        answer: 'pageCount = 400'
    },
    {
        question: 'Assign the floating-point value 5.12 to a variable named fuelEfficiency.',
        answer: 'fuelEfficiency = 5.12'
    },
    {
        question: 'Assign the boolean value True to a variable named hasCertificate.',
        answer: 'hasCertificate = True'
    },
    {
        question: 'Assign a tuple containing "North", "East", "West", "South" to a variable named compassPoints.',
        answer: 'compassPoints = ("North", "East", "West", "South")'
    },
    {
        question: 'Assign the string "mirror" to a variable named reflectionTool.',
        answer: 'reflectionTool = "mirror"'
    },
    {
        question: 'Assign the integer value 75 to a variable named percentage.',
        answer: 'percentage = 75'
    },
    {
        question: 'Assign the floating-point value 1.99 to a variable named pricePerUnit.',
        answer: 'pricePerUnit = 1.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isDraft.',
        answer: 'isDraft = False'
    },
    {
        question: 'Assign the string "ocean" to a variable named waterBody.',
        answer: 'waterBody = "ocean"'
    },
    {
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42'
    },
    {
        question: 'Assign the floating-point value 0.007 to a variable named smallValue.',
        answer: 'smallValue = 0.007'
    },
    {
        question: 'Assign the boolean value True to a variable named isAvailable.',
        answer: 'isAvailable = True'
    },
    {
        question: 'Assign a list containing "HTML", "CSS", "JavaScript" to a variable named webTechnologies.',
        answer: 'webTechnologies = ["HTML", "CSS", "JavaScript"]'
    },
    {
        question: 'Assign a tuple containing the values "Monday", "Tuesday", "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ("Monday", "Tuesday", "Wednesday")'
    },
    {
        question: 'Assign the string "giraffe" to a variable named animal.',
        answer: 'animal = "giraffe"'
    },
    {
        question: 'Assign the integer value 64 to a variable named square.',
        answer: 'square = 64'
    },
    {
        question: 'Assign the floating-point value 9.99 to a variable named itemCost.',
        answer: 'itemCost = 9.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isPaid.',
        answer: 'isPaid = False'
    },
    {
        question: 'Assign a list containing "math", "science", "history" to a variable named subjects.',
        answer: 'subjects = ["math", "science", "history"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Alice" and 30 to a variable named person.',
        answer: 'person = {"name": "Alice", "age": 30}'
    },
    {
        question: 'Assign the string "sunflower" to a variable named favoriteFlower.',
        answer: 'favoriteFlower = "sunflower"'
    },
    {
        question: 'Assign the integer value 150 to a variable named score.',
        answer: 'score = 150'
    },
    {
        question: 'Assign the floating-point value 14.56 to a variable named length.',
        answer: 'length = 14.56'
    },
    {
        question: 'Assign the boolean value True to a variable named isEnabled.',
        answer: 'isEnabled = True'
    },
    {
        question: 'Assign a tuple containing "apple", "banana", "cherry" to a variable named fruitBasket.',
        answer: 'fruitBasket = ("apple", "banana", "cherry")'
    },
    {
        question: 'Assign the string "notebook" to a variable named schoolSupply.',
        answer: 'schoolSupply = "notebook"'
    },
    {
        question: 'Assign the integer value 3 to a variable named count.',
        answer: 'count = 3'
    },
    {
        question: 'Assign the floating-point value 55.5 to a variable named speed.',
        answer: 'speed = 55.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isUnderMaintenance.',
        answer: 'isUnderMaintenance = False'
    },
    {
        question: 'Assign a list containing "star", "planet", "moon" to a variable named celestialBodies.',
        answer: 'celestialBodies = ["star", "planet", "moon"]'
    },
    {
        question: 'Assign a dictionary with keys "model" and "year" and values "Civic" and 2022 to a variable named car.',
        answer: 'car = {"model": "Civic", "year": 2022}'
    },
    {
        question: 'Assign the string "violin" to a variable named stringInstrument.',
        answer: 'stringInstrument = "violin"'
    },
    {
        question: 'Assign the integer value 6 to a variable named sidesOfHexagon.',
        answer: 'sidesOfHexagon = 6'
    },
    {
        question: 'Assign the floating-point value 28.75 to a variable named weight.',
        answer: 'weight = 28.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isComplete.',
        answer: 'isComplete = True'
    },
    {
        question: 'Assign a tuple containing "red", "green", "blue" to a variable named colorsRGB.',
        answer: 'colorsRGB = ("red", "green", "blue")'
    },
    {
        question: 'Assign the string "whale" to a variable named marineAnimal.',
        answer: 'marineAnimal = "whale"'
    },
    {
        question: 'Assign the integer value 50 to a variable named temperature.',
        answer: 'temperature = 50'
    },
    {
        question: 'Assign the floating-point value 4.5 to a variable named height.',
        answer: 'height = 4.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isVisible.',
        answer: 'isVisible = False'
    },
    {
        question: 'Assign a list containing "pasta", "pizza", "salad" to a variable named italianDishes.',
        answer: 'italianDishes = ["pasta", "pizza", "salad"]'
    },
    {
        question: 'Assign a dictionary with keys "email" and "phone" and values "test@example.com" and "1234567890" to a variable named contactInfo.',
        answer: 'contactInfo = {"email": "test@example.com", "phone": "1234567890"}'
    },
    {
        question: 'Assign the string "cherry" to a variable named fruit.',
        answer: 'fruit = "cherry"'
    },
    {
        question: 'Assign the integer value 100 to a variable named maxScore.',
        answer: 'maxScore = 100'
    },
    {
        question: 'Assign the floating-point value 0.05 to a variable named interestRate.',
        answer: 'interestRate = 0.05'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a tuple containing "London", "Paris", "Berlin" to a variable named cities.',
        answer: 'cities = ("London", "Paris", "Berlin")'
    },
    {
        question: 'Assign the string "pancake" to a variable named breakfastItem.',
        answer: 'breakfastItem = "pancake"'
    },
    {
        question: 'Assign the integer value 15 to a variable named maxAttempts.',
        answer: 'maxAttempts = 15'
    },
    {
        question: 'Assign the floating-point value 2.5 to a variable named tax.',
        answer: 'tax = 2.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isTrial.',
        answer: 'isTrial = False'
    },
    {
        question: 'Assign a list containing "carrot", "lettuce", "tomato" to a variable named saladIngredients.',
        answer: 'saladIngredients = ["carrot", "lettuce", "tomato"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "author" and values "The Hobbit" and "J.R.R. Tolkien" to a variable named bookDetails.',
        answer: 'bookDetails = {"title": "The Hobbit", "author": "J.R.R. Tolkien"}'
    },
    {
        question: 'Assign the string "rocket" to a variable named spaceVehicle.',
        answer: 'spaceVehicle = "rocket"'
    },
    {
        question: 'Assign the integer value 2500 to a variable named population.',
        answer: 'population = 2500'
    },
    {
        question: 'Assign the floating-point value 8.9 to a variable named fuelLevel.',
        answer: 'fuelLevel = 8.9'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True'
    },
    {
        question: 'Assign a tuple containing "fiction", "non-fiction", "biography" to a variable named genres.',
        answer: 'genres = ("fiction", "non-fiction", "biography")'
    },
    {
        question: 'Assign the string "mountain bike" to a variable named sportEquipment.',
        answer: 'sportEquipment = "mountain bike"'
    },
    {
        question: 'Assign the integer value 18 to a variable named votingAge.',
        answer: 'votingAge = 18'
    },
    {
        question: 'Assign the floating-point value 4.8 to a variable named rainfall.',
        answer: 'rainfall = 4.8'
    },
    {
        question: 'Assign the boolean value False to a variable named isLoggedIn.',
        answer: 'isLoggedIn = False'
    },
    {
        question: 'Assign a list containing "tiger", "lion", "bear" to a variable named wildAnimals.',
        answer: 'wildAnimals = ["tiger", "lion", "bear"]'
    },
    {
        question: 'Assign a dictionary with keys "currency" and "symbol" and values "USD" and "$" to a variable named currencyInfo.',
        answer: 'currencyInfo = {"currency": "USD", "symbol": "$"}'
    },
    {
        question: 'Assign the string "basketball" to a variable named favoriteSport.',
        answer: 'favoriteSport = "basketball"'
    },
    {
        question: 'Assign the integer value 360 to a variable named degreesInCircle.',
        answer: 'degreesInCircle = 360'
    },
    {
        question: 'Assign the floating-point value 11.0 to a variable named average.',
        answer: 'average = 11.0'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True'
    },
    {
        question: 'Assign a tuple containing "pen", "pencil", "marker" to a variable named writingTools.',
        answer: 'writingTools = ("pen", "pencil", "marker")'
    },
    {
        question: 'Assign the string "car" to a variable named vehicleType.',
        answer: 'vehicleType = "car"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named accountBalance.',
        answer: 'accountBalance = 1000'
    },
    {
        question: 'Assign the floating-point value 32.2 to a variable named temperatureInCelsius.',
        answer: 'temperatureInCelsius = 32.2'
    },
    {
        question: 'Assign the boolean value False to a variable named hasAccess.',
        answer: 'hasAccess = False'
    },
    {
        question: 'Assign a list containing "java", "python", "c++" to a variable named programmingLanguages.',
        answer: 'programmingLanguages = ["java", "python", "c++"]'
    },
    {
        question: 'Assign a dictionary with keys "state" and "capital" and values "California" and "Sacramento" to a variable named stateInfo.',
        answer: 'stateInfo = {"state": "California", "capital": "Sacramento"}'
    },
    {
        question: 'Assign the string "telescope" to a variable named astronomyTool.',
        answer: 'astronomyTool = "telescope"'
    },
    {
        question: 'Assign the integer value 8 to a variable named sidesOfOctagon.',
        answer: 'sidesOfOctagon = 8'
    },
    {
        question: 'Assign the floating-point value 1.23 to a variable named measurement.',
        answer: 'measurement = 1.23'
    },
    {
        question: 'Assign the boolean value True to a variable named isConfirmed.',
        answer: 'isConfirmed = True'
    },
    {
        question: 'Assign a tuple containing "rock", "paper", "scissors" to a variable named gameOptions.',
        answer: 'gameOptions = ("rock", "paper", "scissors")'
    },
    {
        question: 'Assign the string "chocolate" to a variable named dessert.',
        answer: 'dessert = "chocolate"'
    },
    {
        question: 'Assign the integer value 2024 to a variable named currentYear.',
        answer: 'currentYear = 2024'
    },
    {
        question: 'Assign the floating-point value 3.7 to a variable named averageHeight.',
        answer: 'averageHeight = 3.7'
    },
    {
        question: 'Assign the boolean value False to a variable named isOperational.',
        answer: 'isOperational = False'
    },
    {
        question: 'Assign the string "paris" to a variable named city.',
        answer: 'city = "paris"'
    },
    {
        question: 'Assign the integer value 88 to a variable named grade.',
        answer: 'grade = 88'
    },
    {
        question: 'Assign the floating-point value 3.14159 to a variable named pi.',
        answer: 'pi = 3.14159'
    },
    {
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True'
    },
    {
        question: 'Assign a list containing "Ford", "BMW", "Tesla" to a variable named carBrands.',
        answer: 'carBrands = ["Ford", "BMW", "Tesla"]'
    },
    {
        question: 'Assign a tuple containing the values "red", "green", "blue" to a variable named primaryColors.',
        answer: 'primaryColors = ("red", "green", "blue")'
    },
    {
        question: 'Assign the string "sapphire" to a variable named gemstone.',
        answer: 'gemstone = "sapphire"'
    },
    {
        question: 'Assign the integer value 256 to a variable named memory.',
        answer: 'memory = 256'
    },
    {
        question: 'Assign the floating-point value 15.75 to a variable named discount.',
        answer: 'discount = 15.75'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "pencil", "eraser", "sharpener" to a variable named stationeryItems.',
        answer: 'stationeryItems = ["pencil", "eraser", "sharpener"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "location" and values "Central Park" and "New York" to a variable named parkInfo.',
        answer: 'parkInfo = {"name": "Central Park", "location": "New York"}'
    },
    {
        question: 'Assign the string "drum" to a variable named musicalInstrument.',
        answer: 'musicalInstrument = "drum"'
    },
    {
        question: 'Assign the integer value 42 to a variable named answerToLife.',
        answer: 'answerToLife = 42'
    },
    {
        question: 'Assign the floating-point value 0.25 to a variable named quarter.',
        answer: 'quarter = 0.25'
    },
    {
        question: 'Assign the boolean value True to a variable named isSelected.',
        answer: 'isSelected = True'
    },
    {
        question: 'Assign a tuple containing "HTML", "CSS", "JavaScript" to a variable named webLanguages.',
        answer: 'webLanguages = ("HTML", "CSS", "JavaScript")'
    },
    {
        question: 'Assign the string "cactus" to a variable named plant.',
        answer: 'plant = "cactus"'
    },
    {
        question: 'Assign the integer value 9 to a variable named dimensions.',
        answer: 'dimensions = 9'
    },
    {
        question: 'Assign the floating-point value 6.28 to a variable named circumference.',
        answer: 'circumference = 6.28'
    },
    {
        question: 'Assign the boolean value False to a variable named isActive.',
        answer: 'isActive = False'
    },
    {
        question: 'Assign a list containing "theater", "museum", "gallery" to a variable named culturalPlaces.',
        answer: 'culturalPlaces = ["theater", "museum", "gallery"]'
    },
    {
        question: 'Assign a dictionary with keys "author" and "title" and values "George Orwell" and "1984" to a variable named book.',
        answer: 'book = {"author": "George Orwell", "title": "1984"}'
    },
    {
        question: 'Assign the string "bicycle" to a variable named transport.',
        answer: 'transport = "bicycle"'
    },
    {
        question: 'Assign the integer value 12 to a variable named monthsInYear.',
        answer: 'monthsInYear = 12'
    },
    {
        question: 'Assign the floating-point value 0.99 to a variable named taxRate.',
        answer: 'taxRate = 0.99'
    },
    {
        question: 'Assign the boolean value True to a variable named isUnderWarranty.',
        answer: 'isUnderWarranty = True'
    },
    {
        question: 'Assign a tuple containing "dog", "cat", "rabbit" to a variable named pets.',
        answer: 'pets = ("dog", "cat", "rabbit")'
    },
    {
        question: 'Assign the string "coffee" to a variable named beverage.',
        answer: 'beverage = "coffee"'
    },
    {
        question: 'Assign the integer value 2048 to a variable named storage.',
        answer: 'storage = 2048'
    },
    {
        question: 'Assign the floating-point value 0.1 to a variable named growthRate.',
        answer: 'growthRate = 0.1'
    },
    {
        question: 'Assign the boolean value False to a variable named isLoggedOut.',
        answer: 'isLoggedOut = False'
    },
    {
        question: 'Assign a list containing "onion", "garlic", "pepper" to a variable named spices.',
        answer: 'spices = ["onion", "garlic", "pepper"]'
    },
    {
        question: 'Assign a dictionary with keys "year" and "event" and values 1776 and "Declaration of Independence" to a variable named historyEvent.',
        answer: 'historyEvent = {"year": 1776, "event": "Declaration of Independence"}'
    },
    {
        question: 'Assign the string "tulip" to a variable named flower.',
        answer: 'flower = "tulip"'
    },
    {
        question: 'Assign the integer value 2023 to a variable named nextYear.',
        answer: 'nextYear = 2023'
    },
    {
        question: 'Assign the floating-point value 0.03 to a variable named errorMargin.',
        answer: 'errorMargin = 0.03'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerifiedUser.',
        answer: 'isVerifiedUser = True'
    },
    {
        question: 'Assign a tuple containing "morning", "afternoon", "evening" to a variable named partsOfDay.',
        answer: 'partsOfDay = ("morning", "afternoon", "evening")'
    },
    {
        question: 'Assign the string "robot" to a variable named machine.',
        answer: 'machine = "robot"'
    },
    {
        question: 'Assign the integer value 14 to a variable named maxAge.',
        answer: 'maxAge = 14'
    },
    {
        question: 'Assign the floating-point value 19.6 to a variable named weightInKg.',
        answer: 'weightInKg = 19.6'
    },
    {
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False'
    },
    {
        question: 'Assign a list containing "cereal", "milk", "fruit" to a variable named breakfastItems.',
        answer: 'breakfastItems = ["cereal", "milk", "fruit"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Bob" and 25 to a variable named userInfo.',
        answer: 'userInfo = {"name": "Bob", "age": 25}'
    },
    {
        question: 'Assign the string "calculator" to a variable named device.',
        answer: 'device = "calculator"'
    },
    {
        question: 'Assign the integer value 3600 to a variable named secondsInHour.',
        answer: 'secondsInHour = 3600'
    },
    {
        question: 'Assign the floating-point value 7.5 to a variable named temperatureInFahrenheit.',
        answer: 'temperatureInFahrenheit = 7.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isSuccess.',
        answer: 'isSuccess = True'
    },
    {
        question: 'Assign a tuple containing "sandwich", "burger", "salad" to a variable named mealChoices.',
        answer: 'mealChoices = ("sandwich", "burger", "salad")'
    },
    {
        question: 'Assign the string "laptop" to a variable named computer.',
        answer: 'computer = "laptop"'
    },
    {
        question: 'Assign the integer value 8 to a variable named legsOfSpider.',
        answer: 'legsOfSpider = 8'
    },
    {
        question: 'Assign the floating-point value 0.005 to a variable named thickness.',
        answer: 'thickness = 0.005'
    },
    {
        question: 'Assign the boolean value False to a variable named isRead.',
        answer: 'isRead = False'
    },
    {
        question: 'Assign a list containing "vanilla", "strawberry", "chocolate" to a variable named iceCreamFlavors.',
        answer: 'iceCreamFlavors = ["vanilla", "strawberry", "chocolate"]'
    },
    {
        question: 'Assign a dictionary with keys "continent" and "countries" and values "Asia" and ["China", "India"] to a variable named continentInfo.',
        answer: 'continentInfo = {"continent": "Asia", "countries": ["China", "India"]}'
    },
    {
        question: 'Assign the string "watch" to a variable named timepiece.',
        answer: 'timepiece = "watch"'
    },
    {
        question: 'Assign the integer value 256 to a variable named colorsInPalette.',
        answer: 'colorsInPalette = 256'
    },
    {
        question: 'Assign the floating-point value 0.0075 to a variable named percentage.',
        answer: 'percentage = 0.0075'
    },
    {
        question: 'Assign the boolean value True to a variable named isConnected.',
        answer: 'isConnected = True'
    },
    {
        question: 'Assign a tuple containing "potato", "carrot", "broccoli" to a variable named vegetables.',
        answer: 'vegetables = ("potato", "carrot", "broccoli")'
    },
    {
        question: 'Assign the string "guitar" to a variable named stringInstrument.',
        answer: 'stringInstrument = "guitar"'
    },
    {
        question: 'Assign the integer value 64 to a variable named numOfSquares.',
        answer: 'numOfSquares = 64'
    },
    {
        question: 'Assign the floating-point value 23.45 to a variable named savings.',
        answer: 'savings = 23.45'
    },
    {
        question: 'Assign the boolean value False to a variable named isStudent.',
        answer: 'isStudent = False'
    },
    {
        question: 'Assign a list containing "orange", "banana", "grape" to a variable named fruitsList.',
        answer: 'fruitsList = ["orange", "banana", "grape"]'
    },
    {
        question: 'Assign a dictionary with keys "type" and "version" and values "software" and "2.0" to a variable named softwareInfo.',
        answer: 'softwareInfo = {"type": "software", "version": "2.0"}'
    },
    {
        question: 'Assign the string "baseball" to a variable named favoriteSport.',
        answer: 'favoriteSport = "baseball"'
    },
    {
        question: 'Assign the integer value 5 to a variable named numberOfFingers.',
        answer: 'numberOfFingers = 5'
    },
    {
        question: 'Assign the floating-point value 45.3 to a variable named maxTemperature.',
        answer: 'maxTemperature = 45.3'
    },
    {
        question: 'Assign the boolean value True to a variable named isAvailable.',
        answer: 'isAvailable = True'
    },
    {
        question: 'Assign the string "chocolate" to a variable named favoriteDessert.',
        answer: 'favoriteDessert = "chocolate"'
    },
    {
        question: 'Assign the integer value 365 to a variable named daysInYear.',
        answer: 'daysInYear = 365'
    },
    {
        question: 'Assign the floating-point value 9.81 to a variable named gravity.',
        answer: 'gravity = 9.81'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True'
    },
    {
        question: 'Assign a list containing "HTML", "CSS", "Python" to a variable named codingLanguages.',
        answer: 'codingLanguages = ["HTML", "CSS", "Python"]'
    },
    {
        question: 'Assign a tuple containing the values "Sunday", "Monday", "Tuesday" to a variable named weekDays.',
        answer: 'weekDays = ("Sunday", "Monday", "Tuesday")'
    },
    {
        question: 'Assign the string "elephant" to a variable named animal.',
        answer: 'animal = "elephant"'
    },
    {
        question: 'Assign the integer value 1024 to a variable named kilobytes.',
        answer: 'kilobytes = 1024'
    },
    {
        question: 'Assign the floating-point value 12.34 to a variable named balance.',
        answer: 'balance = 12.34'
    },
    {
        question: 'Assign the boolean value False to a variable named isComplete.',
        answer: 'isComplete = False'
    },
    {
        question: 'Assign a list containing "red", "blue", "green" to a variable named colors.',
        answer: 'colors = ["red", "blue", "green"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "year" and values "Inception" and 2010 to a variable named movie.',
        answer: 'movie = {"title": "Inception", "year": 2010}'
    },
    {
        question: 'Assign the string "pasta" to a variable named favoriteFood.',
        answer: 'favoriteFood = "pasta"'
    },
    {
        question: 'Assign the integer value 24 to a variable named hoursInADay.',
        answer: 'hoursInADay = 24'
    },
    {
        question: 'Assign the floating-point value 2.5 to a variable named heightInMeters.',
        answer: 'heightInMeters = 2.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isSuccessful.',
        answer: 'isSuccessful = True'
    },
    {
        question: 'Assign a tuple containing "fish", "meat", "vegetables" to a variable named foodGroups.',
        answer: 'foodGroups = ("fish", "meat", "vegetables")'
    },
    {
        question: 'Assign the string "football" to a variable named sport.',
        answer: 'sport = "football"'
    },
    {
        question: 'Assign the integer value 42 to a variable named answer.',
        answer: 'answer = 42'
    },
    {
        question: 'Assign the floating-point value 99.99 to a variable named ticketPrice.',
        answer: 'ticketPrice = 99.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isOutOfStock.',
        answer: 'isOutOfStock = False'
    },
    {
        question: 'Assign a list containing "S", "M", "L", "XL" to a variable named sizes.',
        answer: 'sizes = ["S", "M", "L", "XL"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Alice" and 30 to a variable named userDetails.',
        answer: 'userDetails = {"name": "Alice", "age": 30}'
    },
    {
        question: 'Assign the string "cucumber" to a variable named vegetable.',
        answer: 'vegetable = "cucumber"'
    },
    {
        question: 'Assign the integer value 100 to a variable named maxScore.',
        answer: 'maxScore = 100'
    },
    {
        question: 'Assign the floating-point value 50.5 to a variable named average.',
        answer: 'average = 50.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isActive.',
        answer: 'isActive = True'
    },
    {
        question: 'Assign a tuple containing "Soda", "Juice", "Water" to a variable named drinks.',
        answer: 'drinks = ("Soda", "Juice", "Water")'
    },
    {
        question: 'Assign the string "couch" to a variable named furniture.',
        answer: 'furniture = "couch"'
    },
    {
        question: 'Assign the integer value 8 to a variable named wheels.',
        answer: 'wheels = 8'
    },
    {
        question: 'Assign the floating-point value 1.618 to a variable named goldenRatio.',
        answer: 'goldenRatio = 1.618'
    },
    {
        question: 'Assign the boolean value False to a variable named isAdmin.',
        answer: 'isAdmin = False'
    },
    {
        question: 'Assign a list containing "car", "bus", "train" to a variable named vehicles.',
        answer: 'vehicles = ["car", "bus", "train"]'
    },
    {
        question: 'Assign a dictionary with keys "brand" and "model" and values "Apple" and "iPhone 13" to a variable named phone.',
        answer: 'phone = {"brand": "Apple", "model": "iPhone 13"}'
    },
    {
        question: 'Assign the string "sunflower" to a variable named flowerName.',
        answer: 'flowerName = "sunflower"'
    },
    {
        question: 'Assign the integer value 360 to a variable named degreesInCircle.',
        answer: 'degreesInCircle = 360'
    },
    {
        question: 'Assign the floating-point value 4.0 to a variable named piApprox.',
        answer: 'piApprox = 4.0'
    },
    {
        question: 'Assign the boolean value True to a variable named isConnected.',
        answer: 'isConnected = True'
    },
    {
        question: 'Assign a tuple containing "January", "February", "March" to a variable named months.',
        answer: 'months = ("January", "February", "March")'
    },
    {
        question: 'Assign the string "wallet" to a variable named accessory.',
        answer: 'accessory = "wallet"'
    },
    {
        question: 'Assign the integer value 128 to a variable named bits.',
        answer: 'bits = 128'
    },
    {
        question: 'Assign the floating-point value 0.004 to a variable named interestRate.',
        answer: 'interestRate = 0.004'
    },
    {
        question: 'Assign the boolean value False to a variable named isOnline.',
        answer: 'isOnline = False'
    },
    {
        question: 'Assign a list containing "pen", "notebook", "stapler" to a variable named officeSupplies.',
        answer: 'officeSupplies = ["pen", "notebook", "stapler"]'
    },
    {
        question: 'Assign a dictionary with keys "language" and "version" and values "Python" and "3.9" to a variable named languageInfo.',
        answer: 'languageInfo = {"language": "Python", "version": "3.9"}'
    },
    {
        question: 'Assign the string "toothbrush" to a variable named hygieneItem.',
        answer: 'hygieneItem = "toothbrush"'
    },
    {
        question: 'Assign the integer value 18 to a variable named legalAge.',
        answer: 'legalAge = 18'
    },
    {
        question: 'Assign the floating-point value 45.0 to a variable named fuelEfficiency.',
        answer: 'fuelEfficiency = 45.0'
    },
    {
        question: 'Assign the boolean value True to a variable named hasDriverLicense.',
        answer: 'hasDriverLicense = True'
    },
    {
        question: 'Assign a tuple containing "mercury", "venus", "earth" to a variable named planets.',
        answer: 'planets = ("mercury", "venus", "earth")'
    },
    {
        question: 'Assign the string "flute" to a variable named woodwindInstrument.',
        answer: 'woodwindInstrument = "flute"'
    },
    {
        question: 'Assign the integer value 16 to a variable named bitsInByte.',
        answer: 'bitsInByte = 16'
    },
    {
        question: 'Assign the floating-point value 22.5 to a variable named rainfall.',
        answer: 'rainfall = 22.5'
    },
    {
        question: 'Assign the boolean value False to a variable named hasPets.',
        answer: 'hasPets = False'
    },
    {
        question: 'Assign a list containing "cherries", "pears", "peaches" to a variable named fruitBasket.',
        answer: 'fruitBasket = ["cherries", "pears", "peaches"]'
    },
    {
        question: 'Assign a dictionary with keys "city" and "population" and values "New York" and 8419600 to a variable named cityInfo.',
        answer: 'cityInfo = {"city": "New York", "population": 8419600}'
    },
    {
        question: 'Assign the string "backpack" to a variable named travelItem.',
        answer: 'travelItem = "backpack"'
    },
    {
        question: 'Assign the integer value 1000 to a variable named calories.',
        answer: 'calories = 1000'
    },
    {
        question: 'Assign the floating-point value 30.0 to a variable named waterIntake.',
        answer: 'waterIntake = 30.0'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnSale.',
        answer: 'isOnSale = True'
    },
    {
        question: 'Assign a tuple containing "rock", "jazz", "pop" to a variable named musicGenres.',
        answer: 'musicGenres = ("rock", "jazz", "pop")'
    },
    {
        question: 'Assign the string "xylophone" to a variable named musicalInstrument.',
        answer: 'musicalInstrument = "xylophone"'
    },
    {
        question: 'Assign the integer value 7 to a variable named daysInWeek.',
        answer: 'daysInWeek = 7'
    },
    {
        question: 'Assign the floating-point value 0.05 to a variable named discountRate.',
        answer: 'discountRate = 0.05'
    },
    {
        question: 'Assign the boolean value False to a variable named hasDiscount.',
        answer: 'hasDiscount = False'
    },
    {
        question: 'Assign a list containing "t-shirt", "jeans", "sneakers" to a variable named clothingItems.',
        answer: 'clothingItems = ["t-shirt", "jeans", "sneakers"]'
    },
    {
        question: 'Assign a dictionary with keys "bookTitle" and "author" and values "1984" and "George Orwell" to a variable named book.',
        answer: 'book = {"bookTitle": "1984", "author": "George Orwell"}'
    },
    {
        question: 'Assign the string "soccer ball" to a variable named sportsEquipment.',
        answer: 'sportsEquipment = "soccer ball"'
    },
    {
        question: 'Assign the integer value 4 to a variable named numberOfSeasons.',
        answer: 'numberOfSeasons = 4'
    },
    {
        question: 'Assign the floating-point value 120.5 to a variable named maxSpeed.',
        answer: 'maxSpeed = 120.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isEmergency.',
        answer: 'isEmergency = True'
    },
    {
        question: 'Assign a tuple containing "drama", "comedy", "thriller" to a variable named movieGenres.',
        answer: 'movieGenres = ("drama", "comedy", "thriller")'
    },
    {
        question: 'Assign the string "sunglasses" to a variable named accessoryItem.',
        answer: 'accessoryItem = "sunglasses"'
    },
    {
        question: 'Assign the integer value 60 to a variable named minutesInHour.',
        answer: 'minutesInHour = 60'
    },
    {
        question: 'Assign the floating-point value 0.2 to a variable named sugarContent.',
        answer: 'sugarContent = 0.2'
    },
    {
        question: 'Assign the boolean value False to a variable named isImported.',
        answer: 'isImported = False'
    },
    {
        question: 'Assign the string "giraffe" to a variable named animalName.',
        answer: 'animalName = "giraffe"'
    },
    {
        question: 'Assign the integer value 30 to a variable named maxAttempts.',
        answer: 'maxAttempts = 30'
    },
    {
        question: 'Assign the floating-point value 3.14 to a variable named pi.',
        answer: 'pi = 3.14'
    },
    {
        question: 'Assign the boolean value True to a variable named isStudent.',
        answer: 'isStudent = True'
    },
    {
        question: 'Assign a list containing "beach", "mountain", "forest" to a variable named vacationDestinations.',
        answer: 'vacationDestinations = ["beach", "mountain", "forest"]'
    },
    {
        question: 'Assign a tuple containing "Monday", "Tuesday", "Wednesday" to a variable named weekdays.',
        answer: 'weekdays = ("Monday", "Tuesday", "Wednesday")'
    },
    {
        question: 'Assign the string "spaghetti" to a variable named pastaType.',
        answer: 'pastaType = "spaghetti"'
    },
    {
        question: 'Assign the integer value 512 to a variable named dataLimit.',
        answer: 'dataLimit = 512'
    },
    {
        question: 'Assign the floating-point value 15.99 to a variable named itemPrice.',
        answer: 'itemPrice = 15.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False'
    },
    {
        question: 'Assign a list containing "Java", "C#", "Ruby" to a variable named programmingLanguages.',
        answer: 'programmingLanguages = ["Java", "C#", "Ruby"]'
    },
    {
        question: 'Assign a dictionary with keys "product" and "quantity" and values "Apples" and 50 to a variable named inventory.',
        answer: 'inventory = {"product": "Apples", "quantity": 50}'
    },
    {
        question: 'Assign the string "guitar" to a variable named musicalInstrument.',
        answer: 'musicalInstrument = "guitar"'
    },
    {
        question: 'Assign the integer value 20 to a variable named maximumParticipants.',
        answer: 'maximumParticipants = 20'
    },
    {
        question: 'Assign the floating-point value 8.75 to a variable named averageGrade.',
        answer: 'averageGrade = 8.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isLoggedIn.',
        answer: 'isLoggedIn = True'
    },
    {
        question: 'Assign a tuple containing "piano", "drums", "trumpet" to a variable named bandInstruments.',
        answer: 'bandInstruments = ("piano", "drums", "trumpet")'
    },
    {
        question: 'Assign the string "chicken" to a variable named favoriteMeat.',
        answer: 'favoriteMeat = "chicken"'
    },
    {
        question: 'Assign the integer value 50 to a variable named maxSpeedLimit.',
        answer: 'maxSpeedLimit = 50'
    },
    {
        question: 'Assign the floating-point value 1.5 to a variable named gameDuration.',
        answer: 'gameDuration = 1.5'
    },
    {
        question: 'Assign the boolean value False to a variable named hasError.',
        answer: 'hasError = False'
    },
    {
        question: 'Assign a list containing "egg", "milk", "bread" to a variable named groceryList.',
        answer: 'groceryList = ["egg", "milk", "bread"]'
    },
    {
        question: 'Assign a dictionary with keys "itemName" and "itemCount" and values "Cookies" and 12 to a variable named snack.',
        answer: 'snack = {"itemName": "Cookies", "itemCount": 12}'
    },
    {
        question: 'Assign the string "notebook" to a variable named schoolSupplies.',
        answer: 'schoolSupplies = "notebook"'
    },
    {
        question: 'Assign the integer value 256 to a variable named maxFileSize.',
        answer: 'maxFileSize = 256'
    },
    {
        question: 'Assign the floating-point value 75.5 to a variable named temperature.',
        answer: 'temperature = 75.5'
    },
    {
        question: 'Assign the boolean value True to a variable named hasDiscount.',
        answer: 'hasDiscount = True'
    },
    {
        question: 'Assign a tuple containing "Red", "Green", "Blue" to a variable named primaryColors.',
        answer: 'primaryColors = ("Red", "Green", "Blue")'
    },
    {
        question: 'Assign the string "watermelon" to a variable named fruit.',
        answer: 'fruit = "watermelon"'
    },
    {
        question: 'Assign the integer value 18 to a variable named ageLimit.',
        answer: 'ageLimit = 18'
    },
    {
        question: 'Assign the floating-point value 3.5 to a variable named coffeeStrength.',
        answer: 'coffeeStrength = 3.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isPublic.',
        answer: 'isPublic = False'
    },
    {
        question: 'Assign a list containing "science", "math", "history" to a variable named subjects.',
        answer: 'subjects = ["science", "math", "history"]'
    },
    {
        question: 'Assign a dictionary with keys "movieTitle" and "rating" and values "Avatar" and 8.5 to a variable named film.',
        answer: 'film = {"movieTitle": "Avatar", "rating": 8.5}'
    },
    {
        question: 'Assign the string "ice cream" to a variable named dessert.',
        answer: 'dessert = "ice cream"'
    },
    {
        question: 'Assign the integer value 120 to a variable named maxHeartRate.',
        answer: 'maxHeartRate = 120'
    },
    {
        question: 'Assign the floating-point value 60.0 to a variable named maxTemperature.',
        answer: 'maxTemperature = 60.0'
    },
    {
        question: 'Assign the boolean value True to a variable named isAuthenticated.',
        answer: 'isAuthenticated = True'
    },
    {
        question: 'Assign a tuple containing "spade", "heart", "diamond" to a variable named cardSuits.',
        answer: 'cardSuits = ("spade", "heart", "diamond")'
    },
    {
        question: 'Assign the string "football" to a variable named favoriteSport.',
        answer: 'favoriteSport = "football"'
    },
    {
        question: 'Assign the integer value 14 to a variable named daysInFortnight.',
        answer: 'daysInFortnight = 14'
    },
    {
        question: 'Assign the floating-point value 100.1 to a variable named weight.',
        answer: 'weight = 100.1'
    },
    {
        question: 'Assign the boolean value False to a variable named isWinner.',
        answer: 'isWinner = False'
    },
    {
        question: 'Assign a list containing "Daisy", "Rose", "Lily" to a variable named flowerTypes.',
        answer: 'flowerTypes = ["Daisy", "Rose", "Lily"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Bob" and 25 to a variable named person.',
        answer: 'person = {"name": "Bob", "age": 25}'
    },
    {
        question: 'Assign the string "cereal" to a variable named breakfastFood.',
        answer: 'breakfastFood = "cereal"'
    },
    {
        question: 'Assign the integer value 15 to a variable named maxConnections.',
        answer: 'maxConnections = 15'
    },
    {
        question: 'Assign the floating-point value 4.75 to a variable named gasPrice.',
        answer: 'gasPrice = 4.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isUnderConstruction.',
        answer: 'isUnderConstruction = True'
    },
    {
        question: 'Assign a tuple containing "socks", "hat", "scarf" to a variable named winterClothing.',
        answer: 'winterClothing = ("socks", "hat", "scarf")'
    },
    {
        question: 'Assign the string "calculator" to a variable named mathTool.',
        answer: 'mathTool = "calculator"'
    },
    {
        question: 'Assign the integer value 88 to a variable named maxScorePossible.',
        answer: 'maxScorePossible = 88'
    },
    {
        question: 'Assign the floating-point value 2.2 to a variable named taxRate.',
        answer: 'taxRate = 2.2'
    },
    {
        question: 'Assign the boolean value False to a variable named isRetired.',
        answer: 'isRetired = False'
    },
    {
        question: 'Assign a list containing "carrot", "broccoli", "spinach" to a variable named vegetables.',
        answer: 'vegetables = ["carrot", "broccoli", "spinach"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "author" and values "The Great Gatsby" and "F. Scott Fitzgerald" to a variable named bookDetails.',
        answer: 'bookDetails = {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}'
    },
    {
        question: 'Assign the string "keyboard" to a variable named inputDevice.',
        answer: 'inputDevice = "keyboard"'
    },
    {
        question: 'Assign the integer value 7 to a variable named maxRetries.',
        answer: 'maxRetries = 7'
    },
    {
        question: 'Assign the floating-point value 0.75 to a variable named completionRate.',
        answer: 'completionRate = 0.75'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnDuty.',
        answer: 'isOnDuty = True'
    },
    {
        question: 'Assign a tuple containing "fiction", "non-fiction", "biography" to a variable named bookGenres.',
        answer: 'bookGenres = ("fiction", "non-fiction", "biography")'
    },
    {
        question: 'Assign the string "fishing rod" to a variable named fishingEquipment.',
        answer: 'fishingEquipment = "fishing rod"'
    },
    {
        question: 'Assign the integer value 10 to a variable named maxFailures.',
        answer: 'maxFailures = 10'
    },
    {
        question: 'Assign the floating-point value 9.99 to a variable named itemCost.',
        answer: 'itemCost = 9.99'
    },
    {
        question: 'Assign the boolean value False to a variable named isLocked.',
        answer: 'isLocked = False'
    },
    {
        question: 'Assign the string "sunflower" to a variable named flower.',
        answer: 'flower = "sunflower"'
    },
    {
        question: 'Assign the integer value 45 to a variable named maxDistance.',
        answer: 'maxDistance = 45'
    },
    {
        question: 'Assign the floating-point value 2.5 to a variable named waterLevel.',
        answer: 'waterLevel = 2.5'
    },
    {
        question: 'Assign the boolean value True to a variable named isEligible.',
        answer: 'isEligible = True'
    },
    {
        question: 'Assign a list containing "HTML", "CSS", "JavaScript" to a variable named webTechnologies.',
        answer: 'webTechnologies = ["HTML", "CSS", "JavaScript"]'
    },
    {
        question: 'Assign a tuple containing "red", "blue", "green" to a variable named colors.',
        answer: 'colors = ("red", "blue", "green")'
    },
    {
        question: 'Assign the string "elephant" to a variable named largeAnimal.',
        answer: 'largeAnimal = "elephant"'
    },
    {
        question: 'Assign the integer value 33 to a variable named totalScore.',
        answer: 'totalScore = 33'
    },
    {
        question: 'Assign the floating-point value 99.9 to a variable named discountRate.',
        answer: 'discountRate = 99.9'
    },
    {
        question: 'Assign the boolean value False to a variable named isActive.',
        answer: 'isActive = False'
    },
    {
        question: 'Assign a list containing "Python", "Java", "C++" to a variable named programmingSkills.',
        answer: 'programmingSkills = ["Python", "Java", "C++"]'
    },
    {
        question: 'Assign a dictionary with keys "fruit" and "quantity" and values "Banana" and 10 to a variable named fruitInventory.',
        answer: 'fruitInventory = {"fruit": "Banana", "quantity": 10}'
    },
    {
        question: 'Assign the string "calculator" to a variable named schoolTool.',
        answer: 'schoolTool = "calculator"'
    },
    {
        question: 'Assign the integer value 7 to a variable named maxAttemptsAllowed.',
        answer: 'maxAttemptsAllowed = 7'
    },
    {
        question: 'Assign the floating-point value 0.8 to a variable named batteryLevel.',
        answer: 'batteryLevel = 0.8'
    },
    {
        question: 'Assign the boolean value True to a variable named hasAccess.',
        answer: 'hasAccess = True'
    },
    {
        question: 'Assign a tuple containing "chicken", "beef", "fish" to a variable named meats.',
        answer: 'meats = ("chicken", "beef", "fish")'
    },
    {
        question: 'Assign the string "kite" to a variable named flyingObject.',
        answer: 'flyingObject = "kite"'
    },
    {
        question: 'Assign the integer value 60 to a variable named maxPlayers.',
        answer: 'maxPlayers = 60'
    },
    {
        question: 'Assign the floating-point value 5.0 to a variable named fuelEfficiency.',
        answer: 'fuelEfficiency = 5.0'
    },
    {
        question: 'Assign the boolean value False to a variable named isRestricted.',
        answer: 'isRestricted = False'
    },
    {
        question: 'Assign a list containing "book", "pen", "notebook" to a variable named officeSupplies.',
        answer: 'officeSupplies = ["book", "pen", "notebook"]'
    },
    {
        question: 'Assign a dictionary with keys "name" and "age" and values "Alice" and 30 to a variable named user.',
        answer: 'user = {"name": "Alice", "age": 30}'
    },
    {
        question: 'Assign the string "telescope" to a variable named astronomyTool.',
        answer: 'astronomyTool = "telescope"'
    },
    {
        question: 'Assign the integer value 120 to a variable named maxCapacity.',
        answer: 'maxCapacity = 120'
    },
    {
        question: 'Assign the floating-point value 22.7 to a variable named temperatureCelsius.',
        answer: 'temperatureCelsius = 22.7'
    },
    {
        question: 'Assign the boolean value True to a variable named isVerified.',
        answer: 'isVerified = True'
    },
    {
        question: 'Assign a tuple containing "apple", "orange", "grape" to a variable named fruitBasket.',
        answer: 'fruitBasket = ("apple", "orange", "grape")'
    },
    {
        question: 'Assign the string "notebook" to a variable named writingTool.',
        answer: 'writingTool = "notebook"'
    },
    {
        question: 'Assign the integer value 9 to a variable named minParticipants.',
        answer: 'minParticipants = 9'
    },
    {
        question: 'Assign the floating-point value 11.5 to a variable named rainfall.',
        answer: 'rainfall = 11.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isCompleted.',
        answer: 'isCompleted = False'
    },
    {
        question: 'Assign a list containing "rose", "tulip", "daisy" to a variable named gardenFlowers.',
        answer: 'gardenFlowers = ["rose", "tulip", "daisy"]'
    },
    {
        question: 'Assign a dictionary with keys "model" and "year" and values "Tesla" and 2022 to a variable named car.',
        answer: 'car = {"model": "Tesla", "year": 2022}'
    },
    {
        question: 'Assign the string "umbrella" to a variable named rainGear.',
        answer: 'rainGear = "umbrella"'
    },
    {
        question: 'Assign the integer value 200 to a variable named maxVolume.',
        answer: 'maxVolume = 200'
    },
    {
        question: 'Assign the floating-point value 2.9 to a variable named sugarContent.',
        answer: 'sugarContent = 2.9'
    },
    {
        question: 'Assign the boolean value True to a variable named isOnline.',
        answer: 'isOnline = True'
    },
    {
        question: 'Assign a tuple containing "paper", "scissors", "rock" to a variable named gameChoices.',
        answer: 'gameChoices = ("paper", "scissors", "rock")'
    },
    {
        question: 'Assign the string "whale" to a variable named marineAnimal.',
        answer: 'marineAnimal = "whale"'
    },
    {
        question: 'Assign the integer value 4 to a variable named maxAttemptsLimit.',
        answer: 'maxAttemptsLimit = 4'
    },
    {
        question: 'Assign the floating-point value 10.1 to a variable named calorieCount.',
        answer: 'calorieCount = 10.1'
    },
    {
        question: 'Assign the boolean value False to a variable named isExpired.',
        answer: 'isExpired = False'
    },
    {
        question: 'Assign a list containing "toothbrush", "toothpaste", "floss" to a variable named dentalSupplies.',
        answer: 'dentalSupplies = ["toothbrush", "toothpaste", "floss"]'
    },
    {
        question: 'Assign a dictionary with keys "courseName" and "credits" and values "Computer Science" and 4 to a variable named course.',
        answer: 'course = {"courseName": "Computer Science", "credits": 4}'
    },
    {
        question: 'Assign the string "camera" to a variable named photographyTool.',
        answer: 'photographyTool = "camera"'
    },
    {
        question: 'Assign the integer value 32 to a variable named averageAge.',
        answer: 'averageAge = 32'
    },
    {
        question: 'Assign the floating-point value 3.3 to a variable named versionNumber.',
        answer: 'versionNumber = 3.3'
    },
    {
        question: 'Assign the boolean value True to a variable named isInStock.',
        answer: 'isInStock = True'
    },
    {
        question: 'Assign a tuple containing "winter", "spring", "summer" to a variable named seasons.',
        answer: 'seasons = ("winter", "spring", "summer")'
    },
    {
        question: 'Assign the string "jacket" to a variable named clothingItem.',
        answer: 'clothingItem = "jacket"'
    },
    {
        question: 'Assign the integer value 55 to a variable named minSpeed.',
        answer: 'minSpeed = 55'
    },
    {
        question: 'Assign the floating-point value 7.7 to a variable named windSpeed.',
        answer: 'windSpeed = 7.7'
    },
    {
        question: 'Assign the boolean value False to a variable named isOutdated.',
        answer: 'isOutdated = False'
    },
    {
        question: 'Assign a list containing "milk", "bread", "cheese" to a variable named groceryList.',
        answer: 'groceryList = ["milk", "bread", "cheese"]'
    },
    {
        question: 'Assign a dictionary with keys "username" and "password" and values "user123" and "pass456" to a variable named credentials.',
        answer: 'credentials = {"username": "user123", "password": "pass456"}'
    },
    {
        question: 'Assign the string "skateboard" to a variable named sportsEquipment.',
        answer: 'sportsEquipment = "skateboard"'
    },
    {
        question: 'Assign the integer value 90 to a variable named totalMarks.',
        answer: 'totalMarks = 90'
    },
    {
        question: 'Assign the floating-point value 6.4 to a variable named heightInMeters.',
        answer: 'heightInMeters = 6.4'
    },
    {
        question: 'Assign the boolean value True to a variable named isAuthenticated.',
        answer: 'isAuthenticated = True'
    },
    {
        question: 'Assign a tuple containing "cat", "dog", "fish" to a variable named pets.',
        answer: 'pets = ("cat", "dog", "fish")'
    },
    {
        question: 'Assign the string "sailboat" to a variable named watercraft.',
        answer: 'watercraft = "sailboat"'
    },
    {
        question: 'Assign the integer value 15 to a variable named minTemperature.',
        answer: 'minTemperature = 15'
    },
    {
        question: 'Assign the floating-point value 4.5 to a variable named averageScore.',
        answer: 'averageScore = 4.5'
    },
    {
        question: 'Assign the boolean value False to a variable named isAvailable.',
        answer: 'isAvailable = False'
    },
    {
        question: 'Assign a list containing "shovel", "rake", "hoe" to a variable named gardeningTools.',
        answer: 'gardeningTools = ["shovel", "rake", "hoe"]'
    },
    {
        question: 'Assign a dictionary with keys "item" and "price" and values "Laptop" and 999 to a variable named product.',
        answer: 'product = {"item": "Laptop", "price": 999}'
    },
    {
        question: 'Assign the string "socks" to a variable named clothingAccessory.',
        answer: 'clothingAccessory = "socks"'
    },
    {
        question: 'Assign the integer value 25 to a variable named maxRetriesAllowed.',
        answer: 'maxRetriesAllowed = 25'
    },
    {
        question: 'Assign the floating-point value 9.4 to a variable named averageRainfall.',
        answer: 'averageRainfall = 9.4'
    },
    {
        question: 'Assign the boolean value True to a variable named isReady.',
        answer: 'isReady = True'
    },
    {
        question: 'Assign a tuple containing "summer", "fall", "winter" to a variable named climate.',
        answer: 'climate = ("summer", "fall", "winter")'
    },
    {
        question: 'Assign the string "compass" to a variable named navigationTool.',
        answer: 'navigationTool = "compass"'
    },
    {
        question: 'Assign the integer value 11 to a variable named minPointsRequired.',
        answer: 'minPointsRequired = 11'
    },
    {
        question: 'Assign the floating-point value 2.2 to a variable named ratio.',
        answer: 'ratio = 2.2'
    },
    {
        question: 'Assign the boolean value False to a variable named isConnected.',
        answer: 'isConnected = False'
    },
    {
        question: 'Assign a list containing "guitar", "drums", "piano" to a variable named musicalInstruments.',
        answer: 'musicalInstruments = ["guitar", "drums", "piano"]'
    },
    {
        question: 'Assign a dictionary with keys "title" and "duration" and values "Inception" and 148 to a variable named movie.',
        answer: 'movie = {"title": "Inception", "duration": 148}'
    },
    {
        question: 'Assign the string "wrench" to a variable named tool.',
        answer: 'tool = "wrench"'
    },
    {
        question: 'Assign the integer value 18 to a variable named requiredAge.',
        answer: 'requiredAge = 18'
    },
    {
        question: 'Assign the floating-point value 0.6 to a variable named voltage.',
        answer: 'voltage = 0.6'
    },
    {
        question: 'Assign the boolean value True to a variable named isVisible.',
        answer: 'isVisible = True'
    },
    {
        question: 'Assign a tuple containing "salad", "soup", "dessert" to a variable named mealCourses.',
        answer: 'mealCourses = ("salad", "soup", "dessert")'
    },
    {
        question: 'Assign the string "wallet" to a variable named financialAccessory.',
        answer: 'financialAccessory = "wallet"'
    },
    {
        question: 'Assign the integer value 12 to a variable named maxAttemptsPerGame.',
        answer: 'maxAttemptsPerGame = 12'
    },
    {
        question: 'Assign the floating-point value 3.0 to a variable named averageGrowth.',
        answer: 'averageGrowth = 3.0'
    },
    {
        question: 'Assign the boolean value False to a variable named isInitialized.',
        answer: 'isInitialized = False'
    }
        */
];

