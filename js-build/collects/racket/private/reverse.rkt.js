import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../runtime/core.rkt.js";M1.__rjs_quoted__.___declare;$rjs_core.Keyword.make("cross-phase-persistent");var reverse = function(l2199) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.variable_reference_from_unsafe_p($rjs_core.Symbol.make("#%variable-reference"))!==false) {var if_res1313 = M0.rvoid();} else {if (M0.list_p(l2199)!==false) {var if_res1312 = M0.rvoid();} else {var if_res1312 = M0.raise_argument_error($rjs_core.Symbol.make("reverse"),$rjs_core.UString.make("list?"),l2199);}var if_res1313 = if_res1312;}if_res1313;var loop2200 = function(a2201, l2202) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l2202)!==false) {var if_res1314 = a2201;} else {var if_res1314 = loop2200(M0.cons(M0.car(l2202),a2201),M0.cdr(l2202));}return if_res1314;};return loop2200(M0.rnull,l2199);};var __rjs_quoted__ = {};export { __rjs_quoted__,reverse as alt_reverse };