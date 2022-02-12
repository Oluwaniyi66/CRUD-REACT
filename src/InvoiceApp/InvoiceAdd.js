import React, { useContext, useEffect, useState } from "react";
import "./InvoiceAdd.css";
import { InvoiceContext } from "./InvoiceContext";

function InvoiceAdd() {

  // const {invoice} = useContext(InvoiceContext)
  // const {setinvoice} = useContext(InvoiceContext)
  // var uuid = (Math.random() + 1).toString(36).substring(7);

  const [invoice, setinvoice] = useState({
    "picture": "",
    "from_name": "",
    "from_email": "",
    "from_address": "",
    "from_phone": "",

    "bill_name": "",
    "bill_email": "",
    "bill_phone": "",
    "bill_address": "",
    "invoice_label": "",
    "currency": "USD - US Dollar",
    "currency_img": "assetss/img/flag-us.svg",
    "invoice_no": "",
    "date": "",
    "due_date": "",
    "items": [{
        "description": "",
        "details": "",
        "price": 0,
        "qty": 1,
        "amount": 0,
        "tax": true
    }],
    "total": "",
    "tax": {
        "type": "None",
        "rate": 10
    },
    "discount": {
        "type": "None",
        "rate": 10
    },
    "bank_name": "",
    "acct_no": "",
    "acct_name": "",
    "swift": "",
    "country": "",
    "notes": ""

})


  const handleChange = (e, type) => {

    if(type == "tax" || type == "discount"){
          setinvoice({...invoice,[type]:{...invoice[type],["rate"]: e.target.value}})
    } else{
      setinvoice({...invoice, [e.target.name]: e.target.value})
    }

  }

  const changeCurrency = (e) => {
    // const {data-img-value, data-value} = e;
    const currency_img = e.target.attributes["data-img-value"].value
    const currency = e.target.attributes["data-value"].value
    console.log(e)
    setinvoice({ ...invoice, currency, currency_img })
}

const changeDropdown = (e, type) => {
  console.log("my event",e);
  setinvoice({...invoice, [type] : {...invoice[type], ["type"]: e.target.dataset.value} })
}

const [action, setAction] = useState("")
    let params = window.location.search
    params = params.replace("?index=", "")

    
    useEffect(() => {
        if (params !== "") setAction("edit"); else setAction("add")
    }, [])

    useEffect(() => {
        if(action === "edit")
            setinvoice(JSON.parse(localStorage.getItem("ropoinvoices"))[parseInt(params)] )       
    }, [action])



const saveInvoice = () => {
  let invoices = JSON.parse(localStorage.getItem("invoices")) || []
  if (action == "add") {
      invoices = [...invoices, invoice]
      localStorage.setItem("ropoinvoices", JSON.stringify(invoices))
      // updateInvoices([...invoices, invoice])
      console.log("Invoice saved")
  } else {
      invoices[params] = invoice
      localStorage.setItem("ropoinvoices", JSON.stringify(invoices))
      console.log("invoice edited")
  }
}
const additem = (e) => 
    {
        setinvoice ({
            ...invoice, 
            items: [
                ...invoice.items,
                {
                  "description": "",
                  "details": "",
                  "price": 0,
                  "qty": 1,
                  "amount": 0,
                  "tax": false
                }
            ]
        })
        e.preventDefault()

    }

    // delete an item row

    const deleteRow = (index) => {
      const newArr = [...invoice.items]
      newArr.splice(index, 1)
      setinvoice({ ...invoice, ["items"]: newArr })

  }

  // another delete method
  const handleDeleteItem = (index) => {
  let newitem=  invoice.items.filter((item,i)=>{

      return i !== index

    })
    setinvoice({...invoice,items: newitem})
  }
    
    const updateItem = (e, index) => {
      const newArr = invoice.items
      const item = newArr[index]

      

      if (e.target.name === "tax") {
          console.log("Tax  ", e.target.name, item.tax)
          item.tax = !item.tax
          if (item.tax) {
              item.total = (item.qty * item.price)
              // setinvoice({...invoice, [item.amount] : item.total})
          } else {

          }
      }else{
          item[e.target.name] = e.target.value
      }
      newArr.splice(index, 1, item)
      setinvoice({ ...invoice, ["items"]: newArr })
  }

  const getTax = () => {
    let tax =
      (invoice.items.reduce((a, b) => parseInt(a) + parseInt(b.item.total), 0) *
        parseInt(invoice.tax)) /
      100;
    return tax;
  };

  const getTotal = () => {
    let total =
      invoice.items.reduce((a, b) => parseInt(a) + parseInt(b.item.total), 0) -
      parseInt(invoice.discount) +
      parseInt(getTax());
    return total;
  };
const tax_type = invoice.tax.type;
const discount_type = invoice.discount.type;


  return (
    <div className="overall py-5">
      <div className="mx-4">
        <div className="d-flex col-lg-12">
          <div className="col-lg-9 px-0  inv-bg">
            <div className="offset-8 mb-5 inv-tp-inp col-lg-3">
              <input value = {invoice.invoice_label} name = "invoice_label" onChange = {handleChange} type="text" placeholder="Invoice Label" />
            </div>

            <div className="col-lg-12 mb-5 d-flex">
              <div className="col-lg-6 px-0">
                <div className="col-lg-3  ms-3">
                  <p>From:-</p>
                </div>
                <div className="d-flex mb-1  col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Name</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.from_name} name = "from_name" onChange = {handleChange} type="text" placeholder="Business Name" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1 col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Email</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.from_email} name = "from_email" onChange = {handleChange} type="text" placeholder="name@companyname" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1  col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Address</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.from_address} name = "from_address" onChange = {handleChange} type="text" placeholder="XYZ Street" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1 col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Phone</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.from_phone} name = "from_phone" onChange = {handleChange} type="text" placeholder="(234) 3262 1797" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <div className="col-lg-3  offset-2">
                  <p>Bil to:-</p>
                </div>
                <div className="d-flex mb-1 justify-content-end col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Name</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.bank_name} name = "bill_name" onChange = {handleChange} type="text" placeholder="Business Name" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1 justify-content-end col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Email</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.bill_email} name = "bill_email" onChange = {handleChange} type="text" placeholder="name@companyname" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1 justify-content-end col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Address</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.bill_address} name = "bill_address" onChange = {handleChange} type="text" placeholder="XYZ Street" />{" "}
                  </div>
                </div>
                <div className="d-flex mb-1 justify-content-end col-lg-12">
                  <div className="col-lg-3  me-2">
                    <p className="mt-1 inv-txt">Phone</p>
                  </div>
                  <div className="col-lg-7 inv-left-inp">
                    <input value = {invoice.bill_phone} name = "bill_phone" onChange = {handleChange} type="text" placeholder="(234) 3262 1797" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-lg-12 d-flex justify-content-between mx-2">
              <div className="mb-1  col-lg-3">
                <div className="col-lg-10  me-2">
                  <p className="mt-1 inv-txt mb-0">Invoice Number</p>
                </div>
                <div className="col-lg-7 inv-left-inp1">
                  <input value = {invoice.invoice_no} name = "invoice_no" onChange = {handleChange} type="text" placeholder="#0001" />
                </div>
              </div>
              <div className="mb-1  col-lg-3">
                <div className="col-lg-10  me-2">
                  <p className="mt-1 inv-txt mb-0">Invoice Date</p>
                </div>
                <div className="col-lg-7 inv-left-inp1">
                  <input value = {invoice.date} name = "date" onChange = {handleChange} type="date" placeholder="2022-02-02" />{" "}
                </div>
              </div>
              <div className="mb-1  col-lg-3">
                <div className="col-lg-10  me-2">
                  <p className="mt-1 inv-txt mb-0">Due Date</p>
                </div>
                <div className="col-lg-7 inv-left-inp1">
                  <input value = {invoice.due_date} name = "due_date" onChange = {handleChange} type="date" placeholder="2022-02-02" />{" "}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <table className="table mt-5">
                <thead>
                  <th className="col-lg-6 inv-txt1">Description</th>
                  <th className="col-lg-2 inv-txt1">RATE</th>
                  <th className="col-lg-2 inv-txt1">QTY</th>
                  <th className="col-lg-1 inv-txt1">AMOUNT</th>
                  <th className="col-lg-1 inv-txt1">TAX</th>
                </thead>
                
                  {
                    invoice.items.map(
                      (item,i) => {
                        return(

                          <tbody>
                    <tr className="">
                    <td className="d-flex p-0">
                      <div className="col-lg-1">
                        <i onClick={()=> handleDeleteItem(i) } class="far fa-window-close"></i>
                      </div>
                      <div className="col-lg-11 inv-item-inp">
                        <input onChange = {(e)=>updateItem(e, i)} value={item.description} name="description" type="text" placeholder="item Description" />
                      </div>
                    </td>
                    <td className="p-0">
                      <div className="col-lg-12 inv-item-inp1">
                        <input type="text" onChange = {(e)=>updateItem(e, i)}  value={item.price} name="price" placeholder="Price" />
                      </div>
                    </td>
                    <td className="p-0">
                      <div className="col-lg-12 inv-item-inp1">
                        <input type="text" onChange = {(e)=>updateItem(e, i)} value={item.qty} name="qty"  placeholder="Quantity" />
                      </div>
                    </td>
                    <td className="d-flex p-0">
                      <span className="me-2">$</span>
                      <p>{item.total}</p>
                    </td>
                    <td className="p-0">
                      <div>
                        <input type="checkbox" name="tax" onChange = {(e)=>updateItem(e, i)} checked = {item.tax?"checked":""}  />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="d-flex p-0">
                      <div className="col-lg-1"></div>
                      <div className="col-lg-11 inv-item-inp3">
                        <input type="text" onChange = {(e)=>updateItem(e, i)} value={item.details} name= "details" placeholder="Additional Details" />
                      </div>
                    </td>
                  </tr>
                        </tbody>
                        )
                      }
                    )
                  }
              </table>
              <button onClick={additem } className="btn btn-primary offset-1">Add Item</button>
            </div>
            <div>
              <div className="col-lg-12 mb-5 d-flex">
                <div className="col-lg-6 px-0">
                  <div className="d-flex mb-1  col-lg-12">
                    <div className="col-lg-3  me-2">
                      <p className="mt-1 inv-txt">Account #:</p>
                    </div>
                    <div className="col-lg-7 inv-left-inp5">
                      <input value = {invoice.acct_no} name = "acct_no" onChange = {handleChange} type="text" placeholder="Bank Account Number" />{" "}
                    </div>
                  </div>
                  <div className="d-flex mb-1 col-lg-12">
                    <div className="col-lg-3  me-2">
                      <p className="mt-1 inv-txt">Bank Name:</p>
                    </div>
                    <div className="col-lg-7 inv-left-inp5">
                      <input value = {invoice.bank_name} name = "bank_name" onChange = {handleChange} type="text" placeholder="Insert Bank Name" />{" "}
                    </div>
                  </div>
                  <div className="d-flex mb-1  col-lg-12">
                    <div className="col-lg-3  me-2">
                      <p className="mt-1 inv-txt">SWIFT code:</p>
                    </div>
                    <div className="col-lg-7 inv-left-inp5">
                      <input value = {invoice.swift} name = "swift" onChange = {handleChange} type="text" placeholder="Insert code" />{" "}
                    </div>
                  </div>
                  <div className="d-flex mb-1 col-lg-12">
                    <div className="col-lg-3  me-2">
                      <p className="mt-1 inv-txt">Country</p>
                    </div>
                    <div className="col-lg-7 inv-left-inp5">
                     
                      <select  onChange = {handleChange} name="country" className="form-control country_code  form-control-sm" id="payment-method-country">
                                                                        <option value>Choose Country</option>
                                                                        <option value="United States">United States</option>
                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                        <option value="Canada">Canada</option>
                                                                        <option value="Australia">Australia</option>
                                                                        <option value="Germany">Germany</option>
                                                                        <option value="Sweden">Sweden</option>
                                                                        <option value="Denmark">Denmark</option>
                                                                        <option value="Norway">Norway</option>
                                                                        <option value="New-Zealand">New Zealand</option>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American-Samoa">Andorra</option>
                                                                        <option value="Angola">Angola</option>
                                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                                        <option value="Argentina">Argentina</option>
                                                                        <option value="Armenia">Armenia</option>
                                                                        <option value="Aruba">Aruba</option>
                                                                        <option value="Austria">Austria</option>
                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                        <option value="Bahamas">Bahamas</option>
                                                                        <option value="Bahrain">Bahrain</option>
                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                        <option value="Barbados">Barbados</option>
                                                                        <option value="Belarus">Belarus</option>
                                                                        <option value="Belgium">Belgium</option>
                                                                        <option value="Belize">Belize</option>
                                                                        <option value="Benin">Benin</option>
                                                                        <option value="Bermuda">Bermuda</option>
                                                                        <option value="Bhutan">Bhutan</option>
                                                                        <option value="Bolivia">Bolivia</option>
                                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                                        <option value="Botswana">Botswana</option>
                                                                        <option value="Brazil">Brazil</option>
                                                                        <option value="British">British Virgin Islands</option>
                                                                        <option value="Brunei">Brunei</option>
                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                        <option value="Burkina">Burkina Faso</option>
                                                                        <option value="Burundi">Burundi</option>
                                                                        <option value="Cambodia">Cambodia</option>
                                                                        <option value="Cameroon">Cameroon</option>
                                                                        <option value="Cape">Cape Verde</option>
                                                                        <option value="Cayman">Cayman Islands</option>
                                                                        <option value="Central-African">Central African Republic</option>
                                                                        <option value="Chad">Chad</option>
                                                                        <option value="Chile">Chile</option>
                                                                        <option value="China">China</option>
                                                                        <option value="Colombia">Colombia</option>
                                                                        <option value="Comoros">Comoros</option>
                                                                        <option value="Costa-Rica">Costa Rica</option>
                                                                        <option value="Croatia">Croatia</option>
                                                                        <option value="Cuba">Cuba</option>
                                                                        <option value="Cyprus">Cyprus</option>
                                                                        <option value="Czechia">Czechia</option>
                                                                        <option value="Côte">Côte d’Ivoire</option>
                                                                        <option value="Djibouti">Djibouti</option>
                                                                        <option value="Dominica">Dominica</option>
                                                                        <option value="Dominican">Dominican Republic</option>
                                                                        <option value="Ecuador">Ecuador</option>
                                                                        <option value="Egypt">Egypt</option>
                                                                        <option value="El-Salvador">El Salvador</option>
                                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                                        <option value="Eritrea">Eritrea</option>
                                                                        <option value="Estonia">Estonia</option>
                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                        <option value="Fiji">Fiji</option>
                                                                        <option value="Finland">Finland</option>
                                                                        <option value="France">France</option>
                                                                        <option value="Gabon">Gabon</option>
                                                                        <option value="Georgia">Georgia</option>
                                                                        <option value="Ghana">Ghana</option>
                                                                        <option value="Greece">Greece</option>
                                                                        <option value="Grenada">Grenada</option>
                                                                        <option value="Guatemala">Guatemala</option>
                                                                        <option value="Guernsey">Guernsey</option>
                                                                        <option value="Guinea">Guinea</option>
                                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                        <option value="Guyana">Guyana</option>
                                                                        <option value="Haiti">Haiti</option>
                                                                        <option value="Honduras">Honduras</option>
                                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                                        <option value="Hungary">Hungary</option>
                                                                        <option value="Iceland">Iceland</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Indonesia">Indonesia</option>
                                                                        <option value="Iran">Iran</option>
                                                                        <option value="Iraq">Iraq</option>
                                                                        <option value="Ireland">Ireland</option>
                                                                        <option value="Israel">Israel</option>
                                                                        <option value="Italy">Italy</option>
                                                                        <option value="Jamaica">Jamaica</option>
                                                                        <option value="Japan">Japan</option>
                                                                        <option value="Jordan">Jordan</option>
                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                        <option value="Kenya">Kenya</option>
                                                                        <option value="Kuwait">Kuwait</option>
                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                        <option value="Laos">Laos</option>
                                                                        <option value="Latvia">Latvia</option>
                                                                        <option value="Lebanon">Lebanon</option>
                                                                        <option value="Lesotho">Lesotho</option>
                                                                        <option value="Liberia">Liberia</option>
                                                                        <option value="Libya">Libya</option>
                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                        <option value="Lithuania">Lithuania</option>
                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                        <option value="Macedonia">Macedonia</option>
                                                                        <option value="Madagascar">Madagascar</option>
                                                                        <option value="Malawi">Malawi</option>
                                                                        <option value="Malaysia">Malaysia</option>
                                                                        <option value="Maldives">Maldives</option>
                                                                        <option value="Mali">Mali</option>
                                                                        <option value="Malta">Malta</option>
                                                                        <option value="Mauritania">Mauritania</option>
                                                                        <option value="Mauritius">Mauritius</option>
                                                                        <option value="Mexico">Mexico</option>
                                                                        <option value="Moldova">Moldova</option>
                                                                        <option value="Monaco">Monaco</option>
                                                                        <option value="Mongolia">Mongolia</option>
                                                                        <option value="Montenegro">Montenegro</option>
                                                                        <option value="Morocco">Morocco</option>
                                                                        <option value="Mozambique">Mozambique</option>
                                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                                        <option value="Namibia">Namibia</option>
                                                                        <option value="Nepal">Nepal</option>
                                                                        <option value="Netherlands">Netherlands</option>
                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                        <option value="Niger">Niger</option>
                                                                        <option value="Nigeria">Nigeria</option>
                                                                        <option value="North-Korea">North Korea</option>
                                                                        <option value="Oman">Oman</option>
                                                                        <option value="Pakistan">Pakistan</option>
                                                                        <option value="Palau">Palau</option>
                                                                        <option value="Palestinian">Palestinian Territories</option>
                                                                        <option value="Panama">Panama</option>
                                                                        <option value="Papua">Papua New Guinea</option>
                                                                        <option value="Paraguay">Paraguay</option>
                                                                        <option value="Peru">Peru</option>
                                                                        <option value="Philippines">Philippines</option>
                                                                        <option value="Poland">Poland</option>
                                                                        <option value="Portugal">Portugal</option>
                                                                        <option value="Puerto">Puerto Rico</option>
                                                                        <option value="Qatar">Qatar</option>
                                                                        <option value="Romania">Romania</option>
                                                                        <option value="Russia">Russia</option>
                                                                        <option value="Rwanda">Rwanda</option>
                                                                        <option value="Réunion">Réunion</option>
                                                                        <option value="Samoa">Samoa</option>
                                                                        <option value="San-Marino">San Marino</option>
                                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                                        <option value="Senegal">Senegal</option>
                                                                        <option value="Serbia">Serbia</option>
                                                                        <option value="Seychelles">Seychelles</option>
                                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                                        <option value="Singapore">Singapore</option>
                                                                        <option value="Slovakia">Slovakia</option>
                                                                        <option value="Slovenia">Slovenia</option>
                                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                                        <option value="Somalia">Somalia</option>
                                                                        <option value="South-Africa">South Africa</option>
                                                                        <option value="South-Korea">South Korea</option>
                                                                        <option value="Spain">Spain</option>
                                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                                        <option value="Sudan">Sudan</option>
                                                                        <option value="Suriname">Suriname</option>
                                                                        <option value="Swaziland">Swaziland</option>
                                                                        <option value="Switzerland">Switzerland</option>
                                                                        <option value="Syria">Syria</option>
                                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                        <option value="Tanzania">Tanzania</option>
                                                                        <option value="Thailand">Thailand</option>
                                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                                        <option value="Togo">Togo</option>
                                                                        <option value="Tonga">Tonga</option>
                                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                                        <option value="Tunisia">Tunisia</option>
                                                                        <option value="Turkey">Turkey</option>
                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                        <option value="Uganda">Uganda</option>
                                                                        <option value="Ukraine">Ukraine</option>
                                                                        <option value="UAE">United Arab Emirates</option>
                                                                        <option value="Uruguay">Uruguay</option>
                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                        <option value="Venezuela">Venezuela</option>
                                                                        <option value="Vietnam">Vietnam</option>
                                                                        <option value="Yemen">Yemen</option>
                                                                        <option value="Zambia">Zambia</option>
                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                    </select>
                                                              
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex px-0">
                  <div className="col-lg-6"> </div>
                  <div className="col-lg-6">
                    <div className="col-lg-6 d-flex">
                      <div className="me-4">Subtotal</div>
                      <div>$100</div>
                    </div>
                    <div className="col-lg-6 d-flex">
                      <div className="me-4">Discount</div>
                      <div>$10</div>
                    </div>
                    <div className="col-lg-6 d-flex">
                      <div className="me-5">Tax</div>
                      <div className="ms-3">0%</div>
                    </div>
                    <hr />
                    <div className="col-lg-6 d-flex">
                      <div className="me-4">Total</div>
                      <div>$90</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-1  col-lg-12">
                <div className="col-lg-2  me-2">
                  <p className="mt-1 inv-txt mb-0">Notes</p>
                </div>
                <div className="col-lg-12 inv-left-inp6">
                  <input
                  value = {invoice.notes} name = "notes" onChange = {handleChange}
                    type="text"
                    placeholder="note: for example, thank you for doing business with us"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  ms-3">
            <div className="inv-bg1">
                <div className="col-lg-12 inv-right-text">
                  <p> Currency </p>
                </div>
                <div className="dropdown selectable-dropdown invoice-select">
                                                        <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={invoice.currency_img} className="flag-width" alt="flag" /> <span className="selectable-text">{invoice.currency}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                                        <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-us.svg" data-value="USD - US Dollar" href="javascript:void(0);"><img src="assetss/img/flag-us.svg" className="flag-width" alt="flag" /> USD - US Dollar</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-gbp.svg" data-value="GBP - British Pound" href="javascript:void(0);"><img src="assetss/img/flag-gbp.svg" className="flag-width" alt="flag" /> GBP - British Pound</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-idr.svg" data-value="IDR - Indonesian Rupiah" href="javascript:void(0);"><img src="assetss/img/flag-idr.svg" className="flag-width" alt="flag" /> IDR - Indonesian Rupiah</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-inr.svg" data-value="INR - Indian Rupee" href="javascript:void(0);"><img src="assetss/img/flag-inr.svg" className="flag-width" alt="flag" /> INR - Indian Rupee</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-brl.svg" data-value="BRL - Brazilian Real" href="javascript:void(0);"><img src="assetss/img/flag-brl.svg" className="flag-width" alt="flag" /> BRL - Brazilian Real</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-de.svg" data-value="EUR - Germany (Euro)" href="javascript:void(0);"><img src="assetss/img/flag-de.svg" className="flag-width" alt="flag" /> EUR - Germany (Euro)</a>
                                                            <a onClick = {changeCurrency} className="dropdown-item" data-img-value="assetss/img/flag-try.svg" data-value="TRY - Turkish Lira" href="javascript:void(0);"><img src="assetss/img/flag-try.svg" className="flag-width" alt="flag" /> TRY - Turkish Lira</a>
                                                        </div>
                                                    </div>
                <hr className="mt-0" />
                
                <div className="col-lg-12 inv-right-text">
                  <p> Tax </p>
                </div>
                <div className="d-flex">
                  <div className="col-lg-6">
                    
                  <label htmlFor="type">Type</label>
                   <div className="dropdown selectable-dropdown invoice-tax-select">
                   <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">{invoice.tax.type}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                   <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                   <a onClick = {(e) =>changeDropdown(e, "tax")} className="dropdown-item" data-value="Deducted" href="javascript:void(0);">Deducted</a>
                   <a onClick = {(e) =>changeDropdown(e, "tax")} className="dropdown-item" data-value="Per Item" href="javascript:void(0);">Per Item</a>
                   <a onClick = {(e) =>changeDropdown(e, "tax")} className="dropdown-item" data-value="On Total" href="javascript:void(0);">On Total</a>
                   <a onClick = {(e) =>changeDropdown(e, "tax")} className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                    </div>
                    </div>


                  </div>
                  <div className="col-lg-6">
                  <div className="form-group mb-0 tax-rate-deducted" style={{ display: tax_type === "None"?"none":"block" }}>
                    <label htmlFor="rate">Rate(%)</label>
                    <input  value = {invoice.tax.rate} onChange = {(e)=>handleChange(e, "tax")} type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={10} />
                  </div>
                    
                  </div>
                </div>
                <hr className="mt-0" />
                
                <div className="col-lg-12 inv-right-text">
                  <p> Discount </p>
                </div>
                <div className="d-flex">
                  <div className="col-lg-8">
                  <label htmlFor="type">Type</label>
                   <div className="dropdown selectable-dropdown invoice-discount-select">
                    <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">{invoice.discount.type}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                     <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                     <a onClick = {(e) =>changeDropdown(e, "discount")}  className="dropdown-item" data-value="Percent" href="javascript:void(0);">Percent</a>
                     <a onClick = {(e) =>changeDropdown(e, "discount")} className="dropdown-item" data-value="Flat Amount" href="javascript:void(0);">Flat Amount</a>
                      <a onClick = {(e) =>changeDropdown(e, "discount")}  className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                    </div>
                  </div>

                  </div>
                  <div className="col-lg-4">
                    <div className="form-group mb-0 discount-amount" style={{ display:  discount_type === "None"?"none":"block" }}>
                        <label htmlFor="rate">{discount_type === "Percent"?"Percent": "Amount"}</label>
                       <input  value = {invoice.discount.rate} onChange = {(e)=>handleChange(e, "discount")} type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={25} />
                   </div>
                  </div>
                </div>
                <hr className="mt-0" />
                
            </div>
            <div className="inv-bg1 py-3 mt-5">
              <div className="col-lg-10 my-3 btn-send">
              <button className="btn btn-primary">Send Invoice</button>

              </div>
              <div className=" col-lg-10 mb-3 btn-send">
              <button className="btn btn-success">Preview </button>

              </div>
              <div className="col-lg-10 mb-3 btn-send">
              <button onClick={saveInvoice} className="btn btn-secondary">save </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceAdd;
