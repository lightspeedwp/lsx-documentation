!function($){"use strict";function t(t){return" "+t+" simbol"+(t%100>9&&t%100<21||t%10==0?"ių":t%10>1?"ius":"į")}$.fn.select2.locales.lt={formatNoMatches:function(){return"Atitikmenų nerasta"},formatInputTooShort:function(n,e){return"Įrašykite dar"+t(e-n.length)},formatInputTooLong:function(n,e){return"Pašalinkite"+t(n.length-e)},formatSelectionTooBig:function(t){return"Jūs galite pasirinkti tik "+t+" element"+(t%100>9&&t%100<21||t%10==0?"ų":t%10>1?"us":"ą")},formatLoadMore:function(t){return"Kraunama daugiau rezultatų…"},formatSearching:function(){return"Ieškoma…"}},$.extend($.fn.select2.defaults,$.fn.select2.locales.lt)}(jQuery);