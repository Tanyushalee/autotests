class ClientPage {
    get createClientButton() { return $('button.clients-add-user-dialog')}

    get surnameField() { return $('input[formcontrolname="userSurname')}
    get firstnameField() { return $('input[formcontrolname="userName')}
    get genderRadio() { return $('mat-radio-group mat-radio-button:nth-child(1) div.mat-radio-label-content')}
    get emailField() { return $}


//второй способ
    async fillForm(testingUser){
        await this.surnameField.setValue(testingUser.surname)
    }
}

module.exports = new ClientPage()