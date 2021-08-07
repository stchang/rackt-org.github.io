import * as $rjs_core from '../runtime/core.js';import * as M0 from "../collects/racket/private/kw.rkt.js";import * as M1 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";import * as M2 from "../collects/racket/private/map.rkt.js";import * as M3 from "../collects/racket/private/list.rkt.js";import * as M4 from "../runtime/kernel.rkt.js";import * as M5 from "../links/racketscript-compiler/racketscript/interop.rkt.js";import * as M6 from "./rackt.rkt.js";var StateContext = M6.create_context();var default_state = {'todos':M4.list({'id':0,'text':$rjs_core.UString.make("Replace JavaScript with RacketScript")},{'id':1,'text':$rjs_core.UString.make("Install Rackt")},{'id':2,'text':$rjs_core.UString.make("Enjoy!")})};var add_todo = function(state866, action867) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M4.append(state866.todos,M4.list(action867.todo));};var done_todo = function(state868, action869) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M3.filter(function(el870) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return M4.not(M4.eq_p(el870.id,action869.id));},state868.todos);};var reducer = function(state871, action872) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M4.eq_p(action872.type,$rjs_core.UString.make("add"))!==false) {var if_res401 = {'todos':add_todo(state871,action872)};} else {if (M4.eq_p(action872.type,$rjs_core.UString.make("done"))!==false) {var if_res400 = {'todos':done_todo(state871,action872)};} else {var if_res400 = state871;}var if_res401 = if_res400;}return if_res401;};var todo_input = $rjs_core.attachProcedureArity(function(props873, ...__dot__dot_874402) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_874 = $rjs_core.Pair.listFromArray(__dot__dot_874402);var ctx875 = M6.use_context(StateContext);var dispatch876 = ctx875.dispatch;var store877 = ctx875.store;var let_result403 = M6.use_state($rjs_core.UString.make(""));var text878 = let_result403.getAt(0);var set_text879 = let_result403.getAt(1);var update_text880 = function(e881) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return set_text879(M5.js_string__gt_string(e881.target.value),text878);};var submit_todo882 = function(e883) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}e883.preventDefault();dispatch876({'type':$rjs_core.UString.make("add"),'todo':{'id':Date.now(),'text':text878}});return set_text879($rjs_core.UString.make(""));};var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1331884 = M6.__lt_el;var temp1885 = $rjs_core.UString.make("form");var temp2886 = {'onSubmit':submit_todo882};var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1405888 = M6.__lt_el;var temp4889 = $rjs_core.UString.make("input");var temp5890 = {'className':$rjs_core.UString.make("todo-input"),'placeholder':$rjs_core.UString.make("What needs to be done?"),'value':text878,'onChange':update_text880};var temp3887 = M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1405888,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),3)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp5890),temp4889);return M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1331884,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp2886),temp1885,temp3887);});var todo_item = $rjs_core.attachProcedureArity(function(props891, ...__dot__dot_892404) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_892 = $rjs_core.Pair.listFromArray(__dot__dot_892404);var ctx893 = M6.use_context(StateContext);var dispatch894 = ctx893.dispatch;var done_todo895 = function(id896) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return dispatch894({'type':$rjs_core.UString.make("done"),'id':props891.todo.id});};var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1897897 = M6.__lt_el;var temp6898 = $rjs_core.UString.make("li");var temp7899 = {'className':$rjs_core.UString.make("todo-item")};var temp8900 = props891.todo.text;var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2002902 = M6.__lt_el;var temp10903 = $rjs_core.UString.make("button");var temp11904 = {'type':$rjs_core.UString.make("button"),'className':$rjs_core.UString.make("button button-clear todo-done-button"),'onClick':done_todo895};var temp12905 = $rjs_core.UString.make("✔");var temp9901 = M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2002902,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp11904),temp10903,temp12905);return M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__1897897,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),5)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp7899),temp6898,temp8900,temp9901);});var todo_list = $rjs_core.attachProcedureArity(function(props906, ...__dot__dot_907405) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_907 = $rjs_core.Pair.listFromArray(__dot__dot_907405);var ctx908 = M6.use_context(StateContext);var dispatch909 = ctx908.dispatch;var store910 = ctx908.store;return M6.__lt_el($rjs_core.UString.make("ul"),M2.map(function(todo911) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2415912 = M6.__lt_el;var todo_item13913 = todo_item;var temp14914 = {'todo':todo911};return M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2415912,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),3)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp14914),todo_item13913);},store910.todos));});var todo_app = $rjs_core.attachProcedureArity(function(props915, ...__dot__dot_916406) {if (arguments.length<1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var __dot__dot_916 = $rjs_core.Pair.listFromArray(__dot__dot_916406);var provider917 = StateContext.Provider;var let_result407 = M6.use_reducer(reducer,default_state);var store918 = let_result407.getAt(0);var dispatch919 = let_result407.getAt(1);var __dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2638920 = M6.__lt_el;var provider15921 = provider917;var temp16922 = {'value':{'store':store918,'dispatch':dispatch919}};var temp17923 = M6.__lt_el($rjs_core.UString.make("div"),M6.__lt_el(todo_input));var temp18924 = M6.__lt_el(todo_list);return M4.checked_procedure_check_and_extract(M0.__rjs_quoted__.struct_keyword_procedure,__dot__dot__dot_rs_test_by_src_by_todo_dot_rkt__2638920,M0.__rjs_quoted__.keyword_procedure_extract,$rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),5)($rjs_core.Pair.makeList($rjs_core.Keyword.make("props")),M4.list(temp16922),provider15921,temp17923,temp18924);});var __rjs_quoted__ = {};export { __rjs_quoted__,todo_app };