import React from 'react';
import moize from 'moize';

const Fire = ({ color }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16">
    <path style={{ fill: "var(--grey-2)" }} fillRule="evenodd" d="M488.55724,319.306729 C488.283197,320.000352 488.000154,320.92285 488.000154,321.775386 C488.000154,324.802739 490.253501,326.998545 493.443991,326.998545 C496.663487,326.998545 498.999846,324.802739 498.999846,321.775386 C498.999846,320.469097 498.838821,319.862427 498.216726,318.822992 C497.800662,318.12837 497.59463,317.504709 497.496615,317.007979 C497.3976,317.167892 497.305585,317.363786 497.238575,317.599658 C496.933528,318.667077 497.01054,319.915398 497.01154,319.927391 C497.025542,320.15027 496.889521,320.357158 496.679489,320.432117 C496.468457,320.507076 496.233421,320.434116 496.103401,320.250216 C496.066395,320.197244 495.177258,318.935931 494.785198,318.087392 C493.971072,316.325351 493.984074,314.420387 494.067087,313.321984 C493.243961,313.803722 491.978766,314.877138 491.572703,317.060951 C491.176643,319.185795 491.945761,321.309639 491.953762,321.331627 C492.019772,321.504533 491.984767,321.701426 491.862748,321.84235 C491.740729,321.980275 491.5517,322.042241 491.370672,321.998265 C491.308663,321.983273 489.900446,321.616472 488.989306,320.179254 C488.826281,319.921395 488.680259,319.609564 488.55724,319.306729 M493.443991,328 C489.674411,328 487,325.382424 487,321.775386 C487,319.860428 488.146176,317.798549 488.195184,317.712596 C488.295199,317.534693 488.490229,317.438745 488.694261,317.460733 C488.896292,317.485719 489.062317,317.63264 489.114325,317.829532 C489.117326,317.841526 489.426373,318.998896 489.834436,319.642546 C490.108478,320.074311 490.386521,320.381144 490.698569,320.593029 C490.487537,319.674529 490.325512,318.29428 490.588552,316.877051 C491.312663,312.987167 494.370134,312.057672 494.501154,312.018693 C494.67018,311.971719 494.848207,312.014696 494.977227,312.131632 C495.105247,312.248568 495.164256,312.424473 495.130251,312.59538 C495.12525,312.623364 494.620172,315.345884 495.692337,317.665622 C495.789352,317.876507 495.925373,318.121374 496.071396,318.366241 C496.112402,318.030423 496.177412,317.672618 496.276427,317.325806 C496.669488,315.948556 497.685644,315.477812 497.728651,315.459822 C497.897677,315.382863 498.095707,315.40785 498.24273,315.522787 C498.388752,315.638724 498.458763,315.824623 498.424758,316.008523 C498.419757,316.042505 498.277735,316.977996 499.073858,318.307273 C499.792968,319.50662 500,320.284197 500,321.775386 C500,325.382424 497.243576,328 493.443991,328" transform="translate(-487 -312)"/>
  </svg>
);

export default moize.react(Fire, { maxSize: 3 });
