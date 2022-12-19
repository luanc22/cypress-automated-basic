import SignupPage from "../pages/SignupPage";

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {

        var personalData = {
            name: 'Luan Cabral',
            cpf: '12345678912',
            email: 'luan@ndd.com',
            whatsapp: '47999999999',
            address: {
            postalcode: '88523-060',
            propertyNumber: '431',
            street: 'Rua Doutor Walmor Ribeiro',
            district: 'Coral',
            city: 'Lages/SC'
            },
            delivery_method: 'Moto',
            driverLicense: 'images/cnh-example.jpg'
        };

        var signup = new SignupPage();

        signup.go();
        signup.fillform(personalData);
        signup.submit();

        const exptectedOkMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalValidation(exptectedOkMessage);

    })

    it('CPF Inválido', () => {

        var personalData = {
            name: 'Luan Cabral',
            cpf: '123456789AB',
            email: 'luan@ndd.com',
            whatsapp: '47999999999',
            address: {
            postalcode: '88523-060',
            propertyNumber: '431',
            street: 'Rua Doutor Walmor Ribeiro',
            district: 'Coral',
            city: 'Lages/SC'
            },
            delivery_method: 'Moto',
            driverLicense: 'images/cnh-example.jpg'
        }
        
        var signup = new SignupPage();

        signup.go();
        signup.fillform(personalData);
        signup.submit();

        const exptectedErrorMessage = 'Oops! CPF inválido';
        signup.alertMessageShouldBe(exptectedErrorMessage);

    })
})