var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
    
        var personalData = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
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

        return personalData;
    }
};