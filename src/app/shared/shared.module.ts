import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiTextInputComponent } from "./components/ui-text-input/ui-text-input.component";
import { MaterialModule } from "../modules/material.module";

@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        UiTextInputComponent
    ],
    exports: [
        UiTextInputComponent
    ]
})

export class SharedModule {}