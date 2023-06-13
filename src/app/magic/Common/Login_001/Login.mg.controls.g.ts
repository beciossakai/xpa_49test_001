import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Login = "Login",
        Image8 = "Image8",
        Label11 = "Label11",
        V_V_UserID = "V_V_UserID",
        Label12 = "Label12",
        V_V_Password = "V_V_Password",
        B_kaisi = "B_kaisi",
        B_shuryo = "B_shuryo",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_V_UserID(): FormControl {
        return this.fg.controls[MgControlName.V_V_UserID] as FormControl;
    }

    get V_V_Password(): FormControl {
        return this.fg.controls[MgControlName.V_V_Password] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}