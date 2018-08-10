/**
 * @license
 * Copyright (C) 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for SQL.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-sql">(my SQL code)</pre>
 *
 *
 * http://savage.net.au/SQL/sql-99.bnf.html is the basis for the grammar, and
 * http://msdn.microsoft.com/en-us/library/aa238507(SQL.80).aspx and
 * http://meta.stackoverflow.com/q/92352/137403 as the bases for the keyword
 * list.
 *
 * @author mikesamuel@gmail.com
 */

 PR.registerLangHandler(PR.createSimpleLexer(
	[["com",/(\/\*[\s\S]*?(?:\*\/|$))/,null,"*/"],
	["pln",/^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
	["str",/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null,"\""],
	["str",/^\'(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null,"\'"]],
	[["kwd",/^(?:DATA|SELECT|FROM|WHERE|AND|GROUP BY|MAX|MIN|AS|PROC|SQL|SORT|OUT|RUN|QUIT|SAMPRATE|STRATA|ALLOC|METHOD|SEED|CREATE TABLE|ORDER BY|SET)\b/i,null,";"],
	["dec",/^(?:%MACRO|%MEND)\b/i,null],
	["typ",/[&][\S]*/,null],
	["lit",/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
	["pln",/^[a-z_][\w-]*/i],
	["pun",/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]
	])
,"sas".split(" "));

