/*
//Menu options seperated by classes
class Student {
    //instance of Student
    constructor(firstName, lastName, phoneNumber, grade) {
        //"this" keyword specifices the feild that belongs to the instance
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }
    //method - refered to as a method, not a function.
    //a method is a function that belongs to an object or a class. 
    //in this case, the class is "Student".

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

*/

//MenuApp START HERE

//must have at least two classes.

class Product {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name} plays ${this.position}.`;        
  }
}

class store {
  constructor(name) {
    this.name = name;
    //must have at least one arrays
    this.products = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
    } else {
      throw new Error(`You can only add an instance of Product. Argument is not a product: ${product}`);
    }
  }

  describe() {
    return `${this.name} has ${this.products.length} products.`;
  }
}

// Your menu should have the options to create, view, and delete elements.
class Menu {
  constructor() {
      this.stores = [];
      this.selectedstore = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createstore();
          break;
        case '2':
          this.viewstore();
          break;
        case '3':
          this.deletestore();
          break;
        case '4':
          this.displayStores();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('Check back later! We occasionally add new products to our stores!');
  }

  showMainMenuOptions() {
    return prompt(`
      0) exit
      1) create new store
      2) view store
      3) delete store
      4) display all stores
    `);
  }

  showstoreMenuOptions(storeInfo) {
    return prompt(`
    0) back
    1) create product
    2) delete product
    -----------------
    ${storeInfo}
    `);
  }

  displayStores() {
    let storeString = '';
    for (let i = 0; i < this.stores.length; i++) {
      storeString += i + ') ' + this.stores[i].name + '\n';
    }
    alert(storeString);
  }
  
  createstore() {
    let name = prompt('Enter name for new store:');
    this.stores.push(new store(name));
  }

  viewstore() {
    let index = prompt('Enter the index of the store you wish to view:');
    if (index > -1 && index < this.stores.length) {
      this.selectedstore = this.stores[index];
      let description = 'store Name ' + this.selectedstore.name + '\n';

      for (let i = 0; i < this.selectedstore.products.length; i++) {
        description += i + ') ' + this.selectedstore.products[i].name
         + ' - ' + this.selectedstore.products[i].position + '\n';
      }

      let selection = this.showstoreMenuOptions(description);
      switch (selection) {
        case '1':
          this.createProduct();
          break;
        case '2':
          this.deleteProduct();
      }
    }
  }

  deletestore() {
    let index = prompt('Enter the index of the store you wish to delete:');
    if (index > -1 && index < this.stores.length) {
      this.stores.splice(index, 1);
    }
  }

  createProduct() {
    let name = prompt('Enter name for new product:');
    let position = prompt('Enter postion for new product');
    this.selectedstore.products.push(new Product(name, position));
  }

  deleteProduct() {
    let index = prompt('Enter the index of the product you wish to delete:');
    if (index > -1 && index < this.selectedstore.products.length) {
      this.selectedstore.products.splice(index, 1);
    } 
  }
}

//add delay for background html to load first! or attmept to!
var waitWaitholdOn = 400;

setTimeout(function() {
  //starts my program! 
  let menu = new Menu();
  menu.start();

}, waitWaitholdOn);
