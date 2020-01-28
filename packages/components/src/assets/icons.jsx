import React from "react";
import Svg, {
    Path,
    G,
    Circle,
    Symbol
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
        <Svg x="0px" y="0px" viewBox="0 0 42 31" width={width} height={width} style={style}>
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
        <Svg x="0px" y="0px" viewBox="0 0 34 35" width={width} height={width} style={style}>
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
        <Svg id="Capa_1" x="0px" y="0px"
        width={width} height={width} viewBox="0 0 451.847 451.847" style={style}>
<G>
	<Path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
</G>
   </Svg>
    );
};

export const explore = (height, color) => {
    return (
        <Svg id="explore" viewBox="0 0 19 19" height={height} width={height} fill={color} stroke={color}>
		<G id="compass" transform="translate(-1.5 -1.5)">
			<Circle id="Ellipse_7" cx="9" cy="9" r="9" fill="none" strokeLinejoin="round" transform="translate(2 2)"></Circle>
			<Path id="Path_817" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" fill="none" strokeLinejoin="round" transform="translate(-1 -1)"></Path>
		</G>
	</Svg>
    );
}

export const collections = (height, color) => {
    return (
        <Svg id="collections" height={height} width={height} fill={color} stroke={color} viewBox="0 0 17 19.022">
		<G transform="translate(-1148.268 -2608.721)">
			<Path fill="none" strokeLinejoin="round" d="M1168.759,2610.629v-1.408h14.009v10.662h-1.137" transform="translate(-18)"></Path>
			<Path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M1180.775,2621.826h0v-10.3h-14.007v15.691s.7.056,3.015,0c5.977-.144,4.745-5.042,10.992-5.39" transform="translate(-18)"></Path>
		</G>
	</Svg>
    );
};

export const account = (height, color) => {
    return  (
        <Svg height={height} width={height} fill="none" stroke={color} viewBox="0 0 18 20" id="account">
		<G>
			<Path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" strokeLinecap="round" strokeLinejoin="round"></Path>
			<Path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" strokeLinecap="round" strokeLinejoin="round"></Path>
		</G>
	</Svg>
    );
}

export const half_star = (color, height, style = {}) => {
    return (
        <Svg id="star-half" width={height} viewBox="0 0 19 18" height={height} style={style}>
            <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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

export const cross = (color, height) => {
    return (
        <Svg width={height} height={height} preserveAspectRatio="xMidYMid meet"  xmlSpace="preserve" viewBox="0 0 47.971 47.971">
<G>
	<Path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill={color}/>
        </G>
        </Svg>
    )
}

export const tourListPageSVG = () => {
    return (
        <Svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
    <Symbol id='down-no-tail-arrow' viewBox="0 0 284.9 284.9">
        <Path d="M282.1 76.5l-14.3-14.3c-1.9-1.9-4.1-2.9-6.6-2.9 -2.5 0-4.7 1-6.6 2.9L142.5 174.4 30.3 62.2c-1.9-1.9-4.1-2.9-6.6-2.9 -2.5 0-4.7 1-6.6 2.9L2.9 76.5C1 78.4 0 80.6 0 83.1c0 2.5 1 4.7 2.9 6.6l133 133c1.9 1.9 4.1 2.9 6.6 2.9s4.7-1 6.6-2.9L282.1 89.6c1.9-1.9 2.8-4.1 2.8-6.6C284.9 80.6 284 78.4 282.1 76.5z"/>
    </Symbol>
    <Symbol id="up-no-tail-arrow" viewBox="0 0 451.8 451.8">
        <Path d="M248.3 106.4l194.3 194.3c12.4 12.4 12.4 32.4 0 44.7 -12.4 12.4-32.4 12.4-44.7 0L225.9 173.5 54 345.4c-12.4 12.4-32.4 12.4-44.7 0 -12.4-12.4-12.4-32.4 0-44.7L203.6 106.4c6.2-6.2 14.3-9.3 22.4-9.3C234 97.1 242.1 100.2 248.3 106.4z"/>
    </Symbol>
    <Symbol id='left-no-tail-arrow' viewBox="0 0 284.9 284.9">
        <Path d="M110.5 142.5L222.7 30.3c1.9-1.9 2.9-4.1 2.9-6.6 0-2.5-1-4.7-2.9-6.6L208.4 2.9C206.5 1 204.3 0 201.9 0c-2.5 0-4.7 1-6.6 2.9L62.2 135.9c-1.9 1.9-2.9 4.1-2.9 6.6 0 2.5 0.9 4.7 2.9 6.6l133 133c1.9 1.9 4.1 2.9 6.6 2.9 2.5 0 4.7-1 6.6-2.9l14.3-14.3c1.9-1.9 2.9-4.1 2.9-6.6 0-2.5-0.9-4.7-2.9-6.6L110.5 142.5z"/>
    </Symbol>
    <Symbol id='right-no-tail-arrow' viewBox="0 0 284.9 284.9">
        <Path d="M222.7 135.9L89.7 2.9C87.7 1 85.6 0 83.1 0c-2.5 0-4.7 1-6.6 2.9L62.2 17.1c-1.9 1.9-2.9 4.1-2.9 6.6 0 2.5 0.9 4.7 2.9 6.6l112.2 112.2L62.2 254.7c-1.9 1.9-2.9 4.1-2.9 6.6 0 2.5 0.9 4.7 2.9 6.6l14.3 14.3c1.9 1.9 4.1 2.9 6.6 2.9 2.5 0 4.7-1 6.6-2.9l133-133c1.9-1.9 2.9-4.1 2.9-6.6S224.6 137.8 222.7 135.9z"/>
    </Symbol>
    <Symbol id='check-mark' viewBox="0 0 612 612">
        <Path d="M595.6 81.6c-21.9-21.9-57.4-21.9-79.3 0L183 414.9l-88.6-76.1c-21.6-21.6-56.6-21.6-78.2 0 -21.6 21.6-21.6 56.6 0 78.2l132.4 113.7c21.6 21.6 56.6 21.6 78.2 0 2.2-2.2 4-4.6 5.7-7 0.3-0.3 0.7-0.5 1-0.8l362.1-362.1C617.5 138.9 617.5 103.4 595.6 81.6z" fill="#FFF"/>
    </Symbol>
    <Symbol id='MORNING' viewBox="0 0 24 17">
        <G fill="none">
            <G fill="#BABABA">
                <Path d="M12 4C12.2 4 12.4 3.9 12.6 3.8 12.7 3.6 12.8 3.4 12.8 3.2L12.8 1.6C12.8 1.4 12.7 1.2 12.6 1 12.4 0.9 12.2 0.8 12 0.8 11.8 0.8 11.6 0.9 11.4 1 11.3 1.2 11.2 1.4 11.2 1.6L11.2 3.2C11.2 3.4 11.3 3.6 11.4 3.8 11.6 3.9 11.8 4 12 4ZM4.2 13.6C4.4 12.7 4.7 11.8 5.2 11.1 5.6 10.3 6.2 9.6 6.9 9 7.6 8.5 8.4 8 9.3 7.7 10.1 7.4 11 7.2 12 7.2 13 7.2 13.9 7.4 14.8 7.7 15.6 8 16.4 8.5 17.1 9 17.8 9.6 18.4 10.3 18.8 11.1 19.3 11.8 19.6 12.7 19.8 13.6L21.5 13.6C21.4 12.5 21 11.4 20.4 10.4 19.9 9.5 19.2 8.6 18.4 7.9 17.5 7.2 16.5 6.6 15.4 6.2 14.4 5.8 13.2 5.6 12 5.6 10.8 5.6 9.6 5.8 8.6 6.2 7.5 6.6 6.5 7.2 5.7 7.9 4.8 8.6 4.1 9.5 3.6 10.4 3 11.4 2.7 12.5 2.5 13.6L4.2 13.6ZM21.6 7.5L22.7 6.4C22.9 6.3 23 6.1 23 5.8 23 5.6 22.9 5.4 22.7 5.3 22.6 5.1 22.4 5 22.2 5 21.9 5 21.8 5.1 21.6 5.3L20.5 6.4C20.3 6.6 20.2 6.7 20.2 7 20.2 7.2 20.3 7.4 20.5 7.5 20.6 7.7 20.8 7.8 21 7.8 21.3 7.8 21.4 7.7 21.6 7.5ZM2.4 7.5C2.6 7.7 2.7 7.8 3 7.8 3.2 7.8 3.4 7.7 3.5 7.5 3.7 7.4 3.8 7.2 3.8 7 3.8 6.7 3.7 6.6 3.5 6.4L2.4 5.3C2.2 5.1 2.1 5 1.8 5 1.6 5 1.4 5.1 1.3 5.3 1.1 5.4 1 5.6 1 5.8 1 6.1 1.1 6.3 1.3 6.4L2.4 7.5ZM23.2 15.2L0.8 15.2C0.6 15.2 0.4 15.3 0.2 15.4 0.1 15.6 0 15.8 0 16 0 16.2 0.1 16.4 0.2 16.6 0.4 16.7 0.6 16.8 0.8 16.8L23.2 16.8C23.4 16.8 23.6 16.7 23.8 16.6 23.9 16.4 24 16.2 24 16 24 15.8 23.9 15.6 23.8 15.4 23.6 15.3 23.4 15.2 23.2 15.2Z"/>
            </G>
        </G>
    </Symbol>
    <Symbol id='NOON' viewBox="0 0 26 26">
        <G fill="none">
            <G fill="#BABABA">
                <Path d="M3.3 12.2L0.8 12.2C0.6 12.2 0.4 12.3 0.2 12.4 0.1 12.6 0 12.8 0 13 0 13.2 0.1 13.4 0.2 13.6 0.4 13.7 0.6 13.8 0.8 13.8L3.3 13.8C3.5 13.8 3.7 13.7 3.8 13.6 4 13.4 4.1 13.2 4.1 13 4.1 12.8 4 12.6 3.8 12.4 3.7 12.3 3.5 12.2 3.3 12.2ZM20.8 6.3L22.5 4.6C22.7 4.5 22.8 4.3 22.8 4 22.8 3.8 22.7 3.6 22.5 3.5 22.4 3.3 22.2 3.3 22 3.3 21.7 3.3 21.5 3.3 21.4 3.5L19.7 5.2C19.5 5.3 19.4 5.5 19.4 5.8 19.4 6 19.5 6.2 19.7 6.3 19.8 6.5 20 6.6 20.2 6.6 20.5 6.6 20.7 6.5 20.8 6.3ZM5.5 6.7C5.7 6.8 5.9 6.9 6.1 6.9 6.3 6.9 6.5 6.8 6.7 6.7 6.8 6.5 6.9 6.3 6.9 6.1 6.9 5.9 6.8 5.7 6.7 5.5L5 3.8C4.8 3.7 4.6 3.6 4.4 3.6 4.2 3.6 4 3.7 3.8 3.8 3.7 4 3.6 4.2 3.6 4.4 3.6 4.6 3.7 4.8 3.8 5L5.5 6.7ZM13 4.1C13.2 4.1 13.4 4 13.6 3.8 13.7 3.7 13.8 3.5 13.8 3.3L13.8 0.8C13.8 0.6 13.7 0.4 13.6 0.2 13.4 0.1 13.2 0 13 0 12.8 0 12.6 0.1 12.4 0.2 12.3 0.4 12.2 0.6 12.2 0.8L12.2 3.3C12.2 3.5 12.3 3.7 12.4 3.8 12.6 4 12.8 4.1 13 4.1ZM20.5 19.3C20.3 19.2 20.1 19.1 19.9 19.1 19.7 19.1 19.5 19.2 19.3 19.3 19.2 19.5 19.1 19.7 19.1 19.9 19.1 20.1 19.2 20.3 19.3 20.5L21 22.2C21.2 22.3 21.4 22.4 21.6 22.4 21.8 22.4 22 22.3 22.2 22.2 22.3 22 22.4 21.8 22.4 21.6 22.4 21.4 22.3 21.2 22.2 21L20.5 19.3ZM13 5.7C12 5.7 11 5.9 10.1 6.3 9.3 6.6 8.5 7.2 7.8 7.8 7.2 8.5 6.6 9.3 6.3 10.1 5.9 11 5.7 12 5.7 13 5.7 14 5.9 15 6.3 15.9 6.6 16.7 7.2 17.5 7.8 18.2 8.5 18.8 9.3 19.4 10.1 19.7 11 20.1 12 20.3 13 20.3 14 20.3 15 20.1 15.9 19.7 16.7 19.4 17.5 18.8 18.2 18.2 18.8 17.5 19.4 16.7 19.7 15.9 20.1 15 20.3 14 20.3 13 20.3 12 20.1 11 19.7 10.1 19.4 9.3 18.8 8.5 18.2 7.8 17.5 7.2 16.7 6.6 15.9 6.3 15 5.9 14 5.7 13 5.7ZM13 18.7C12.2 18.7 11.5 18.5 10.8 18.2 10.1 17.9 9.5 17.5 9 17 8.5 16.5 8.1 15.9 7.8 15.2 7.5 14.5 7.3 13.8 7.3 13 7.3 12.2 7.5 11.5 7.8 10.8 8.1 10.1 8.5 9.5 9 9 9.5 8.5 10.1 8.1 10.8 7.8 11.5 7.5 12.2 7.3 13 7.3 13.8 7.3 14.5 7.5 15.2 7.8 15.9 8.1 16.5 8.5 17 9 17.5 9.5 17.9 10.1 18.2 10.8 18.5 11.5 18.7 12.2 18.7 13 18.7 13.8 18.5 14.5 18.2 15.2 17.9 15.9 17.5 16.5 17 17 16.5 17.5 15.9 17.9 15.2 18.2 14.5 18.5 13.8 18.7 13 18.7ZM6 18.8L4.3 20.5C4.2 20.7 4.1 20.9 4.1 21.1 4.1 21.3 4.2 21.5 4.3 21.7 4.5 21.8 4.7 21.9 4.9 21.9 5.1 21.9 5.3 21.8 5.5 21.7L7.2 20C7.3 19.8 7.4 19.6 7.4 19.4 7.4 19.2 7.3 19 7.2 18.8 7 18.7 6.8 18.6 6.6 18.6 6.4 18.6 6.2 18.7 6 18.8ZM25.2 12.2L22.8 12.2C22.5 12.2 22.3 12.3 22.2 12.4 22 12.6 21.9 12.8 21.9 13 21.9 13.2 22 13.4 22.2 13.6 22.3 13.7 22.5 13.8 22.8 13.8L25.2 13.8C25.4 13.8 25.6 13.7 25.8 13.6 25.9 13.4 26 13.2 26 13 26 12.8 25.9 12.6 25.8 12.4 25.6 12.3 25.4 12.2 25.2 12.2ZM13 21.9C12.8 21.9 12.6 22 12.4 22.2 12.3 22.3 12.2 22.5 12.2 22.8L12.2 25.2C12.2 25.4 12.3 25.6 12.4 25.8 12.6 25.9 12.8 26 13 26 13.2 26 13.4 25.9 13.6 25.8 13.7 25.6 13.8 25.4 13.8 25.2L13.8 22.8C13.8 22.5 13.7 22.3 13.6 22.2 13.4 22 13.2 21.9 13 21.9Z"/>
            </G>
        </G>
    </Symbol>
    <Symbol id='EVENING' viewBox="0 0 330 330" fill="#BABABA">
        <Path d="M315 150h-35.1c0.1-1.7 0.1-3.3 0.1-5 0-63.4-51.6-115-115-115S50 81.6 50 145c0 1.7 0 3.3 0.1 5H15c-8.3 0-15 6.7-15 15s6.7 15 15 15h50c0.7 0.1 1.4 0.2 2.1 0.2 0.7 0 1.4-0.1 2-0.2h193.9c0.1 0 0.1 0 0.2 0H315c8.3 0 15-6.7 15-15S323.3 150 315 150zM80 145c0-46.9 38.1-85 85-85s85 38.1 85 85c0 1.7-0.1 3.3-0.2 5H80.2C80.1 148.3 80 146.7 80 145z"/>
        <Path d="M205 270h-80c-8.3 0-15 6.7-15 15s6.7 15 15 15h80c8.3 0 15-6.7 15-15S213.3 270 205 270z"/>
        <Path d="M275 210h-80c-8.3 0-15 6.7-15 15s6.7 15 15 15h80c8.3 0 15-6.7 15-15S283.3 210 275 210z"/>
        <Path d="M150 225c0-8.3-6.7-15-15-15H55c-8.3 0-15 6.7-15 15s6.7 15 15 15h80C143.3 240 150 233.3 150 225z"/>
    </Symbol>
    <Symbol id='NIGHT' viewBox="-8 -8 72 72">
        <Path d="m59 55c0-0.1 0-0.3-0.1-0.4 0-0.1-0.1-0.3-0.2-0.4 0-0.1-0.1-0.2-0.1-0.2 0 0-0.1 0-0.1-0.1-0.1-0.1-0.2-0.2-0.3-0.3-0.1-0.1-0.2-0.2-0.3-0.2-0.1-0.1-0.2-0.1-0.3-0.1-0.1 0-0.3-0.1-0.4-0.1 0 0-0.1 0-0.1 0-16.3 0-30.6-12.5-30.6-26.9 0-9.2 4.8-17.6 12.7-22.7 0 0 0.1-0.1 0.1-0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.2-0.3 0.2-0.4 0-0.1 0-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.3 0-0.1 0-0.1 0-0.2 0-0.1 0-0.2-0.1-0.3 0-0.1-0.1-0.3-0.2-0.4 0 0 0-0.1-0.1-0.1 0-0.1-0.1-0.1-0.1-0.2-0.1-0.1-0.2-0.2-0.3-0.3-0.1-0.1-0.2-0.2-0.3-0.2-0.1-0.1-0.2-0.1-0.3-0.1-0.2-0.1-0.3-0.1-0.5-0.1-0.1 0-0.1 0-0.2 0-17.7 0-32 14.4-32 32 0 17.6 14.4 32 32 32 7.4 0 14.5-2.6 20.2-7.2 0 0 0-0.1 0.1-0.1 0.1-0.1 0.2-0.2 0.3-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.1-0.2 0.1-0.3 0-0.1 0.1-0.3 0.1-0.4 0 0 0-0.1 0-0.1 0-0.1 0-0.2-0.1-0.3zm-48.9-23c0-13.1 9-24 21.2-27.1-5.7 5.7-8.9 13.3-8.9 21.5 0 14.7 12.9 27.7 28.7 30.4-4 2.1-8.5 3.2-13 3.2-15.4 0-28-12.5-28-28z" fill="#BABABA"/>
    </Symbol>
    <Symbol id='filter-icon' viewBox="0 0 65 64">
        <Path fill="#FFFFFF" d="M24.289,62.011 C24.289,62.647 24.592,63.244 25.103,63.621 C25.451,63.877 25.867,64.011 26.289,64.011 C26.488,64.011 26.688,63.982 26.883,63.921 L39.545,59.983 C40.382,59.722 40.951,58.949 40.951,58.073 L40.951,32.851 L64.206,3.315 C64.68,2.713 64.769,1.893 64.434,1.205 C64.1,0.516 63.401,0.078 62.635,0.078 L2.635,0.078 C1.869,0.078 1.17,0.516 0.836,1.205 C0.501,1.893 0.59,2.714 1.064,3.315 L24.29,32.817 L24.29,62.011 L24.289,62.011 Z M6.755,4.077 L58.515,4.077 L37.38,30.921 C37.103,31.274 36.951,31.709 36.951,32.158 L36.951,56.6 L28.289,59.293 L28.289,32.123 C28.289,31.674 28.138,31.238 27.86,30.886 L6.755,4.077 Z"/>
    </Symbol>
    <Symbol id='sort-icon' viewBox="0 0 35 34">
        <Path d="M18.933 11.763c-.226.253-.509.38-.848.38-.34 0-.623-.127-.849-.38l-6.374-7.361V34H8.448V4.364l-6.374 7.4c-.251.252-.54.379-.867.379-.327 0-.616-.127-.868-.38A1.162 1.162 0 0 1 0 10.91c0-.342.113-.627.34-.854L8.711.342c.126-.127.27-.216.434-.266.163-.05.333-.076.51-.076.15 0 .307.025.47.076.164.05.309.139.434.266l8.373 9.714c.252.227.377.512.377.854 0 .341-.125.626-.377.853zm14.86-6.944H19.31c-.327 0-.61-.12-.848-.36a1.17 1.17 0 0 1-.359-.854c0-.329.12-.614.359-.854s.521-.36.848-.36l14.483.038c.327 0 .61.113.849.341.239.228.358.506.358.835 0 .329-.12.613-.358.854-.24.24-.522.36-.849.36zM16.897 31.571h16.896c.327 0 .61.12.849.36.239.241.358.526.358.855 0 .329-.12.613-.358.854-.24.24-.522.36-.849.36H16.897c-.327 0-.61-.12-.849-.36a1.17 1.17 0 0 1-.358-.854c0-.33.12-.614.358-.854.239-.24.522-.36.849-.36zm16.896-4.857H16.897c-.327 0-.61-.12-.849-.36a1.17 1.17 0 0 1-.358-.854c0-.329.12-.613.358-.854.239-.24.522-.36.849-.36h16.896c.327 0 .61.12.849.36s.358.525.358.854c0 .329-.12.613-.358.854-.24.24-.522.36-.849.36zm0-7.285H16.897c-.327 0-.61-.12-.849-.36a1.17 1.17 0 0 1-.358-.855c0-.354.12-.645.358-.872.239-.228.522-.342.849-.342h16.896c.327 0 .61.114.849.342.239.227.358.518.358.872 0 .33-.12.614-.358.854-.24.24-.522.36-.849.36zm0-7.324h-9.655c-.327 0-.61-.114-.849-.342a1.153 1.153 0 0 1-.358-.872c0-.33.12-.608.358-.835.24-.228.522-.342.849-.342h9.655c.327 0 .61.114.849.342.239.227.358.506.358.835 0 .354-.12.645-.358.872a1.189 1.189 0 0 1-.849.342z" fill-rule="evenodd"/>
    </Symbol>
    <Symbol id='filter-icon-2' viewBox="0 0 26 25">
        <Path fillRule="evenodd" strokeWidth=".55" d="M4.607 19.44c.364-1.82 1.947-3.19 3.842-3.19 1.896 0 3.478 1.37 3.842 3.19h12.102c.433 0 .784.357.784.797 0 .44-.351.797-.784.797H12.29c-.364 1.82-1.946 3.19-3.842 3.19-1.895 0-3.478-1.37-3.842-3.19H1.392a.791.791 0 0 1-.784-.797c0-.44.351-.798.784-.798h3.215zm3.842 3.19c-1.297 0-2.352-1.074-2.352-2.393 0-1.32 1.055-2.393 2.352-2.393s2.352 1.074 2.352 2.393c0 1.319-1.055 2.393-2.352 2.393zm5.045-11.166c.363-1.82 1.946-3.19 3.842-3.19 1.895 0 3.478 1.37 3.842 3.19h3.215c.433 0 .784.357.784.798 0 .44-.351.797-.784.797h-3.215c-.364 1.82-1.947 3.19-3.842 3.19-1.896 0-3.479-1.37-3.842-3.19H1.392a.791.791 0 0 1-.784-.797c0-.44.351-.798.784-.798h12.102zm3.842 3.19c-1.297 0-2.353-1.073-2.353-2.392 0-1.32 1.056-2.393 2.353-2.393 1.297 0 2.352 1.073 2.352 2.393 0 1.319-1.055 2.392-2.352 2.392zM4.606 3.49C4.972 1.669 6.555.299 8.45.299c1.896 0 3.478 1.37 3.842 3.19h12.102c.433 0 .784.357.784.797 0 .44-.351.798-.784.798H12.29c-.364 1.82-1.946 3.19-3.842 3.19-1.895 0-3.478-1.37-3.842-3.19H1.392a.791.791 0 0 1-.784-.798c0-.44.351-.797.784-.797h3.215zm3.843 3.19c-1.297 0-2.352-1.074-2.352-2.393 0-1.319 1.055-2.392 2.352-2.392s2.352 1.073 2.352 2.392c0 1.32-1.055 2.393-2.352 2.393z"/>
    </Symbol>
    <Symbol id="solid-arrow" viewBox="0 0 24 12">
        <Path fill="#545454" fillRule="evenodd" d="M0 0l12 12L24 0z"/>
    </Symbol>
    <Symbol id='back-button-grey' viewBox="0 0 16 27">
      <Path fill="#BABABA" fillRule="evenodd" d="M16 2.7L5.417 13.5 16 24.3 13.333 27 0 13.5 13.333 0z"/>
    </Symbol>
</Svg>

    );
};