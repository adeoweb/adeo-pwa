import { FunctionComponent } from 'react';

import AreaOption from 'src/lib/components/CustomOptions/AreaOption';
import CheckboxOption from 'src/lib/components/CustomOptions/CheckboxOption';
import { TOptionProps } from 'src/lib/components/CustomOptions/CustomOptionsTypes';
import DropDownOption from 'src/lib/components/CustomOptions/DropDownOption';
import FieldOption from 'src/lib/components/CustomOptions/FieldOption';
import RadioOption from 'src/lib/components/CustomOptions/RadioOption';
import {
    CustomizableAreaOption,
    CustomizableCheckboxOption,
    CustomizableDropDownOption,
    CustomizableFieldOption,
    CustomizableRadioOption
} from 'src/lib/types/graphql-types.generated';
import { TCustomizableOption } from 'src/lib/types/graphql/Product';

type TCustomizableOptionComponentVariant =
    | FunctionComponent<TOptionProps<CustomizableRadioOption>>
    | FunctionComponent<TOptionProps<CustomizableFieldOption>>
    | FunctionComponent<TOptionProps<CustomizableDropDownOption>>
    | FunctionComponent<TOptionProps<CustomizableCheckboxOption>>
    | FunctionComponent<TOptionProps<CustomizableAreaOption>>;

const getOptionComponent = ({
    __typename: type
}: TCustomizableOption): TCustomizableOptionComponentVariant | null => {
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
