1 'Test program
2 Ovrd 100
3 Accel 100,100
4 Loadset 0,0
5 OAdl On
6 '---First camera check---
7 Cnt 1                   'Enable Continuous Movement
8 pPosAux=pMin3           'Move to approach position
9 pPosAux.Z=700.0
10 Mov pPosAux
11 pPosAux=pMin3           'Move to below position
12 pPosAux.Z=pMin3.Z-20
13 Mvs pPosAux
14 Cnt 0                   'Disable continuous movement
15 Ovrd 5                  'Set speed
16 Mvs pMin3               'Move into position
17 Dly 0.1                 'Delay for positioning
18 Dly 1                   'Camera check
19 Ovrd 80                 'Set Speed
20 Cnt 1                   'Enable Continuous Movement
21 pPosAux=pMin3           'Move to below position
22 pPosAux.Z=pMin3.Z-20
23 Mvs pPosAux
24 Mov pHi3                'Move to High res check
25 Dly 0.1                 'Delay for positioning
26 Dly 1                   'Camera check