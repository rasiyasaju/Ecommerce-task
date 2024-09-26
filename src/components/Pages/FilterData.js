const products = [
    {
      name: "Wireless Mouse",
      originalPrice: 19.99,
      OfferPrice: 16.99,
      inStock: true,
      quantity: 12,
      category: "Electronics",
      image: "https://media.istockphoto.com/id/155099981/photo/single-new-silver-computer-mouse-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=fkFaVYg4-T1h7fs3BbtvUYKT1143xAGUzWdoD9ubRl4="
    },
    {
      name: "Bluetooth Headphones",
      originalPrice: 49.99,
      OfferPrice: 46.88,
      inStock: true,
      quantity: 8,
      category: "Electronics",
      image: "https://images.pexels.com/photos/3921829/pexels-photo-3921829.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Iphone",
      originalPrice: 59.99,
      OfferPrice: 55.99,
      inStock: false,
      quantity: 0,
      category: "MobilePhones",
      image: "https://images.pexels.com/photos/18311094/pexels-photo-18311094/free-photo-of-apple-smartphone-iphone-14-on-the-palmrest-of-macbook-pro-laptop.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "jacket",
      originalPrice: 299.99,
      OfferPrice: 288.37,
      inStock: true,
      quantity: 2,
      category: "Clothes",
      image: "https://media.istockphoto.com/id/1326352310/photo/blank-tracksuit-top-mockup.jpg?b=1&s=612x612&w=0&k=20&c=d7aKvaOaSsFsd2wM2ovS29oaRTeHwhk-Is8ZUo4H_8U="
    },
    {
      name: "Samsung",
      originalPrice: 89.99,
      OfferPrice: 84.99,
      inStock: true,
      quantity: 5,
      category: "MobilePhones",
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Jeans",
      originalPrice: 24.99,
      OfferPrice: 22.23,
      inStock: false,
      quantity: 0,
      category: "Clothes",
      image: "https://images.pexels.com/photos/1804075/pexels-photo-1804075.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Dell",
      originalPrice: 29.99,
      OfferPrice: 27.88,
      inStock: true,
      quantity: 10,
      category: "Laptop",
      image: "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Smartphone Tripod",
      originalPrice: 15.99,
      OfferPrice: 14.99,
      inStock: true,
      quantity: 4,
      category: "Electronics",
      image: "https://images.pexels.com/photos/26347670/pexels-photo-26347670/free-photo-of-iphone-with-some-filming-accessories.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Webcam",
      originalPrice: 39.99,
      OfferPrice: 37.99,
      inStock: true,
      quantity: 15,
      category: "Electronics",
      image: "https://media.istockphoto.com/id/1159572124/photo/silver-power-bank.jpg?b=1&s=612x612&w=0&k=20&c=Ez_P9CTSTkAHDpS_Cgdk2JhvSOLjVLK7SfvROLAOpEY="
    },
    {
      name: "Redmi",
      originalPrice: 25.99,
      OfferPrice: 24.88,
      inStock: true,
      quantity: 3,
      category: "MobilePhones",
      image: "https://images.pexels.com/photos/28381526/pexels-photo-28381526/free-photo-of-a-person-holding-a-smartphone-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Hoodies",
      originalPrice: 19.99,
      OfferPrice: 18.99,
      inStock: false,
      quantity: 0,
      category: "Clothes",
      image: "https://media.istockphoto.com/id/1305793711/photo/blank-hooded-sweatshirt-mockup-for-print-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=IJ6D1EledCN2m0c-VhAPSjXnga9HX65fhRdYwImphy8="
    },
    {
      name: "Apple",
      originalPrice: 79.99,
      OfferPrice: 76.99,
      inStock: true,
      quantity: 6,
      category: "Laptop",
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Smartwatch",
      originalPrice: 129.99,
      OfferPrice: 125.99,
      inStock: true,
      quantity: 7,
      category: "Electronics",
      image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Tablet",
      originalPrice: 199.99,
      OfferPrice: 196.99,
      inStock: true,
      quantity: 1,
      category: "Electronics",
      image: "https://images.pexels.com/photos/159643/laptop-ipad-organic-natural-159643.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Fitness Tracker",
      originalPrice: 49.99,
      OfferPrice: 45.99,
      inStock: true,
      quantity: 9,
      category: "fitness",
      image: "https://media.istockphoto.com/id/1211916991/photo/smart-fitness-tracking-and-watch-a-man-using-smart-band-tracking-heart-rate-and-health-data.jpg?b=1&s=612x612&w=0&k=20&c=Hi0P3pDQE8LsvmZQ7B-Qp5z4TIM3VQF5ub399vJKmMI="
    },
    {
      name: "VR Headset",
      originalPrice: 299.99,
      OfferPrice: 298.99,
      inStock: false,
      quantity: 0,
      category: "Fitness",
      image: "https://media.istockphoto.com/id/1033711098/photo/headset-headphones-telephone-and-laptop-in-call-center.jpg?b=1&s=612x612&w=0&k=20&c=hzEVKCGJI9c4zcnDeqXyqRgWjeRWF8mn0uyP6V-Izdo="
    },
    {
      name: "Smart Home Speaker",
      originalPrice: 89.99,
      OfferPrice: 86.99,
      inStock: true,
      quantity: 20,
      category: "Electronics",
      image: "https://images.pexels.com/photos/1714206/pexels-photo-1714206.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Adidas",
      originalPrice: 119.99,
      OfferPrice: 115.99,
      inStock: true,
      quantity: 13,
      category: "Shoes",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Action Camera",
      originalPrice: 249.99,
      OfferPrice: 245.99,
      inStock: true,
      quantity: 4,
      category: "Electronics",
      image: "https://media.istockphoto.com/id/1310250081/photo/new-4k-action-camera-on-a-suction-mount-in-black-color-isolated-white-background.jpg?b=1&s=612x612&w=0&k=20&c=KeEKZ1t1oR9FUXsfh2Svxl38oXw-EUsS8Z1XvHRCn9E="
    },
    {
      name: "Nike",
      originalPrice: 199.99,
      OfferPrice: 193.99,
      inStock: false,
      quantity: 0,
      category: "Shoes",
      image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];
  
  export default products;
  