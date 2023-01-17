class LoyaltyPage {
    get createLoyaltyButton() { return $('thead button')}
    get nameField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child input')}
    get nameManualField() { return $('table.crm-navigator-table tr table.crm-navigator-table tbody:last-child tr:last-child input')}
    get sumField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(2) input')}
    get sumManualField() { return $('table.crm-navigator-table tr table.crm-navigator-table tbody:last-child td:nth-child(2) input')}
    get pointsField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(3) input')}
    get pointsManualField() { return $('table.crm-navigator-table tr table.crm-navigator-table tbody:last-child td:nth-child(3) input')}
    get fromField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(4) input')}
    get toField() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(5) input')}
    get saveButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:last-child div.bonus-level-edit div:first-child button')}
    get saveManualButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tbody:last-child td:last-child div.bonus-level-edit div:first-child button')}
    get cancelButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:last-child div.bonus-level-edit div:last-child button')}
    get firstListElement() { return $('div[class="bonus-level-data"] div')}
    get editButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(6) div.bonus-level-edit div:first-child button')}
    get deleteButton() { return $('table.crm-navigator-table tr table.crm-navigator-table tr:last-child td:nth-child(6) div.bonus-level-edit div:last-child button')}
    get confirmButton() { return $('app-delete-modal mat-dialog-actions button:first-child')}
    get deleteCancelButton() { return $('app-delete-modal mat-dialog-actions button:last-child')}
    get manualElement() { return $('div[class="bonus-level-data"] i')}
    

    



//второй способ
    async fillForm(testingUser){
        await this.surnameField.setValue(testingUser.surname)
    }
}

module.exports = new LoyaltyPage()