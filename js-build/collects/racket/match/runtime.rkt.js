import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../runtime/core.rkt.js";var match_prompt_tag = M0.make_continuation_prompt_tag($rjs_core.Symbol.make("match"));var match_equality_test = M0.make_parameter(M0.equal_p,false,$rjs_core.Symbol.make("match-equality-test"));var let_result30 = M0.make_struct_type($rjs_core.Symbol.make("exn:misc:match"),M0.__rjs_quoted__.struct_exn_fail,2,0,false,M0.list(M0.cons(M0.prop_exn_srclocs,function(ex102) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return exn_misc_match_srclocs(ex102);})),false,false,$rjs_core.Pair.makeList(0,1),false,$rjs_core.Symbol.make("exn:misc:match"));var struct_97 = let_result30.getAt(0);var make_98 = let_result30.getAt(1);var __p99 = let_result30.getAt(2);var __ref100 = let_result30.getAt(3);var __set_bang_101 = let_result30.getAt(4);var let_result31 = M0.values(struct_97,make_98,__p99,M0.make_struct_field_accessor(__ref100,0,$rjs_core.Symbol.make("value")),M0.make_struct_field_accessor(__ref100,1,$rjs_core.Symbol.make("srclocs")));var struct_exn_misc_match = let_result31.getAt(0);var make_exn_misc_match = let_result31.getAt(1);var exn_misc_match_p = let_result31.getAt(2);var exn_misc_match_value = let_result31.getAt(3);var exn_misc_match_srclocs = let_result31.getAt(4);var match_error = function(val103, srclocs104, form_name105) {if (arguments.length!==3) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.raise(make_exn_misc_match(M0.format($rjs_core.UString.make("~a: no matching clause for ~e"),form_name105,val103),M0.current_continuation_marks(),val103,srclocs104));};var matchable_p = function(e106) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var or_part107 = M0.string_p(e106);if (or_part107!==false) {var if_res32 = or_part107;} else {var if_res32 = M0.bytes_p(e106);}return if_res32;};var mlist_p = function(l108) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l108)!==false) {var if_res40 = true;} else {if (M0.mpair_p(l108)!==false) {var loop109 = function(turtle110, hare111) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(hare111)!==false) {var if_res38 = true;} else {if (M0.eq_p(hare111,turtle110)!==false) {var if_res37 = false;} else {if (M0.mpair_p(hare111)!==false) {var hare112 = M0.mcdr(hare111);if (M0.null_p(hare112)!==false) {var if_res35 = true;} else {if (M0.eq_p(hare112,turtle110)!==false) {var if_res34 = false;} else {if (M0.mpair_p(hare112)!==false) {var if_res33 = loop109(M0.mcdr(turtle110),M0.mcdr(hare112));} else {var if_res33 = false;}var if_res34 = if_res33;}var if_res35 = if_res34;}var if_res36 = if_res35;} else {var if_res36 = false;}var if_res37 = if_res36;}var if_res38 = if_res37;}return if_res38;};var if_res39 = loop109(l108,M0.mcdr(l108));} else {var if_res39 = false;}var if_res40 = if_res39;}return if_res40;};var mlist__gt_list = function(l113) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(l113)!==false) {var if_res41 = M0.rnull;} else {var if_res41 = M0.cons(M0.mcar(l113),mlist__gt_list(M0.mcdr(l113)));}return if_res41;};var syntax_srclocs = function(stx114) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M0.list(M0.__rjs_quoted__.srcloc(M0.syntax_source(stx114),M0.syntax_line(stx114),M0.syntax_column(stx114),M0.syntax_position(stx114),M0.syntax_span(stx114)));};var __rjs_quoted__ = {};__rjs_quoted__.make_exn_misc_match = make_exn_misc_match;__rjs_quoted__.struct_exn_misc_match = struct_exn_misc_match;__rjs_quoted__.exn_misc_match_srclocs = exn_misc_match_srclocs;__rjs_quoted__.exn_misc_match_p = exn_misc_match_p;__rjs_quoted__.exn_misc_match_value = exn_misc_match_value;export { __rjs_quoted__,syntax_srclocs,mlist__gt_list,mlist_p,match_prompt_tag,matchable_p,match_error,exn_misc_match_p,match_equality_test };