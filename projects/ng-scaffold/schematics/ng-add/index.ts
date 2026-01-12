import { chain, Rule } from '@angular-devkit/schematics';
import { addConfig } from './add-config';
import { addComponent } from './add-component';
import { addStyles } from './add-styles';
import { addTemplate } from './add-template';

export function ngAdd(): Rule {
    return chain([
        addComponent(),
        addConfig(),
        addTemplate(),
        addStyles()
    ]);
}