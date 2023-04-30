import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiTextInputComponent } from "./components/ui-text-input/ui-text-input.component";
import { MaterialModule } from "../modules/material.module";
import { UiButtonComponent } from './components/ui-button/ui-button.component';

@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        UiTextInputComponent,
        UiButtonComponent
    ],
    exports: [
        UiTextInputComponent,
        UiButtonComponent
    ]
})

export class SharedModule {}