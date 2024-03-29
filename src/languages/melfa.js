/*
Language: MELFA
Author: Ruben Zsedely <zserub1000@gmail.com>
Description: Mitsubishi robot programming language support
*/

export default function (hljs) {
    return {
        name: "MELFA",
        keywords: {
            keyword: 'While Select Case ElseIf For To Return Default If Then With Then EndIf EndSelect FEnd Next WEnd Break And Not Or Xor Exit GoTo GoSub Dly Wait Error Priority ResetErr Stop Hlt Clear Skip XLoad XRun XRst XClr XStp On Off',
            built_in: 'Pos Jnt Inte Float Mov Mvs Mr Mr2 Mr3 Mc Ma Tune Spl Act Ovrd Spd JOvrd Cnt Accel Tool CmpJnt CmpPos CmpTool CmpOff CmpG Prec Torq JRC Fine Servo HOpen HClose ColChk'
        },
        contains: [
            {
                className: 'comment',
                begin: "'.*"
            },
            {
                className: 'linenumber',
                begin: '^\\d+'
            },
            {
                className: 'number',    //octal
                begin: '-?&O[0-7]+',
                relevance: 0,
                illegal: '\\S'
            },
            {
                className: 'number',    //hex
                begin: '-?&H[0-9A-F]+',
                relevance: 0,
                illegal: '\\S'
            },
            {
                className: 'number',    //decimal
                begin: '-?\\d+(\\.\\d+)?',
                relevance: 0,
                illegal: '\\S'
            },
            {
                className: 'control',
                begin: '\\b(While|Select|Case|Else(If)?|For|To|Return|Default|If|Then|With|WthIf|EndIf|EndSelect|FEnd|Next|WEnd|Break|And|Not|Or|Xor)\\b',
                relevance: 0,
                illegal: '\\S'
            },
            {
                className: 'operator',
                begin: '!|\\$|%|&|\\-|\\+|~|==|=|!=|!==|<=|>=|#=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|/=|%=|\\+=|\\-=|&=|\\^=\\b'
            },
            {
                className: 'other',
                begin: '\\b(Exit|Go(To|Sub)|Dly|Wait|Error|Priority|ResetErr|Stop|Hlt|Clear|Skip|X(Load|Run|Rst|Clr|Stp))\\b',
                case_insensitive: true
            },
            {
                className: 'string',
                begin: '"',
                end: '"'
            },
            {
                className: 'type',
                begin: '\\B\\*\\w+'
            },
            {
                className: 'keyword_bold',
                begin: '\\b(Call|Function|Def|On|Off)\\b',
                case_insensitive: true
            },
            {
                className: 'function',
                begin: '((\\b[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b)(?=\\(\\)?))'
            },
            {
                className: 'type',
                begin: '\\b(Pos|Jnt|Inte|Float)\\b',
                case_insensitive: true
            },
            {
                className: 'function',
                begin: '\\b(Mov|Mv(s|r|r2|r3|c|a| Tune|Spl)|Act|Ovrd|Spd|JOvrd|Cnt|Accel|Tool|Cmp( Jnt| Pos| Tool| Off|G)|Prec|Torq|JRC|Fine|Servo|H(Open|Close)|ColChk)\\b',
                case_insensitive: true
            },
            {
                className: 'variable',
                begin: '\\b(M_\\w+|J_\\w+|P_\\w+)\\b',
                case_insensitive: true
            },
            {
                className: 'axis',
                begin: '\\b(\\.X|\\.Y|\\.Z)\\b',
                case_insensitive: true
            }
        ]
    };
};
