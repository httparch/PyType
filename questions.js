const wordlist = [
    {
        question: 'Assign the value 10 to a variable named score.',
        answer: 'score = 10'
    },
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
];

