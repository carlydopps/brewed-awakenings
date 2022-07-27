import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`

mainContainer.innerHTML = applicationHTML


/*
Thinking through ERD

Need new table for locations

Products can be sold at one or many locations
Locations can have one or many products
Product to location is many-to-many
Bridge table will be productLocation

Employees can work at one or many locations
Locations can have one or many employees
Employee to location is many-to-many
Bridge table will be employeeLocation

Need new table for customers
Need new table for credit card numbers
Need new table for ratings
Need new table for recommendations

Customers can have zero or many credit card numbers
Credit card numbers can be associated with only one customer
Customer to credit card is one-to-many

Customers can give multiple ratings
A rating can be associated with only one customer
--- Product needs to be involved here?
- A product can have zero or many ratings
- A rating can be associated with only one product
Customer to rating is one-to-many
Product to rating is one-to-many

Customers can write zero or many recommendations
A recommendation can be associated with only one customer
--- Location needs to be involved here? -
A location can have zero or many recommendations
A recommendation can be associated with only one location ("for each location")
Recommendation to customer is one-to-many
Recommendation to location is one-to-many

-- Should probably add a relationship between customer and orders too
A customer can have one of many orders
An order can be associated with only one customer

*/
