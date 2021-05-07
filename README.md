# Natuliv
---

Natuliv is a web application focused on promoting natural products and its suppliers through personalized recommendations to the customer.

this is Natuliv's server side.

## Command to initialize the project

```sh
yarn run start
```

Initializes the server and database connection

# API
---

## Buyer

### Create buyer 

`[POST] /api/buyers`

Creates a buyer user.

**Buyer Data Sent:**
```json
[
    {
        "bornDate": "2001-07-09",
        "genderId": 2 ,
        "city": "Medellín",
        "fullName": "Joe Schmoe",
        "email": "joesch@example.com",
        "password": "Joe123"
    }
]
```
Password is encrypted on POST.

### Get buyers

Returns the Natuliv app buyers.

`[GET] /api/buyers`

Response:

```json
[
    {
        "buyerUserId": 1,
        "bornDate": "2001-07-09",
        "gender": {
            "id": 1,
            "keyName": "male",
            "displayName":"Male"
        },
        "lastSurveyFillDate": "2021-01-11T14:22:08Z",
        "city": "Medellín",
        "identityUser": {
            "fullName": "Joe Schmoe",
            "email": "joesch@example.com",
            "creationDate": "2021-02-11T16:00:50Z", 
            "lastLoginDate": "2021-02-11T16:50:00Z",
            "lastUpdateDate": "2021-03-10T17:20:00Z",
            "isActive": true,
            "identityUserRole": {
                "id": 2,
                "keyName": "buyer",
                "displayName": "Buyer"
            }
        }
    },
    {
        // All buyers
    }
]
```
#### Filters
Basic filtering is supported through query parameters.

**Example**: `api/buyers?fullName=Joe` 

This will return all buyers whose fullName has **Joe** in it.

**Two or more query filters**: `api/buyers?isActive=true&genderId=2`

Buyers filters supported: 

* `isActive: Boolean` 
* `fullName: String`
* `genderId: Number`
* `email: String`

### Get buyer

Returns a specific vendor by a provided id

`[GET] /api/buyers/:buyerId`

**Example:** `api/buyers/1`

```json
[
    {
        "buyerUserId": 1,
        "bornDate": "2001-07-09",
        "gender": {
            "id": 1,
            "keyName": "male",
            "displayName":"Male"
        },
        "lastSurveyFillDate": "2021-01-11T14:22:08Z",
        "city": "Medellín",
        "identityUser": {
            "fullName": "Joe Schmoe",
            "email": "joesch@example.com",
            "creationDate": "2021-02-11T16:00:50Z", 
            "lastLoginDate": "2021-02-11T16:50:00Z",
            "lastUpdateDate": "2021-03-10T17:20:00Z",
            "isActive": true,
            "identityUserRole": {
                "id": 2,
                "keyName": "buyer",
                "displayName": "Buyer"
            }
        }
    },
]
```
### Update buyer

Updates a buyer by a provided id

`[PUT] /api/buyers/:buyerId`

**Example:** `api/buyers/1`

```json
[
    {
        "isActive": false
    },
]
```

The buyer is no longer active



## Vendor
---

### Create vendor

`[POST] /api/vendors`

Creates a vendor.

**Vendor Data Sent:**
```json
[
    {
        "name": "Baz",
        "contactNumber": "1234567",
        "websiteUrl": "https://www.foo.com",
        "logoPath": "file.png",
        "description": "Baz is a new brand that provides natural products"
    }
]
```

### Get vendors

Returns all vendors.

`[GET] /api/vendors`

**Example:** `/api/vendors`

Response:

```json
[
    {
        "vendorId": 1,
        "vendorIdHash": "57f32e31-4b9d-4b75-867a-2e3feaea04b9",
        "name": "Baz",
        "contactNumber": "1234567",
        "websiteUrl": "https://www.foo.com",
        "logoPath": "file.png",
        "description": "Baz is a new brand that provides natural products",
        "isActive": true
    },
    {
        // All vendors
    }
]
```

#### Filters
Basic filtering is supported through query parameters.

**Example**: `api/vendors/?name=ba` 

This will return all vendors whose name has **ba** in it

**Two or more query filters**: `api/vendors/1/users?isActive=true&name=ba`

Vendors filters supported: 

* `isActive: Boolean` 
* `name: String`

### Get vendor

Returns a specific vendor by a provided id

`[GET] /api/vendors/:vendorId`

**Example:** `api/vendors/1`

```json
[
    {
        "vendorId": 1,
        "vendorIdHash": "57f32e31-4b9d-4b75-867a-2e3feaea04b9",
        "name": "Baz",
        "contactNumber": "1234567",
        "websiteUrl": "https://www.foo.com",
        "logoPath": "file.png",
        "description": "Baz is a new brand that provides natural products",
        "isActive": true
    },
]
```
### Update vendor

Updates a specific vendor by a provided id

`[PUT] /api/vendors/:vendorId`

**Example:** `api/vendors/1`

```json
[
    {
        "isActive": false
    },
]
```

The vendor is no longer active


## Vendor Users
---
### Create vendor user

`[POST] /api/vendors/:vendorId/users`

**Example:** `/api/vendors/1/users`

Creates a vendor user.

**Vendor User Data Sent:**
```json
[
    {
        "fullName": "Jhon Doe",
        "email": "jdoe@example.com",
    }
]
```
Password is generated and encrypted on POST.

### Get vendor users

Returns the Natuliv Vendor portal users of a specific vendor.

`[GET] /api/vendors/:vendorId/users`

**Example:** `/api/vendors/1/users`

Response:

```json
[
    {
        "vendorUserId": 10,
        "identityUserId": "0429f4ef-d4b0-4390-ae0d-2fefd485b283",
        "vendorId": 1,
        "fullName": "Jhon Doe",
        "email": "jdoe@example.com",
        "creationDate": "2021-01-01T12:00:00Z",
        "lastLoginDate": "2021-01-12T17:20:00Z",
        "lastUpdateDate": "2021-01-11T17:30:00Z",
        "isActive": true,
        "identityUserRole": {
            "id": 2,
            "keyName": "vendor",
            "displayName": "Vendor"
        }
    },
    {
        // All vendors users
    }
]
```

#### Filters
Basic filtering is supported through query parameters.

**Example**: `api/vendors/1/users?fullName=Doe` 

This will return all users whose fullName has **Doe** in it, where vendorId is 1.

**Two or more query filters**: `api/vendors/1/users?isActive=true&email=example`

Vendors users filters supported: 

* `isActive: Boolean` 
* `fullName: String`
* `email: String`

### Get vendor user

Returns a specific vendor user by a provided id

`[GET] /api/vendors/:vendorId/users/:userId`

**Example:** `api/vendors/1/users/10`

```json
[
    {
        "vendorUserId": 10,
        "identityUserId": "0429f4ef-d4b0-4390-ae0d-2fefd485b283",
        "vendorId": 1,
        "fullName": "Jhon Doe",
        "email": "jdoe@example.com",
        "creationDate": "2021-01-01T12:00:00Z",
        "lastLoginDate": "2021-01-12T17:20:00Z",
        "lastUpdateDate": "2021-01-11T17:30:00Z",
        "isActive": true,
        "identityUserRole": {
            "id": 2,
            "keyName": "vendor",
            "displayName": "Vendor"
        }
    },
]
```
### Update vendor user

Updates a specific vendor user by a provided id

`[PUT] /api/vendors/:vendorId/users/:userId`

**Example:** `api/vendors/1/users/10`

```json
[
    {
        "isActive": false
    },
]
```

The vendor user is no longer active

## Vendor Products
---

There are two routes for products entity: both ways are shown on every method.

### Create product
`[POST] /api/vendors/:vendorId/products` or `/api/products`

**Example:** `/api/vendors/1/products`

Creates a product.

**Product Data Sent:**
```json
[
    {
        "name": "Shampoo",
        "description": "Shampoo to hydrate your hair",
        "price": 50000,
        "imagePath": "foo.png",
        "productCategory": 1,
        // if route is api/products the vendorId must be referenced on product data @example 
        // "vendorId": 1
    }
]
```

### Get Products

Returns the products of a specific vendor.

`[GET] /api/vendors/:vendorId/products` or `/api/products`

**Example:** `/api/vendors/1/products`

Response:

```json
[
    {
        "productId": 11,
        "name": "Shampoo",
        "description": "Shampoo to hydrate your hair",
        "price": 50000,
        "vendorId": 1,
        "imagePath": "foo.png",
        "productCategory": {
            "id": 1,
            "keyName": "hair",
            "displayName": "Cabello"
        },
        "isActive": true
    },
    {
        // All products
    }
]
```

#### Filters
Basic filtering is supported through query parameters.

**Example**: `api/vendors/1/products?name=shampoo` 

This will return all vendors products whose name has **shampoo** in it, where vendorId is 1.

**Example**: `api/products?name=shampoo` 

This will return all products whose name has **shampoo** in it.

Products filters supported: 

* `name: String` 
* `vendorId: Number`
* `categoryId: Number`
* `isActive: Boolean`

### Get product

Returns a specific product by a provided id, where vendorId is 1

`[GET] /api/vendors/:vendorId/products/:productId` or `/api/products/:productId`

**Example:** `api/vendors/1/products/11` or `api/products/11`

```json
[
    {
        "productId": 11,
        "name": "Shampoo",
        "description": "Shampoo to hydrate your hair",
        "price": 50000,
        "vendorId": 1,
        "imagePath": "foo.png",
        "productCategory": {
            "id": 1,
            "keyName": "hair",
            "displayName": "Cabello"
        },
        "isActive": true
    },
]
```


### Update product

Updates a specific product by a provided id

`[PUT] /api/vendors/:vendorId/products/:productId` or `/api/products/:productId`

**Example:** `api/vendors/1/product/11` or `api/products/11`

```json
[
    {
        "isActive": false
    },
]
```

The product is no longer active
