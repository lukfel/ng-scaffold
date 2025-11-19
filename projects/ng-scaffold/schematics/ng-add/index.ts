import { chain, Rule } from '@angular-devkit/schematics';
import { addModule } from './add-module';
import { addService } from './add-service';
import { addStyles } from './add-styles';
import { addTemplate } from './add-template';

export default function ngAdd(): Rule {
    return chain([
        addModule(),
        addService(),
        addTemplate(),
        addStyles(),
    ]);
}