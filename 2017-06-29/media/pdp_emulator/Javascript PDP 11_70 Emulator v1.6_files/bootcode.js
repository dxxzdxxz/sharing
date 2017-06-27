// Javascript PDP 11/70 Emulator v1.6
// written by Paul Nankervis
// Please send suggestions, fixes and feedback to paulnank@hotmail.com
// I'm particularly interested in hearing from anyone with real experience on a PDP 11/70 front panel
//
// This code may be used freely provided the original author name is maintained in any modified source code
//
// http://skn.noip.me/pdp11/pdp11.html
//
//
var BOOTBASE=0140000;
var bootcode=[
0000005,0005037,0177776,0005037,0177772,0005037,0177564,0005037,
0177546,0005067,0000122,0010700,0062700,0177750,0010006,0010700,
0062700,0001214,0004767,0000130,0010700,0062700,0000102,0010037,
0000100,0012737,0000340,0000102,0052737,0000100,0177546,0010700,
0062700,0001226,0004767,0000070,0162706,0000256,0010600,0004767,
0000156,0005000,0000001,0005200,0005767,0000014,0001773,0012746,
0054000,0016746,0000002,0000006,0000000,0000000,0005267,0177772,
0000006,0105737,0177564,0100375,0110037,0177566,0000207,0000000,
0132737,0000100,0177564,0001374,0010067,0177762,0010700,0062700,
0000026,0010037,0000064,0012737,0000200,0000066,0152737,0000100,
0177564,0000207,0105777,0177726,0001406,0117737,0177720,0177566,
0005267,0177712,0000006,0105037,0177564,0000006,0000000,0000000,
0010067,0177770,0005067,0177766,0010700,0062700,0000026,0010037,
0000060,0012737,0000200,0000062,0152737,0000100,0177560,0000207,
0010046,0113700,0177562,0120027,0000015,0001456,0120027,0000177,
0001403,0120027,0000010,0001013,0005767,0177702,0001407,0005367,
0177674,0010700,0062700,0000544,0004767,0177564,0000455,0120027,
0000040,0002452,0120027,0000177,0002047,0004767,0177524,0120027,
0000172,0003005,0120027,0000141,0002402,0142700,0000040,0026727,
0177614,0000254,0002031,0110046,0016700,0177600,0066700,0177576,
0112610,0005267,0177570,0000420,0016700,0177560,0066700,0177556,
0105010,0010700,0062700,0000030,0010037,0000240,0012737,0000100,
0000242,0012737,0002000,0177772,0012600,0000006,0005037,0177772,
0010046,0010146,0010246,0010346,0010446,0010700,0062700,0000351,
0004767,0177374,0132737,0000100,0177564,0001374,0005004,0012703,
0141154,0112300,0001435,0016702,0177442,0112201,0001436,0120127,
0000040,0001773,0120001,0001010,0112300,0001412,0112201,0001410,
0120127,0000040,0001367,0000404,0112300,0001376,0005204,0000751,
0006304,0010700,0062700,0000060,0060004,0061404,0004714,0000405,
0010700,0062700,0000310,0004767,0177246,0005067,0177340,0010700,
0062700,0000366,0004767,0177230,0012604,0012603,0012602,0012601,
0012600,0000006,0002206,0000460,0000540,0000646,0001440,0000434,
0002776,0000462,0067503,0066555,0067141,0071544,0060440,0062562,
0041040,0067557,0026164,0044040,0066141,0026164,0052040,0071545,
0026164,0042040,0060551,0026147,0046040,0063551,0072150,0026163,
0047440,0052104,0060440,0062156,0044040,0066145,0006560,0041012,
0067557,0020164,0062544,0064566,0062543,0020163,0071141,0020145,
0045522,0020077,0046122,0020077,0050122,0020077,0071157,0052040,
0037515,0005015,0006400,0000012,0020010,0000010,0047502,0052117,
0044000,0046101,0000124,0042524,0052123,0042000,0040511,0000107,
0044514,0044107,0051524,0044000,0046105,0000120,0042117,0000124,
0042522,0047514,0040503,0042524,0000000,0047125,0047113,0053517,
0020116,0047503,0046515,0047101,0005104,0000015,0060520,0066165,
0047040,0067141,0062553,0073162,0071551,0026440,0070040,0072541,
0067154,0067141,0040153,0067550,0066564,0064541,0027154,0067543,
0005155,0005015,0000015,0047502,0052117,0020076,0052400,0045516,
0047516,0047127,0041040,0047517,0020124,0042504,0044526,0042503,
0006412,0020000,0020040,0020040,0041440,0047514,0045503,0052040,
0041511,0051513,0006412,0020000,0020040,0020040,0044440,0042524,
0040522,0044524,0047117,0005123,0000015,0010700,0062700,0177350,
0004767,0176534,0000207,0000000,0010700,0062700,0177473,0004767,
0176516,0000207,0000237,0013703,0177570,0001002,0012703,0001000,
0010302,0010700,0062700,0176274,0010001,0010700,0062700,0002262,
0012122,0020100,0103775,0000113,0005067,0176416,0012705,0015000,
0010537,0177570,0010504,0006204,0005000,0010501,0071004,0010002,
0070204,0060301,0020105,0001401,0000000,0077412,0077517,0010700,
0062700,0177570,0016703,0176342,0005002,0071227,0000010,0062703,
0000060,0110340,0010203,0001370,0004767,0176344,0000207,0000000,
0005067,0177772,0005067,0176302,0016737,0177762,0177570,0005005,
0100404,0102403,0101002,0002401,0101401,0000000,0005305,0100003,
0001402,0002001,0003401,0000000,0006005,0102002,0103001,0001001,
0000000,0112737,0000017,0177776,0100004,0102003,0002402,0101001,
0100401,0000000,0012703,0077777,0062703,0077777,0123727,0177776,
0000005,0001001,0000000,0112704,0001700,0100003,0020427,0177700,
0001401,0000000,0105004,0020427,0177400,0001401,0000000,0012705,
0125252,0010500,0010001,0010102,0010203,0010304,0010405,0160501,
0002401,0001401,0000000,0006102,0103001,0002401,0000000,0060203,
0005203,0005103,0060301,0103401,0003401,0000000,0006004,0050403,
0060503,0005203,0103402,0005301,0002401,0000000,0005100,0101401,
0000000,0040001,0060101,0003001,0003401,0000000,0000301,0020127,
0052125,0001004,0030405,0003002,0005105,0001001,0000000,0112700,
0177401,0100001,0000000,0077002,0005001,0005201,0077002,0005700,
0001002,0005701,0001401,0000000,0010700,0062700,0000010,0010007,
0000000,0005727,0000000,0010700,0062700,0000012,0010046,0000207,
0000000,0010700,0062700,0000014,0005046,0010046,0000002,0000000,
0000167,0000002,0000000,0012705,0000003,0010700,0062700,0000020,
0005037,0000006,0010037,0000004,0005745,0000000,0062706,0000004,
0005000,0012701,0007777,0010002,0062702,0000005,0022062,0177773,
0001402,0000000,0000000,0077111,0005267,0177262,0103001,0000000,
0026727,0175566,0002200,0101002,0000167,0177254,0010700,0062700,
0177016,0016703,0177230,0005002,0071227,0000010,0062703,0000060,
0110340,0010203,0001370,0004767,0175546,0000207,0005767,0175510,
0001403,0005067,0175502,0000207,0000237,0005037,0177572,0012704,
0077406,0012703,0172300,0005001,0005002,0004767,0000200,0012737,
0177600,0172376,0012703,0177600,0005001,0012702,0002000,0004767,
0000154,0012737,0177600,0177676,0012700,0000020,0012703,0172200,
0010423,0077002,0012700,0001600,0012701,0000067,0032737,0000010,
0177570,0001404,0012700,0007400,0012701,0000007,0010037,0172244,
0010037,0172264,0012737,0177600,0172276,0012737,0010000,0177776,
0010137,0172516,0012737,0000001,0177572,0012703,0040200,0010700,
0062700,0000074,0010002,0010700,0062700,0000322,0012246,0006623,
0020200,0103774,0012767,0040200,0175256,0000230,0000207,0012700,
0000010,0010263,0000060,0010163,0000040,0010463,0000020,0010423,
0062701,0000200,0062702,0000200,0077014,0000207,0012700,0000037,
0012701,0174000,0032737,0000001,0177570,0001414,0012700,0007417,
0010001,0005101,0032737,0000002,0177570,0001404,0012700,0036163,
0012701,0037000,0010102,0162702,0000002,0042702,0000001,0010203,
0042703,0177701,0012763,0000001,0040000,0012763,0000113,0040002,
0010204,0072427,0177772,0042704,0177600,0013703,0172244,0160403,
0010204,0072427,0177764,0042704,0177761,0010364,0172240,0010105,
0072527,0177764,0042705,0177761,0020504,0001402,0010365,0172240,
0012704,0000003,0010703,0062703,0000006,0000112,0077402,0032737,
0000004,0177570,0001005,0010002,0006002,0006101,0006000,0000712,
0010002,0006102,0006001,0006100,0000705,0005003,0112201,0001560,
0120127,0000040,0001773,0120127,0000122,0001415,0120127,0000124,
0001004,0112201,0120127,0000115,0001407,0010700,0062700,0176101,
0004767,0174734,0000207,0112201,0112200,0001416,0120027,0000040,
0001413,0120027,0000067,0003033,0162700,0000060,0002430,0006303,
0006303,0006303,0050003,0000760,0010700,0062700,0174466,0010037,
0000004,0005037,0000006,0120127,0000113,0001502,0120127,0000114,
0001414,0120127,0000120,0001523,0120127,0000115,0001555,0010700,
0062700,0175652,0004767,0174610,0000207,0000005,0000303,0012701,
0174400,0012761,0000013,0000004,0052703,0000004,0010311,0105711,
0100376,0105003,0052703,0000010,0010311,0105711,0100376,0016102,
0000006,0042702,0000077,0005202,0010261,0000004,0105003,0052703,
0000006,0010311,0105711,0100376,0005061,0000002,0005061,0000004,
0012761,0177000,0000006,0105003,0052703,0000014,0010311,0105711,
0100376,0042711,0000377,0005002,0005003,0005004,0005005,0005007,
0000005,0000303,0006303,0006303,0006303,0006303,0006303,0012701,
0177412,0010311,0005041,0012741,0177000,0012741,0000005,0005002,
0005003,0005004,0005005,0105711,0100376,0105011,0005007,0000005,
0012701,0176700,0012761,0000040,0000010,0010361,0000010,0012711,
0000021,0012761,0010000,0000032,0012761,0177000,0000002,0005061,
0000004,0005061,0000006,0005061,0000034,0012711,0000071,0105711,
0100376,0105011,0010300,0005007,0000005,0010300,0012701,0172526,
0005011,0012741,0177777,0010002,0000302,0062702,0060011,0010241,
0105711,0100376,0010002,0000302,0062702,0060003,0010211,0105711,
0100376,0005002,0005003,0012704,0143720,0005005,0005007,0004537,
0147150,0042117,0030524,0000061,0012737,0146314,0000014,0012737,
0000340,0000016,0012706,0150176,0010600,0005001,0005046,0012720,
0177777,0020627,0150136,0101372,0012737,0001000,0150152,0114037,
0150320,0005037,0150316,0012737,0000007,0150160,0000137,0145466,
0005000,0005200,0162704,0003100,0103374,0062704,0003100,0012746,
0055440,0005300,0001410,0000316,0162700,0000033,0103404,0012716,
0044044,0005700,0001370,0062600,0004537,0147020,0005000,0006304,
0006304,0006304,0060400,0006304,0006304,0060004,0005202,0000207,
0004537,0147076,0012701,0000040,0020001,0001423,0103514,0020027,
0000101,0103013,0012701,0000011,0020027,0000044,0001412,0020027,
0000056,0103501,0020027,0000071,0000402,0020027,0000132,0101073,
0160100,0160100,0000734,0120021,0001407,0105711,0001374,0162700,
0000070,0062700,0000010,0103146,0000207,0013700,0150310,0105737,
0150314,0001424,0012700,0150176,0005303,0100003,0010305,0005702,
0001406,0005302,0003157,0006304,0010564,0150176,0000556,0010520,
0020027,0150216,0103774,0000551,0012700,0150310,0023727,0150306,
0000002,0001110,0010546,0012705,0144724,0006304,0062704,0150176,
0011046,0004537,0147054,0005302,0100002,0000137,0146620,0001072,
0010400,0000137,0146652,0005726,0000543,0004537,0144606,0004537,
0147054,0011204,0012703,0000004,0004737,0144100,0077303,0005002,
0004737,0144200,0020227,0000003,0103773,0004537,0147234,0000040,
0000513,0004537,0147076,0012701,0147744,0004737,0144266,0010004,
0103403,0162701,0147735,0010104,0005202,0006304,0062704,0150136,
0020427,0150176,0101402,0012704,0150216,0004537,0147234,0000057,
0000562,0004737,0147322,0022737,0000002,0150306,0001003,0013702,
0150310,0000205,0000427,0110237,0150316,0000427,0004537,0144602,
0011202,0000412,0004537,0144602,0111201,0005201,0006301,0060102,
0000403,0004537,0144602,0062202,0013737,0150310,0150312,0010237,
0150310,0000576,0004537,0147234,0000077,0005037,0150306,0004537,
0147230,0000052,0005037,0150314,0005003,0005005,0005037,0150304,
0105037,0150321,0005004,0005002,0012706,0150136,0004537,0147076,
0120027,0000055,0001005,0005702,0001345,0105237,0150321,0000764,
0012701,0147757,0004737,0144266,0103004,0006304,0004737,0144166,
0000753,0106237,0150321,0103001,0005404,0063704,0150304,0006301,
0000171,0027716,0077261,0163704,0150304,0006304,0016402,0150176,
0010237,0150304,0005202,0001722,0000723,0010203,0010405,0105237,
0150314,0000714,0005703,0001413,0010537,0150170,0004537,0147054,
0012737,0000002,0150306,0010500,0004537,0146676,0000666,0013704,
0150170,0151702,0000701,0012737,0000002,0150306,0000404,0006104,
0012737,0000001,0150306,0005702,0001402,0010437,0150310,0013704,
0150310,0022737,0000001,0150306,0001405,0006204,0103760,0017700,
0003066,0000401,0111400,0004537,0146676,0000634,0004737,0147322,
0000624,0105237,0150315,0013700,0150306,0001614,0004737,0147322,
0105737,0150315,0001403,0013737,0150312,0150310,0060037,0150310,
0004537,0147034,0013746,0150306,0012737,0000002,0150306,0013700,
0150310,0004537,0146610,0011637,0150306,0012700,0027534,0005326,
0001401,0000300,0004537,0147020,0000712,0013700,0150306,0001735,
0004737,0147322,0160037,0150310,0000743,0012700,0150014,0006304,
0005703,0001421,0006205,0103572,0006305,0062704,0150216,0005302,
0001410,0100164,0020014,0001405,0020427,0150234,0103157,0005724,
0000771,0010514,0000675,0005302,0100406,0001150,0010064,0150216,
0005064,0150240,0000665,0005004,0012764,0150014,0150216,0012764,
0146314,0150262,0005064,0150240,0005724,0020427,0000020,0101764,
0000647,0022737,0000002,0150306,0001121,0004537,0147234,0000040,
0005703,0001514,0163705,0150310,0005305,0005305,0010500,0004537,
0146676,0010500,0006200,0103414,0022700,0177600,0003011,0022700,
0000177,0002406,0005337,0150306,0004537,0146676,0005237,0150306,
0000137,0144724,0012700,0150164,0012001,0012002,0011000,0020102,
0101327,0000115,0005201,0000401,0005001,0005703,0001447,0012737,
0000002,0150306,0013702,0150164,0013704,0150162,0005104,0020237,
0150166,0101306,0105737,0177560,0100703,0012746,0040057,0011200,
0005701,0001036,0040400,0040405,0020005,0001016,0010446,0004537,
0147034,0010200,0004537,0146610,0016600,0000002,0004537,0147020,
0011200,0004537,0146676,0012604,0022226,0000741,0000137,0144704,
0004537,0145624,0110021,0000713,0004537,0145624,0010021,0000707,
0000316,0020005,0001742,0012716,0037137,0010003,0005203,0005203,
0060203,0020305,0001732,0000316,0110000,0005200,0006300,0060200,
0020005,0000723,0005703,0001742,0112737,0000021,0150320,0006205,
0103735,0006305,0010537,0150154,0004537,0147246,0105037,0150317,
0105737,0150316,0001013,0012704,0000016,0017464,0150216,0150262,
0012774,0000003,0150216,0005304,0005304,0002367,0012600,0012601,
0012602,0012603,0012604,0012605,0011606,0013746,0150156,0042716,
0000020,0111637,0177776,0005737,0150316,0001410,0052716,0000020,
0012737,0146314,0000014,0012737,0000340,0000016,0013746,0150154,
0000006,0113700,0150320,0002652,0005702,0001250,0005703,0001402,
0010560,0150240,0004537,0147246,0123727,0150320,0000016,0101306,
0105737,0150316,0001303,0105237,0150317,0000720,0012637,0150154,
0012637,0150156,0112737,0000021,0150320,0010637,0150152,0012706,
0150152,0010546,0010446,0010346,0010246,0010146,0010046,0113704,
0150317,0001405,0105304,0001652,0004537,0147230,0000043,0105737,
0150316,0001010,0005004,0016474,0150262,0150216,0005724,0020427,
0000016,0101771,0013705,0150154,0105737,0150316,0001024,0005745,
0010537,0150154,0012704,0000016,0020564,0150216,0001420,0005304,
0005304,0002372,0004537,0147150,0042502,0000040,0010500,0062737,
0000002,0150154,0000432,0112704,0000020,0010564,0150216,0110437,
0150320,0005364,0150240,0003260,0012764,0000001,0150240,0004537,
0147150,0000102,0113700,0150320,0006200,0062700,0035460,0004537,
0147046,0113704,0150320,0016400,0150216,0012737,0000002,0150306,
0004537,0146610,0000137,0144712,0005737,0150174,0001030,0010046,
0012704,0150176,0012700,0150012,0021614,0103403,0021410,0101401,
0010400,0005724,0020427,0150216,0103767,0161016,0162700,0150176,
0103405,0006200,0062700,0026060,0004537,0147046,0012600,0012703,
0000006,0012704,0177776,0022737,0000001,0150306,0001023,0110046,
0006203,0005204,0000300,0004537,0146764,0004537,0147054,0042716,
0177600,0121627,0000040,0103002,0012716,0000077,0012700,0020000,
0052600,0000431,0010046,0062704,0000003,0005000,0006116,0006100,
0077403,0062700,0020060,0004537,0147020,0077313,0005726,0000300,
0105737,0177564,0100375,0110037,0177566,0000205,0012700,0005015,
0004537,0147046,0005000,0004537,0147020,0000761,0012700,0000075,
0000757,0105737,0177560,0100375,0113700,0177562,0000207,0004737,
0147062,0005200,0042700,0177600,0005300,0001771,0120027,0000012,
0001412,0120027,0000140,0101402,0162700,0000040,0004537,0147020,
0122700,0000040,0001754,0000205,0113700,0150160,0100003,0113700,
0150156,0000404,0106200,0106000,0106000,0106000,0042700,0000020,
0110037,0177776,0113737,0177560,0150322,0113737,0177564,0150323,
0105037,0177560,0105037,0177564,0004537,0147034,0112500,0001675,
0004537,0147020,0000773,0112737,0000340,0177776,0004537,0147034,
0105737,0177564,0100375,0032737,0004000,0177560,0001403,0105737,
0177560,0100375,0113737,0150322,0177560,0113737,0150323,0177564,
0000205,0005702,0001412,0022737,0000001,0150306,0001404,0101005,
0010477,0000744,0000402,0110477,0000736,0000207,0004737,0147062,
0010346,0001404,0010516,0001002,0013716,0150172,0012705,0147460,
0005001,0005003,0004715,0077003,0004715,0004737,0147504,0010402,
0162702,0000004,0004737,0147504,0061604,0005702,0001431,0010401,
0004715,0002004,0105703,0001755,0000003,0000753,0110021,0000770,
0052737,0000001,0177560,0004737,0147062,0042700,0177400,0060003,
0005302,0000207,0004715,0010004,0004715,0000300,0050004,0000207,
0005202,0005201,0040201,0010137,0150172,0004715,0105703,0001344,
0040204,0010437,0150154,0112737,0000021,0150320,0000137,0144712,
0004737,0147062,0012703,0147642,0005001,0005000,0005200,0004513,
0010400,0062700,0000006,0160500,0004513,0010500,0004513,0020504,
0103004,0112500,0004537,0147650,0000772,0110100,0004513,0004513,
0000745,0004537,0147650,0000300,0160001,0000137,0147020,0145246,
0145234,0144370,0144522,0145044,0145146,0145072,0145242,0144644,
0144634,0145372,0145104,0147560,0145644,0146010,0146064,0146000,
0147354,0145522,0146242,0144312,0144626,0145650,0144452,0145160,
0145352,0144662,0050123,0046115,0041525,0043101,0041122,0005000,
0020415,0026044,0035457,0037074,0041100,0042103,0043105,0044507,
0047514,0051120,0053523,0056130,0057536,0000000,0000003,0000000
];