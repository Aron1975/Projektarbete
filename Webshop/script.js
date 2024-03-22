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

            const quantityLabel = document.createElement('label');
            quantityLabel.textContent = 'Antal:';

            const quantityDropdown = document.createElement('select');
            quantityDropdown.classList.add('form-select');
            for (let i = 1; i <= 8; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                quantityDropdown.appendChild(option);
            }

            const orderButton = document.createElement('button');
            orderButton.classList.add('btn', 'btn-primary');
            orderButton.textContent = 'Beställ';

            orderButton.addEventListener('click', () => {
            window.location.href = `beställning.html?productId=${product.id}`;});

            additionalInfoSection.appendChild(productDescription);
            additionalInfoSection.appendChild(productPrice);
            additionalInfoSection.appendChild(quantityLabel);
            additionalInfoSection.appendChild(quantityDropdown);
            additionalInfoSection.appendChild(orderButton);

            productCard.appendChild(additionalInfoSection);

            productCard.addEventListener('mouseenter', () => {
                additionalInfoSection.style.display = 'block'; 
            });

            productCard.addEventListener('mouseleave', () => {
                additionalInfoSection.style.display = 'none';
            });

            productListContainer.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
