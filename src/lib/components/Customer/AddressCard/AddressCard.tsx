import React, { FunctionComponent, useCallback } from 'react';
import { Button, Card, Form, FormCheck } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AddressBlock from 'src/lib/components/Customer/AddressBlock';
import { TCustomerAddress } from 'src/lib/types/graphql/Customer';

type TAddressBlockProps = {
    address: TCustomerAddress;
    isDefault: boolean;
    isDeleteAllowed?: boolean;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onDefaultChange: (id: number) => void;
};

const AddressCard: FunctionComponent<TAddressBlockProps> = ({
    address,
    isDefault,
    isDeleteAllowed,
    onEdit,
    onDelete,
    onDefaultChange
}) => {
    const { t } = useTranslation('address');
    const { id } = address;

    const handleIsDefaultChange = useCallback(() => {
        if (!isDefault && id) {
            onDefaultChange(id);
        }
    }, [isDefault, onDefaultChange, id]);

    if (!id) {
        return null;
    }

    return (
        <Card>
            <Card.Header>Address Name</Card.Header>
            <Card.Body>
                <AddressBlock address={address} />
            </Card.Body>
            <Card.Footer>
                <div className="float-left">
                    <div className="form-group-custom-control">
                        <Form.Check
                            id={id.toString()}
                            custom={true}
                            type="radio"
                        >
                            <FormCheck.Input
                                type="radio"
                                checked={isDefault}
                                onChange={handleIsDefaultChange}
                            />
                            <FormCheck.Label>
                                {t('Default address')}
                            </FormCheck.Label>
                        </Form.Check>
                    </div>
                </div>
                <div className="float-right my-4">
                    <Button
                        variant="link"
                        className="px-3"
                        onClick={() => onEdit(id)}
                    >
                        <i className="fas fa-pencil-alt" />
                    </Button>
                    {isDeleteAllowed && (
                        <Button
                            variant="link"
                            className="px-3"
                            onClick={() => onDelete(id)}
                        >
                            <i className="fas fa-trash" />
                        </Button>
                    )}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default AddressCard;
