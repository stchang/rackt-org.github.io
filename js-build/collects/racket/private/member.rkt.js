import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";var bad_list = function(who3513, orig_l3514) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.raise_arguments_error(who3513,$rjs_core.UString.make("not a proper list"),$rjs_core.UString.make("in"),orig_l3514);};var member3515 = function(v3516, orig_l3517, eql_p3518) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}var loop3519 = function(ls3520, turtle3521) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(ls3520)!==false) {var if_res2293 = false;} else {if (M0.not(M0.pair_p(ls3520))!==false) {var if_res2292 = bad_list($rjs_core.Symbol.make("member"),orig_l3517);} else {if (eql_p3518(v3516,M0.car(ls3520))!==false) {var if_res2291 = ls3520;} else {var ls3522 = M0.cdr(ls3520);if (M0.null_p(ls3522)!==false) {var if_res2290 = false;} else {var or_part3523 = M0.not(M0.pair_p(ls3522));if (or_part3523!==false) {var if_res2287 = or_part3523;} else {var if_res2287 = M0.eq_p(ls3522,turtle3521);}if (if_res2287!==false) {var if_res2289 = bad_list($rjs_core.Symbol.make("member"),orig_l3517);} else {if (eql_p3518(v3516,M0.car(ls3522))!==false) {var if_res2288 = ls3522;} else {var if_res2288 = loop3519(M0.cdr(ls3522),M0.cdr(turtle3521));}var if_res2289 = if_res2288;}var if_res2290 = if_res2289;}var if_res2291 = if_res2290;}var if_res2292 = if_res2291;}var if_res2293 = if_res2292;}return if_res2293;};return loop3519(orig_l3517,orig_l3517);};var cl2294 = function(v3524, ls3525) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return member3515(v3524,ls3525,M0.equal_p);};var cl2295 = function(v3526, ls3527, eql_p3528) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.procedure_p(eql_p3528)!==false) {var if_res2297 = M0.procedure_arity_includes_p(eql_p3528,2);} else {var if_res2297 = false;}if (if_res2297!==false) {var if_res2298 = M0.rvoid();} else {var if_res2298 = M0.raise_argument_error($rjs_core.Symbol.make("member"),$rjs_core.UString.make("(procedure-arity-includes/c 2)"),M0.eq_p);}if_res2298;return member3515(v3526,ls3527,eql_p3528);};var member = $rjs_core.attachProcedureArity(function() {var fixed_lam2296 = {'2':cl2294,'3':cl2295}[arguments.length];if (fixed_lam2296!==undefined) {return fixed_lam2296.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[2,3]);var __rjs_quoted__ = {};export { __rjs_quoted__,member };