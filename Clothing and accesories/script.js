document.addEventListener('DOMContentLoaded', () => {
    const clothingData = [
        {
            name: 'Men Navy Blue Solid Sweatshirt',
            brand: 'United colors of beneton',
            price: 'Rs.2599',
            image: 'image1.jpg'
        },
        {
            name: 'Men Black MAMFP T7 Sweat Sporty Jacket',
            brand: 'puma',
            price: 'Rs.7599',
            image: 'image11.jpg'
        },
        {
            name: 'Men Black Action Parkview Lifestyle Shoes',
            brand: 'Hush Puppies',
            price: 'Rs.6599',
            image: 'image7.jpg'
        },
        {
            name: 'Women Black Solid Light Weight Leather Jacket',
            brand: 'BARESKIN',
            price: 'Rs.9999',
            image: 'image6.jpg'
        },
        {
            name: 'Women Blue Shirt Dress',
            brand: 'SASSAFRAS',
            price: 'Rs.5200',
            image: 'image5.jpg'
        }
    ];

    const accessoriesData = [
        {
            name: 'Unisex Silver-Toned Series 3 Smart Watch',
            brand: 'Apple',
            price: 'Rs.31999',
            image: 'image4.jpg'
        },
        {
            name: 'Unisex Black & Green ReFlex 2.0 Smart Band',
            brand: 'Fastrack',
            price: 'Rs.1999',
            image: 'image8.jpg'
        },
        {
            name: 'Unisex Black Galaxy Fit Fitness Band',
            brand: 'Samsung',
            price: 'Rs.2599',
            image: 'image10.jpg'
        },
        {
            name: 'Gear IconX Black Cord-Free Fitness Earbuds',
            brand: 'Samsung',
            price: 'Rs.13990',
            image: 'image3.jpg'
        },
        {
            name: 'White 2nd Generation AirPods With Charing Case',
            brand: 'Apple',
            price: 'Rs.14999',
            image: 'image2.jpg'
        }
    ];

    function generateCard(product) {
        return `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="content">
                    <p>${product.name}</p>
                    <p class="brand">${product.brand}</p>
                    <p class="money">${product.price}</p>
                </div>
            </div>
        `;
    }

    function Section(sectionId, data) {
        const section = document.getElementById(sectionId);
        section.innerHTML = data.map(generateCard).join('');
    }

    Section('clothing', clothingData);
    Section('accessories', accessoriesData);
});
