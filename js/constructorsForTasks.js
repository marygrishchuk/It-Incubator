//Constructor with variables declaration for all Tasks
function SearchForm() {
    this.searchField = null;
    this.searchBtn = null;
    this.objectsWithNames = [];
    this.mixedNumbers = [];
    this.min = null;
    this.max = null;
    this.a = null;
    this.b = null;
    this.tempVar = null;
    this.array = [];
    this.searchInput = null;
    this.number = null;
    this.maxNumber = null;
}

//Constructor for Task 5
function ObjectWithName(name) {
    this.name = name;
    this.age = 20;
}

//Starting Method
SearchForm.prototype.start = function() {
    //Search form items initialization
    let that = this;

    this.searchField = document.querySelector('.search-field');
    this.searchBtn = document.querySelector('.search-btn');

    // Task 5 array initialization
    this.objectsWithNames = [objectWithName1, objectWithName2, objectWithName3, objectWithName4];

    // Task 7 array and variables initialization
    this.mixedNumbers = [8, -4, 500, 3, 9, -15];
    this.min = this.mixedNumbers[0];
    this.max = this.mixedNumbers[0];

    // Task 8 variables
    this.a = "XXX";
    this.b = "YYY";

    // Task 9 variable
    this.array = [23, 55, -1, 4, 102, -40];

    //subscription to events + Task 10 realization
    this.searchBtn.addEventListener('click', setTimeout.bind(null, function (e) {
        that.onSearchBtnClick(e)
    }, 3000));

    // Task 1-4 realization
    this.onSearchBtnClick = function(e) {
        this.searchInput = this.searchField.value;
        if (this.searchInput === 'google') {
            alert('Yandex is cooler. But it\'s not for sure');
        } else {
            alert(this.searchInput);
        }
        //alert for Task 5
        alert('Task 5:\n' + this.objectsWithNames[0].name);

        //alert for Task 6
        alert('Task 6:\n 2 + 8 = ' + this.superSum(2, 8));

        alert('To see the results of other Tasks please check the Console (F12)');
    };

    //Task 6 realization
    this.superSum = function (number1, number2) {
        return Number(number1) + Number(number2);
    };

    //Task 7 realization
    for (let i = 0; i < this.mixedNumbers.length; i++) {
        this.number = this.mixedNumbers[i];
        this.min = (this.number < this.min) ? this.number : this.min
        this.max = (this.number > this.max) ? this.number : this.max
    }
    console.log('Task 7:\nMin number: ' + this.min + '\nMax number: ' + this.max);

    //Task 8 realization
    this.tempVar = this.a;
    this.a = this.b;
    this.b = this.tempVar;

    console.log('Task 8:\na = ' + this.a); // то что было изначально в b
    console.log('b = ' + this.b); // то что было изначально в a

    //Task 9 realization
    function findMax(array) {
        this.maxNumber = Math.max(...array);
        console.log('Task 9:\nMaxNumber: ' + this.maxNumber);
    }
    findMax(this.array);
}