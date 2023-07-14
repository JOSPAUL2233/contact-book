import React from "react";
import contactCCard from "./ContactCard";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    //renderfunction
    const renderContactList = props.contacts.map((contact) => {
        return(

            <ContactCard contact = {contac}></ContactCard>

        );
    })


    return(

        <div>
                {renderContactList}
        </div>

    );

}

export default ContactList;