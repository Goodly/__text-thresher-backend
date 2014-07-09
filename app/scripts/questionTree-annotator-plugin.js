/*
Question Tree Annotator Plugin
Copyright (C) 2014 Zachary Zibrat / Deciding Force
License TODO: https://github.com/palimpsests

Logic inspired by source code from Rich Text Annotator Plugin v1.0 (https://github.com/danielcebrian/richText-annotator)
*/

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Annotator.Plugin.QuestionTree = (function(_super) {
  __extends(QuestionTree, _super);

  //Default tinymce configuration
  // QuestionTree.prototype.options = {
  //   tinymce:{
  //     selector: "li.annotator-item textarea",
  //     plugins: "media image insertdatetime link code",
  //     menubar: false,
  //     toolbar_items_size: 'small',
  //     extended_valid_elements : "iframe[src|frameborder|style|scrolling|class|width|height|name|align|id]",
  //       toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media rubric | code ",
  //   }
  // };

  function QuestionTree(element,options) {
    _ref = QuestionTree.__super__.constructor.apply(this, arguments);
    return _ref;
  };


  QuestionTree.prototype.pluginInit = function() {
    console.log("QuestionTree-pluginInit");

    var annotator = this.annotator,
        editor = this.annotator.editor;
    //Check that annotator is working
    if (!Annotator.supported()) {
      return;
    }

    //Editor Setup
    annotator.editor.addField({
      type: 'input',
      load: this.updateEditor,
    });

    //Viewer setup
    annotator.viewer.addField({
      load: this.updateViewer,
    });

    console.log(editor)

    annotator.subscribe("annotationEditorShown", function(){
      // console.log($(annotator.editor.element))

      // $(annotator.editor.element).find('.mce-tinymce')[0].style.display='block';
      // $(annotator.editor.element).find('.mce-container').css('z-index',3000000000);
      annotator.editor.checkOrientation();
    });
    annotator.subscribe("annotationEditorHidden", function(){
      // $(annotator.editor.element).find('.mce-tinymce')[0].style.display='none';
    });

    //set listener for tinymce;
    // this.options.tinymce.setup = function(ed) {

    //   ed.on('change', function(e) {
    //     //set the modification in the textarea of annotator
    //     $(editor.element).find('textarea')[0].value = tinymce.activeEditor.getContent();
    //   });

    //   ed.on('Init', function(ed){
    //     $('.mce-container').css('z-index','3090000000000000000');
    //   });

    // };
    // console.log(this.options)
    // tinymce.init(this.options.tinymce);
  };

  QuestionTree.prototype.updateEditor = function(field, annotation) {
    // var text = typeof annotation.text != 'undefined' ? annotation.text : '';
    // console.log(annotation)
    // tinymce.activeEditor.setContent(text);
    $('.annotator-listing').append('<li>Hey</li>');
    $(field).remove(); //this is the auto create field by annotator and it is not necessary
  }

  QuestionTree.prototype.updateViewer = function(field, annotation) {
    var textDiv = $(field.parentNode).find('div:first-of-type')[0];
    textDiv.innerHTML = annotation.text;
    $(textDiv).addClass('richText-annotation');
    $(field).remove(); //this is the auto create field by annotator and it is not necessary
  }

  return QuestionTree;

})(Annotator.Plugin);
