CMB.addCallbackForDeletedField("CMB_wysiwyg",function(e){e.find(".cmb-wysiwyg textarea").each(function(){var e=tinyMCE.get(jQuery(this).attr("id"));null!==e&&void 0!==e&&e.remove()})}),CMB.addCallbackForClonedField("CMB_wysiwyg",function(e){e.find(".cmb-wysiwyg").each(function(e){var t,i,n,r,a,e,c,o,d;if(t=jQuery(this),i=t.attr("data-id"),n=t.attr("data-name"),r=tinyMCE.get(i),c=t.attr("data-field-id"),!r){if(o=new RegExp("cmb-placeholder-name-"+c,"g"),d=new RegExp("cmb-placeholder-id-"+c,"g"),t.html(cmb_wysiwyg_editors[c].replace(o,n).replace(d,i)),void 0===tinyMCEPreInit.mceInit[i]){var y=jQuery.extend({},tinyMCEPreInit.mceInit["cmb-placeholder-id-"+c]);for(var m in y)"string"==typeof y[m]&&(y[m]=y[m].replace(d,i).replace(o,n));tinyMCEPreInit.mceInit[i]=y}if(void 0===tinyMCEPreInit.qtInit[i]){var C=jQuery.extend({},tinyMCEPreInit.qtInit["cmb-placeholder-id-"+c]);for(var m in C)"string"==typeof C[m]&&(C[m]=C[m].replace(d,i).replace(o,n));tinyMCEPreInit.qtInit[i]=C}if("tmce"===(t.find(".wp-editor-wrap").hasClass("tmce-active")?"tmce":"html"))if("4"===tinyMCE.majorVersion)var r=tinymce.init(tinyMCEPreInit.mceInit[i]);else if("3"===tinyMCE.majorVersion){var r=new tinymce.Editor(i,tinyMCEPreInit.mceInit[i]);r.render()}QTags.instances[0]=void 0;try{quicktags(tinyMCEPreInit.qtInit[i])}catch(e){}}})}),CMB.addCallbackForSortStart("CMB_wysiwyg",function(e){e.find(".wp-editor-area").each(function(){var e=jQuery(this).attr("id");"4"===tinyMCE.majorVersion?tinyMCE.execCommand("mceRemoveEditor",!1,e):"3"===tinyMCE.majorVersion&&tinyMCE.execCommand("mceRemoveControl",!1,e)})}),CMB.addCallbackForSortEnd("CMB_wysiwyg",function(e){e.find(".wp-editor-area").each(function(){var e=jQuery(this).attr("id");"tmce"==(jQuery(this).closest(".wp-editor-wrap").hasClass("tmce-active")?"tmce":"html")&&("4"===tinyMCE.majorVersion?tinyMCE.execCommand("mceAddEditor",!1,e):"3"===tinyMCE.majorVersion&&tinyMCE.execCommand("mceAddControl",!1,e))})});