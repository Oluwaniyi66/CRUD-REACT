import { createContext, useState } from "react";


 export  const InvoiceContext = createContext()


const InvoiceContextProvider = ({children}) => {
                    
    var uuid = (Math.random() + 1).toString(36).substring(7);

    const [invoice, setinvoice] = useState(
        {
            id: uuid,
            file: "",
            invoiceLabel: "",
            invoiceNumber: "",
            invoiceDate: new Date(),
            invoiceDueDate: "",
            fromName: "",
            fromEmail: "",
            fromAddress: "",
            fromPhone: "",
            billToName: "",
            billToEmail: "",
            billToAddress: "",
            billToPhone: "",
            items: [
              {
                id: 1,
                itemDescription: "Hello world",
                itemDetails: "Nothing yet",
                itemRate: 0,
                itemQty: 1,
                itemAmount: 0,
                isTax: false,
              },
            ],
            accountNumber: "",
            bankName: "",
            swiftCode: "",
            country: "",
            note: "",
            currency: "assets/img/flag-us.svg",
            taxType: "",
            tax: "",
            discountType: "",
            discount: 10,
          }
    );
            const myBox = {invoice, setinvoice}
    return (
        <InvoiceContext.Provider value={myBox}>
                {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceContextProvider