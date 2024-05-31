import React, { FC } from "react";
interface Props {
  size?: string;
  color?: string;
}
export const AndIcon: FC<Props> = ({ size = "30px", color = "#000000" }) => {
  return (
    <svg
      x={size}
      y={size}
    >
      <g stroke="none" stroke-width="1" fill="none">
        <path
          d="M47.9779172,77.1557944 C41.0137403,78.9836346 31.794943,76.3233977 29.165263,69.5097586 C26.343791,62.1855256 30.4012552,55.5306426 41.5763299,49.1846904 C44.6705725,53.7585816 47.8926764,57.3069944 49.0775241,58.5555895 C52.3465105,62.0181882 55.734834,65.2362167 59.2169225,68.2010936 C56.1951346,72.526124 52.197339,76.057374 47.9779172,77.1557944 M39.1384417,29.8679378 C39.6115284,26.9931656 41.3504416,24.8006155 44.4532083,23.1701477 C45.5741254,22.5823212 46.8229038,22.2948439 48.054634,22.2948439 C49.8020713,22.2948439 51.4983641,22.8740891 52.7173082,23.9853816 C56.0885836,27.0575262 55.2063408,32.5796631 52.4104411,36.1452388 C50.0066493,39.2173833 46.5501331,41.4485498 42.9955899,43.4780531 C40.2252625,38.6810452 38.4863493,33.7939326 39.1384417,29.8679378 M74.006209,73.847661 C70.8949182,71.8696462 67.8305098,69.6770961 64.8342941,67.2828828 C67.3872574,62.6532125 68.9002824,57.6245065 68.9002824,53.3595461 C68.9002824,52.1753116 67.949847,51.2141937 66.7692613,51.2141937 C65.5929377,51.2141937 64.6382402,52.1753116 64.6382402,53.3595461 C64.6382402,56.7062957 63.4448684,60.7138139 61.4672808,64.4939248 C58.2792732,61.7478738 55.1722445,58.7787061 52.1632427,55.5992939 C49.8276436,53.1235573 47.4025415,50.193006 45.2843066,47.1036986 C49.0519519,44.9368927 52.9389344,42.3967955 55.7561443,38.8054757 C59.7113194,33.7638976 60.9941941,25.7402798 55.5814005,20.8059694 C52.1717668,17.6994992 46.7888075,17.1030912 42.4798828,19.3642926 C38.1709581,21.6297847 35.635043,24.9250459 34.9318061,29.1642622 C34.0580874,34.4547011 36.3169698,40.3801643 39.2961373,45.5547542 C26.2841224,53.0034176 21.5404695,61.5805363 25.1930396,71.058703 C28.0315597,78.425843 35.9802684,82 43.4942488,82 C45.4036438,82 47.2832044,81.7683019 49.0434278,81.3134872 C54.2686915,79.9533339 59.0080825,75.91149 62.5455775,70.9342726 C65.5460552,73.3070323 68.6147256,75.491001 71.7260164,77.4775972 C72.7233343,78.1040401 74.0360433,77.8165629 74.6710875,76.812538 C75.2976078,75.8128038 75.0035268,74.4869761 74.006209,73.847661"
          fill={color}
        />
      </g>
    </svg>
  );
};