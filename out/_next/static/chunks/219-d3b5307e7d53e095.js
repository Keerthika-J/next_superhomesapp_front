"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{5624:function(e,s,c){var l=c(1309),t=c(5893),i=c(7294),a=c(1664),n=c.n(a),r=c(1163);s.Z=function(){var e=(0,l._)((0,i.useState)(!1),2),s=e[0],c=e[1],a=(0,l._)((0,i.useState)(0),2);a[0],a[1];var o=(0,l._)((0,i.useState)("0"),2);o[0],o[1];var h=(0,l._)((0,i.useState)(!1),2),d=h[0],m=h[1],x=(0,l._)((0,i.useState)(1160),2);x[0],x[1];var j=(0,l._)((0,i.useState)(""),2);j[0],j[1];var w=(0,l._)((0,i.useState)(""),2);w[0],w[1];var u=(0,l._)((0,i.useState)(0),2),v=u[0],p=u[1],f=(0,r.useRouter)(),g=(0,i.useCallback)(function(e){v>window.scrollY&&window.scrollY>100?c(!0):v<window.scrollY?c(!1):window.scrollY<200&&c(!1),p(window.scrollY)},[v]);(0,i.useEffect)(function(){return p(window.scrollY),window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}},[g]);var N=function(){d?(m(!1),document.body.style.overflow="auto"):(m(!0),c(!1),document.body.style.overflow="hidden")};(0,i.useEffect)(function(){var e=function(e){d&&!e.target.closest(".header-main")&&(m(!1),document.body.style.overflow="auto")};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}},[d]);var b=function(){m(!1),document.body.style.overflow="auto"};return(0,t.jsxs)("nav",{className:"header-main",children:[(0,t.jsx)("div",{className:"header_side_overlay_main",style:{display:d?"block":"none"},children:(0,t.jsxs)("div",{className:"header_side_overlay",children:[(0,t.jsx)("img",{className:"w-8 h-8 float-right cursor-pointer m-8",src:"/images/close-icon.png",alt:"close",onClick:N}),(0,t.jsxs)("ul",{className:"drawers menu-main-text my-16 text-md md:text-xl xl:text-2xl",onClick:function(){b()},children:[(0,t.jsx)("li",{className:"/"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/",children:"Home"})}),(0,t.jsx)("li",{className:"/about-us"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/about-us",children:"About Us"})}),(0,t.jsx)("li",{className:"/design-and-construction"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/design-and-construction",children:"Design & Construction"})}),(0,t.jsx)("li",{className:"/interiors"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/interiors",children:"Interiors"})}),(0,t.jsx)("li",{className:"/project-management"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/project-management",children:"Project Management"})}),(0,t.jsx)("li",{className:"/latest-projects"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/latest-projects",children:"Latest Projects"})})]}),(0,t.jsxs)("ul",{className:"drawers menu-sub-text my-16",onClick:function(){b()},children:[(0,t.jsx)("li",{className:"/blogs"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/blogs",children:"Blogs"})}),(0,t.jsx)("li",{className:"/contact-us"===f.pathname?"active":"not-active",children:(0,t.jsx)(n(),{href:"/contact-us",children:"Contact"})})]}),(0,t.jsxs)("div",{className:"drawers flex gap-5 mx-8",onClick:function(){b()},children:[(0,t.jsx)("a",{href:"https://www.facebook.com/superhomes.co/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),(0,t.jsx)("a",{href:"https://www.instagram.com/superhomes.co/",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 448 512",children:(0,t.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/company/superhomes-co",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 448 512",children:(0,t.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})})]})]})}),(0,t.jsxs)("div",{className:"mobile_header w-full flex items-center justify-between",style:{display:s?"flex":"none"},children:[(0,t.jsx)("div",{className:"w-12 h-12",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("img",{className:"cursor-pointer",src:"/images/logo-white.png",alt:"Logo"})})}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)("button",{className:"menu-button rounded-full",onClick:N,children:(0,t.jsx)("img",{src:"/images/hamburger-icon.png",alt:"Hamburger icon",className:"w-8 h-6 invert"})})})]})]})}},1036:function(e,s,c){var l=c(5893);c(7294),s.Z=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("div",{className:"social-div",children:(0,l.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-start",children:[(0,l.jsx)("div",{className:"col-span-full md:col-span-1",children:(0,l.jsx)("img",{src:"/images/logo-white.png",alt:"Logo",className:"w-20 md:w-28"})}),(0,l.jsx)("div",{className:"social-lists col-span-1 text-[10px] md:text-[17.04px]",children:(0,l.jsxs)("ul",{className:"",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/about-us",children:"About Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/design-and-construction",children:"Design & Construction"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/interiors",children:"Interiors"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/project-management",children:"Project Management"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/latest-projects",children:"Latest Projects"})})]})}),(0,l.jsx)("div",{className:"social-lists col-span-1 text-[10px] md:text-[17.04px] w-6/12",children:(0,l.jsxs)("ul",{className:"",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/blogs",children:"Blogs"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/contact-us",children:"Contact"})})]})}),(0,l.jsx)("div",{className:"hidden md:block lg:hidden"}),(0,l.jsx)("div",{className:"social-lists col-span-1 text-[10px] md:text-[17.04px]",children:(0,l.jsxs)("ul",{className:"",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/terms-and-condtions",children:"Terms & Conditions"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/privacy-policy",children:"Privacy Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/faq",children:"FAQ"})})]})}),(0,l.jsx)("div",{className:"social-lists col-span-1 text-[10px] md:text-[17.04px]",children:(0,l.jsxs)("ul",{className:"",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"block font-bold",children:"Call Us:"}),(0,l.jsx)("a",{href:"tel:+91 93603 97461",children:"+91 93603 97461"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"block font-bold",children:"Email Us:"}),(0,l.jsx)("a",{href:"mailto:contact@superhomes.co",children:"contact@superhomes.co"})]}),(0,l.jsxs)("div",{className:"flex -mx-2 my-4",children:[(0,l.jsx)("a",{href:"https://www.facebook.com/superhomes.co/",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 320 512",children:(0,l.jsx)("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})})}),(0,l.jsx)("a",{href:"https://www.instagram.com/superhomes.co/",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 448 512",children:(0,l.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),(0,l.jsx)("a",{href:"https://www.linkedin.com/company/superhomes-co",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 448 512",children:(0,l.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})})})]})]})}),(0,l.jsx)("div",{className:"col-span-full text-[9px] md:text-[15.04px] mt-8",children:(0,l.jsxs)("span",{className:"text-white",children:["Copyright 2023 @ SuperHomes | Made by ",(0,l.jsx)("a",{href:"https://www.kodeon.agency/",children:"KODE ON"})]})})]})})}),(0,l.jsx)("div",{className:"fixed bottom-[2vw] right-[2vw] m-[1em]",children:(0,l.jsx)("a",{href:"https://api.whatsapp.com/send?phone=919360397461",target:"_blank",children:(0,l.jsx)("button",{className:"w-12 h-12 float-right",children:(0,l.jsx)("img",{src:"/images/whatsapp.png"})})})})]})}}}]);