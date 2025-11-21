import { chain, Rule } from '@angular-devkit/schematics';
import { addConfig } from './add-config';
import { addModule } from './add-module';
import { addStyles } from './add-styles';
import { addTemplate } from './add-template';

export function ngAdd(): Rule {
    return chain([
        addModule(),
        addConfig(),
        addTemplate(),
        addStyles()
    ]);
}