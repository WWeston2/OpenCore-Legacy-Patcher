(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{324:function(e,a,t){e.exports=t.p+"assets/img/usb11-chart.13830974.png"},421:function(e,a,t){e.exports=t.p+"assets/img/ventura.606fb761.png"},422:function(e,a,t){e.exports=t.p+"assets/img/OCLP-060-Initial-Support.2c6f8db9.png"},471:function(e,a,t){"use strict";t.r(a);var r=t(25),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("img",{attrs:{src:t(421),alt:""}})]),e._v(" "),r("p",[e._v("With the release of OpenCore Legacy Patcher v0.5.0 and newer, early support for macOS Ventura has been implemented for most Metal-capable Macs. This page will be used to inform users regarding current issues and will be updated as new patch sets are developed and added to our patcher.")]),e._v(" "),r("h2",{attrs:{id:"newly-dropped-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#newly-dropped-hardware"}},[e._v("#")]),e._v(" Newly dropped hardware")]),e._v(" "),r("p",[e._v("Ventura's release dropped a large amount of Intel hardware, thus requiring the usage of OpenCore Legacy Patcher on the following models (in addition to previously removed models):")]),e._v(" "),r("ul",[r("li",[e._v("iMac16,1 (21.5-inch, Late 2015)")]),e._v(" "),r("li",[e._v("iMac16,2 (21.5-inch and 21.5-inch 4K, Late 2015)")]),e._v(" "),r("li",[e._v("iMac17,1 (27-inch 5K, Late 2015)")]),e._v(" "),r("li",[e._v("MacBook9,1 (12-inch, Early 2016)")]),e._v(" "),r("li",[e._v("MacBookAir7,1 (11-inch, Early 2015)")]),e._v(" "),r("li",[e._v("MacBookAir7,2 (13-inch, Early 2015)")]),e._v(" "),r("li",[e._v("MacBookPro11,4 (15-inch, Mid 2015, iGPU)")]),e._v(" "),r("li",[e._v("MacBookPro11,5 (15-inch, Mid 2015, dGPU)")]),e._v(" "),r("li",[e._v("MacBookPro12,1 (13-inch, Early 2015)")]),e._v(" "),r("li",[e._v("MacBookPro13,1 (13-inch, Late 2016)")]),e._v(" "),r("li",[e._v("MacBookPro13,2 (13-inch, Late 2016)")]),e._v(" "),r("li",[e._v("MacBookPro13,3 (15-inch, Late 2016)")]),e._v(" "),r("li",[e._v("Macmini7,1 (Late 2014)")]),e._v(" "),r("li",[e._v("MacPro6,1 (Late 2013)")])]),e._v(" "),r("h2",{attrs:{id:"current-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-status"}},[e._v("#")]),e._v(" Current status")]),e._v(" "),r("img",{attrs:{width:"625",alt:"",src:t(422)}}),e._v(" "),r("p",[e._v("For older hardware, see below sections:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#currently-unsupportedbroken-hardware-in-ventura"}},[e._v("Currently Unsupported/Broken Hardware in Ventura")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#amd-polaris-vega-and-navi-support-on-pre-2019-mac-pros-and-pre-2012-imacs"}},[e._v("AMD Polaris, Vega and Navi support on pre-2019 Mac Pros and pre-2012 iMacs")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#usb-11-ohciuhci-support"}},[e._v("USB 1.1 (OHCI/UHCI) Support")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#ethernet-issue-with-early-2008-mac-pro"}},[e._v("Ethernet issue with Early 2008 Mac Pro")])])])])]),e._v(" "),r("p",[e._v("The team is doing their best to investigate and fix the aforementioned issues, however no estimated time can be provided.")]),e._v(" "),r("h2",{attrs:{id:"currently-unsupported-broken-hardware-in-ventura"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#currently-unsupported-broken-hardware-in-ventura"}},[e._v("#")]),e._v(" Currently Unsupported/Broken Hardware in Ventura")]),e._v(" "),r("h3",{attrs:{id:"amd-polaris-vega-and-navi-support-on-pre-2019-mac-pros-and-pre-2012-imacs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amd-polaris-vega-and-navi-support-on-pre-2019-mac-pros-and-pre-2012-imacs"}},[e._v("#")]),e._v(" AMD Polaris, Vega and Navi support on pre-2019 Mac Pros and pre-2012 iMacs")]),e._v(" "),r("p",[e._v("For users with 2008 to 2013 Mac Pros (MacPro3,1-6,1) and 2009 to 2011 iMacs (iMac9,1-12,2), keep in mind that macOS Ventura now requires "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("AVX2.0 support in the CPU"),r("OutboundLink")],1),e._v(" for native graphics acceleration. Thus while your GPU may be natively supported, you cannot run Ventura officially with these GPUs.")]),e._v(" "),r("ul",[r("li",[e._v("CPUs supporting AVX2.0 are Haswell or newer, which no pre-2019 Mac Pros can be upgraded with.")])]),e._v(" "),r("p",[e._v("Currently at this time, OpenCore Legacy Patcher only supports patching the AMD Polaris and Vega Graphics stack to no longer require AVX2.0. We're recently received an AMD RX 6600 donation, so hopefully in the future the project can support AMD Navi with pre-Haswell Macs. However, no time estimates can be given.")]),e._v(" "),r("p",[e._v("Following GPUs are applicable:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("GPU Architecture")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Model Families")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Supported")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("AMD Polaris")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("RX 4xx/5xx (10/20 series)")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"},attrs:{rowspan:"2"}},[r("span",{staticStyle:{color:"#30BCD5"}},[e._v(" Supported with patching ")])])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("AMD Vega")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Vega 56/64/VII (10/20 series)")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("AMD Navi")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("RX 5xxx/6xxx (10/20 series)")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("span",{staticStyle:{color:"red"}},[e._v(" Unsupported ")])])])])]),e._v(" "),r("h3",{attrs:{id:"usb-1-1-ohci-uhci-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usb-1-1-ohci-uhci-support"}},[e._v("#")]),e._v(" USB 1.1 (OHCI/UHCI) Support")]),e._v(" "),r("p",[e._v("For Penryn systems and pre-2013 Mac Pros, USB 1.1 support was outright removed in macOS Ventura. While USB 1.1 may seem unimportant, it handles many important devices on your system. These include:")]),e._v(" "),r("ul",[r("li",[e._v("Keyboard and Trackpad for laptops")]),e._v(" "),r("li",[e._v("IR Receivers")]),e._v(" "),r("li",[e._v("Bluetooth")])]),e._v(" "),r("p",[e._v("With OpenCore Legacy Patcher v0.6.0, basic support has been implemented via Root Volume patching. However due to this, users will need to use a USB hub for installation and post-OS updates when patches are cleaned:")]),e._v(" "),r("p",[r("img",{attrs:{src:t(324),alt:""}})]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("The following systems rely on USB 1.1")]),e._v(" "),r("ul",[r("li",[e._v("iMac10,x and older")]),e._v(" "),r("li",[e._v("Macmini3,1 and older")]),e._v(" "),r("li",[e._v("MacBook7,1 and older")]),e._v(" "),r("li",[e._v("MacBookAir3,1 and older")]),e._v(" "),r("li",[e._v("MacBookPro7,1 and older\n"),r("ul",[r("li",[e._v("MacBookPro6,x is exempt")])])]),e._v(" "),r("li",[e._v("MacPro5,1 and older")])])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Legacy Wireless Support (Resolved in v0.6.0 and newer)")]),e._v(" "),r("h3",{attrs:{id:"legacy-wireless-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#legacy-wireless-support"}},[e._v("#")]),e._v(" Legacy Wireless Support")]),e._v(" "),r("p",[e._v("For systems that required Root Patches in macOS Monterey to achieve Wireless support, unfortunately macOS Ventura has broken the patch set. Currently the following Wifi cards are unsupported:")]),e._v(" "),r("ul",[r("li",[e._v("Atheros: All models")]),e._v(" "),r("li",[e._v("Broadcom: BCM94328 and BCM94322")])]),e._v(" "),r("p",[e._v("The following machines shipped stock with these cards:")]),e._v(" "),r("ul",[r("li",[e._v("iMac12,x and older")]),e._v(" "),r("li",[e._v("Macmini3,1 and older")]),e._v(" "),r("li",[e._v("MacBook5,x and older")]),e._v(" "),r("li",[e._v("MacBookAir2,1 and older")]),e._v(" "),r("li",[e._v("MacBookPro7,1 and older\n"),r("ul",[r("li",[e._v("MacBookPro6,x is exempt")])])]),e._v(" "),r("li",[e._v("MacPro5,1 and older")])]),e._v(" "),r("p",[e._v("Currently BCM943224, BCM94331, BCM94360 and BCM943602 are still fully supported by OpenCore Legacy Patcher. Consider upgrading to these cards if possible.")])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Non-Metal Graphics Acceleration (Resolved in v0.6.0 and newer)")]),e._v(" "),r("h3",{attrs:{id:"non-metal-graphics-acceleration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#non-metal-graphics-acceleration"}},[e._v("#")]),e._v(" Non-Metal Graphics Acceleration")]),e._v(" "),r("p",[e._v("Regarding non-Metal, the team is hard at work to get non-Metal working, however this is our greatest challenge since Big Sur.")]),e._v(" "),r("p",[e._v("Apple has made significant changes to the graphics stack in order to facilitate fancy effects, and in particularly, Stage Manager. We will update you as we work on development, however, now is not the best time to ask about ETAs.")]),e._v(" "),r("p",[e._v("The following GPUs are applicable:")]),e._v(" "),r("ul",[r("li",[e._v("NVIDIA:\n"),r("ul",[r("li",[e._v("Tesla (8000 - 300 series)")])])]),e._v(" "),r("li",[e._v("AMD:\n"),r("ul",[r("li",[e._v("TeraScale (2000 - 6000 series)")])])]),e._v(" "),r("li",[e._v("Intel:\n"),r("ul",[r("li",[e._v("Iron Lake")]),e._v(" "),r("li",[e._v("Sandy Bridge (2000 - 3000 series)")])])])]),e._v(" "),r("p",[e._v("The following machines shipped stock with an unsupported GPU:")]),e._v(" "),r("ul",[r("li",[e._v("iMac7,1 - iMac12,x")]),e._v(" "),r("li",[e._v("MacBook4,1 - MacBook7,1")]),e._v(" "),r("li",[e._v("MacBookAir2,1 - MacBookAir4,x")]),e._v(" "),r("li",[e._v("MacBookPro4,1 - MacBookPro8,x")]),e._v(" "),r("li",[e._v("Macmini3,1 - Macmini5,x")]),e._v(" "),r("li",[e._v("MacPro3,1 - MacPro5,1")]),e._v(" "),r("li",[e._v("Xserve2,1 - Xserve3,1")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);