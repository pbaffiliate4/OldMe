/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"/* Keywords that cannot be combined with other values SCRIPTR_COMMENT\ncontent: normal;\ncontent: none;\n\n/* <string> value, non-latin characters must be encoded SCRIPTR_COMMENT\n/* e.g. \\00A0 for &nbsp; SCRIPTR_COMMENT\ncontent: 'prefix';\n\n/* <uri> value SCRIPTR_COMMENT\ncontent: url(http://www.example.com/test.png);\n\n/* <counter> values SCRIPTR_COMMENT\ncontent: chapter_counter;\n\n/* attr() value linked to the HTML attribute value SCRIPTR_COMMENT\ncontent: attr(value string);\n\n/* Language- and position-dependant keywords SCRIPTR_COMMENT\ncontent: open-quote;\ncontent: close-quote;\ncontent: no-open-quote;\ncontent: no-close-quote;\n\n/* Except for normal and none, several values SCRIPTR_COMMENT\n/* can be used simultaneously SCRIPTR_COMMENT\ncontent: open-quote chapter_counter;\n\n/* Global values SCRIPTR_COMMENT\ncontent: inherit;\ncontent: initial;\ncontent: unset;"},"scriptrdata":[]}}*#*#*/
var content= '/* Keywords that cannot be combined with other values */\n\
content: normal;\n\
content: none;\n\
\n\
/* <string> value, non-latin characters must be encoded */\n\
/* e.g. \\00A0 for &nbsp; */\n\
content: \'prefix\';\n\
\n\
/* <uri> value */\n\
content: url(http://www.example.com/test.png);\n\
\n\
/* <counter> values */\n\
content: chapter_counter;\n\
\n\
/* attr() value linked to the HTML attribute value */\n\
content: attr(value string);\n\
\n\
/* Language- and position-dependant keywords */\n\
content: open-quote;\n\
content: close-quote;\n\
content: no-open-quote;\n\
content: no-close-quote;\n\
\n\
/* Except for normal and none, several values */\n\
/* can be used simultaneously */\n\
content: open-quote chapter_counter;\n\
\n\
/* Global values */\n\
content: inherit;\n\
content: initial;\n\
content: unset;';  response.write(content);response.close();			