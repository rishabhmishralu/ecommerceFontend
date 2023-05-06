import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const store=createContext();

const Apifile=(props)=>{

     const [data,setdata]=useState([])
    //   [ {
    //     id: 1,
    //     catagory: "Accessories",
    //     name: "Apple AirPod Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
    //     price: "₹18,000",
    //     oPrice: "₹20,499"   
    // },
    // {
    //     id: 2,
    //     catagory: "Accessories",
    //     name: "Apple AirPod 2nd Gen",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg",
    //     price: "₹15,000",
    //     oPrice: "₹17,499"   
    // },
    // {
    //     id: 3,
    //     catagory: "Accessories",
    //     name: "Apple AirPod Pro A2084",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://images.esellerpro.com/2131/I/252/394/DSC_5962_2.jpg",
    //     price: "₹20,000",
    //     oPrice: "₹25,000"   
    // },
    // {
    //     id: 4,
    //     catagory: "Accessories",
    //     name: "Apple AirPod 3rd Gen",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861333000",
    //     price: "₹13,000",
    //     oPrice: "₹14,500"   
    // },
    // {
    //     id: 5,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 4",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51deGDOsgbL._SL1000_.jpg",
    //     price: "₹12,500",
    //     oPrice: "₹15,000"   
    // },
    // {
    //     id: 6,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 5",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71fp5ankbqL._SX522_.jpg",
    //     price: "₹10,000",
    //     oPrice: "₹12,499"   
    // },
    // {
    //     id: 7,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 6",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://rukminim1.flixcart.com/image/800/900/cms-rpd-images/be2faba1bb6f4d0f9e35557ba64da795_1759bdade0b_image.jpeg?q=90",
    //     price: "₹12,000",
    //     oPrice: "₹13,500"   
    // },
    // {
    //     id: 8,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 7",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171067000,1631661671000",
    //     price: "₹11,000",
    //     oPrice: "₹12,000"   
    // },
    // {
    //     id: 9,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 3",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
    //     price: "₹10,000",
    //     oPrice: "₹11,499"   
    // },
    // {
    //     id: 10,
    //     catagory: "Accessories",
    //     name: "Apple Watch Series 2",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP746/alu-spacegray-nike.jpg",
    //     price: "₹8,000",
    //     oPrice: "₹8,499"   
    // },
    // {
    //     id: 11,
    //     catagory: "Accessories",
    //     name: "Apple AirPods Max",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
    //     price: "₹15,000",
    //     oPrice: "₹17,500"   
    // },
    // {
    //     id: 12,
    //     catagory: "Accessories",
    //     name: "Apple AirPods ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://rukminim1.flixcart.com/image/612/612/kigbjbk0-0/headphone/n/z/m/mgyl3hn-a-apple-original-imafy8wb7tuduaf2.jpeg?q=70",
    //     price: "₹13,000",
    //     oPrice: "₹16,499"   
    // },
    // {
    //     id: 13,
    //     catagory: "Accessories",
    //     name: "boAt Rockers 255 CSK",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51hC6pU-gsL._SY355_.jpg",
    //     price: "₹1,200",
    //     oPrice: "₹1,499"   
    // },
    // {
    //     id: 14,
    //     catagory: "Accessories",
    //     name: "boAt Rockers 450 Iron Man",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SL1500_.jpg",
    //     price: "₹1,500",
    //     oPrice: "₹1,799"   
    // },
    // {
    //     id: 15,
    //     catagory: "Accessories",
    //     name: "boAt Rockers 450 Black Panther",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://infiswap.com/wp-content/uploads/2022/04/boAt-Rockerz-450-Black-panther-1.jpg",
    //     price: "₹1,500",
    //     oPrice: "₹1,700"   
    // },
    // {
    //     id: 16,
    //     catagory: "Accessories",
    //     name: "boAt Rockers 450 Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/9/h/j/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.jpeg?q=70",
    //     price: "₹1,300",
    //     oPrice: "₹1,450"   
    // },
    // {
    //     id: 17,
    //     catagory: "Accessories",
    //     name: "boAt Wave Lite",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/41qAgAkiXjL.jpg",
    //     price: "₹1,200",
    //     oPrice: "₹1,300"   
    // },
    // {
    //     id: 18,
    //     catagory: "Accessories",
    //     name: "SanDisk 32GB 2.0",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://n2.sdlcdn.com/imgs/i/6/1/SanDisk-Cruzer-Blade-USB-Flash-1040103-1-79003.jpg",
    //     price: "₹499",
    //     oPrice: "₹600"   
    // },
    // {
    //     id: 19,
    //     catagory: "Accessories",
    //     name: "SanDisk 32GB 3.0",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71bV203ASmL._SL1500_.jpg",
    //     price: "₹800",
    //     oPrice: "₹999"   
    // },
    // {
    //     id: 20,
    //     catagory: "Accessories",
    //     name: "HP 32GB 3.0",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61aflcZgumL._SL1400_.jpg",
    //     price: "₹1,000",
    //     oPrice: "₹1,200"   
    // },
    // {
    //     id: 21,
    //     catagory: "Accessories",
    //     name: "HP 34GB 3.0",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
    //     price: "₹1,200",
    //     oPrice: "₹1,499"   
    // },
    // {
    //     id: 22,
    //     catagory: "Accessories",
    //     name: "Jebra Microsoft",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://www.onedirect.co.uk/media/catalog/product/cache/2/image/600x/75fe832f739e7581346979d1fbb4a3c8/g/n/gnevol30dm-2.jpg",
    //     price: "₹55,00",
    //     oPrice: "₹6,499"   
    // },
    // {
    //     id: 23,
    //     catagory: "Accessories",
    //     name: "Mi Powerbank 20000mAh",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg",
    //     price: "₹1,100",
    //     oPrice: "₹1,700"   
    // },
    // {
    //     id: 24,
    //     catagory: "Accessories",
    //     name: "Sony 10000mAh Powerbank ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://www.brandedcorporategift.com/ecommerce/upload/images/edit/6121-2017-08-30.jpg",
    //     price: "₹1,300",
    //     oPrice: "₹1,699"   
    // },
    // {
    //     id: 25,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 13 (64GB) - Black",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61B0+qQriPL._SX679_.jpg",
    //     price: 80000,
    //     oPrice: "88,900"

    // },
    // {
    //     id: 26,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 14 (128 GB) - Blue",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/31laW9Ex46L._SY445_SX342_QL70_FMwebp_.jpg",
    //     price: 71999,
    //     oPrice: "₹79,000"

    // },
    // {
    //     id: 27,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 14 (128 GB) - Yellow",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61WAINtWPPL._SX679_.jpg",
    //     price: 71999,
    //     oPrice: "₹79,499"

    // },
    // {
    //     id: 28,
    //     catagory: "Mobile",
    //     name: "iphone14 ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61YSNhAb00L._SX679_.jpg",
    //     price: 79500,
    //     oPrice: "₹90,000"

    // },
    // {
    //     id: 29,
    //     catagory: "Mobile",
    //     name: "Apple-iPhone-14-128GB",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51cv9gYjnuL._SX679_.jpg",
    //     price: 71500,
    //     oPrice: "₹79,500"

    // },
    // {
    //     id: 30,
    //     catagory: "Mobile",
    //     name: "Apple-iPhone-128GB-blue",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg",
    //     price: 112500,
    //     oPrice: "₹1,39,500"
    // },
    // {
    //     id: 31,
    //     catagory: "Mobile",
    //     name: "5s 16GB",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51moyqrVflL._AC_UY327_FMwebp_QL65_.jpg",
    //     price: 14500,
    //     oPrice: "₹16,000"
    // },
    // {
    //     id: 32,
    //     catagory: "Mobile",
    //         name: " Apple iPhone 14  - Blue ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51W-Lp1mdCL._SL1500_.jpg",
    //     price: 16000,
    //     oPrice: "₹17,500"
    // },
    // {
    //     id: 33,
    //     catagory: "Mobile",
    //     name: "iphone 14 Pro Max",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/611ovP2GkrL._SX679_.jpg",
    //     price: 149000,
    //     oPrice: "₹1,59,500"
    // },
    // {
    //     id: 34,
    //     catagory: "Mobile",
    //     name: "Apple iPhone SE (64 GB)",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61TOWf11+jL._SX679_.jpg",
    //     price: 49000,
    //     oPrice: "₹55,500"
    // },
    // {
    //     id: 35,
    //     catagory: "Mobile",
    //     name: " Apple iPhone 14 (128 GB) - Yellow ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61WAINtWPPL._SX679_.jpg",
    //     price: 71000,
    //     oPrice: "₹86,499"
    // },
    // {
    //     id: 36,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 11 (64GB) - White",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61NTwRtdzfL._SX679_.jpg",
    //     price: 40000,
    //     oPrice: "₹49,000"
    // },
    // {
    //     id: 37,
    //     catagory: "Mobile",
    //     name: "Apple-iPhone-Pro-128GB-Silver",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61lKQWyMdDL._SX679_.jpg",
    //     price: 115500,
    //     oPrice: "₹1,27,000"
    // },
    // {
    //     id: 38,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 12 (64GB) -  RED",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61ltPAQVVaL._SX679_.jpg",
    //     price: 53999,
    //     oPrice: "₹57,499"
    // },
    // {
    //     id: 39,
    //     catagory: "Mobile",
    //     name: "Apple iPhone 13 Pro (128 GB)",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61AwGDDZd3L._SL1500_.jpg",
    //     price: 122000,
    //     oPrice: "₹1,49,000"
    // },
    // {
    //     id: 40,
    //     catagory: "Mobile",
    //     name:   "Apple-iPhone 14 Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61ltPAQVVaL._SX679_.jpg",
    //     price: 149900,
     
    //     oPrice: "₹1,75,000"
    // },
    // {
    //     id: 41,
    //     catagory: "macbook",
    //     name: "MacBook Air",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
    //     price: 98000,
    //     oPrice: "₹1,02,499"   
    // },
    // {
    //     id: 42,
    //     catagory: "macbook",
    //     name: "Apple MacBook Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
    //     price: 92000,
    //     oPrice: "₹1,02,499"   
    // },
    // {
    //     id: 43,
    //     catagory: "macbook",
    //     name: "Apple MacBook 12",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://www.cnet.com/a/img/resize/582394e3d3c2a8e0a066cc4d3a51be08665cd2de/2016/04/19/7ce2b064-00fe-4d9a-9a93-6e540c1be1a1/apple-macbook-2016-18.jpg?auto=webp&fit=crop&height=675&width=1200",
    //     price: 68000,
    //     oPrice: "₹75,499"   
    // },
    // {
    //     id: 44,
    //     catagory: "macbook",
    //     name: "Apple MacBook 11",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-mid-2014-13in-device.jpg",
    //     price: 68000,
    //     oPrice: "₹72,499"   
    // },
    // {
    //     id: 45,
    //     catagory: "macbook",
    //     name: "Apple MacBook Air 2020 ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://techcart.com.au/wp-content/uploads/2021/04/53002-Apple-MacBook-Air-2020-MVH22-13.3-i5-512GB_8GB-Grey.jpg",
    //     price: 91000,
    //     oPrice: "₹95,499"   
    // },
    // {
    //     id: 46,
    //     catagory: "macbook",
    //     name: "Apple MacBook Pro 2019",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61SJu997CCL._SL1500_.jpg",
    //     price: 82000,
    //     oPrice: "₹92,499"   
    // },
    // {
    //     id: 47,
    //     catagory: "macbook",
    //     name: "Apple MacBook Air Gold",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/1:1/w_1348,h_1348,c_limit/macbookair3.jpg",
    //     price: 78000,
    //     oPrice: "₹85,499"   
    // },
    // {
    //     id: 48,
    //     catagory: "macbook",
    //     name: "Apple MacBook Air M2",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://www.apple.com/in/macbook-air-m2/images/overview/hero/battery_hw_midnight__ctl0mn014k2u_large.jpg",
    //     price: 75000,
    //     oPrice: "₹82,499"   
    // },
    // {
    //     id: 49,
    //     catagory: "home",
    //     name: "Apple Watch Series 5",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/71fp5ankbqL._SX522_.jpg",
    //     price: "₹10,000",
    //     oPrice: "₹12,499"  
        
    // },
    // {
    //     id: 50,
    //     catagory: "home",
    //     name: "Apple Watch Series 3",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000",
    //     price: "₹10,000",
    //     oPrice: "₹11,499"     
    // },
    // {
    //     id: 51,
    //     catagory: "home",
    //     name: "Apple AirPod 3rd Gen",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861333000",
    //     price: "₹13,000",
    //     oPrice: "₹14,500"    
    // },
    // {
    //     id: 52,
    //     catagory: "home",
    //     name: "Apple AirPods Max",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000",
    //     price: "₹15,000",
    //     oPrice: "₹17,500"  

    // },
    // {
    //     id: 53,
    //     catagory: "home",
    //     name: "Apple-iPhone-Pro-128GB-Silver",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61lKQWyMdDL._SX679_.jpg",
    //     price: 115500,
    //     oPrice: "₹1,27,000"
         
    // },
    // {
    //     id: 54,
    //     catagory: "home",
    //     name: " Apple iPhone 14 (128 GB) - Yellow ",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61WAINtWPPL._SX679_.jpg",
    //     price: 71000,
    //     oPrice: "₹86,499"
         
     
        
    // },
    // {
    //     id: 55,
    //     catagory: "home",
    //     name: "Apple-iPhone-14-128GB",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/51cv9gYjnuL._SX679_.jpg",
    //     price: 71500,
    //     oPrice: "₹79,500"
      
    // },
    // {
    //     id: 56,
    //     catagory: "home",
    //     name: "Apple iPhone 12 (64GB) -  RED",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61ltPAQVVaL._SX679_.jpg",
    //     price: 53999,
    //     oPrice: "₹57,499"
       
        
        
    // },
    // {
    //     id: 57,
    //     catagory: "home",
    //     name: "Ipad Pro 10.5 Inch.",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg",
    //     price: 60000,
    //     oPrice: "₹67,900"
      
       
    // },
    // {
    //     id: 58,
    //     catagory: "home",
    //     name: "Ipad Pro 10",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
    //     price: "₹75,000",
    //     oPrice: "₹82,499"
       
    // },
    // {
    //     id: 59,
    //     catagory: "home",
    //     name: "  Apple 2022 12.9-inch iPad Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/814P0ojHArL._SL1500_.jpg",
    //     price: 237000,
    //     oPrice: "₹2,56,900"
       
    // },
    // {
    //     id: 60,
    //     catagory: "home",
    //     name: "Ipad Pro M1",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61oo+mrbI2L._SX679_.jpg",
    //     price: 175500,
    //     oPrice: "₹1,83,000"
         
    // },
    // {
    //     id: 61,
    //     catagory: "Ipad",
    //     name: "  Apple 2022 12.9-inch iPad Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/814P0ojHArL._SL1500_.jpg",
    //     price: 237000,
    //     oPrice: "₹2,56,900"
    // },
    // {
    //     id: 62,
    //     catagory: "Ipad",
    //     name: "Ipad Air A14",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg",
    //     price: 65500,
    //     oPrice: "₹67,900"
    // },
    // {
    //     id: 63,
    //     catagory: "Ipad",
    //     name: "Ipad Air 2",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61Y39sE4nuL._SX679_.jpg",
    //     price: 50500,
    //     oPrice: "₹60,000"
    // },
    // {
    //     id: 64,
    //     catagory: "Ipad",
    //     name: "Ipad Air 3rd Gen",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61goypdjAYL._SX679_.jpg",
    //     price: 58000,
    //     oPrice: "₹62,900"
    // },
    // {
    //     id: 65,
    //     catagory: "Ipad",
    //     name: "Ipad 11 Pro",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg",
    //     price: 57000,
    //     oPrice: "₹63,000"
    // },
    // {
    //     id: 66,
    //     catagory: "Ipad",
    //     name: "Ipad Pro 10",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
    //     price: "₹75,000",
    //     oPrice: "₹82,499"
    // },
    // {
    //     id: 67,
    //     catagory: "Ipad",
    //     name: "Ipad Pro M1",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/61oo+mrbI2L._SX679_.jpg",
    //     price: 175500,
    //     oPrice: "₹1,83,000"
    // },
    // {
    //     id: 68,
    //     catagory: "Ipad",
    //     name: "Ipad Pro 10.5 Inch.",
    //     ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
    //     image: "https://m.media-amazon.com/images/I/81b3zG8j2bL._SX679_.jpg",
    //     price: 60000,
    //     oPrice: "₹67,900"
    // }, ]
     
     console.log(data)
       

     useEffect(()=>{
        axios.get("https://ecommerce2-7jo6.onrender.com/data")
      //   .then((res)=>console.log(res.data),634)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
     },[])

    return(

        <store.Provider value={[data,setdata]}>
           {props.children}
        </store.Provider>
  

    )
}
export default Apifile
