fetch('https://fakestoreapi.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => {
        const productListContainer = document.getElementById('product-list');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card', 'mb-3');

            const basicInfoSection = document.createElement('div');
            basicInfoSection.classList.add('card-body');

            const productName = document.createElement('h5');
            productName.classList.add('card-title');
            productName.textContent = product.title;

            const productImage = document.createElement('img');
            productImage.classList.add('card-img-top');
            productImage.setAttribute('src', product.image);
            productImage.setAttribute('alt', product.title);

            basicInfoSection.appendChild(productName);
            basicInfoSection.appendChild(productImage);

            productCard.appendChild(basicInfoSection);

            const additionalInfoSection = document.createElement('div');
            additionalInfoSection.classList.add('card-body', 'additional-info');
            additionalInfoSection.style.display = 'none';

            const productDescription = document.createElement('p');
            productDescription.classList.add('card-text');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.classList.add('card-text', 'text-muted');
            productPrice.textContent = `Price: $${product.price}`;

            const orderButton = document.createElement('button');
            orderButton.classList.add('btn', 'btn-primary');
            orderButton.textContent = 'Beställ';

            orderButton.addEventListener('click', () => {
                localStorage.setItem("prodId", product.id);
                window.location.href = `beställning.html?productId=${product.id}`;
            });

            additionalInfoSection.appendChild(productDescription);
            additionalInfoSection.appendChild(productPrice);
            additionalInfoSection.appendChild(orderButton);

            productCard.appendChild(additionalInfoSection);

            function handleMouseEnter() {
                additionalInfoSection.style.display = 'block';
                productImage.style.maxWidth = "20%";
            }
            
            function handleMouseLeave() {
                additionalInfoSection.style.display = 'none';
                productImage.style.maxWidth = "20%";
            }

            function handleClickOutside(event) {
                if (!productCard.contains(event.target)) {
                    productCard.classList.remove('expanded');
                }
            }
            document.body.addEventListener('click', handleClickOutside);
            
            productListContainer.appendChild(productCard);
            productCard.addEventListener('mouseenter', handleMouseEnter);
            productCard.addEventListener('mouseleave', handleMouseLeave);

            productCard.addEventListener('click', (event) => {
                const orderButton = event.target.closest('.btn-primary');
                if (orderButton) {
                    localStorage.setItem("prodId", product.id);
                    window.location.href = `beställning.html?productId=${product.id}`;
                } else {
                    if (productCard.classList.contains('expanded')) {
                        productCard.classList.remove('expanded');
                        productCard.addEventListener('mouseenter', handleMouseEnter);
                        productCard.addEventListener('mouseleave', handleMouseLeave);
                    } else {
                        productCard.classList.add('expanded');
                        productCard.removeEventListener('mouseenter', handleMouseEnter);
                        productCard.removeEventListener('mouseleave', handleMouseLeave);
                    }
                }
            });
            });
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation1:', error);
        });
