import { createGlobalStyle } from "styled-components";
import { palette, font } from "styled-theme";
// import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`


  .ant-btn{
    border-radius: 4px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: #f8f8f8!important;
  }

  .ant-row.ant-form-item {
    margin-bottom: 5px;
  }

  .has-success.has-feedback {
    .ant-select {
      .ant-select-selection {
        .ant-select-selection__rendered {
          .ant-select-selection__placeholder {
            display: none !important;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for project category menu [ScrumBoard]
  /*-----------------------------------------------*/
  .project-category {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 8px 12px;
        color: #000000;
        font-family: 'Roboto';
        font-weight: 400;
      }
    }
  }

  /*-----------------------------------------------*/
  // style for project menu [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-dropdown {
    &.project-menu {
      width: 280px;
      top: 133px !important;

      .ant-dropdown-menu {
        padding: 0;
        overflow: hidden;

        .ant-dropdown-menu-item {
          min-height: 54px;
          line-height: auto;
          display: flex;
          align-items: center;
          padding: 10px 20px;

          &:first-child {
            padding: 0;
            border-bottom: 1px solid #f4f6fd;

            &:hover,
            &:focus {
              background-color: #ffffff;
            }
          }

          &:hover,
          &:focus {
            background-color: #F3F5FD;
          }

          &:last-child {
            background-color: #E6EAF8;
          }
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for popover [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-popover {
    .ant-checkbox-group {
      display: flex;
      flex-direction: column;
      .ant-checkbox-group-item {
        margin: 5px 0;
        span {
          font-size: 14px;
          color: #788195;
          text-transform: capitalize;
        }
      }
    }
  }

  /*-----------------------------------------------*/
  // style for modal [ScrumBoard]
  /*-----------------------------------------------*/
  .ant-modal-wrap {
    .ant-modal {
      .ant-modal-content {
        .ant-modal-body {
          .render-form-wrapper {
            padding: 10px;
            h2 {
              margin: 0;
            }
            form {
              padding: 15px 0 3px;
              .field-container {
                margin-bottom: 26px;
              }
            }
          }
        }
      }
    }
  }


/*-----------------------------------------------*/
  // style form previous GlobalStyles
  /*-----------------------------------------------*/

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: #f8f8f8!important;
}

font-family: ${font("primary", 0)};

h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
img,
svg {
  &::selection {
    background: ${palette("primary", 0)};
    color: #fff;
  }
}

.ant-row:not(.ant-form-item) {
  ${
    "" /* margin-left: -8px;
  margin-right: -8px; */
  };
  &:before,
  &:after {
    display: none;
  }
}

.ant-row > div {
  padding: 0;
}

.isoLeftRightComponent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.isoCenterComponent {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}

.scrollbar-track-y,
.scrollbar-thumb-y {
  width: 5px !important;
}

.scrollbar-track-x,
.scrollbar-thumb-x {
  height: 5px !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
}

.scrollbar-track {
  background: rgba(222, 222, 222, 0.15) !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
  background: rgba(0, 0, 0, 0.5) !important;
}

.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-bottomLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-bottomRight
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-topLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-topRight
  > .ant-popover-content
  > .ant-popover-arrow:after {
  left: 0;
  margin-left: -4px;
}

/* Instagram Modal */

.ant-modal-wrap.instagram-modal .ant-modal {
  max-width: 935px;
  width: 100% !important;
}

@media only screen and (max-width: 991px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    padding: 0 60px;
  }
}

@media only screen and (max-width: 767px) {
  .ant-modal-wrap.instagram-modal .ant-modal {
    max-width: 580px;
  }
}

.ant-modal-wrap.instagram-modal .ant-modal-content {
  border-radius: 0;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close {
  position: fixed;
  color: #fff;
}

.ant-modal-wrap.instagram-modal .ant-modal-content button.ant-modal-close i {
  font-size: 24px;
}

.ant-modal-wrap.instagram-modal .ant-modal-content .ant-modal-body {
  padding: 0;
}

/********** Add Your Global RTL CSS Here **********/

/* Popover */

html[dir='rtl'] .ant-popover {
  text-align: right;
}

/* Ecommerce Card */

html[dir='rtl'] .isoCardInfoForm .ant-input {
  text-align: right;
}

/* Modal */

html[dir='rtl'] .has-success.has-feedback:after,
html[dir='rtl'] .has-warning.has-feedback:after,
html[dir='rtl'] .has-error.has-feedback:after,
html[dir='rtl'] .is-validating.has-feedback:after {
  left: 0;
  right: auto;
}

html[dir='rtl'] .ant-modal-close {
  right: inherit;
  left: 0;
}

html[dir='rtl'] .ant-modal-footer {
  text-align: left;
}

html[dir='rtl'] .ant-modal-footer button + button {
  margin-left: 0;
  margin-right: 8px;
}

html[dir='rtl'] .ant-confirm-body .ant-confirm-content {
  margin-right: 42px;
}

html[dir='rtl'] .ant-btn > .anticon + span,
html[dir='rtl'] .ant-btn > span + .anticon {
  margin-right: 0.5em;
}

html[dir='rtl'] .ant-btn-loading span {
  margin-left: 0;
  margin-right: 0.5em;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {
  padding-left: 25px;
  padding-right: 29px;
}

html[dir='rtl']
  .ant-btn.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)
  .anticon {
  margin-right: -14px;
  margin-left: 0;
}

/* Confirm */

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-body > .anticon {
  margin-left: 16px;
  margin-right: 0;
  float: right;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns {
  float: left;
}

html[dir='rtl'] .ant-modal.ant-confirm .ant-confirm-btns button + button {
  margin-right: 10px;
  margin-left: 0;
}

/* Message */

html[dir='rtl'] .ant-message .anticon {
  margin-left: 8px;
  margin-right: 0;
}

/* Pop Confirm */

html[dir='rtl'] .ant-popover-message-title {
  padding-right: 20px;
  padding-left: 0;
}

html[dir='rtl'] .ant-popover-buttons {
  text-align: left;
}

/* Notification */

html[dir='rtl']
  .ant-notification-notice-closable
  .ant-notification-notice-message {
  padding-left: 24px;
  padding-right: 0;
}

html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-message,
html[dir='rtl']
  .ant-notification-notice-with-icon
  .ant-notification-notice-description {
  margin-right: 48px;
}

html[dir='rtl'] .ant-notification-notice-close {
  right: auto;
  left: 16px;
}

html[dir='rtl'] .ant-notification-notice-with-icon {
  left: 0;
}

/* Dropzone */

html[dir='rtl'] .dz-hidden-input {
  display: none;
}

















html[dir='rtl']  html h1, html h2, html h3, html h4, html h5, html h6, html a, html p, html li, input, textarea, span, div, html, body, html a {
  margin-bottom: 0;
  font-family: 'Cairo', sans-serif;
  font-family: Tahoma, Verdana, Segoe, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
}

html[dir='rtl']   .isomorphicSidebar .isoDashboardMenu .anticon {

  margin-left: 15px;
}
html[dir='rtl']  .isomorphicTopbar.collapsed {
  padding: 0 109px 0 31px;
}
html[dir='rtl']   .isomorphicTopbar {
  padding:0 265px 0 31px;
}
html[dir='rtl'] .themeSwitchBlock h4 {
  margin-right: 0px;
}
html[dir='rtl'] .themeSwitchBlock div{
  margin-right: 0px;

}
html[dir='rtl']  .ant-menu-vertical .ant-menu-item::after {
  border-left: 3px solid #6aaf65;
  position: absolute;
  top: 0;
  right: 5px;
  bottom: 0;
  border-right: 3px solid #1b5b7e;
  -webkit-transform: scaleY(0.0001);
  transform: scaleY(0.0001);
  opacity: 0;
  -webkit-transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  content: '';
}
html[dir='rtl']  .ant-table-wrapper {
  clear: both;
  max-width: 100%;
  text-align-last: center;
}
html[dir='rtl']  .ant-modal-content {
  text-align-last: right;
}
html[dir='rtl']  .ant-drawer .ant-drawer-content {
  text-align-last: right;

}
html[dir='rtl'] .ant-table-pagination.ant-pagination {
  text-align-last: auto;
}
html[dir='rtl']   .ant-pagination-item {
  margin: 0 8px 0 8px;
}
html[dir='rtl'] .ant-drawer-close {
  position: absolute;
  top: 0;
  right:unset
  left: 0px;
}
html[dir='rtl'] .ant-input-textarea-show-count::after {
  display: block;
  color: rgba(0, 0, 0, 0.45);
  text-align: right;
  content: attr(data-count);
  text-align-last: end;
}
html[dir='rtl'] .ant-btn {
  margin-left: 8px;
}
html[dir='rtl'] .ant-tabs-tab .anticon {
  margin-left: 12px;
  margin-right: 0px;

}


html[dir='rtl'] .ant-menu-inline .ant-menu-submenu-title {
   padding-left: 0px;
}


html[dir='rtl']  .isomorphicSidebar .isoDashboardMenu .isoMenuHolder i {
  font-size: 19px;
  color: inherit;
  margin: 0 15px 0 15px;
  width: 18px;
  -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
  -moz-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
  -ms-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
  -o-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
  -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
  transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
}
html[dir='rtl']  .isomorphicSidebar .isoDashboardMenu a {
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 400;
}


html[dir='rtl'] ::-webkit-scrollbar {
  width: 3px;  /* Remove scrollbar space */
  background: transparent;  /* Optional: just make scrollbar invisible */
}
















/// custom scroller
aside .ant-layout-sider-children div div {
  overflow-x: hidden !important;
  

}
#root > div > section > section > div > aside > div > .menu-container > div:nth-child(1) > div:nth-child(2) {
  height: 0 !important;
}

html[dir='rtl'] .isomorphicSidebar .isoDashboardMenu .ant-menu-item {

  padding-right: 2px;
}



html[dir='rtl']  .isomorphicSidebar .ant-menu-submenu-inline .ant-menu-inline > li:not(.ant-menu-item-group),  .isomorphicSidebar .ant-menu-submenu-vertical .ant-menu-inline > li:not(.ant-menu-item-group),  .isomorphicSidebar .ant-menu-submenu-inline .ant-menu-submenu-vertical > li:not(.ant-menu-item-group),  .isomorphicSidebar .ant-menu-submenu-vertical .ant-menu-submenu-vertical > li:not(.ant-menu-item-group) {
  /* padding-left: 74px !important; */
  padding-right: 74px !important;}



 
::-webkit-scrollbar-thumb {
    background-color: rgb(21 20 26 / 21%) !important;
}


//description

.ant-descriptions-bordered .ant-descriptions-item-label {
  background-color: #fafafa;
  width: 15%;
}
.ant-modal-mask {

    background-color: rgb(0 0 0 / 10%) !Important;
}

.ant-modal-content {
    box-shadow: none !important;

}








// tab antd responsive 


html[dir='rtl'] .ant-tabs-tab + .ant-tabs-tab {
  margin: 0 32px 0 0px;
}



// border menu 

 .ant-menu-vertical .ant-menu-item::after, .ant-menu-vertical-left .ant-menu-item::after, .ant-menu-vertical-right .ant-menu-item::after, .ant-menu-inline .ant-menu-item::after {
  color: #1b5b7e
  !important ;
    border-right: 3px solid #1b5b7e
 !important ;}


  .ant-menu-item a:hover {
    color: #1b5b7e
 !important ;
}

.ant-menu-item:hover, .ant-menu-item-active, .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open, .ant-menu-submenu-active, .ant-menu-submenu-title:hover {
  color: #1b5b7e
 !important ;
}
// .ant-menu-submenu-selected {
//   color: #1b5b7e
//  !important ;
// }

// .ant-menu-item a:hover {
//   color: #1b5b7e
//  !important ;
// }

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #999;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #999;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #999;
}








.ant-card {

  margin: 10px !important;
}

// notification 

html[dir='rtl'] .ant-form-vertical .ant-form-item-label, html[dir='rtl'] .ant-col-24.ant-form-item-label,html[dir='rtl'] .ant-col-xl-24.ant-form-item-label {
  padding: 0 0 8px;
  line-height: 1.5715;
  white-space: initial;
  text-align: right;
}

html[dir='rtl'] .ant-legacy-form-vertical .ant-legacy-form-item-label,html[dir='rtl'] .ant-col-24.ant-legacy-form-item-label,html[dir='rtl'] .ant-col-xl-24.ant-legacy-form-item-label {
  
  text-align: right;
}
.ant-image {
  margin:'10px'
}


html[dir='rtl']  .ant-list-item-meta-avatar {
  margin-right: none;
  margin-left: 16px;
}
html[dir='rtl'] .ant-modal-close-x {
  width: 30px;


}
// button submit 
// html[dir='rtl']  button, {
//   -webkit-appearance: button;
//   margin: 14px;
// }

.ant-pagination-disabled .ant-pagination-item-link, .ant-pagination-disabled:hover .ant-pagination-item-link, .ant-pagination-disabled:focus-visible .ant-pagination-item-link {

  margin: 0 !important;
}
.ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {

  margin: 0 -4px !important;
}




//  component style 

a {
  color: #440055 ;

}
a:hover {
  color: #440055 ;

}


// list lazy loading 
.ant-list .ant-spin-nested-loading div .ant-spin-spinning span {
  top:20% !important
}




.ant-pagination-options-size-changer.ant-select {
  display: inline-block;
  width: auto;
  visibility: hidden;
  display: none !important;
}




// // border right collapse
// .ant-menu-vertical .ant-menu-item-selected::after  {
//   position: absolute;
//   content: '';
//   transform: scaleY(1) !important;
//   opacity: 1 !important;
//   top: 0;
//   right: 0px !important;
//   bottom: 0;
//   border-right: 3px solid #6be3de;
//   -webkit-transform: scaleY(0.0001);
//   -webkit-transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
//   transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
//   transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
//   transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
//   content: '';
// }
// scroll bar
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}




// menu background

li.ant-menu-item.ant-menu-item-only-child.ant-menu-item-selected {
  border-radius:10px;
  // box-shadow:0px 0px 3px 0px dodgerblue;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  // background: #6be3de !important;
  border-radius:10px;
  // box-shadow: 0px 0px 3px 0px dodgerblue;
}


.ant-menu-item:active, .ant-menu-submenu-title:active {
  border-radius:10px;
  // box-shadow: 0px 0px 3px 0px dodgerblue;
}
.ant-menu-item  {
  border-radius:10px;
}
ul.ant-menu.ant-menu-sub.ant-menu-vertical {
  padding: 8px 10px;
  border-radius: 10px;
}

// form in user/add/phone
.perf{
  margin-bottom:0 !important;
  padding-bottom:0 !important;
}
.ant-badge-multiple-words {
  padding: 0 4 px !important;
}


// aside {
//   background: black;
//   filter: invert(1) hue-rotate(180deg); /* This will flip the color back to its original value.*/
// }

`;

export default GlobalStyles;
