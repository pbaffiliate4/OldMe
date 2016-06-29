/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="24" inline="false" x="143" y="192"><value name="return"><block type="scriptr_fb_post" id="48" inline="true"><value name="message"><block type="text" id="63"><field name="TEXT">it makes me wonder</field></block></value></block></value></block></xml>*#*#*/
return facebookPost ('it makes me wonder')			