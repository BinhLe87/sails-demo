# Developer page Feature checklist

## Accounts & Privilleges
- Account type: `[admin, operator, service_admin, service_operator]`
- Privilleges:

||admin|operator|service_admin|service_operator|
|-----|-----|-----|--------|----|
|Create operator account|x|x||
|Remove operator account|x|||
|Update operator account|x|||
|Create Service|||x|x|
|Remove Service (production)|x|x|||
|Remove Service (sandbox)|x|x|x|x|
|Change Service settings|||x|x|
|Add member to Service|||x||
|Remove member from Service|||x||
|Set role to member|||x||
|Review & publish Service|x|x|

## Workflow
- Admin account is created manually
- Support email login (and later Blockpass login)

### Account creation
- User opens Developer portal, chooses `Register new account`, choose and email & password
- System send verification code to user email
- User needs to input correct verification code to continue

### Account login
- User opens Developer portal, choose `Login`, then input correct email & password
- (May need to integrate captcha)
- Login session expires after 24 hours, or when server responds with a 403 status code
- When access token is expired, should redirect to Login page and ask User to login again
- During development stage, time to token expires should display directly on screen to make it easier for developer

### Service creation
- User can create a new Service given:
    - The Service name is unique (not taken)
    - The Service public key is unique (not taken)
    - Upon creation, the User will become `service_admin`
- There're 2 roles in the Service: `service_admin` and `service_member`
- `service_admin` can invite others to join a Service, as well as remove them
- If a User is invited to different Services, he'll be able to choose which Service he's currently working on

### Service settings
- User that has been invited to a Service can change Service settings
- Each Service has 2 set of settings:
  - Sandbox:
    - Does not go through Blockpass review process
    - Changes have effect immediately
    - Does not work on production app
  - Production
    - Must go through Blockpass review process to have effect
    - Work on production app
    - API call will take money
- User will start setting up the Sandbox environment first, once they're happy with the result they can submit their Service settings for Blockpass review
- Blockpass admins & operators will review the settings, make sure it complies with our terms & conditions
    - Once approved, the sandbox settings will be applied to production, and available to Blockpass users
    - If there're any mistakes with the settings, Blockpass admin will notify Service to update

### Service integration & testing
- API & Documentations are publicly available on Blockpass Github
- Sandbox keys (testing keys) can be generated using the Developer page
- Once the Service made a purchase, it can generate Production keys

### Service submission
- User registers 

### Service review

### User registration
*** Add an easy way for Blockpass admins to do following things:
- Check BP ID of a user when he registers to a Service
- Check log status when calling to service api endpoints