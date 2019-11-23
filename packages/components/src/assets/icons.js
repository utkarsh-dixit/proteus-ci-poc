import React from "react";
import Svg, {
    Defs,
    ClipPath,
    Path,
    Rect,
    G,
    Text,
    Polygon,
    Use
} from "react-native-svg";

export const star = (color, height, style = {}) => {
    return (
        <Svg id="star-full" width={height} viewBox="0 0 475.075 475.075" height={height} style={style}>
            <Path fill={color ? color : "#EBEBEB"} d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704         c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706         l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136         c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.197,67.386         c4.004,2.286,7.81,3.423,11.416,3.423c3.819,0,6.715-1.376,8.713-4.142c1.992-2.758,2.991-6.139,2.991-10.136         c0-2.471-0.096-4.374-0.287-5.712l-24.555-142.749l103.637-101.068C472.604,195.33,475.075,190.76,475.075,186.573z"></Path>
        </Svg>
    );
}

export const camera = (width, style = {}) => {
    return (
        <Svg x="0px" y="0px" viewBox="0 0 42 31" width={width} style={style}>
            <G id="Default-Pages">
                <G id="Feed-Page" transform="translate(-61.000000, -2091.000000)">
                    <G id="Top-10-Attractions" transform="translate(42.000000, 2041.000000)">
                        <G id="Camera-Icon" transform="translate(19.000000, 50.000000)">
                            <Path d="M38.6478873,4.87962963 L31.7464789,4.87962963 L27.7042254,0.956790123 L27.6549264,0.956790123 L27.6056338,0.956790123 C27.3427209,0.637856 26.9976536,0.398661531 26.5704257,0.239194469 C26.1431914,0.0797335309 25.6995326,0 25.2394366,0 L16.8591549,0 C16.3990589,0 15.9554001,0.0956790123 15.5281722,0.287037037 C15.1009379,0.478395062 14.7230089,0.733535012 14.3943662,1.05246914 L10.4507042,4.87962963 L3.35211268,4.87962963 C2.89201668,4.87962963 2.44835912,4.95936316 2.02112676,5.11883022 C1.5938944,5.27829116 1.24882776,5.51748563 0.985915493,5.83641975 C0.657275313,6.15535388 0.410798963,6.50617284 0.246478873,6.88888889 C0.0821587831,7.27160494 0,7.68621195 0,8.13271605 L0,27.7469136 C0,28.1934177 0.0821587831,28.6080229 0.246478873,28.9907407 C0.410798963,29.3734586 0.657275313,29.7242782 0.985915493,30.0432099 C1.24882776,30.3621416 1.5938944,30.6013366 2.02112676,30.7608025 C2.44835912,30.9202683 2.89201668,31 3.35211268,31 L38.6478873,31 C39.1079833,31 39.5516421,30.9202683 39.9788764,30.7608025 C40.4061043,30.6013366 40.7511716,30.3621416 41.0140845,30.0432099 C41.3427272,29.7242782 41.5892029,29.3734586 41.7535243,28.9907407 C41.9178393,28.6080229 42,28.1934177 42,27.7469136 L42,8.13271605 C42,7.68621195 41.9178393,7.27160494 41.7535243,6.88888889 C41.5892029,6.50617284 41.3427272,6.15535388 41.0140845,5.83641975 C40.7511716,5.51748563 40.4061043,5.27829116 39.9788764,5.11883022 C39.5516421,4.95936316 39.1079833,4.87962963 38.6478873,4.87962963 Z M40.3239437,27.7469136 C40.3239437,28.1934177 40.1596286,28.5761301 39.8309859,28.8950617 C39.5023432,29.2139934 39.1079833,29.3734568 38.6478873,29.3734568 L3.35211268,29.3734568 C2.89201668,29.3734568 2.49765426,29.2139934 2.16901408,28.8950617 C1.8403739,28.5761301 1.67605634,28.1934177 1.67605634,27.7469136 L1.67605634,8.13271605 C1.67605634,7.68621195 1.8403739,7.30350202 2.16901408,6.9845679 C2.49765426,6.66563378 2.89201668,6.50617284 3.35211268,6.50617284 L11.1408451,6.50617284 L13.7042254,4.01851852 L13.7042254,4.20987654 L15.6760563,2.20061728 C15.8075096,2.00925926 15.9882619,1.8657438 16.2183067,1.77005867 C16.4483579,1.67437965 16.6619718,1.62654321 16.8591549,1.62654321 L25.2394366,1.62654321 C25.5023495,1.62654321 25.7323944,1.67437965 25.9295775,1.77005867 C26.1267606,1.8657438 26.2910819,1.9773683 26.4225352,2.10493827 L30.9577465,6.50617284 L38.6478873,6.50617284 C39.1079833,6.50617284 39.5023432,6.66563378 39.8309859,6.9845679 C40.1596286,7.30350202 40.3239437,7.68621195 40.3239437,8.13271605 L40.3239437,27.7469136 Z M21,9.01969039 C19.8427847,9.01969039 18.7579045,9.230258 17.7453385,9.65139321 C16.7327725,10.0725284 15.8648697,10.6691321 15.1416093,11.4412179 C14.3460208,12.1431121 13.731256,12.9853758 13.2973011,13.9680291 C12.8633463,14.9506824 12.6463688,16.0035137 12.6463688,17.1265432 C12.6463688,18.2495727 12.8633463,19.302404 13.2973011,20.2850573 C13.731256,21.2677106 14.3460208,22.1099743 15.1416093,22.8118686 C15.8648697,23.5839543 16.7327725,24.180558 17.7453385,24.6016932 C18.7579045,25.0228284 19.8427847,25.233396 21,25.233396 C22.1572153,25.233396 23.2420955,25.0228284 24.2546615,24.6016932 C25.2672275,24.180558 26.1351303,23.5839543 26.8583907,22.8118686 C27.6539792,22.1099743 28.268744,21.2677106 28.7026989,20.2850573 C29.1366537,19.302404 29.3536312,18.2495727 29.3536312,17.1265432 C29.3536312,16.0035137 29.1366537,14.9506824 28.7026989,13.9680291 C28.268744,12.9853758 27.6539792,12.1431121 26.8583907,11.4412179 C26.1351303,10.6691321 25.2672275,10.0725284 24.2546615,9.65139321 C23.2420955,9.230258 22.1572153,9.01969039 21,9.01969039 Z M21,23.4435714 C20.1320833,23.4435714 19.3003481,23.2681029 18.5047595,22.9171524 C17.709171,22.5662019 17.022085,22.109981 16.4434739,21.5484629 C15.8648628,20.9869448 15.3947543,20.3201564 15.0331206,19.5480707 C14.6714869,18.775985 14.490677,17.9688204 14.490677,17.1265432 C14.490677,16.284266 14.6714869,15.4771015 15.0331206,14.7050157 C15.3947543,13.93293 15.8648628,13.2661416 16.4434739,12.7046235 C17.022085,12.1431054 17.709171,11.6868846 18.5047595,11.3359341 C19.3003481,10.9849836 20.1320833,10.809515 21,10.809515 C21.8679167,10.809515 22.6996519,10.9849836 23.4952405,11.3359341 C24.290829,11.6868846 24.977915,12.1431054 25.5565261,12.7046235 C26.1351372,13.2661416 26.6052457,13.93293 26.9668794,14.7050157 C27.3285131,15.4771015 27.509323,16.284266 27.509323,17.1265432 C27.509323,17.9688204 27.3285131,18.775985 26.9668794,19.5480707 C26.6052457,20.3201564 26.1351372,20.9869448 25.5565261,21.5484629 C24.977915,22.109981 24.290829,22.5662019 23.4952405,22.9171524 C22.6996519,23.2681029 21.8679167,23.4435714 21,23.4435714 Z">
                            </Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    );
}

export const calendar = (width, style = {}) => {
    return (
        <Svg x="0px" y="0px" viewBox="0 0 34 35" width={width} style={style}>
            <G id="Default-Pages">
                <G id="Feed-Page" transform="translate(-65.000000, -2222.000000)">
                    <G id="This-Week-only" transform="translate(42.000000, 2175.000000)">
                        <G id="Calendar-Icon" transform="translate(23.000000, 49.000000)">
                            <Path d="M0,-1.57560976 L0,32.4243902 L34,32.4243902 L34,-1.57560976 L0,-1.57560976 Z M32.5902439,-0.165853659 L32.5902439,6.2195122 L1.4097561,6.2195122 L1.4097561,-0.165853659 L32.5902439,-0.165853659 Z M1.4097561,31.0146341 L1.4097561,7.62926829 L32.5902439,7.62926829 L32.5902439,31.0146341 L1.4097561,31.0146341 Z M10.6146341,4.14634146 L12.7707317,4.14634146 L12.7707317,1.9902439 L10.6146341,1.9902439 L10.6146341,4.14634146 Z M21.2292683,4.14634146 L23.3853659,4.14634146 L23.3853659,1.9902439 L21.2292683,1.9902439 L21.2292683,4.14634146 Z M12.1902439,12.6878049 C12.0796766,13.1300848 11.9552837,13.4617868 11.8170705,13.6829268 C11.6788627,13.9040668 11.4991888,14.0699205 11.2780488,14.1804878 C11.0569088,14.2910551 10.7943081,14.3601617 10.4902412,14.3878022 C10.1861797,14.415448 9.84065218,14.4569088 9.45365854,14.5121951 L9.20487805,14.5121951 L9.20487805,15.6731707 L11.9414634,15.6731707 L11.9414634,23.5512195 L13.4341463,23.5512195 L13.4341463,12.4390244 L12.1902439,12.4390244 L12.1902439,12.6878049 Z M20.4829268,16.004878 C20.1512195,16.004878 19.8333324,16.0601644 19.5292709,16.1707317 C19.2252041,16.281299 18.9349629,16.4195122 18.6585366,16.5853659 L19.1560976,14.0146341 L23.8,14.0146341 L23.8,12.604878 L17.995122,12.604878 L16.9170732,18.5756098 L18.1609756,18.5756098 L18.2439024,18.4926829 C18.4650424,18.1056893 18.7691039,17.815448 19.1560976,17.6219539 C19.5430912,17.4284544 19.95772,17.3317073 20.4,17.3317073 C20.7317073,17.3317073 21.0495944,17.4008139 21.3536612,17.5390217 C21.6577227,17.6772349 21.9203234,17.8569088 22.1414634,18.0780488 C22.3626034,18.2991888 22.5284571,18.5617895 22.6390244,18.865851 C22.7495917,19.1699178 22.804878,19.4878049 22.804878,19.8195122 C22.804878,20.1512195 22.7634173,20.4691066 22.6804905,20.7731734 C22.5975583,21.0772349 22.4455302,21.3674761 22.2243902,21.6439024 C22.0032503,21.8650424 21.7544751,22.0585366 21.4780488,22.2243902 C21.2016225,22.3902439 20.8699205,22.4731707 20.4829268,22.4731707 C20.1512195,22.4731707 19.847158,22.4178844 19.5707317,22.3073171 C19.2943054,22.1967497 19.0455302,22.0308961 18.8243902,21.8097561 C18.6032503,21.6439024 18.4373966,21.4227678 18.3268293,21.1463415 C18.2162619,20.8699152 18.1609756,20.5658537 18.1609756,20.2341463 L18.1609756,19.9853659 L16.6682927,19.9853659 L16.6682927,20.2341463 C16.6682927,20.7869936 16.7650398,21.2707291 16.9585339,21.6853632 C17.1520334,22.1000027 17.4146341,22.4731707 17.7463415,22.804878 C18.0780488,23.1365854 18.4650371,23.3853659 18.9073171,23.5512195 C19.349597,23.7170732 19.8471527,23.8 20.4,23.8 C20.9528473,23.8 21.4642232,23.6894327 21.9341437,23.4682927 C22.4040695,23.2471527 22.804878,22.9707317 23.1365854,22.6390244 C23.523579,22.3073171 23.8138203,21.9065085 24.0073197,21.436588 C24.2008139,20.9666622 24.297561,20.4552863 24.297561,19.902439 C24.297561,19.3495917 24.2146341,18.8243902 24.0487805,18.3268293 C23.8829268,17.8292683 23.6341463,17.4146341 23.302439,17.0829268 C22.9707317,16.7512195 22.5699231,16.4886188 22.0999973,16.2951246 C21.6300769,16.1016251 21.0910604,16.004878 20.4829268,16.004878 Z">
                            </Path>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    );
}

export const right_arrow = (width, style = {}) => {
    return (
        <Svg class="external-link-arrow" width={width} viewBox="0 0 64 64" style={style}>
            <G>
                <Path d="m60.533,15.733l-28.56, 28.328-28.579-28.348c-0.397-0.394-0.917-0.59-1.437-0.59s-1.039, 0.196-1.436,0.59c-0.793,0.787-0.793, 2.062 0,2.849l29.98,29.735c0.2,0.2 0.494, 0.375 0.757,0.476 0.75,0.282 1.597,0.107 2.166-0.456l29.981-29.735c0.793-0.787 0.793-2.062 0-2.849-0.794-0.786-2.078-0.786-2.872, 7.10543e-15z">
                </Path>
            </G>
        </Svg>
    );
};

export const half_star = (color, height, style = {}) => {
    return (
        <Svg id="star-half" width={height} viewBox="0 0 19 18" height={height} style={style}>
            <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G transform="translate(-154.000000, -83.000000)">
                    <G transform="translate(154.000000, 83.000000)">
                        <Path d="M9,14.9983037 L9.0015564,14.9973985 L14.2431108,17.7559529 C14.3987732,17.8461423 14.5470236,17.8912363 14.6878595,17.8912363 C14.8361124,17.8912363 14.9491507,17.8367477 15.0269819,17.7277688 C15.1048131,17.61879 15.1437287,17.4853867 15.1437287,17.3275552 C15.1437287,17.2298499 15.1400227,17.1546932 15.1326107,17.1020828 L14.1763976,11.4652717 L18.2125024,7.47441002 C18.4052274,7.27900046 18.5015886,7.09862396 18.5015886,6.93327546 C18.5015886,6.65519292 18.2940421,6.48233168 17.878939,6.41468923 L12.2973307,5.5917145 L9.54125588,0.461218322 C9.40041751,0.153072185 9.22393198,0.00328063965 9.0015564,0.00328063965 L9,0.00328308745 L9,14.9983037 Z" fill="#EBEBEB"></Path>
                        <Path d="M9,14.9983037 L4.25847781,17.7559529 C4.09540338,17.8461423 3.94715547,17.8912363 3.81372913,17.8912363 C3.65806671,17.8912363 3.5413199,17.8367477 3.4634887,17.7277688 C3.38565749,17.61879 3.34674189,17.4853867 3.34674189,17.3275552 C3.34674189,17.2824606 3.35415391,17.2073039 3.36898044,17.1020828 L4.32519099,11.4652717 L0.277968488,7.47441002 C0.0926552745,7.27148267 0,7.09110869 0,6.93327546 C0,6.65519292 0.207547809,6.48233168 0.622649653,6.41468923 L6.20425798,5.5917145 L8.45161899,0.461218322 C8.59212867,0.153791354 8.77830949,0.00398068662 9,0.00328308745 L9,14.9983037 Z" id="Combined-Shape" fill={color}></Path>
                    </G>
                </G>
            </G>
        </Svg>
    );
}