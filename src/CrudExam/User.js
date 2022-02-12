import React, { useEffect, useState } from 'react';

function User() {
  const [users, setusers] = useState(
    localStorage.getItem("ropousers")
      ? JSON.parse(localStorage.getItem("ropousers"))
      : []
  );

 

 
  

    const [user, setUser] = useState(
            {
            'picture': '',
            'fname': '',
            'dob': '',
            'profession': '',
            'bio': '',
            'workplatforms': [
                {
                    'platformtitle':'',
                    'platformdescription':'',
                }
            ],
            'country': '',
            'address': '',
            'location': '',
            'phone': '',
            'email': '',
            'website': '',
            'linkedIn': '',
            'twitter': '',
            'facebook': '',
            'github': '',
            'skills': [
                {
                    'title':'',
                    
                }
            ],
            'educations': [
                {
                    'school':'',
                    'date':'',
                    'description':'',
                }
            ],
            'workexperiences': [
                {
                    'companyname':'',
                    'jobtitle':'',
                    'joblocation':'',
                    'jobstart':'',
                    'jobend':'',
                    'jobdescription':'',
                    'date':'',
                }
            ],



           
           
           
            }


    );

  const   handleChange = ((e)=> {

    setUser({ ...user, [e.target.name]: e.target.value });
    console.log( user)

    })

    const addEducation = (e) => 
    {
        setUser ({
            ...user, 
            educations: [
                ...user.educations,
                {
                    'school':'',
                    'date':'',
                    'description':'',
                }
            ]
        })
        e.preventDefault()

    }
    const addWorkexperiences = (e) => 
    {
        setUser ({
            ...user, 
            workexperiences: [
                ...user.workexperiences,
                {
                    'companyname':'',
                    'jobtitle':'',
                    'description':'',
                    'date':'',
                }
            ]
        })
        e.preventDefault()

    }
    const addWorkplatforms = (e) => 
    {
        setUser ({
            ...user, 
            workplatforms: [
                ...user.workplatforms,
                {
                    
                  'platformtitle':'',
                  'platformdescription':'',
                }
            ]
        })
        e.preventDefault()

    }

    const changeEducation = (e, index) => {
        
            let allEdu = {...user};
            let updateEdu ={ ...allEdu.educations[index],[e.target.name] : e.target.value}
            
                allEdu.educations.splice(index, 1, updateEdu);
                setUser(allEdu);
            }
    const changeWorkexperience = (e, index) => {
        
            let allWorkexperience = {...user};
let updateWork ={ ...allWorkexperience.workexperiences[index],[e.target.name] : e.target.value}

                allWorkexperience.workexperiences.splice(index, 1, updateWork);
                setUser(allWorkexperience);
            }
    const changeWorkplatform = (e, index) => {
        
            let allworkplatforms = {...user};
let updateSkill ={ ...allworkplatforms.workplatforms[index],[e.target.name] : e.target.value}

                allworkplatforms.workplatforms.splice(index, 1, updateSkill);
                setUser(allworkplatforms);
            }


        // const newArr = user.educations
        // const education = newArr[index]
        
        // 
        //     education[e.target.name] = e.target.value

        // 
        // newArr.splice(index, 1, education)
        // setUser({ ...user, ["educations"]: newArr })
  
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('my new users',users);
      
          // setusers([...users, user]);
      
          // const updatedUsers = [...users, user];
          localStorage.setItem("ropousers", JSON.stringify(user));
          
       
        };

 const profile = JSON.parse(localStorage.getItem("ropousers"))
 console.log('my return user',profile);

useEffect(() => {
 setUser(profile)
  
}, []);

    
  return <div>
      <div>
  {/* Mirrored from designreset.com/cork/ltr/demo11/user_account_setting.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Jan 2022 00:27:49 GMT */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
  <title>CORK Admin Template - User Account Settings</title>
  <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
  <link href="assets/css/loader.css" rel="stylesheet" type="text/css" />
  {/* BEGIN GLOBAL MANDATORY STYLES */}
  <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet" />
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
  {/* END GLOBAL MANDATORY STYLES */}
  {/*  BEGIN CUSTOM STYLE FILE  */}
  <link rel="stylesheet" type="text/css" href="plugins/dropify/dropify.min.css" />
  <link href="assets/css/users/account-setting.css" rel="stylesheet" type="text/css" />
  {/*  END CUSTOM STYLE FILE  */}
  {/* BEGIN LOADER */}
  <div id="load_screen"> <div className="loader"> <div className="loader-content">
        <div className="spinner-grow align-self-center" />
      </div></div></div>
  {/*  END LOADER */}
  {/*  BEGIN NAVBAR  */}
  <div className="header-container">
    <header className="header navbar navbar-expand-sm">
      <a href="javascript:void(0);" className="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></a>
      <div className="nav-logo align-self-center">
        <a className="navbar-brand" href="index.html"><img alt="logo" src="assets/img/logo2.svg" /> <span className="navbar-brand-name">CORK</span></a>
      </div>
      <ul className="navbar-item topbar-navigation">
        {/*  BEGIN TOPBAR  */}
        <div className="topbar-nav header navbar" role="banner">
          <nav id="topbar">
            <ul className="navbar-nav theme-brand flex-row  text-center">
              <li className="nav-item theme-logo">
                <a href="index.html">
                  <img src="assets/img/logo2.svg" className="navbar-logo" alt="logo" />
                </a>
              </li>
              <li className="nav-item theme-text">
                <a href="index.html" className="nav-link"> CORK </a>
              </li>
            </ul>
            <ul className="list-unstyled menu-categories" id="topAccordion">
              <li className="menu single-menu">
                <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle autodroprown">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <span>Dashboard</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="dashboard" data-parent="#topAccordion">
                  <li>
                    <a href="index.html"> Sales </a>
                  </li>
                  <li>
                    <a href="index2.html"> Analytics </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#app" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu"><rect x={4} y={4} width={16} height={16} rx={2} ry={2} /><rect x={9} y={9} width={6} height={6} /><line x1={9} y1={1} x2={9} y2={4} /><line x1={15} y1={1} x2={15} y2={4} /><line x1={9} y1={20} x2={9} y2={23} /><line x1={15} y1={20} x2={15} y2={23} /><line x1={20} y1={9} x2={23} y2={9} /><line x1={20} y1={14} x2={23} y2={14} /><line x1={1} y1={9} x2={4} y2={9} /><line x1={1} y1={14} x2={4} y2={14} /></svg>
                    <span>Apps</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="app" data-parent="#topAccordion">
                  <li>
                    <a href="apps_chat.html"> Chat </a>
                  </li>
                  <li>
                    <a href="apps_mailbox.html"> Mailbox </a>
                  </li>
                  <li>
                    <a href="apps_todoList.html"> Todo List </a>
                  </li>
                  <li>
                    <a href="apps_notes.html">Notes</a>
                  </li>
                  <li>
                    <a href="apps_scrumboard.html">Task Board</a>
                  </li>
                  <li>
                    <a href="apps_contacts.html">Contacts</a>
                  </li>
                  <li className="sub-sub-submenu-list">
                    <a href="#appInvoice" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Invoice <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="appInvoice" data-parent="#appInvoice">
                      <li>
                        <a href="apps_invoice-list.html"> List </a>
                      </li>
                      <li>
                        <a href="apps_invoice-preview.html"> Preview </a>
                      </li>
                      <li>
                        <a href="apps_invoice-add.html"> Add </a>
                      </li>
                      <li>
                        <a href="apps_invoice-edit.html"> Edit </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="apps_calendar.html"> Calendar</a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                    <span>Components</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="components" data-parent="#topAccordion">
                  <li className="sub-sub-submenu-list">
                    <a href="#uiKit" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> UI Kit <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="uiKit" data-parent="#components">
                      <li>
                        <a href="ui_alerts.html"> Alerts </a>
                      </li>
                      <li>
                        <a href="ui_avatar.html"> Avatar </a>
                      </li>
                      <li>
                        <a href="ui_badges.html"> Badges </a>
                      </li>
                      <li>
                        <a href="ui_breadcrumbs.html"> Breadcrumbs </a>
                      </li>                            
                      <li>
                        <a href="ui_buttons.html"> Buttons </a>
                      </li>
                      <li>
                        <a href="ui_buttons_group.html"> Button Groups </a>
                      </li>
                      <li>
                        <a href="ui_color_library.html"> Color Library </a>
                      </li>
                      <li>
                        <a href="ui_dropdown.html"> Dropdown </a>
                      </li>
                      <li>
                        <a href="ui_infobox.html"> Infobox </a>
                      </li>
                      <li>
                        <a href="ui_jumbotron.html"> Jumbotron </a>
                      </li>
                      <li>
                        <a href="ui_loader.html"> Loader </a>
                      </li>
                      <li>
                        <a href="ui_pagination.html"> Pagination </a>
                      </li>
                      <li>
                        <a href="ui_popovers.html"> Popovers </a>
                      </li>
                      <li>
                        <a href="ui_progress_bar.html"> Progress Bar </a>
                      </li>
                      <li>
                        <a href="ui_search.html"> Search </a>
                      </li>
                      <li>
                        <a href="ui_tooltips.html"> Tooltips </a>
                      </li>
                      <li>
                        <a href="ui_treeview.html"> Treeview </a>
                      </li>
                      <li>
                        <a href="ui_typography.html"> Typography </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="component_tabs.html"> Tabs </a>
                  </li>
                  <li>
                    <a href="component_accordion.html"> Accordions</a>
                  </li>
                  <li>
                    <a href="component_modal.html"> Modals </a>
                  </li>                            
                  <li>
                    <a href="component_cards.html"> Cards </a>
                  </li>
                  <li>
                    <a href="component_bootstrap_carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="component_blockui.html"> Block UI </a>
                  </li>
                  <li>
                    <a href="component_countdown.html"> Countdown </a>
                  </li>
                  <li>
                    <a href="component_counter.html"> Counter </a>
                  </li>
                  <li>
                    <a href="component_sweetalert.html"> Sweet Alerts </a>
                  </li>
                  <li>
                    <a href="component_timeline.html"> Timeline </a>
                  </li>
                  <li>
                    <a href="component_snackbar.html"> Notifications </a>
                  </li>
                  <li>
                    <a href="component_session_timeout.html"> Session Timeout </a>
                  </li>
                  <li>
                    <a href="component_media_object.html"> Media Object </a>
                  </li>
                  <li>
                    <a href="component_list_group.html"> List Group </a>
                  </li>
                  <li>
                    <a href="component_pricing_table.html"> Pricing Tables </a>
                  </li>
                  <li>
                    <a href="component_lightbox.html"> Lightbox </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><line x1={3} y1={9} x2={21} y2={9} /><line x1={9} y1={21} x2={9} y2={9} /></svg>
                    <span>Tables</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="tables" data-parent="#topAccordion">
                  <li>
                    <a href="table_basic.html"> Basic </a>
                  </li>
                  <li className="sub-sub-submenu-list">
                    <a href="#datatable" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> DataTables <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="datatable" data-parent="#datatable">
                      <li>
                        <a href="table_dt_basic.html"> Basic </a>
                      </li>
                      <li>
                        <a href="table_dt_striped_table.html"> Striped Table </a>
                      </li>
                      <li>
                        <a href="table_dt_ordering_sorting.html"> Order Sorting </a>
                      </li>
                      <li>
                        <a href="table_dt_multi-column_ordering.html"> Multi-Column </a>
                      </li>
                      <li>
                        <a href="table_dt_multiple_tables.html"> Multiple Tables</a>
                      </li>
                      <li>
                        <a href="table_dt_alternative_pagination.html"> Alt. Pagination</a>
                      </li>
                      <li>
                        <a href="table_dt_custom.html"> Custom </a>
                      </li>
                      <li>
                        <a href="table_dt_range_search.html"> Range Search </a>
                      </li>
                      <li>
                        <a href="table_dt_html5.html"> HTML5 Export </a>
                      </li>
                      <li>
                        <a href="table_dt_live_dom_ordering.html"> Live DOM ordering </a>
                      </li>
                      <li>
                        <a href="table_dt_miscellaneous.html"> Miscellaneous </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg>
                    <span>Forms</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="forms" data-parent="#topAccordion">
                  <li>
                    <a href="form_bootstrap_basic.html"> Basic </a>
                  </li>
                  <li>
                    <a href="form_input_group_basic.html"> Input Group </a>
                  </li>
                  <li>
                    <a href="form_layouts.html"> Layouts </a>
                  </li>
                  <li>
                    <a href="form_validation.html"> Validation </a>
                  </li>
                  <li>
                    <a href="form_input_mask.html"> Input Mask </a>
                  </li>
                  <li>
                    <a href="form_bootstrap_select.html"> Bootstrap Select </a>
                  </li>
                  <li>
                    <a href="form_select2.html"> Select2 </a>
                  </li>
                  <li>
                    <a href="form_bootstrap_touchspin.html"> TouchSpin </a>
                  </li>
                  <li>
                    <a href="form_maxlength.html"> Maxlength </a>
                  </li>
                  <li>
                    <a href="form_checkbox_radio.html"> Checkbox &amp; Radio </a>
                  </li>
                  <li>
                    <a href="form_switches.html"> Switches </a>
                  </li>
                  <li>
                    <a href="form_wizard.html"> Wizards </a>
                  </li>
                  <li>
                    <a href="form_fileupload.html"> File Upload </a>
                  </li>
                  <li>
                    <a href="form_quill.html"> Quill Editor </a>
                  </li>
                  <li>
                    <a href="form_markdown.html"> Markdown Editor </a>
                  </li>
                  <li>
                    <a href="form_date_range_picker.html"> Date &amp; Range Picker </a>
                  </li>
                  <li>
                    <a href="form_clipboard.html"> Clipboard </a>
                  </li>
                  <li>
                    <a href="form_typeahead.html"> Typeahead </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu menu-extras active">
                <a href="#more" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                  <div className>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg> <span className="d-xl-none">More</span></span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="more" data-parent="#topAccordion">
                  <li className="sub-sub-submenu-list active">
                    <a href="#page" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle"> Pages <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="page" data-parent="#more">
                      <li>
                        <a href="pages_helpdesk.html"> Helpdesk </a>
                      </li>
                      <li>
                        <a href="pages_contact_us.html"> Contact Form </a>
                      </li>
                      <li>
                        <a href="pages_faq.html"> FAQ </a>
                      </li>
                      <li>
                        <a href="pages_faq2.html"> FAQ 2 </a>
                      </li>
                      <li>
                        <a href="pages_privacy.html"> Privacy Policy </a>
                      </li>
                      <li>
                        <a href="pages_coming_soon.html" target="_blank"> Coming Soon </a>
                      </li>
                      <li>
                        <a href="user_profile.html"> Profile </a>
                      </li>
                      <li className="active">
                        <a href="user_account_setting.html"> Account Settings </a>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#pages-error" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Error <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="pages-error" data-parent="#page"> 
                          <li>
                            <a href="pages_error404.html" target="_blank"> 404 </a>
                          </li>
                          <li>
                            <a href="pages_error500.html" target="_blank"> 500 </a>
                          </li>
                          <li>
                            <a href="pages_error503.html" target="_blank"> 503 </a>
                          </li>
                          <li>
                            <a href="pages_maintenence.html" target="_blank"> Maintanence </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-login" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Login <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-login" data-parent="#page"> 
                          <li>
                            <a href="auth_login.html" target="_blank"> Login </a>
                          </li>
                          <li>
                            <a href="auth_login_boxed.html" target="_blank"> Login Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-register" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Register <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-register" data-parent="#page"> 
                          <li>
                            <a target="_blank" href="auth_register.html"> Register </a>
                          </li>
                          <li>
                            <a target="_blank" href="auth_register_boxed.html"> Register Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-passRecovery" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Password Recovery <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-passRecovery" data-parent="#page"> 
                          <li>
                            <a target="_blank" href="auth_pass_recovery.html"> Recover ID </a>
                          </li>
                          <li>
                            <a target="_blank" href="auth_pass_recovery_boxed.html"> Recover ID Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-lockscreen" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Lockscreen <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-lockscreen" data-parent="#page"> 
                          <li>
                            <a href="auth_lockscreen.html" target="_blank"> Unlock </a>
                          </li>
                          <li>
                            <a href="auth_lockscreen_boxed.html" target="_blank"> Unlock Boxed </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="dragndrop_dragula.html"> Drag and Drop</a>
                  </li>
                  <li>
                    <a href="widgets.html"> Widgets </a>
                  </li>
                  <li>
                    <a href="map_jvector.html"> Vector Maps</a>
                  </li>
                  <li>
                    <a href="charts_apex.html"> Charts </a>
                  </li>
                  <li>
                    <a href="fonticons.html"> Font Icons </a>
                  </li>
                  <li className="sub-sub-submenu-list">
                    <a href="#starter-kit" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Starter Kit <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="starter-kit" data-parent="#more">
                      <li>
                        <a href="starter_kit_blank_page.html"> Blank Page </a>
                      </li>
                      <li>
                        <a href="starter_kit_boxed.html"> Boxed </a>
                      </li>
                      <li>
                        <a href="starter_kit_breadcrumb.html"> Breadcrumb </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a target="_blank" href="https://designreset.com/cork/documentation/index.html"> Documentation </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/*  END TOPBAR  */}
      </ul>
      <ul className="navbar-item flex-row ml-auto">
        <li className="nav-item align-self-center search-animated">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
          <form className="form-inline search-full form-inline search" role="search">
            <div className="search-bar">
              <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
            </div>
          </form>
        </li>
      </ul>
      <ul className="navbar-item flex-row nav-dropdowns">
        <li className="nav-item dropdown language-dropdown more-dropdown">
          <div className="dropdown custom-dropdown-icon">
            <a className="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/ca.png" className="flag-width" alt="flag" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">
              <div className="search-dropdown">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <a className="dropdown-item" data-img-value="de" data-value="de" href="javascript:void(0);"><img src="assets/img/de.png" className="flag-width" alt="flag" /> German</a>
              <a className="dropdown-item" data-img-value="jp" data-value="jp" href="javascript:void(0);"><img src="assets/img/jp.png" className="flag-width" alt="flag" /> Japanese</a>
              <a className="dropdown-item" data-img-value="fr" data-value="fr" href="javascript:void(0);"><img src="assets/img/fr.png" className="flag-width" alt="flag" /> French</a>
              <a className="dropdown-item" data-img-value="ca" data-value="en" href="javascript:void(0);"><img src="assets/img/ca.png" className="flag-width" alt="flag" /> English</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown message-dropdown">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg><span className="badge badge-success" />
          </a>
          <div className="dropdown-menu p-0 position-absolute" aria-labelledby="messageDropdown">
            <div className="dropdown-menu-title">
              <h5>Messages</h5>
            </div>
            <div className>
              <a className="dropdown-item unseen-msg">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        {/* <span class="avatar-title rounded-circle">KY</span> */}
                        <img src="assets/img/profile-15.jpg" alt="admin-profile" />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Kara Young</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        <span className="avatar-title rounded-circle">DA</span>
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Daisy Anderson</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>                                    
                </div>
              </a>
              <a className="dropdown-item unseen-msg">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        {/* <span class="avatar-title rounded-circle">OG</span> */}
                        <img src="assets/img/profile-3.jpg" alt="admin-profile" />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Oscar Garner</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown notification-dropdown">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className="badge badge-success" />
          </a>
          <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
            <div className="notification-scroll">
              <div className="dropdown-item">
                <div className="media server-log">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x={2} y={2} width={20} height={8} rx={2} ry={2} /><rect x={2} y={14} width={20} height={8} rx={2} ry={2} /><line x1={6} y1={6} x2={6} y2={6} /><line x1={6} y1={18} x2={6} y2={18} /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Server Rebooted</h6>
                      <p className>45 min ago</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="media ">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Licence Expiring Soon</h6>
                      <p className>8 hrs ago</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="media file-upload">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Kelly Portfolio.pdf</h6>
                      <p className>670 kb</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="media">
              <img src="assets/img/profile-7.jpg" className="img-fluid" alt="admin-profile" />
            </div>
          </a>
          <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
            <div className="user-profile-section">
              <div className="media mx-auto">
                <div className="media-body">
                  <h5>Shaun Park</h5>
                  <p>Project Leader</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <a href="user_profile.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Profile</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="apps_mailbox.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> <span>Inbox</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="auth_lockscreen.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> <span>Lock Screen</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="auth_login.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg> <span>Log Out</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
  {/*  END NAVBAR  */}
  {/*  BEGIN MAIN CONTAINER  */}
  <div className="main-container" id="container">
    <div className="overlay" />
    <div className="search-overlay" />
    {/*  BEGIN CONTENT AREA  */}
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        <div className="page-header">
          <nav className="breadcrumb-one" aria-label="breadcrumb">
            <div className="title">
              <h3>Account Settings</h3>
            </div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="javascript:void(0);">More</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Account Settings</a></li>
            </ol>
          </nav>
          <div className="toggle-switch">
            <label className="switch s-icons s-outline  s-outline-secondary">
              <input type="checkbox" defaultChecked className="theme-shifter" />
              <span className="slider round">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              </span>
            </label>
          </div>
        </div>
        <div className="account-settings-container layout-top-spacing">
          <div className="account-content">
            <div className="scrollspy-example" data-spy="scroll" data-target="#account-settings-scroll" data-offset={-100}>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="general-info" className="section general-info">
                    <div className="info">
                      <h6 className>General Information</h6>
                      <div className="row">
                        <div className="col-lg-11 mx-auto">
                          <div className="row">
                            <div className="col-xl-2 col-lg-12 col-md-4">
                              <div className="upload mt-4 pr-md-4">
                                <input name='picture' onChange={handleChange} type="file" id="input-file-max-fs" className="dropify" data-default-file="assets/img/user-profile.jpeg" data-max-file-size="2M" />
                                <p className="mt-2"><i className="flaticon-cloud-upload mr-1" /> Upload Picture</p>
                              </div>
                            </div>
                            <div className="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                              <div className="form">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <label htmlFor="fullName">Full Name</label>
                                      <input value={user.fname}  name='fname' onChange={handleChange} type="text" className="form-control mb-4" id="fullName" placeholder="Full Name" defaultValue="Jimmy Turner" />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <label className="dob-input">Date of Birth</label>
                                    <div className="d-sm-flex d-block">
                                      <div className="form-group mr-1">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                          <option>Day</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option selected>20</option>
                                          <option>21</option>
                                          <option>22</option>
                                          <option>23</option>
                                          <option>24</option>
                                          <option>25</option>
                                          <option>26</option>
                                          <option>27</option>
                                          <option>28</option>
                                          <option>29</option>
                                          <option>30</option>
                                        </select>
                                      </div>
                                      <div className="form-group mr-1">
                                        <select className="form-control" id="month">
                                          <option>Month</option>
                                          <option selected>Jan</option>
                                          <option>Feb</option>
                                          <option>Mar</option>
                                          <option>Apr</option>
                                          <option>May</option>
                                          <option>Jun</option>
                                          <option>Jul</option>
                                          <option>Aug</option>
                                          <option>Sep</option>
                                          <option>Oct</option>
                                          <option>Nov</option>
                                          <option>Dec</option>
                                        </select>
                                      </div>
                                      <div className="form-group mr-1">
                                        <select className="form-control" id="year">
                                          <option>Year</option>
                                          <option>2018</option>
                                          <option>2017</option>
                                          <option>2016</option>
                                          <option>2015</option>
                                          <option>2014</option>
                                          <option>2013</option>
                                          <option>2012</option>
                                          <option>2011</option>
                                          <option>2010</option>
                                          <option>2009</option>
                                          <option>2008</option>
                                          <option>2007</option>
                                          <option>2006</option>
                                          <option>2005</option>
                                          <option>2004</option>
                                          <option>2003</option>
                                          <option>2002</option>
                                          <option>2001</option>
                                          <option>2000</option>
                                          <option>1999</option>
                                          <option>1998</option>
                                          <option>1997</option>
                                          <option>1996</option>
                                          <option>1995</option>
                                          <option>1994</option>
                                          <option>1993</option>
                                          <option>1992</option>
                                          <option>1991</option>
                                          <option>1990</option>
                                          <option selected>1989</option>
                                          <option>1988</option>
                                          <option>1987</option>
                                          <option>1986</option>
                                          <option>1985</option>
                                          <option>1984</option>
                                          <option>1983</option>
                                          <option>1982</option>
                                          <option>1981</option>
                                          <option>1980</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="profession">Profession</label>
                                  <input value={user.profession} name='profession' onChange={handleChange} type="text" className="form-control mb-4" id="profession" placeholder="Designer" defaultValue="Web Developer" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="about" className="section about">
                    <div className="info">
                      <h5 className>About</h5>
                      <div className="row">
                        <div className="col-md-11 mx-auto">
                          <div className="form-group">
                            <label htmlFor="aboutBio">Bio</label>
                            <textarea value={user.bio} name='bio' onChange={handleChange} className="form-control" id="aboutBio" placeholder="Tell something interesting about yourself" rows={10} defaultValue={"I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.\n\nMy job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies."} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="work-platforms" className="section work-platforms">
                    <div className="info">
                      <h5 className>Work Platforms</h5>

                      {
                          user.workplatforms.map((workplatform,i)=>{
                                return (
                      <div className="row">
                        <div className="col-md-12 text-right mb-5">
                          <button onClick={addWorkplatforms} id="add-work-platforms" className="btn btn-secondary">Add</button>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="platform-div">
                            <div className="form-group">
                              <label htmlFor="platform-title">Platforms Title</label>
                              <input  value={workplatform.platformtitle} name='platformtitle' onChange={(e)=> changeWorkplatform(e,i)} type="text" className="form-control mb-4" id="platform-title" placeholder="Platforms Title" defaultValue="Web Design" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="platform-description">Description</label>
                              <textarea value={workplatform.platformdescription} name='platformdescription' onChange={(e)=> changeWorkplatform(e,i)} className="form-control mb-4" id="platform-description" placeholder="Platforms Description" rows={10} defaultValue={"Duis aute irure dolor in reprehenderit in voluptate velit esse eu fugiat nulla pariatur."} />
                            </div>
                          </div>
                        </div>
                      </div>
                                )}
                          )

                                }
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="contact" className="section contact">
                    <div className="info">
                      <h5 className>Contact</h5>
                      <div className="row">
                        <div className="col-md-11 mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select className="form-control" id="country">
                                  <option>All Countries</option>
                                  <option selected>United States</option>
                                  <option>India</option>
                                  <option>Japan</option>
                                  <option>China</option>
                                  <option>Brazil</option>
                                  <option>Norway</option>
                                  <option>Canada</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input value={user.address}  name='address' onChange={handleChange} type="text" className="form-control mb-4" id="address" placeholder="Address" defaultValue="New York" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input value={user.location} name='location' name='location' onChange={handleChange} type="text" className="form-control mb-4" id="location" placeholder="Location" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input value={user.phone} name='phone' onChange={handleChange} type="text" className="form-control mb-4" id="phone" placeholder="Write your phone number here" defaultValue="+1 (530) 555-12121" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={user.email} name='email' onChange={handleChange} type="text" className="form-control mb-4" id="email" placeholder="Write your email here" defaultValue="Jimmy@gmail.com" />
                              </div>
                            </div>                                    
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="website1">Website</label>
                                <input value={user.website} name='website' onChange={handleChange} type="text" className="form-control mb-4" id="website1" placeholder="Write your website here" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="social" className="section social">
                    <div className="info">
                      <h5 className>Social</h5>
                      <div className="row">
                        <div className="col-md-11 mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-group social-linkedin mb-3">
                                <div className="input-group-prepend mr-3">
                                  <span className="input-group-text" id="linkedin"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></span>
                                </div>
                                <input value={user.linkedIn} name='linkedIn' onChange={handleChange} type="text" className="form-control" placeholder="linkedin Username" aria-label="Username" aria-describedby="linkedin" defaultValue="jimmy_turner" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-group social-tweet mb-3">
                                <div className="input-group-prepend mr-3">
                                  <span className="input-group-text" id="tweet"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></span>
                                </div>
                                <input value={user.twitter} name='twitter' onChange={handleChange} type="text" className="form-control" placeholder="Twitter Username" aria-label="Username" aria-describedby="tweet" defaultValue="@jTurner" />
                              </div>
                            </div>                                                        
                          </div>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-group social-fb mb-3">
                                <div className="input-group-prepend mr-3">
                                  <span className="input-group-text" id="fb"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></span>
                                </div>
                                <input value={user.facebook} name='facebook' onChange={handleChange} type="text" className="form-control" placeholder="Facebook Username" aria-label="Username" aria-describedby="fb" defaultValue="Jimmy Turner" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-group social-github mb-3">
                                <div className="input-group-prepend mr-3">
                                  <span className="input-group-text" id="github"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></span>
                                </div>
                                <input value={user.github} name='github' onChange={handleChange} type="text" className="form-control" placeholder="Github Username" aria-label="Username" aria-describedby="github" defaultValue="@TurnerJimmy" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <div id="skill" className="section skill">
                    <div className="info">
                      <h5 className>Skills</h5>

                      <div className="row progress-bar-section">
                        <div className="col-md-12 mx-auto">
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-11 mx-auto">

                                
                                <div className="input-form">
                                  <input  type="text" className="form-control" id="skills" placeholder="Add Your Skills Here" defaultValue />
                                  <button  id="add-skills" className="btn btn-secondary">Add</button>
                                </div>

                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="custom-progress top-right progress-up" style={{width: '100%'}}>
                            <p className="skill-name">PHP</p>
                            <input type="range" min={0} max={100} className="custom-range progress-range-counter" defaultValue={25} />
                            <div className="range-count"><span className="range-count-number" data-rangecountnumber={25}>25</span> <span className="range-count-unit">%</span></div>
                          </div>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="custom-progress top-right progress-up" style={{width: '100%'}}>
                            <p className="skill-name">Wordpress</p>
                            <input type="range" min={0} max={100} className="custom-range progress-range-counter" defaultValue={50} />
                            <div className="range-count"><span className="range-count-number" data-rangecountnumber={50}>50</span> <span className="range-count-unit">%</span></div>
                          </div>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="custom-progress top-right progress-up" style={{width: '100%'}}>
                            <p className="skill-name">Javascript</p>
                            <input type="range" min={0} max={100} className="custom-range progress-range-counter" defaultValue={70} />
                            <div className="range-count"><span className="range-count-number" data-rangecountnumber={70}>70</span> <span className="range-count-unit">%</span></div>
                          </div>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="custom-progress top-right progress-up" style={{width: '100%'}}>
                            <p className="skill-name">jQuery</p>
                            <input type="range" min={0} max={100} className="custom-range progress-range-counter" defaultValue={60} />
                            <div className="range-count"><span className="range-count-number" data-rangecountnumber={60}>60</span> <span className="range-count-unit">%</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="edu-experience" className="section edu-experience">
                    <div className="info">
                      <h5 className>Education</h5>
                      {
                          user.educations.map((education,i)=>{
                                return (

                      <div className="row">
                        <div className="col-md-12 text-right mb-5">
                          <button id="add-education" onClick={addEducation} className="btn btn-secondary">Add</button>
                        </div>
                        <div className="col-md-11 mx-auto">
                          <div className="edu-section">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="degree1">Enter Your Collage Name</label>
                                  <input value={education.school} name='school' onChange={(e)=> changeEducation(e,i)} type="text" className="form-control mb-4" id="degree1" placeholder="Add your education here" defaultValue="Royal Collage of Art Designer Illustrator" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Starting From</label>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <select className="form-control mb-4" id="s-from1">
                                            <option>Month</option>
                                            <option>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option selected="selected">May</option>
                                            <option>Jun</option>
                                            <option>Jul</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                          </select>
                                        </div>
                                        <div className="col-md-6">
                                          <select className="form-control mb-4" id="s-from2">
                                            <option>Year</option>
                                            <option>2020</option>
                                            <option>2020</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option selected="selected">2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Ending In</label>
                                      <div className="row">
                                        <div className="col-md-6 mb-4">
                                          <select className="form-control" id="end-in1">
                                            <option>Month</option>
                                            <option>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>Jul</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                          </select>
                                        </div>
                                        <div className="col-md-6">
                                          <select className="form-control input-sm" id="end-in2">
                                            <option>Year</option>
                                            <option>2020</option>
                                            <option>2020</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <textarea value={education.description} name='description' onChange={(e)=> changeEducation(e,i)} className="form-control" placeholder="Description" rows={10} defaultValue={""} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                                )

                          })    
                      }
                    </div>
                  </form>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                  <form id="work-experience" className="section work-experience">
                    <div className="info">
                      <h5 className>Work Experience</h5>
                     { user.workexperiences.map((workexperience,i)=>{
                       
                         return (
                          <div className="row">
                          <div className="col-md-12 text-right mb-5">
                            <button onClick={addWorkexperiences} id="add-work-exp" className="btn btn-secondary">Add</button>
                          </div>
                          <div className="col-md-11 mx-auto">
                            <div className="work-section">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="degree2">Company Name</label>
                                    <input 
                                   value={workexperience.companyname} name='companyname' onChange={(e)=> changeWorkexperience(e,i)} type="text" className="form-control mb-4" id="degree2" placeholder="Add your work here" defaultValue="Netfilx Inc." />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label htmlFor="degree3">Job Tilte</label>
                                        <input  value={workexperience.jobtitle} name='jobtitle' onChange={(e)=> changeWorkexperience(e,i)} type="text" className="form-control mb-4" id="degree3" placeholder="Add your work here" defaultValue />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label htmlFor="degree4">Location</label>
                                        <input  value={workexperience.joblocation} name='joblocation' onChange={(e)=> changeWorkexperience(e,i)} type="text" className="form-control mb-4" id="degree4" placeholder="Add your work here" defaultValue />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Starting From</label>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <select className="form-control mb-4" id="wes-from1">
                                              <option>Month</option>
                                              <option>Jan</option>
                                              <option>Feb</option>
                                              <option>Mar</option>
                                              <option>Apr</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>Jul</option>
                                              <option>Aug</option>
                                              <option>Sep</option>
                                              <option>Oct</option>
                                              <option>Nov</option>
                                              <option>Dec</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <select className="form-control mb-4" id="wes-from2">
                                              <option>Year</option>
                                              <option>2020</option>
                                              <option>2020</option>
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                              <option>2000</option>
                                              <option>1999</option>
                                              <option>1998</option>
                                              <option>1997</option>
                                              <option>1996</option>
                                              <option>1995</option>
                                              <option>1994</option>
                                              <option>1993</option>
                                              <option>1992</option>
                                              <option>1991</option>
                                              <option>1990</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label>Ending In</label>
                                        <div className="row">
                                          <div className="col-md-6 mb-4">
                                            <select className="form-control" id="eiend-in1">
                                              <option>Month</option>
                                              <option>Jan</option>
                                              <option>Feb</option>
                                              <option>Mar</option>
                                              <option>Apr</option>
                                              <option>May</option>
                                              <option>Jun</option>
                                              <option>Jul</option>
                                              <option>Aug</option>
                                              <option>Sep</option>
                                              <option>Oct</option>
                                              <option>Nov</option>
                                              <option>Dec</option>
                                            </select>
                                          </div>
                                          <div className="col-md-6">
                                            <select className="form-control input-sm" id="eiend-in2">
                                              <option>Year</option>
                                              <option>2020</option>
                                              <option>2020</option>
                                              <option>2018</option>
                                              <option>2017</option>
                                              <option>2016</option>
                                              <option>2015</option>
                                              <option>2014</option>
                                              <option>2013</option>
                                              <option>2012</option>
                                              <option>2011</option>
                                              <option>2010</option>
                                              <option>2009</option>
                                              <option>2008</option>
                                              <option>2007</option>
                                              <option>2006</option>
                                              <option>2005</option>
                                              <option>2004</option>
                                              <option>2003</option>
                                              <option>2002</option>
                                              <option>2001</option>
                                              <option>2000</option>
                                              <option>1999</option>
                                              <option>1998</option>
                                              <option>1997</option>
                                              <option>1996</option>
                                              <option>1995</option>
                                              <option>1994</option>
                                              <option>1993</option>
                                              <option>1992</option>
                                              <option>1991</option>
                                              <option>1990</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <textarea  value={workexperience.description} name='jobdescription' onChange={(e)=> changeWorkexperience(e,i)} className="form-control" placeholder="Description" rows={10} defaultValue={""} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                         )

                      })}
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="account-settings-footer">
            <div className="as-footer-container">
              <button id="multiple-reset" className="btn btn-primary">Reset All</button>
              <div className="blockui-growl-message">
                <i className="flaticon-double-check" />&nbsp; Settings Saved Successfully
              </div>
              <button onClick={handleSubmit}  id="multiple-messages" className="btn btn-success">Save Changes</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  END CONTENT AREA  */}
  </div>
  {/* END MAIN CONTAINER */}
  {/* BEGIN GLOBAL MANDATORY SCRIPTS */}
  {/* END GLOBAL MANDATORY SCRIPTS */}
  {/*  BEGIN CUSTOM SCRIPTS FILE  */}
  {/*  */}
  {/*  END CUSTOM SCRIPTS FILE  */}
  {/* Mirrored from designreset.com/cork/ltr/demo11/user_account_setting.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Jan 2022 00:27:50 GMT */}
</div>

      
      </div>;
}

export default User;
