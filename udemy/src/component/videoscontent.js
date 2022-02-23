
import img1 from '../images/bg2.jpg'
import imgb from '../images/img-1.jpg'
import imga from '../images/img-2.jpg'
import imgjs from '../images/img-3.jpg'

import img5 from '../images/img-5.jpg'
import img7 from '../images/img-7.jpg'

import imgreact from '../images/react.jpeg';
import link1 from './lacture/p-1.mp4';
import link2 from './lacture/p-2.mp4';


const content = {
  courses: [
    {
      

      "id":"1",
      "title":"  become a react developere from scratch to advanced",
      "author":"maximillion",
      "duritation":"8 total hours",
      "price":"$5",
      "lactures":"100 lactures",
      "image":imgreact,
      "toprated":true,
      lacture:[
        {
          "id":"1",
          "title":"introduction to react",
          // "link":"https://www.youtube.com/watch?v=O3Z_LKxPJXQ&list=RDiet_C7hkAOg&index=10"
          link:link1
        
      },
          {
          "id":"2",
          "title":"ractjs hello world program",
          // "link":"https://www.youtube.com/watch?v=QCXaa1mEUK0&list=RDiet_C7hkAOg&index=12"
link:link2
      },
      ]
     
    },
    {
      "id":"2",
        "title":"become a web developere from scratch to advanced  ",
        "author":"maximillion",
        "duritation":"8 total hours",
        "price":"$5",
        "lactures":"100 lactures",
        "image":img7,
        "toprated":true,
        lacture:[
          {
            "id":"1",
            "title":"introduction to html", 
            "link":"https://www.youtube.com/watch?v=PqGn1GTmEJs&list=RDPqGn1GTmEJs&start_radio=1"
            
          
        },
            {
            "id":"2",
            "title":"Learn about HTML tag",
            "link":"https://www.youtube.com/watch?v=NwdQx2P_ytk&list=RDPqGn1GTmEJs&index=11"
        },

        ]

    },
    // {
    //   "id":"3",
    //     "title":'learn angular fundamentals from beginning to advanced',
    //     "author":"maximillion",
    //     "duritation":"8 total hours",
    //     "price":"$5",
    //     "lactures":"100 lactures",
    //     "image":imga,
    //     "toprated":true,

    // },
    // {
    //   "id":"4",
    //     "title":"bootstrap 5 from scratch to exert with 5 real project ",
    //     "author":"maximillion",
    //     "duritation":"10 total hours",
    //     "price":"$5",
    //     "lactures":"100 lactures",
    //     "image":imgb,

    // },
    // {
    //   "id":"4",
    //     "title":"bootstrap 5 from scratch to exert with 5 real project ",
    //     "author":"maximillion",
    //     "duritation":"10 total hours",
    //     "price":"$5",
    //     "lactures":"100 lactures",
    //     "image":imgb,

    // },
    // {
    //   "id":"5",
    //     "title":"learn modern web designer and developer course  ",
    //     "author":"maximillion",
    //     "duritation":"13 total hours",
    //     "price":"$5",
    //     "lactures":"151 lactures",
    //     "image":img5,

    // },
    // {
    //   "id":"6",
    //   "title":" the comlete javascript from beginner to advanced  ",
    //   "author":"maximillion",
    //   "duritation":"13 total hours",
    //   "price":"$5",
    //   "lactures":"150lactures",
    //   "image":imgjs,

    // },
  ],
};

export default content;
