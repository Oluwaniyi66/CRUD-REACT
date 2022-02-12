import React from 'react';

function Setting() {

  const profile = JSON.parse(localStorage.getItem("ropousers"))
  console.log('profile', profile);



  return <div>
      <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
  <title>CORK Admin Template - User Profile</title>
  <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
  <link href="assets/css/loader.css" rel="stylesheet" type="text/css" />
  {/* BEGIN GLOBAL MANDATORY STYLES */}
  <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet" />
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
  {/* END GLOBAL MANDATORY STYLES */}
  {/*  BEGIN CUSTOM STYLE FILE  */}
  <link href="assets/css/users/user-profile.css" rel="stylesheet" type="text/css" />
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
                      <li className="active">
                        <a href="user_profile.html"> Profile </a>
                      </li>
                      <li>
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
                    <a target="_blank" href="../../documentation/index.html"> Documentation </a>
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
                        <img src="assets/img/profile-15.jpeg" alt="admin-profile" />
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
                        <img src="assets/img/profile-3.jpeg" alt="admin-profile" />
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
              <img src="assets/img/profile-7.jpeg" className="img-fluid" alt="admin-profile" />
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
              <h3>User Profile</h3>
            </div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="javascript:void(0);">More</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">User Profile</a></li>
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
        <div className="row layout-spacing">
          {/* Content */}
          <div className="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
            <div className="user-profile layout-spacing">
              <div className="widget-content widget-content-area">
                <div className="d-flex justify-content-between">
                  <h3 className>Info</h3>
                  <a href="user_account_setting.html" className="mt-2 edit-profile"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></a>
                </div>
                <div className="text-center user-info">
                  <img src="assets/img/profile-3.jpeg" alt="avatar" />
                  <p className>{profile.fname}</p>
                </div>
                <div className="user-info-list">
                  <div className>
                    <ul className="contacts-block list-unstyled">
                      <li className="contacts-block__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1={6} y1={1} x2={6} y2={4} /><line x1={10} y1={1} x2={10} y2={4} /><line x1={14} y1={1} x2={14} y2={4} /></svg> {profile.profession}
                      </li>
                      <li className="contacts-block__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>Jan 20, 1989
                      </li>
                      <li className="contacts-block__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>{profile.location}
                      </li>
                      <li className="contacts-block__item">
                        <a href="mailto:example@mail.com"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>{profile.email}</a>
                      </li>
                      <li className="contacts-block__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> {profile.phone}
                      </li>
                      <li className="contacts-block__item">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <div className="social-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="social-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="social-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>                                    
                </div>
              </div>
            </div>
            <div className="education layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3 className>Education</h3>
                {  profile.educations.map((education,i)=> 
                
                {   
                   return(
                    <div className="timeline-alter">
                    <div className="item-timeline">
                      <div className="t-meta-date">
                        <p className>04 Mar 2009</p>
                      </div>
                      <div className="t-dot">
                      </div>
                      <div className="t-text">
                        <p>{education.school}</p>
                        <p>{education.description}</p>
                      </div>
                    </div>
                    <div className="item-timeline">
                      <div className="t-meta-date">
                        <p className>25 Apr 2014</p>
                      </div>
                      <div className="t-dot">
                      </div>
                      <div className="t-text">
                        <p>Massachusetts Institute of Technology (MIT)</p>
                        <p>Designer Illustrator</p>
                      </div>
                    </div>
                    {/* <div className="item-timeline">
                      <div className="t-meta-date">
                        <p className>04 Apr 2018</p>
                      </div>
                      <div className="t-dot">
                      </div>
                      <div className="t-text">
                        <p>School of Art Institute of Chicago (SAIC)</p>
                        <p>Designer Illustrator</p>
                      </div>
                    </div> */}
                  </div>
  

                )
              }
                
                )

                }
               </div>
            </div>
            <div className="work-experience layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3 className>Work Experience</h3>
                {  profile.workexperiences.map((workexperience,i)=> 
                
                {   
                   return(
                   
  
                <div className="timeline-alter">
                  <div className="item-timeline">
                    <div className="t-meta-date">
                      <p className>04 Mar 2009</p>
                    </div>
                    <div className="t-dot">
                    </div>
                    <div className="t-text">
                      <p>{workexperience.companyname}</p>
                      <p>{workexperience.jobtitle}</p>
                    </div>
                  </div>
                  <div className="item-timeline">
                    <div className="t-meta-date">
                      <p className>25 Apr 2014</p>
                    </div>
                    <div className="t-dot">
                    </div>
                    <div className="t-text">
                      <p>Google Inc.</p>
                      <p>Designer Illustrator</p>
                    </div>
                  </div>
                  <div className="item-timeline">
                    <div className="t-meta-date">
                      <p className>04 Apr 2018</p>
                    </div>
                    <div className="t-dot">
                    </div>
                    <div className="t-text">
                      <p>Design Reset Inc.</p>
                      <p>Designer Illustrator</p>
                    </div>
                  </div>
                </div>

                )
              }
                
                )

                }
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">
            <div className="skills layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3 className>Skills</h3>
                <div className="progress br-30">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><div className="progress-title"><span>PHP</span> <span>25%</span> </div></div>
                </div>
                <div className="progress br-30">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><div className="progress-title"><span>Wordpress</span> <span>50%</span> </div></div>
                </div>
                <div className="progress br-30">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><div className="progress-title"><span>Javascript</span> <span>70%</span> </div></div>
                </div>
                <div className="progress br-30">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><div className="progress-title"><span>jQuery</span> <span>60%</span> </div></div>
                </div>
              </div>
            </div>
            <div className="bio layout-spacing ">
              <div className="widget-content widget-content-area">
                <h3 className>Bio</h3>
                <p> {profile.bio}</p>
                <div className="bio-skill-box">
                {  profile.workplatforms.map((workplatform,i)=> 
                
                {   
                   return(
                   
  
              
                  <div className="row">
                    <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">
                      <div className="d-flex b-skills">
                        {/* <div>
                        </div> */}
                        <div className>
                          <h5>{workplatform.platformtitle}</h5>
                          <p>{workplatform.platformdescription}.</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">
                      <div className="d-flex b-skills">
                        {/* <div>
                        </div> */}
                        {/* <div className>
                          <h5>Github Countributer</h5>
                          <p>Ut enim ad minim veniam, quis nostrud exercitation aliquip ex ea commodo consequat.</p>
                        </div>
                      </div> 
                    </div> */}
                    {/* <div className="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-5 ">
                      <div className="d-flex b-skills">
                        <div>
                        </div>
                        <div className>
                          <h5>Photograhpy</h5>
                          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia anim id est laborum.</p>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-0 ">
                      <div className="d-flex b-skills">
                        <div>
                        </div>
                        <div className>
                          <h5>Mobile Apps</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div> */}
                  </div>

                )
              }
                
                )

                }
                </div>
              </div>                                
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-section f-section-1">
          <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
        </div>
        <div className="footer-section f-section-2">
          <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
        </div>
      </div>
    </div>
    {/*  END CONTENT AREA  */}
  </div>
</div>

  </div>;
}

export default Setting;
