describe("Signup Dropdown Tests", () => {
    beforeEach(() => {
      
      cy.on('uncaught:exception', (err, runnable) => {
        
        if (err.message.includes('Failed to validate CAPTCHA')) {
          return false;  
        }
        return true;  
      });
  
      cy.visit("https://app.circula.com/users/sign_up");
      
    });
  
    it("Should contain Sweden in the country dropdown", () => {
      // Handle Cookie Consent
      cy.wait(8000); 
      cy.get('#usercentrics-root').shadow().find('button.sc-dcJsrY.eGzzjT').click();
    
      cy.xpath('//input[@type="email"]').type('testautomation@abccompany.com', { force: true });
      cy.xpath('//input[@type="password"]').type('Qwerty123$', { force: true });
      cy.xpath('//*[@class="sc-eb60ccfc-0 sc-b2fd84a5-0 cwxtiA bdaTRN"]//input')
        .should('be.visible')  
        .click({ force: true });
    
        cy.xpath('//button[text()="Try for free"]').click();


        //Contact Details
        cy.xpath('//input[@name="firstname"]').type('Rahul', { force: true });
        cy.xpath('//input[@name="lastname"]').type('Kumar', { force: true });
        cy.xpath('//input[@name="phoneNumber"]').type('123456789', { force: true });
        cy.xpath('//button[text()="Next step"]').click();

        // Company Info
        cy.xpath('//input[@name="organizationName"]').type('abccompany', { force: true });
        cy.xpath('//input[@name="country"]').clear(); 

        cy.xpath('//input[@id="downshift-:r4:-input"]').type('Sweden');
        cy.wait(1000);
        cy.xpath('(//li)[1]')   
        .contains('Sweden')
         .click();

        
        

      
    });
  });
  