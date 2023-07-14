import React from "react";
import contactCCard from "./ContactCard";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return(

            <ContactCard contact = {contact}></ContactCard>

        );
    })


    return(

        <div>
                {renderContactList}
        </div>

    );

}

export default ContactList;