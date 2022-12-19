class SignupPage {
    go() {
        cy.visit('https://buger-eats.vercel.app')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillform(personalData) {
        //preenche dados pessoais
        cy.get('input[name="name"]').type(personalData.name)        
        cy.get('input[name="cpf"]').type(personalData.cpf)
        cy.get('input[name="email"]').type(personalData.email)
        cy.get('input[name="whatsapp"]').type(personalData.whatsapp)

        //preenche dados de endereço
        cy.get('input[name="postalcode"]').type(personalData.address.postalcode)
        cy.get('input[value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(personalData.address.propertyNumber);

        //valida dados de endereço
        cy.get('input[name="address"]').should('have.value', personalData.address.street);
        cy.get('input[name="district"]').should('have.value', personalData.address.district);
        cy.get('input[name="city-uf"]').should('have.value', personalData.address.city);

        //seleciona método de entrega
        cy.contains('.delivery-method li', personalData.delivery_method).click()

        //preenche arquivo do cnh
        cy.get('input[accept^="image"]').attachFile(personalData.driverLicense)
    }

    submit() {
        //confirmando dados
        cy.get('form button[type="submit"]').click()
    }

    modalValidation(exptectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', exptectedMessage)
    }

    alertMessageShouldBe(exptectedMessage){
        cy.get('span[class="alert-error"]').should('have.text', exptectedMessage)
    }
}

export default SignupPage;