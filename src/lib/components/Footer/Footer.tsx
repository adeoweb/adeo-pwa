import React, { FunctionComponent } from 'react';
import ContactInformation from 'src/lib/components/Footer/ContactInformation/ContactInformation';
import FooterBottom from 'src/lib/components/Footer/FooterBottom';
import Newsletter from 'src/lib/components/Footer/Newsletter';
import AccountLinks from 'src/lib/components/Footer/AccountLinks';
import CmsBlockGroup from 'src/lib/components/CmsBlock';

const Footer: FunctionComponent = () => {
    return (
        <footer className="footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <AccountLinks />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <CmsBlockGroup identifiers={'footer-menu-links'} />
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <Newsletter />
                        </div>
                        <ContactInformation />
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
