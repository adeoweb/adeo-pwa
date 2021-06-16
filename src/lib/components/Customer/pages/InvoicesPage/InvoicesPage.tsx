import React, { FunctionComponent } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import downloadIcon from 'src/lib/assets/icons/download.svg';
import pdfIcon from 'src/lib/assets/icons/pdf.svg';

import defaultClasses from './InvoicesPage.scss';

const InvoicesPage: FunctionComponent = () => {
    const { t } = useTranslation('order');

    return (
        <div>
            <h3 className={defaultClasses.pageTitle}>{t('Invoices')}</h3>
            <div className={defaultClasses.invoicesTable}>
                <div className={defaultClasses.row}>
                    <div className={defaultClasses.col}>
                        <img src={pdfIcon} alt="pdf" />
                        <a href="/">190000349717.pdf</a>
                    </div>
                    <div
                        className={`${defaultClasses.col} ${defaultClasses.statusCol}`}
                    >
                        <p>Neapmokėta</p>
                    </div>
                    <div className={defaultClasses.col}>
                        <p>57,96 €</p>
                    </div>
                    <div className={defaultClasses.col}>
                        <p>2020-09-09</p>
                    </div>
                    <div className={defaultClasses.col}>
                        <a href="/">190000349715</a>
                    </div>
                    <div className={defaultClasses.col}>
                        <img src={downloadIcon} alt="download" />
                    </div>
                </div>
            </div>
            <div className={defaultClasses.invoicesMobile}>
                <div className={defaultClasses.card}>
                    <div className={defaultClasses.tableWrapper}>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>{t('Inv.')}</td>
                                    <td>
                                        <div
                                            className={
                                                defaultClasses.invoiceCell
                                            }
                                        >
                                            <img src={pdfIcon} alt="pdf" />
                                            <a href="/">190000349717.pdf</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('Status')}</td>
                                    <td>Neapmokėta</td>
                                </tr>
                                <tr>
                                    <td>{t('Total')}</td>
                                    <td>57,96 €</td>
                                </tr>
                                <tr>
                                    <td>{t('Order date')}</td>
                                    <td>2020-09-09</td>
                                </tr>
                                <tr>
                                    <td>{t('Order number')}</td>
                                    <td>
                                        <a href="/">190000349715</a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className={defaultClasses.downloadBtn}>
                        <img src={downloadIcon} alt="download" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicesPage;
