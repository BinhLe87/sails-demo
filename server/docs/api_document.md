## API Specs
------

[ << Back](./README.md)

This document purpose is to materialize the design specification before starting the implementation of its functions.

* [Account Register](#accountregister)
* [Account Verification](#accountverification)
* [Account Verification Status Checking](#accountverificationstatuschecking)
* [List Service Provider](#listserviceprovider)
* [Get Service Provider](#getserviceprovider)
* [Get User's Service Provider](#getuserserviceprovider)
* [User Register to Service Provider](#userregisterserviceprovider)
* [User Unregister to Service Provider](#userunregisterserviceprovider)
* [Identity Detail](#identitydetail)
* [Identity Verification](#identityverification)

## AccountRegister
---
* **Info:**
  
  API for register Account

* **URL**

  /account/register

* **Method:**

  `POST`

* **Headers**

  None

* **URL Params**
  
  None

* **Data Params**

   **Required:**
 
   `email=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ status : "sent" , session : "status_checking_session_token" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "User did bad thing. Display to them" , data : {}}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML
  
## AccountVerification
---
* **Info:**
  
  API for activate the account (this url was sent to user email)

* **URL**

  /account/verification

* **Method:**

  `GET`

* **Headers**

  None

* **URL Params**

   **Required:**
 
   `token=[string]`

* **Data Params**

  None

* **Success Redirect:**

  * **Code:** 200 <br />
    **Content:** Successful verified HTML page

* **Error Redirect:**

  * **Code:** 400 BAD REQIEST <br />
    **Content:** Failed to verify HTML page

## AccountVerificationStatusChecking
---
* **Info:**
  
  Call periodicly for checking the account activation status

* **URL**

  /account/register/check

* **Method:**

  `POST`

* **Headers**

  None

* **URL Params**
  
  None

* **Data Params**

   **Required:**
 
   `session_token=[string] (status_checking_session_token)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ status : "pending" , email : "user_email@host.com" }`
 
    OR

   * **Code:** 200 <br />
    **Content:** `{ status : "activated" , email : "user_email@host.com" }`

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "User did bad thing. Display to them" , data : {}}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML
  

## ListServiceProvider
---
* **Info:**
  
  List all service provider that's integrated with our blockpass

* **URL**

  /service_providers

* **Method:**

  `GET`

* **Headers**
   
   **Optional:**
 
   `Authorization=[string]`

* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{next: "paging_cursor_key", result: [{ id : 1, name : "Service Name", registered : true,  .. }]}`
 
* **Error Response:**

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML

## GetServiceProvider
---
* **Info:**
  
  Get Service Provider Detail

* **URL**

  /service_providers/:id

* **Method:**

  `GET`

* **Headers**
   
   **Optional:**
 
   `Authorization=[string]`

* **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, name : "Service Name" }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML

## GetUserServiceProvider
---
* **Info:**
  
  Get list user's registed service providers

* **URL**

  /user_services

* **Method:**

  `GET`

* **Headers**
   
   **Required:**
 
   `Authorization=[string]`

* **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{next: "paging_cursor_key", result: [{ id : 1, name : "Service Name", registered : true,  .. }]}`
 
* **Error Response:**

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML

## UserRegisterServiceProvider
---
* **Info:**
  
  User Register to a Service Provider


* **URL**

  /service_providers/register

* **Method:**

  `POST`

* **Headers**
   
   **Required:**
 
   `Authorization=[string]`

* **URL Params**
  
  None

* **Data Params**

   **Required:**
 
   `service_id=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, name : "Service Name" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "User already subscribed or unable to subscribe" , data : {"subscridable":false,"subscribed":true}}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML
  
## UserUnregisterServiceProvider
---
* **Info:**
  
  User Unregister to a Service Provider

* **URL**

  /service_providers/unregister

* **Method:**

  `POST`

* **Headers**
   
   **Required:**
 
   `Authorization=[string]`

* **URL Params**
  
  None

* **Data Params**

   **Required:**
 
   `service_id=[string]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, name : "Service Name" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "User not subscribed or unable to unsubscribe" , data : {}}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML
  
## IdentityDetail
---
* **Info:**
  
  User Identity Detail

* **URL**

  /identity_verification

* **Method:**

  `GET`

* **Headers**
   
   **Required:**
 
   `Authorization=[string]`

* **URL Params**
  
  None

* **Data Params**

  None


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, fist_name : "Name of user" , last_name : "Lastname", current_level: "2", address: "adress", phone : "phone", dob : "09/02/1920", picture: "url", passport: "passport_id", uid : "user_id" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Unable to get user verification" , data : {}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML

## IdentityVerification
* **Info:**
  
  User Add verification info by level
  
* **URL**

  /identity_verification

* **Method:**

  `POST`

* **Headers**
   
   **Required:**
 
   `Authorization=[string]`

* **URL Params**
  
  None

* **Data Params**

   **Required:**
 
   `level=[string]`

   **Optional:**
 
   `first_name=[string]`

   `last_name=[string]`

   `address=[string]`

   `city=[string]`

   `state=[string]`

   `postal_code=[string]`

   `country=[string]`

   `phone=[string]`

   `dob=[string]`

   `id_card=[file]`
   
   `selfie=[file]`

   `address_proof=[file]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 1, fist_name : "Name of user" , last_name : "Lastname", current_level: "2", address: "adress", phone : "phone", dob : "09/02/1920", picture: "url", passport: "passport_id", uid : "user_id" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Unable to get user verification" , data : {}`

  * **Code:** 401 UNAUTHENTICATED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "You are unauthorized to make this request." , data : {}}`

  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ message : "Internal Error. please try again later" , data : {}}`

  * **Code:** 502 CONNECTION TIMEOUT <br />
  **Content:** HTML

  * **Code:** 503 SERVICE UNAVAILABLE RIGHT NOW <br />
  **Content:** HTML