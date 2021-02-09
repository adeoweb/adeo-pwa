import { TCustomizableOption } from 'src/lib/types/graphql/Product';
import { FunctionComponent } from 'react';
import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import AreaOption from 'src/lib/components/CustomOptions/AreaOption';
import DropDownOption from 'src/lib/components/CustomOptions/DropDownOption';
import FieldOption from 'src/lib/components/CustomOptions/FieldOption';
import CheckboxOption from 'src/lib/components/CustomOptions/CheckboxOption';
import RadioOption from 'src/lib/components/CustomOptions/RadioOption';

const getOptionComponent = ({
    __typename: type
}: TCustomizableOption): FunctionComponent<TOptionProps> | null => {
    switch (type) {
        case 'CustomizableAreaOption': {
            return AreaOption;
        }
        case 'CustomizableDropDownOption': {
            return DropDownOption;
        }
        case 'CustomizableFieldOption': {
            return FieldOption;
        }
        case 'CustomizableRadioOption': {
            return RadioOption;
        }
        case 'CustomizableCheckboxOption': {
            return CheckboxOption;
        }
        // TODO: implement unsupported CustomizableOptionInterface types
        default: {
            return null;
        }
    }
};

export default getOptionComponent;
