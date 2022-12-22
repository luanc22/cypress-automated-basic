import SignupPage from "../pages/SignupPage";
import SignupFactory from "../factories/SignupFactory";

describe('Cadastro', () => {

    var signup = new SignupPage();

    //beforeEach(function() {
    //    cy.fixture('deliver').then((deliver) => {
    //        this.deliver = deliver;
    //    })
    //})

    // Também temos before, after e afterEach

    it('User must successfully register as a delivery man', function() {

        var deliver = SignupFactory.deliver();

        signup.go();
        signup.fillform(deliver);
        signup.submit();

        const exptectedOkMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalValidation(exptectedOkMessage);

    })

    it('CPF must be invalid', function() {

        var deliver = SignupFactory.deliver();

        deliver.cpf = '123456789AB'
    
        signup.go();
        signup.fillform(deliver);
        signup.submit();

        const exptectedErrorMessage = 'Oops! CPF inválido';
        signup.alertMessageShouldBe(exptectedErrorMessage);

    })
})