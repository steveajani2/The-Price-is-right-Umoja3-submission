// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc0, ctc0],
      7: [ctc0, ctc1, ctc0, ctc0, ctc1],
      8: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2],
      9: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc2],
      10: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v291, v292], secs: v294, time: v293, didSend: v29, from: v290 } = txn1;
  ;
  const v297 = stdlib.protect(ctc0, await interact.Acceptwager(v291), {
    at: './index.rsh:55:65:application',
    fs: ['at ./index.rsh:54:15:application call to [unknown function] (defined at: ./index.rsh:54:19:function exp)'],
    msg: 'Acceptwager',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v290, v291, v292, v297],
    evt_cnt: 1,
    funcNum: 1,
    lct: v293,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v291, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v299], secs: v301, time: v300, didSend: v40, from: v298 } = txn2;
      
      sim_r.txns.push({
        amt: v291,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v310 = stdlib.add(v300, v292);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v299], secs: v301, time: v300, didSend: v40, from: v298 } = txn2;
  ;
  const v310 = stdlib.add(v300, v292);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v310],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v290, v291, v298, v299, v310],
      evt_cnt: 0,
      funcNum: 3,
      lct: v300,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v298,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informtimeout(v292), {
      at: './index.rsh:39:35:application',
      fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:37:30:function exp)', 'at ./index.rsh:65:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informtimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v316], secs: v318, time: v317, didSend: v49, from: v315 } = txn3;
    ;
    const v319 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:66:29:decimal', stdlib.UInt_max, '1'));
    const v320 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:66:52:decimal', stdlib.UInt_max, '1'));
    const v321 = v319 ? v320 : false;
    if (v321) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v324, time: v323, didSend: v59, from: v322 } = txn4;
      ;
      const v327 = stdlib.addressEq(v315, v322);
      stdlib.assert(v327, {
        at: './index.rsh:69:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      let v328 = stdlib.checkedBigNumberify('./index.rsh:93:48:decimal', stdlib.UInt_max, '0');
      let v329 = stdlib.checkedBigNumberify('./index.rsh:93:51:decimal', stdlib.UInt_max, '0');
      let v331 = stdlib.checkedBigNumberify('./index.rsh:93:57:decimal', stdlib.UInt_max, '0');
      let v332 = v323;
      
      while (await (async () => {
        const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
        const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
        const v345 = v344 ? false : true;
        const v346 = v343 ? v345 : false;
        const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
        const v348 = v347 ? false : true;
        const v349 = v346 ? v348 : false;
        
        return v349;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn5;
        ;
        const v360 = stdlib.addressEq(v290, v356);
        stdlib.assert(v360, {
          at: './index.rsh:102:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        stdlib.protect(ctc2, await interact.round(), {
          at: './index.rsh:45:27:application',
          fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:31:function exp)', 'at ./index.rsh:107:21:application call to "newRound" (defined at: ./index.rsh:43:25:function exp)'],
          msg: 'round',
          who: 'Alice'
          });
        
        const v368 = stdlib.protect(ctc0, await interact.submit_guess(), {
          at: './index.rsh:110:56:application',
          fs: ['at ./index.rsh:109:23:application call to [unknown function] (defined at: ./index.rsh:109:27:function exp)'],
          msg: 'submit_guess',
          who: 'Alice'
          });
        const v369 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:111:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:109:23:application call to [unknown function] (defined at: ./index.rsh:109:27:function exp)'],
          msg: 'random',
          who: 'Alice'
          });
        const v370 = stdlib.digest(ctc3, [v369, v368]);
        
        const txn6 = await (ctc.sendrecv({
          args: [v290, v291, v298, v315, v331, v357, v370],
          evt_cnt: 1,
          funcNum: 7,
          lct: v358,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:114:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v373], secs: v375, time: v374, didSend: v112, from: v372 } = txn6;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v373], secs: v375, time: v374, didSend: v112, from: v372 } = txn6;
        ;
        const v376 = stdlib.addressEq(v298, v372);
        stdlib.assert(v376, {
          at: './index.rsh:114:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v381], secs: v383, time: v382, didSend: v122, from: v380 } = txn7;
        ;
        const v384 = stdlib.addressEq(v315, v380);
        stdlib.assert(v384, {
          at: './index.rsh:120:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn8 = await (ctc.sendrecv({
          args: [v290, v291, v298, v315, v331, v357, v373, v381, v369, v368],
          evt_cnt: 2,
          funcNum: 9,
          lct: v382,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:127:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn8) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v388, v389], secs: v391, time: v390, didSend: v132, from: v387 } = txn8;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v388, v389], secs: v391, time: v390, didSend: v132, from: v387 } = txn8;
        ;
        const v392 = stdlib.addressEq(v298, v387);
        stdlib.assert(v392, {
          at: './index.rsh:127:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v393 = stdlib.digest(ctc3, [v388, v389]);
        const v394 = stdlib.digestEq(v373, v393);
        stdlib.assert(v394, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:128:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 10,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v398, v399], secs: v401, time: v400, didSend: v145, from: v397 } = txn9;
        ;
        const v402 = stdlib.addressEq(v290, v397);
        stdlib.assert(v402, {
          at: './index.rsh:135:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v403 = stdlib.digest(ctc3, [v398, v399]);
        const v404 = stdlib.digestEq(v357, v403);
        stdlib.assert(v404, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:136:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v405 = stdlib.eq(v399, v389);
        const v406 = stdlib.eq(v399, v381);
        const v407 = v406 ? false : true;
        const v408 = v405 ? v407 : false;
        const v411 = v405 ? false : true;
        const v412 = v406 ? v411 : false;
        const v415 = v406 ? v405 : false;
        const v416 = v415 ? stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:75:29:decimal', stdlib.UInt_max, '0');
        const v417 = v412 ? stdlib.checkedBigNumberify('./index.rsh:73:70:decimal', stdlib.UInt_max, '2') : v416;
        const v418 = v408 ? stdlib.checkedBigNumberify('./index.rsh:72:66:decimal', stdlib.UInt_max, '1') : v417;
        stdlib.protect(ctc2, await interact.seeOutcome(v418), {
          at: './index.rsh:139:36:application',
          fs: ['at ./index.rsh:138:17:application call to [unknown function] (defined at: ./index.rsh:138:35:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        if (v408) {
          const v427 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:142:65:decimal', stdlib.UInt_max, '1'));
          const cv328 = stdlib.checkedBigNumberify('./index.rsh:142:52:decimal', stdlib.UInt_max, '2');
          const cv329 = stdlib.checkedBigNumberify('./index.rsh:142:55:decimal', stdlib.UInt_max, '0');
          const cv331 = v427;
          const cv332 = v400;
          
          v328 = cv328;
          v329 = cv329;
          v331 = cv331;
          v332 = cv332;
          
          continue;}
        else {
          if (v412) {
            const v432 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:146:69:decimal', stdlib.UInt_max, '1'));
            const cv328 = stdlib.checkedBigNumberify('./index.rsh:146:56:decimal', stdlib.UInt_max, '0');
            const cv329 = stdlib.checkedBigNumberify('./index.rsh:146:59:decimal', stdlib.UInt_max, '2');
            const cv331 = v432;
            const cv332 = v400;
            
            v328 = cv328;
            v329 = cv329;
            v331 = cv331;
            v332 = cv332;
            
            continue;}
          else {
            if (v415) {
              const v436 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:150:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:150:60:decimal', stdlib.UInt_max, '1');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:150:63:decimal', stdlib.UInt_max, '1');
              const cv331 = v436;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}
            else {
              const v437 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:153:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:153:63:decimal', stdlib.UInt_max, '0');
              const cv331 = v437;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}}}
        
        
        
        
        
        
        
        
        
        }
      const v438 = stdlib.gt(v328, v329);
      const v439 = stdlib.lt(v328, v329);
      const v440 = stdlib.eq(v328, v329);
      const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v443 = v440 ? v441 : v442;
      const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v445 = v439 ? v444 : v443;
      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v447 = v438 ? v446 : v445;
      const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
      const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
      const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
      let v451;
      const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
      if (v452) {
        v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
        if (v453) {
          v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
          }
        else {
          const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
          if (v454) {
            v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
            }
          else {
            v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
            }
          }
        }
      stdlib.protect(ctc2, await interact.seeOverallOutcome(v451), {
        at: './index.rsh:51:39:application',
        fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:167:19:application call to "seeOverall" (defined at: ./index.rsh:49:34:function exp)'],
        msg: 'seeOverallOutcome',
        who: 'Alice'
        });
      
      const v462 = stdlib.mul(v291, v448);
      ;
      const v467 = stdlib.mul(v291, v449);
      ;
      const v472 = stdlib.mul(v291, v450);
      ;
      return;
      
      
      }
    else {
      ;
      return;
      }}
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v291, v292], secs: v294, time: v293, didSend: v29, from: v290 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v299], secs: v301, time: v300, didSend: v40, from: v298 } = txn2;
  ;
  const v310 = stdlib.add(v300, v292);
  const v314 = stdlib.protect(ctc0, await interact.Acceptwager(v291), {
    at: './index.rsh:62:63:application',
    fs: ['at ./index.rsh:61:13:application call to [unknown function] (defined at: ./index.rsh:61:17:function exp)'],
    msg: 'Acceptwager',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v290, v291, v298, v299, v310, v314],
    evt_cnt: 1,
    funcNum: 2,
    lct: v300,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v316], secs: v318, time: v317, didSend: v49, from: v315 } = txn3;
      
      ;
      const v319 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:66:29:decimal', stdlib.UInt_max, '1'));
      const v320 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:66:52:decimal', stdlib.UInt_max, '1'));
      const v321 = v319 ? v320 : false;
      if (v321) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v298,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v310],
    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v290, v291, v298, v299, v310],
      evt_cnt: 0,
      funcNum: 3,
      lct: v300,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v298,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
    ;
    ;
    stdlib.protect(ctc2, await interact.informtimeout(v292), {
      at: './index.rsh:39:35:application',
      fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:37:30:function exp)', 'at ./index.rsh:65:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informtimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v316], secs: v318, time: v317, didSend: v49, from: v315 } = txn3;
    ;
    const v319 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:66:29:decimal', stdlib.UInt_max, '1'));
    const v320 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:66:52:decimal', stdlib.UInt_max, '1'));
    const v321 = v319 ? v320 : false;
    if (v321) {
      const txn4 = await (ctc.sendrecv({
        args: [v290, v291, v298, v315],
        evt_cnt: 0,
        funcNum: 4,
        lct: v317,
        onlyIf: true,
        out_tys: [],
        pay: [v291, []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v324, time: v323, didSend: v59, from: v322 } = txn4;
          
          sim_r.txns.push({
            amt: v291,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v328 = stdlib.checkedBigNumberify('./index.rsh:93:48:decimal', stdlib.UInt_max, '0');
          const v329 = stdlib.checkedBigNumberify('./index.rsh:93:51:decimal', stdlib.UInt_max, '0');
          const v331 = stdlib.checkedBigNumberify('./index.rsh:93:57:decimal', stdlib.UInt_max, '0');
          const v332 = v323;
          
          if (await (async () => {
            const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
            const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
            const v345 = v344 ? false : true;
            const v346 = v343 ? v345 : false;
            const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
            const v348 = v347 ? false : true;
            const v349 = v346 ? v348 : false;
            
            return v349;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v438 = stdlib.gt(v328, v329);
            const v439 = stdlib.lt(v328, v329);
            const v440 = stdlib.eq(v328, v329);
            const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
            const v443 = v440 ? v441 : v442;
            const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v445 = v439 ? v444 : v443;
            const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v447 = v438 ? v446 : v445;
            const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
            const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
            const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
            let v451;
            const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
            if (v452) {
              v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
              if (v453) {
                v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
                }
              else {
                const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
                if (v454) {
                  v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
                  }
                else {
                  v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
                  }
                }
              }
            
            const v462 = stdlib.mul(v291, v448);
            sim_r.txns.push({
              kind: 'from',
              to: v298,
              tok: undefined /* Nothing */
              });
            const v467 = stdlib.mul(v291, v449);
            sim_r.txns.push({
              kind: 'from',
              to: v315,
              tok: undefined /* Nothing */
              });
            const v472 = stdlib.mul(v291, v450);
            sim_r.txns.push({
              kind: 'from',
              to: v290,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v324, time: v323, didSend: v59, from: v322 } = txn4;
      ;
      const v327 = stdlib.addressEq(v315, v322);
      stdlib.assert(v327, {
        at: './index.rsh:69:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      let v328 = stdlib.checkedBigNumberify('./index.rsh:93:48:decimal', stdlib.UInt_max, '0');
      let v329 = stdlib.checkedBigNumberify('./index.rsh:93:51:decimal', stdlib.UInt_max, '0');
      let v331 = stdlib.checkedBigNumberify('./index.rsh:93:57:decimal', stdlib.UInt_max, '0');
      let v332 = v323;
      
      while (await (async () => {
        const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
        const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
        const v345 = v344 ? false : true;
        const v346 = v343 ? v345 : false;
        const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
        const v348 = v347 ? false : true;
        const v349 = v346 ? v348 : false;
        
        return v349;})()) {
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn5;
        ;
        const v360 = stdlib.addressEq(v290, v356);
        stdlib.assert(v360, {
          at: './index.rsh:102:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        stdlib.protect(ctc2, await interact.round(), {
          at: './index.rsh:45:27:application',
          fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:31:function exp)', 'at ./index.rsh:107:21:application call to "newRound" (defined at: ./index.rsh:43:25:function exp)'],
          msg: 'round',
          who: 'Bob'
          });
        
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v373], secs: v375, time: v374, didSend: v112, from: v372 } = txn6;
        ;
        const v376 = stdlib.addressEq(v298, v372);
        stdlib.assert(v376, {
          at: './index.rsh:114:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v379 = stdlib.protect(ctc0, await interact.submit_guess(), {
          at: './index.rsh:118:67:application',
          fs: ['at ./index.rsh:117:21:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)'],
          msg: 'submit_guess',
          who: 'Bob'
          });
        
        const txn7 = await (ctc.sendrecv({
          args: [v290, v291, v298, v315, v331, v357, v373, v379],
          evt_cnt: 1,
          funcNum: 8,
          lct: v374,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:120:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v381], secs: v383, time: v382, didSend: v122, from: v380 } = txn7;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc4, ctc0, ctc1, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v381], secs: v383, time: v382, didSend: v122, from: v380 } = txn7;
        ;
        const v384 = stdlib.addressEq(v315, v380);
        stdlib.assert(v384, {
          at: './index.rsh:120:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 9,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v388, v389], secs: v391, time: v390, didSend: v132, from: v387 } = txn8;
        ;
        const v392 = stdlib.addressEq(v298, v387);
        stdlib.assert(v392, {
          at: './index.rsh:127:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v393 = stdlib.digest(ctc3, [v388, v389]);
        const v394 = stdlib.digestEq(v373, v393);
        stdlib.assert(v394, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:128:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const txn9 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 10,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v398, v399], secs: v401, time: v400, didSend: v145, from: v397 } = txn9;
        ;
        const v402 = stdlib.addressEq(v290, v397);
        stdlib.assert(v402, {
          at: './index.rsh:135:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v403 = stdlib.digest(ctc3, [v398, v399]);
        const v404 = stdlib.digestEq(v357, v403);
        stdlib.assert(v404, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:136:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v405 = stdlib.eq(v399, v389);
        const v406 = stdlib.eq(v399, v381);
        const v407 = v406 ? false : true;
        const v408 = v405 ? v407 : false;
        const v411 = v405 ? false : true;
        const v412 = v406 ? v411 : false;
        const v415 = v406 ? v405 : false;
        const v416 = v415 ? stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, '3') : stdlib.checkedBigNumberify('./index.rsh:75:29:decimal', stdlib.UInt_max, '0');
        const v417 = v412 ? stdlib.checkedBigNumberify('./index.rsh:73:70:decimal', stdlib.UInt_max, '2') : v416;
        const v418 = v408 ? stdlib.checkedBigNumberify('./index.rsh:72:66:decimal', stdlib.UInt_max, '1') : v417;
        stdlib.protect(ctc2, await interact.seeOutcome(v418), {
          at: './index.rsh:139:36:application',
          fs: ['at ./index.rsh:138:17:application call to [unknown function] (defined at: ./index.rsh:138:35:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        if (v408) {
          const v427 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:142:65:decimal', stdlib.UInt_max, '1'));
          const cv328 = stdlib.checkedBigNumberify('./index.rsh:142:52:decimal', stdlib.UInt_max, '2');
          const cv329 = stdlib.checkedBigNumberify('./index.rsh:142:55:decimal', stdlib.UInt_max, '0');
          const cv331 = v427;
          const cv332 = v400;
          
          v328 = cv328;
          v329 = cv329;
          v331 = cv331;
          v332 = cv332;
          
          continue;}
        else {
          if (v412) {
            const v432 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:146:69:decimal', stdlib.UInt_max, '1'));
            const cv328 = stdlib.checkedBigNumberify('./index.rsh:146:56:decimal', stdlib.UInt_max, '0');
            const cv329 = stdlib.checkedBigNumberify('./index.rsh:146:59:decimal', stdlib.UInt_max, '2');
            const cv331 = v432;
            const cv332 = v400;
            
            v328 = cv328;
            v329 = cv329;
            v331 = cv331;
            v332 = cv332;
            
            continue;}
          else {
            if (v415) {
              const v436 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:150:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:150:60:decimal', stdlib.UInt_max, '1');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:150:63:decimal', stdlib.UInt_max, '1');
              const cv331 = v436;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}
            else {
              const v437 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:153:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:153:63:decimal', stdlib.UInt_max, '0');
              const cv331 = v437;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}}}
        
        
        
        
        
        
        
        
        
        }
      const v438 = stdlib.gt(v328, v329);
      const v439 = stdlib.lt(v328, v329);
      const v440 = stdlib.eq(v328, v329);
      const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v443 = v440 ? v441 : v442;
      const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v445 = v439 ? v444 : v443;
      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v447 = v438 ? v446 : v445;
      const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
      const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
      const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
      let v451;
      const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
      if (v452) {
        v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
        if (v453) {
          v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
          }
        else {
          const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
          if (v454) {
            v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
            }
          else {
            v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
            }
          }
        }
      stdlib.protect(ctc2, await interact.seeOverallOutcome(v451), {
        at: './index.rsh:51:39:application',
        fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:167:19:application call to "seeOverall" (defined at: ./index.rsh:49:34:function exp)'],
        msg: 'seeOverallOutcome',
        who: 'Bob'
        });
      
      const v462 = stdlib.mul(v291, v448);
      ;
      const v467 = stdlib.mul(v291, v449);
      ;
      const v472 = stdlib.mul(v291, v450);
      ;
      return;
      
      
      }
    else {
      ;
      return;
      }}
  
  
  
  
  
  };
export async function House(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for House expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for House expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Null;
  
  
  const v286 = stdlib.protect(ctc0, interact.deadline, 'for House\'s interact field deadline');
  const v287 = stdlib.protect(ctc0, interact.wager, 'for House\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v287, v286],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v291, v292], secs: v294, time: v293, didSend: v29, from: v290 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v291, v292], secs: v294, time: v293, didSend: v29, from: v290 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v299], secs: v301, time: v300, didSend: v40, from: v298 } = txn2;
  ;
  const v310 = stdlib.add(v300, v292);
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: ['time', v310],
    waitIfNotPresent: false
    }));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv({
      args: [v290, v291, v298, v299, v310],
      evt_cnt: 0,
      funcNum: 3,
      lct: v300,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v298,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v488, time: v487, didSend: v252, from: v486 } = txn4;
    ;
    ;
    return;
    
    }
  else {
    const {data: [v316], secs: v318, time: v317, didSend: v49, from: v315 } = txn3;
    ;
    const v319 = stdlib.eq(v299, stdlib.checkedBigNumberify('./index.rsh:66:29:decimal', stdlib.UInt_max, '1'));
    const v320 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:66:52:decimal', stdlib.UInt_max, '1'));
    const v321 = v319 ? v320 : false;
    if (v321) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v324, time: v323, didSend: v59, from: v322 } = txn4;
      ;
      const v327 = stdlib.addressEq(v315, v322);
      stdlib.assert(v327, {
        at: './index.rsh:69:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'House'
        });
      let v328 = stdlib.checkedBigNumberify('./index.rsh:93:48:decimal', stdlib.UInt_max, '0');
      let v329 = stdlib.checkedBigNumberify('./index.rsh:93:51:decimal', stdlib.UInt_max, '0');
      let v331 = stdlib.checkedBigNumberify('./index.rsh:93:57:decimal', stdlib.UInt_max, '0');
      let v332 = v323;
      
      while (await (async () => {
        const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
        const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
        const v345 = v344 ? false : true;
        const v346 = v343 ? v345 : false;
        const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
        const v348 = v347 ? false : true;
        const v349 = v346 ? v348 : false;
        
        return v349;})()) {
        const v352 = stdlib.protect(ctc0, await interact.number_guess(), {
          at: './index.rsh:98:59:application',
          fs: ['at ./index.rsh:97:23:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)'],
          msg: 'number_guess',
          who: 'House'
          });
        const v353 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:99:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:97:23:application call to [unknown function] (defined at: ./index.rsh:97:27:function exp)'],
          msg: 'random',
          who: 'House'
          });
        const v354 = stdlib.digest(ctc1, [v353, v352]);
        
        const txn5 = await (ctc.sendrecv({
          args: [v290, v291, v298, v315, v331, v354],
          evt_cnt: 1,
          funcNum: 6,
          lct: v332,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:102:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc3, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn5;
        ;
        const v360 = stdlib.addressEq(v290, v356);
        stdlib.assert(v360, {
          at: './index.rsh:102:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc2],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v373], secs: v375, time: v374, didSend: v112, from: v372 } = txn6;
        ;
        const v376 = stdlib.addressEq(v298, v372);
        stdlib.assert(v376, {
          at: './index.rsh:114:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v381], secs: v383, time: v382, didSend: v122, from: v380 } = txn7;
        ;
        const v384 = stdlib.addressEq(v315, v380);
        stdlib.assert(v384, {
          at: './index.rsh:120:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const txn8 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 9,
          out_tys: [ctc0, ctc0],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v388, v389], secs: v391, time: v390, didSend: v132, from: v387 } = txn8;
        ;
        const v392 = stdlib.addressEq(v298, v387);
        stdlib.assert(v392, {
          at: './index.rsh:127:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const v393 = stdlib.digest(ctc1, [v388, v389]);
        const v394 = stdlib.digestEq(v373, v393);
        stdlib.assert(v394, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:128:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'House'
          });
        const txn9 = await (ctc.sendrecv({
          args: [v290, v291, v298, v315, v331, v357, v381, v389, v353, v352],
          evt_cnt: 2,
          funcNum: 10,
          lct: v390,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:135:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn9) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v398, v399], secs: v401, time: v400, didSend: v145, from: v397 } = txn9;
            
            ;
            const v405 = stdlib.eq(v399, v389);
            const v406 = stdlib.eq(v399, v381);
            const v407 = v406 ? false : true;
            const v408 = v405 ? v407 : false;
            const v411 = v405 ? false : true;
            const v412 = v406 ? v411 : false;
            const v415 = v406 ? v405 : false;
            if (v408) {
              const v427 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:142:65:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:142:52:decimal', stdlib.UInt_max, '2');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:142:55:decimal', stdlib.UInt_max, '0');
              const cv331 = v427;
              const cv332 = v400;
              
              await (async () => {
                const v328 = cv328;
                const v329 = cv329;
                const v331 = cv331;
                const v332 = cv332;
                
                if (await (async () => {
                  const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
                  const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
                  const v345 = v344 ? false : true;
                  const v346 = v343 ? v345 : false;
                  const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
                  const v348 = v347 ? false : true;
                  const v349 = v346 ? v348 : false;
                  
                  return v349;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v438 = stdlib.gt(v328, v329);
                  const v439 = stdlib.lt(v328, v329);
                  const v440 = stdlib.eq(v328, v329);
                  const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v443 = v440 ? v441 : v442;
                  const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v445 = v439 ? v444 : v443;
                  const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v447 = v438 ? v446 : v445;
                  const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
                  const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
                  const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
                  let v451;
                  const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
                  if (v452) {
                    v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
                    }
                  else {
                    const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
                    if (v453) {
                      v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
                      }
                    else {
                      const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
                      if (v454) {
                        v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
                        }
                      else {
                        v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
                        }
                      }
                    }
                  
                  const v462 = stdlib.mul(v291, v448);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v298,
                    tok: undefined /* Nothing */
                    });
                  const v467 = stdlib.mul(v291, v449);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v315,
                    tok: undefined /* Nothing */
                    });
                  const v472 = stdlib.mul(v291, v450);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v290,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}
            else {
              if (v412) {
                const v432 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:146:69:decimal', stdlib.UInt_max, '1'));
                const cv328 = stdlib.checkedBigNumberify('./index.rsh:146:56:decimal', stdlib.UInt_max, '0');
                const cv329 = stdlib.checkedBigNumberify('./index.rsh:146:59:decimal', stdlib.UInt_max, '2');
                const cv331 = v432;
                const cv332 = v400;
                
                await (async () => {
                  const v328 = cv328;
                  const v329 = cv329;
                  const v331 = cv331;
                  const v332 = cv332;
                  
                  if (await (async () => {
                    const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
                    const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
                    const v345 = v344 ? false : true;
                    const v346 = v343 ? v345 : false;
                    const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
                    const v348 = v347 ? false : true;
                    const v349 = v346 ? v348 : false;
                    
                    return v349;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v438 = stdlib.gt(v328, v329);
                    const v439 = stdlib.lt(v328, v329);
                    const v440 = stdlib.eq(v328, v329);
                    const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                    const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                    const v443 = v440 ? v441 : v442;
                    const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                    const v445 = v439 ? v444 : v443;
                    const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                    const v447 = v438 ? v446 : v445;
                    const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
                    const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
                    const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
                    let v451;
                    const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
                    if (v452) {
                      v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
                      }
                    else {
                      const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
                      if (v453) {
                        v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
                        }
                      else {
                        const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
                        if (v454) {
                          v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
                          }
                        else {
                          v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
                          }
                        }
                      }
                    
                    const v462 = stdlib.mul(v291, v448);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v298,
                      tok: undefined /* Nothing */
                      });
                    const v467 = stdlib.mul(v291, v449);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v315,
                      tok: undefined /* Nothing */
                      });
                    const v472 = stdlib.mul(v291, v450);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v290,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}
              else {
                if (v415) {
                  const v436 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:150:73:decimal', stdlib.UInt_max, '1'));
                  const cv328 = stdlib.checkedBigNumberify('./index.rsh:150:60:decimal', stdlib.UInt_max, '1');
                  const cv329 = stdlib.checkedBigNumberify('./index.rsh:150:63:decimal', stdlib.UInt_max, '1');
                  const cv331 = v436;
                  const cv332 = v400;
                  
                  await (async () => {
                    const v328 = cv328;
                    const v329 = cv329;
                    const v331 = cv331;
                    const v332 = cv332;
                    
                    if (await (async () => {
                      const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
                      const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
                      const v345 = v344 ? false : true;
                      const v346 = v343 ? v345 : false;
                      const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
                      const v348 = v347 ? false : true;
                      const v349 = v346 ? v348 : false;
                      
                      return v349;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v438 = stdlib.gt(v328, v329);
                      const v439 = stdlib.lt(v328, v329);
                      const v440 = stdlib.eq(v328, v329);
                      const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                      const v443 = v440 ? v441 : v442;
                      const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v445 = v439 ? v444 : v443;
                      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v447 = v438 ? v446 : v445;
                      const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
                      const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
                      const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
                      let v451;
                      const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
                      if (v452) {
                        v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
                        }
                      else {
                        const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
                        if (v453) {
                          v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
                          }
                        else {
                          const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
                          if (v454) {
                            v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
                            }
                          else {
                            v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
                            }
                          }
                        }
                      
                      const v462 = stdlib.mul(v291, v448);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v298,
                        tok: undefined /* Nothing */
                        });
                      const v467 = stdlib.mul(v291, v449);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      const v472 = stdlib.mul(v291, v450);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v290,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}
                else {
                  const v437 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:153:73:decimal', stdlib.UInt_max, '1'));
                  const cv328 = stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0');
                  const cv329 = stdlib.checkedBigNumberify('./index.rsh:153:63:decimal', stdlib.UInt_max, '0');
                  const cv331 = v437;
                  const cv332 = v400;
                  
                  await (async () => {
                    const v328 = cv328;
                    const v329 = cv329;
                    const v331 = cv331;
                    const v332 = cv332;
                    
                    if (await (async () => {
                      const v343 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:95:20:decimal', stdlib.UInt_max, '3'));
                      const v344 = stdlib.eq(v328, stdlib.checkedBigNumberify('./index.rsh:95:37:decimal', stdlib.UInt_max, '2'));
                      const v345 = v344 ? false : true;
                      const v346 = v343 ? v345 : false;
                      const v347 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:95:52:decimal', stdlib.UInt_max, '2'));
                      const v348 = v347 ? false : true;
                      const v349 = v346 ? v348 : false;
                      
                      return v349;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      const v438 = stdlib.gt(v328, v329);
                      const v439 = stdlib.lt(v328, v329);
                      const v440 = stdlib.eq(v328, v329);
                      const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                      const v443 = v440 ? v441 : v442;
                      const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v445 = v439 ? v444 : v443;
                      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                      const v447 = v438 ? v446 : v445;
                      const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
                      const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
                      const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
                      let v451;
                      const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
                      if (v452) {
                        v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
                        }
                      else {
                        const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
                        if (v453) {
                          v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
                          }
                        else {
                          const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
                          if (v454) {
                            v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
                            }
                          else {
                            v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
                            }
                          }
                        }
                      
                      const v462 = stdlib.mul(v291, v448);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v298,
                        tok: undefined /* Nothing */
                        });
                      const v467 = stdlib.mul(v291, v449);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v315,
                        tok: undefined /* Nothing */
                        });
                      const v472 = stdlib.mul(v291, v450);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v290,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}}}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [v398, v399], secs: v401, time: v400, didSend: v145, from: v397 } = txn9;
        ;
        const v402 = stdlib.addressEq(v290, v397);
        stdlib.assert(v402, {
          at: './index.rsh:135:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'House'
          });
        const v403 = stdlib.digest(ctc1, [v398, v399]);
        const v404 = stdlib.digestEq(v357, v403);
        stdlib.assert(v404, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:136:28:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'House'
          });
        const v405 = stdlib.eq(v399, v389);
        const v406 = stdlib.eq(v399, v381);
        const v407 = v406 ? false : true;
        const v408 = v405 ? v407 : false;
        const v411 = v405 ? false : true;
        const v412 = v406 ? v411 : false;
        const v415 = v406 ? v405 : false;
        if (v408) {
          const v427 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:142:65:decimal', stdlib.UInt_max, '1'));
          const cv328 = stdlib.checkedBigNumberify('./index.rsh:142:52:decimal', stdlib.UInt_max, '2');
          const cv329 = stdlib.checkedBigNumberify('./index.rsh:142:55:decimal', stdlib.UInt_max, '0');
          const cv331 = v427;
          const cv332 = v400;
          
          v328 = cv328;
          v329 = cv329;
          v331 = cv331;
          v332 = cv332;
          
          continue;}
        else {
          if (v412) {
            const v432 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:146:69:decimal', stdlib.UInt_max, '1'));
            const cv328 = stdlib.checkedBigNumberify('./index.rsh:146:56:decimal', stdlib.UInt_max, '0');
            const cv329 = stdlib.checkedBigNumberify('./index.rsh:146:59:decimal', stdlib.UInt_max, '2');
            const cv331 = v432;
            const cv332 = v400;
            
            v328 = cv328;
            v329 = cv329;
            v331 = cv331;
            v332 = cv332;
            
            continue;}
          else {
            if (v415) {
              const v436 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:150:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:150:60:decimal', stdlib.UInt_max, '1');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:150:63:decimal', stdlib.UInt_max, '1');
              const cv331 = v436;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}
            else {
              const v437 = stdlib.add(v331, stdlib.checkedBigNumberify('./index.rsh:153:73:decimal', stdlib.UInt_max, '1'));
              const cv328 = stdlib.checkedBigNumberify('./index.rsh:153:60:decimal', stdlib.UInt_max, '0');
              const cv329 = stdlib.checkedBigNumberify('./index.rsh:153:63:decimal', stdlib.UInt_max, '0');
              const cv331 = v437;
              const cv332 = v400;
              
              v328 = cv328;
              v329 = cv329;
              v331 = cv331;
              v332 = cv332;
              
              continue;}}}
        
        
        
        
        
        
        
        
        
        }
      const v438 = stdlib.gt(v328, v329);
      const v439 = stdlib.lt(v328, v329);
      const v440 = stdlib.eq(v328, v329);
      const v441 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v442 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v443 = v440 ? v441 : v442;
      const v444 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v445 = v439 ? v444 : v443;
      const v446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v447 = v438 ? v446 : v445;
      const v448 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '0')];
      const v449 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '1')];
      const v450 = v447[stdlib.checkedBigNumberify('./index.rsh:161:15:array', stdlib.UInt_max, '2')];
      let v451;
      const v452 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:80:19:decimal', stdlib.UInt_max, '2'));
      if (v452) {
        v451 = stdlib.checkedBigNumberify('./index.rsh:81:24:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v453 = stdlib.eq(v449, stdlib.checkedBigNumberify('./index.rsh:83:24:decimal', stdlib.UInt_max, '2'));
        if (v453) {
          v451 = stdlib.checkedBigNumberify('./index.rsh:84:24:decimal', stdlib.UInt_max, '2');
          }
        else {
          const v454 = stdlib.eq(v448, stdlib.checkedBigNumberify('./index.rsh:86:24:decimal', stdlib.UInt_max, '1'));
          if (v454) {
            v451 = stdlib.checkedBigNumberify('./index.rsh:87:24:decimal', stdlib.UInt_max, '3');
            }
          else {
            v451 = stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '0');
            }
          }
        }
      stdlib.protect(ctc4, await interact.seeOverallOutcome(v451), {
        at: './index.rsh:51:39:application',
        fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:167:19:application call to "seeOverall" (defined at: ./index.rsh:49:34:function exp)'],
        msg: 'seeOverallOutcome',
        who: 'House'
        });
      
      const v462 = stdlib.mul(v291, v448);
      ;
      const v467 = stdlib.mul(v291, v449);
      ;
      const v472 = stdlib.mul(v291, v450);
      ;
      return;
      
      
      }
    else {
      ;
      return;
      }}
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAEgCAJoCgQJBwMLUCYDAQABAQAiNQAxGEEGgSpkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBgxAAyNJJQxAAiVJIQgMQAGTSSEGDEAA5iEGEkQhCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf8kWzX+VyggNf1XSCA1/CEFWzX7STUFSSJbNfolWzX5gASTpfY8NPoWUDT5FlCwNP8xABJENANXcCA0+hY0+RZQARJENPk0A4GYAVsSNfg0+TQDgZABWxI19zT4NPcUEEEAFDT/NP40/TT8IQQiNPsjCDIGQgRONPc0+BQQQQAUNP80/jT9NPwiIQQ0+yMIMgZCBDE09zT4EEEAEzT/NP40/TT8IyM0+yMIMgZCBBY0/zT+NP00/CIiNPsjCDIGQgQDSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8kWzX+VyggNf1XSCA1/CEFWzX7V3AgNfqBsAFbNflJNQVJIls1+CVbNfeABKnZTT00+BZQNPcWULA0/TEAEkQ0A1eQIDT4FjT3FlABEkQ0/zT+FlA0/VA0/FA0+xZQNPpQNPkWUDT3FlAoSwFXAH9nKUsBV38hZ0ghCzUBMgY1AkIEf0ghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JFs1/lcoIDX9V0ggNfwhBVs1+1dwIDX6V5AgNflJNQUXNfiABC/a6R00+BZQsDT8MQASRDT/NP4WUDT9UDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/OWdIIQY1ATIGNQJCA/RJIQkMQAB+SCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/JFs1/lcoIDX9V0ggNfwhBVs1+1dwIDX6STUFNfmABEH88oQ0+VCwNP0xABJENP80/hZQNP1QNPxQNPsWUDT6UDT5UChLAVcAf2cpSwFXfzFnSCEINQEyBjUCQgNvSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yRbNf5XKCA1/VdIIDX8IQVbNftJNQU1+oAEae47PjT6ULA0/zEAEkQ0/zT+FlA0/VA0/FA0+xZQNPpQKEsBVwB/ZylLAVd/EWdIJTUBMgY1AkIC/EkhBAxAARpJIQoMQACRSSEHDEAATCEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDSSRbNf9XSCA1/oAEkSc087A0/4gDCTT+MQASRDQDVwAgNP80A1coIDT+IiIiMgZCAXlIIQQ0ARJENARJIhJMNAISEUQoZDUDgASnZcS0sDIGNAMhDFsPRLEisgE0AyRbsggjshA0A1coILIHs0ICQUghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XKCA1/Uk1BRc1/IAEl073FzT8FlCwMgY0AyEMWwxENAOBSFsjEjT8IxIQQQAfNP80/hZQNP1QMQBQKEsBVwBoZ0ghBzUBMgY1AkIB7rEisgE0/rIII7IQNP2yB7NCAb9JIwxAAGRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JFs1/kk1BRc1/YAE1RUZFDT9FlCwNP6IAfEyBjQDgShbCDX8NP80/hZQMQBQNP0WUDT8FlAoSwFXAFhnSCEENQEyBjUCQgFxSIGgjQaIAbsiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIBIjX/Nf41/TX8Nfs1+jX5Nfg0/iEKDDT8IQQTEDT9IQQTEEEAIzT4NPkWUDT6UDT7UDT+FlAoSwFXAHBnSCEJNQEyBjUCQgDbgBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAGAAAAAAAAAABAAAAAAAAAAEAAAAAAAAAADT8NP0STYAYAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAANPw0/QxNgBgAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAA0/DT9DU0197EisgE0+TT3IlsLsggjshA0+rIHs7EisgE0+TT3JVsLsggjshA0+7IHs7EisgE0+TT3gRBbC7III7IQNPiyB7NCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQoxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v316",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v389",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v316",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v357",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v373",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v389",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620023fa380380620023fa83398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b61211f80620002db6000396000f3fe6080604052600436106100a55760003560e01c806373b4522c1161006157806373b4522c146101315780638323075714610144578063873779a114610159578063980b6eac1461016c578063a7661d541461017f578063ab53f2c61461019257005b80631e93b0f1146100ae578063273206b8146100d257806328adf537146100e557806329bdceb9146100f857806345f703961461010b5780636cec5d461461011e57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611a9f565b6101b5565b6100ac6100f3366004611a9f565b610430565b6100ac610106366004611ad4565b6107e9565b6100ac610119366004611ad4565b6109ee565b6100ac61012c366004611ad4565b610c23565b6100ac61013f366004611ad4565b610e5d565b34801561015057600080fd5b506001546100bf565b6100ac610167366004611ad4565b610f83565b6100ac61017a366004611ad4565b61116b565b6100ac61018d366004611ad4565b611362565b34801561019e57600080fd5b506101a7611504565b6040516100c9929190611af0565b6101c5600a6000541460266115a1565b6101df813515806101d857506001548235145b60276115a1565b6000808055600280546101f190611b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90611b4d565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611c88565b90507f61a975c2eb129c07d71a871df28eb78724f84a0b02b4a03b148b42a7224a9a2833836040516102b5929190611ca5565b60405180910390a16102c9341560236115a1565b60408101516102e4906001600160a01b0316331460246115a1565b604080516103309161030a91602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260c001511460256115a1565b61039360405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151831681850152606080860151909316928401929092526080808501519084015260a0808501519084015260e08085015160c08501528583013590840152600b60005543600155905161040691839101611cd6565b6040516020818303038152906040526002908051906020019061042a92919061187e565b50505050565b610440600b60005414602b6115a1565b61045a8135158061045357506001548235145b602c6115a1565b60008080556002805461046c90611b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611b4d565b80156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b50505050508060200190518101906104fd9190611c88565b60408051808201909152600080825260208201529091507f3355ea27a9de0a9476dc454c9992d9c8728dffbd2709023aabe4dab2336b9a6a3384604051610545929190611ca5565b60405180910390a1610559341560286115a1565b8151610571906001600160a01b0316331460296115a1565b604080516105bd9161059791602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602a6115a1565b60e0820151604084013590811480835260c084015190911460208301526105e55760006105f8565b80602001516105f55760016105f8565b60005b1561067d57610605611902565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841691015260608086015184519316920191909152808201805160029052516000910152608083015161065f90600190611d58565b60208201805160400191909152514360609091015261042a816115c6565b806020015161068d57600061069d565b805161069a57600161069d565b60005b15610704576106aa611902565b825181516001600160a01b0391821690526020808501518351820152604080860151845190841691015260608086015184519316920191909152808201805160009052516002910152608083015161065f90600190611d58565b8060200151610714576000610717565b80515b1561078057610724611902565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915280820180516001908190529051909101819052608084015161065f9190611d58565b610788611902565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845193169201919091528082018051600090819052905190910152608083015161065f90600190611d58565b505050565b6107f960096000541460216115a1565b6108138135158061080c57506001548235145b60226115a1565b60008080556002805461082590611b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461085190611b4d565b801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b50505050508060200190518101906108b69190611d70565b90507f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833836040516108e9929190611e15565b60405180910390a16108fd3415601f6115a1565b6060810151610918906001600160a01b0316331460206115a1565b61097b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151831681850152606080860151909316928401929092526080808501519084015260a0808501519084015260c080850151908401528481013560e0840152600a60005543600155905161040691839101611cd6565b6109fe600260005414600c6115a1565b610a1881351580610a1157506001548235145b600d6115a1565b600080805560028054610a2a90611b4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5690611b4d565b8015610aa35780601f10610a7857610100808354040283529160200191610aa3565b820191906000526020600020905b815481529060010190602001808311610a8657829003601f168201915b5050505050806020019051810190610abb9190611e3c565b9050610ace81608001514310600e6115a1565b7f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b83383604051610aff929190611e15565b60405180910390a1610b133415600b6115a1565b6001816060015114610b26576000610b2f565b60208201356001145b15610bc757604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b0151821685523383526004909755436001558951808701979097529351868a015291518316908501525116828401528451808303909301835260a09091019093528051919261042a926002929091019061187e565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610c08573d6000803e3d6000fd5b5060008080556001819055610c1f90600290611962565b5050565b610c33600860005414601d6115a1565b610c4d81351580610c4657506001548235145b601e6115a1565b600080805560028054610c5f90611b4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8b90611b4d565b8015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b5050505050806020019051810190610cf09190611e9a565b90507fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad743383604051610d23929190611e15565b60405180910390a1610d373415601b6115a1565b6040810151610d52906001600160a01b03163314601c6115a1565b610dad6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03908116808352602080850151818501908152604080870151851681870190815260608089015187168189019081526080808b0151818b0190815260a0808d0151818d019081528e8a013560c0808f0191825260096000554360015589519b8c019c909c529851978a019790975294518a1693880193909352905190971696850196909652945194830194909452925191810191909152905160e082015261010001610406565b610e6d60026000541460106115a1565b610e8781351580610e8057506001548235145b60116115a1565b600080805560028054610e9990611b4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec590611b4d565b8015610f125780601f10610ee757610100808354040283529160200191610f12565b820191906000526020600020905b815481529060010190602001808311610ef557829003601f168201915b5050505050806020019051810190610f2a9190611e3c565b9050610f3e816080015143101560126115a1565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610f6f929190611f35565b60405180910390a1610bc73415600f6115a1565b610f9360016000541460096115a1565b610fad81351580610fa657506001548235145b600a6115a1565b600080805560028054610fbf90611b4d565b80601f0160208091040260200160405190810160405280929190818152602001828054610feb90611b4d565b80156110385780601f1061100d57610100808354040283529160200191611038565b820191906000526020600020905b81548152906001019060200180831161101b57829003601f168201915b50505050508060200190518101906110509190611f72565b90506110686040518060200160405280600081525090565b7f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253384604051611099929190611e15565b60405180910390a16110b28260200151341460086115a1565b60408201516110c19043611d58565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c516001600160a01b03908116808c528e89015188523387528f89013585528d5183526002998a9055436001558c51808a01919091529651878d0152945190941692850192909252519083015251818501528551808203909401845260c00190945281519293611164939192019061187e565b5050505050565b61117b60076000541460196115a1565b6111958135158061118e57506001548235145b601a6115a1565b6000808055600280546111a790611b4d565b80601f01602080910402602001604051908101604052809291908181526020018280546111d390611b4d565b80156112205780601f106111f557610100808354040283529160200191611220565b820191906000526020600020905b81548152906001019060200180831161120357829003601f168201915b50505050508060200190518101906112389190611fe1565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338360405161126b929190611e15565b60405180910390a161127f341560176115a1565b8051611297906001600160a01b0316331460186115a1565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b03908116808352602080850151818501908152604080870151851681870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182526008600055436001558751998a019a909a5296519588019590955292518816918601919091525190951694830194909452925191810191909152905160c082015260e001610406565b61137260046000541460156115a1565b61138c8135158061138557506001548235145b60166115a1565b60008080556002805461139e90611b4d565b80601f01602080910402602001604051908101604052809291908181526020018280546113ca90611b4d565b80156114175780601f106113ec57610100808354040283529160200191611417565b820191906000526020600020905b8154815290600101906020018083116113fa57829003601f168201915b505050505080602001905181019061142f9190612046565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051611462929190611f35565b60405180910390a161147b8160200151341460136115a1565b6060810151611496906001600160a01b0316331460146115a1565b61149e611902565b815181516001600160a01b039182169052602080840151835182015260408085015184519084169082015260608086015185519416938101939093528184018051600090819052815190930183905280519091019190915251439101526107e4816115c6565b60006060600054600280805461151990611b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461154590611b4d565b80156115925780601f1061156757610100808354040283529160200191611592565b820191906000526020600020905b81548152906001019060200180831161157557829003601f168201915b50505050509050915091509091565b81610c1f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6115ce61199f565b6003826020015160400151106115e55760006115fc565b6020820151516002146115f95760016115fc565b60005b611607576000611621565b60028260200151602001511461161e576001611621565b60005b156116c3576040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e51860151821685528e8901518d015183526007909955436001558b51978801989098529451998601999099529151851690840152519092169481019490945251908301529060c001610406565b8051600190819052815160209081019190915281516000604091820181905282840180518290528051840182905251600290830181905282850180518390528051850182905251830182905260608501805191909152805184018290525190910152828101519081015190511161177157602080830151908101519051106117675760208083015190810151905114611760578060200151611777565b8051611777565b8060400151611777565b80606001515b608082018190528251604081015191516020909101516001600160a01b03909216916108fc916117a6916120ca565b6040518115909202916000818181858888f193505050501580156117ce573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc82608001516020015184600001516020015161180091906120ca565b6040518115909202916000818181858888f19350505050158015611828573d6000803e3d6000fd5b50815180516080830151604001516020909201516001600160a01b03909116916108fc9161185691906120ca565b6040518115909202916000818181858888f19350505050158015610c08573d6000803e3d6000fd5b82805461188a90611b4d565b90600052602060002090601f0160209004810192826118ac57600085556118f2565b82601f106118c557805160ff19168380011785556118f2565b828001600101855582156118f2579182015b828111156118f25782518255916020019190600101906118d7565b506118fe929150611a72565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161195d6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b50805461196e90611b4d565b6000825580601f1061197e575050565b601f01602090049060005260206000209081019061199c9190611a72565b50565b6040518060a001604052806119ce60405180606001604052806000815260200160008152602001600081525090565b81526020016119f760405180606001604052806000815260200160008152602001600081525090565b8152602001611a2060405180606001604052806000815260200160008152602001600081525090565b8152602001611a4960405180606001604052806000815260200160008152602001600081525090565b815260200161195d60405180606001604052806000815260200160008152602001600081525090565b5b808211156118fe5760008155600101611a73565b600060608284031215611a9957600080fd5b50919050565b600060608284031215611ab157600080fd5b611abb8383611a87565b9392505050565b600060408284031215611a9957600080fd5b600060408284031215611ae657600080fd5b611abb8383611ac2565b82815260006020604081840152835180604085015260005b81811015611b2457858101830151858201606001528201611b08565b81811115611b36576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611b6157607f821691505b60208210811415611a9957634e487b7160e01b600052602260045260246000fd5b60405160a0810167ffffffffffffffff81118282101715611bb357634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114611bd057600080fd5b919050565b6000610100808385031215611be957600080fd5b6040519081019067ffffffffffffffff82118183101715611c1a57634e487b7160e01b600052604160045260246000fd5b81604052809250611c2a84611bb9565b815260208401516020820152611c4260408501611bb9565b6040820152611c5360608501611bb9565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006101008284031215611c9b57600080fd5b611abb8383611bd5565b6001600160a01b038316815260808101611abb60208301848035825260208082013590830152604090810135910152565b6101008101611d3c828460018060a01b0380825116835260208201516020840152806040830151166040840152806060830151166060840152506080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611d6b57611d6b611d42565b500190565b600060e08284031215611d8257600080fd5b60405160e0810181811067ffffffffffffffff82111715611db357634e487b7160e01b600052604160045260246000fd5b604052611dbf83611bb9565b815260208301516020820152611dd760408401611bb9565b6040820152611de860608401611bb9565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b038316815260608101611abb602083018480358252602090810135910152565b600060a08284031215611e4e57600080fd5b611e56611b82565b611e5f83611bb9565b815260208301516020820152611e7760408401611bb9565b604082015260608301516060820152608083015160808201528091505092915050565b600060c08284031215611eac57600080fd5b60405160c0810181811067ffffffffffffffff82111715611edd57634e487b7160e01b600052604160045260246000fd5b604052611ee983611bb9565b815260208301516020820152611f0160408401611bb9565b6040820152611f1260608401611bb9565b60608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611f6357600080fd5b80604085015250509392505050565b600060608284031215611f8457600080fd5b6040516060810181811067ffffffffffffffff82111715611fb557634e487b7160e01b600052604160045260246000fd5b604052611fc183611bb9565b815260208301516020820152604083015160408201528091505092915050565b600060a08284031215611ff357600080fd5b611ffb611b82565b61200483611bb9565b81526020830151602082015261201c60408401611bb9565b604082015261202d60608401611bb9565b6060820152608083015160808201528091505092915050565b60006080828403121561205857600080fd5b6040516080810181811067ffffffffffffffff8211171561208957634e487b7160e01b600052604160045260246000fd5b60405261209583611bb9565b8152602083015160208201526120ad60408401611bb9565b60408201526120be60608401611bb9565b60608201529392505050565b60008160001904831182151516156120e4576120e4611d42565b50029056fea26469706673582212209edb53f73cf4be00f42e64ea392335594f5897df797718f0bac848303c38f16864736f6c634300080c0033`,
  BytecodeLen: 9210,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:59:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:65:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:67:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:176:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:96:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:103:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:115:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:121:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:129:13:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:176:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob,
  "House": House
  };
export const _APIs = {
  };
