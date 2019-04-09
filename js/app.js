(function() {
	let customers = [];
	let index = 0;

	//object constructor
	function Customer(name, img, text) {
		this.name = name;
		this.img = img;
		this.text = text;
	}

	//create custobmer
	function createCustomer(name, img, text) {
		//full img
		let fullImg = `img/customer-${img}.jpg`;

		//creating a instance
		const customer = new Customer(name, fullImg, text);

		//add customer to customers array
		customers.push(customer);
	}

	createCustomer(
		'jhon',
		1,
		`Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do 
       . `,
	);
	createCustomer(
		'Bob',
		2,
		`
        magna aliqua. Vivamus at augue eget arcu dictum. 
        Quam adipiscing vitae proin sagittis nisl rhoncus 
        mattis. `,
	);
	createCustomer(
		'Peter',
		3,
		`Lorem ipsum dolor sit amet, 
         
        Quam adipiscing vitae proin sagittis nisl rhoncus 
        mattis. `,
	);
	createCustomer(
		'Arnold',
		4,
		`
        magna aliqua. Vivamus at augue eget arcu dictum. 
        Quam adipiscing vitae proin sagittis nisl rhoncus 
        mattis. `,
	);
	//console.log(customers);

	document.querySelectorAll('.btn').forEach(item => {
		item.addEventListener('click', event => {
			event.preventDefault();
			//console.log(event.target);
			if (event.target.parentElement.classList.contains('prevBtn')) {
				if (index === 0) {
					//preventing negative numbers
					index = customers.length;
				}
				index--;
				document.getElementById('customer-img').src = customers[index].img;
				document.getElementById('customer-name').textContent =
					customers[index].name;
				document.getElementById('customer-text').text = customers[index].text;
			}
			if (event.target.parentElement.classList.contains('nextBtn')) {
				if (index === customers.length - 1) {
					//preventing exceeding array length
					index = 0;
				}
				index++;
				document.getElementById('customer-img').src = customers[index].img;
				document.getElementById('customer-name').textContent =
					customers[index].name;
				document.getElementById('customer-text').textContent =
					customers[index].text;
			}
		});
	});
})();
