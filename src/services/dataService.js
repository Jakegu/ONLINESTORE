let catalog = [
    {
        "title": "Orange",
        "category": "fruit",
        "price": 12.99,
        "image": "orange.jpg",
        "id": "1",
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 29.99,
        "image": "banana.jpg",
        "id": "2",
    },
    {
        "title": "Strawberry",
        "category": "berry",
        "price": 9.99,
        "image": "strawberry.jpg",
        "id": "3",
    },
    {
        "title": "Durian",
        "category": "exoticFruit",
        "price": 39.99,
        "image": "durian.jpg",
        "id": "4",
    },
    {
        "title": "Apple",
        "category": "fruit",
        "price": 4.99,
        "image": "apple.jpg",
        "id": "5",
    },
    {
        "title": "Blueberry",
        "category": "berry",
        "price": 12.99,
        "image": "blueberry.jpg",
        "id": "6",
    },
    {
        "title": "Raspberry",
        "category": "berry",
        "price": 8.99,
        "image": "raspberry.jpg",
        "id": "7",
    },
    {
        "title": "Peach",
        "category": "fruit",
        "price": 4.99,
        "image": "peach.jpg",
        "id": "8",
    },
];

class DataService {
    getProduct(){
        return catalog;
    }
}

export default DataService;