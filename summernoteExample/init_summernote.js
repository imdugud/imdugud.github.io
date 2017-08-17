$(function () {
  var textEditor = $('#summernote-detail');
  var dataImgUrl = textEditor.attr('data-imgurl');
  var dataName = textEditor.attr('name');

  var demoButton = function (context) {
    var ui = $.summernote.ui;

    // create button
    var button = ui.button({
      contents: 'My button',
      tooltip: 'mine',
      click: function () {
        runDemoButton();
        alert('this button is mine');
      }
    });

    return button.render();   // return button as jquery object
  };

  var runDemoButton = function (image) {
    var content = '<p>Pressed button</p>';
    
    // invoke insertText method with 'hello' on editor module.
    var node = $(content);

    textEditor.summernote('focus');
    textEditor.summernote('pasteHTML', node);
  };

  textEditor.summernote({
    fontNames: ['serif'],
    height: 1000,
    shortcuts: false,
    callbacks: {
      onPaste: function (e) {
        var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
        e.preventDefault();
        document.execCommand('insertText', false, bufferText);
      },
      onImageUpload: function (files, editor, welEditable) {
        sendImage(files[0], editor, welEditable);
      }
    },
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['height', ['height']],
      ['insert', ['link', 'video', 'picture']],
      ['misc', ['codeview']],
      ['mybutton', ['mydemo']]
    ],
    buttons: {
      mydemo: demoButton
    },
    popover: {
      image: [
        ['custom', ['imageAttributes']],
        ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']]
      ],
    },
    lang: 'en-US',
    imageAttributes:{
      imageDialogLayout:'default', // default|horizontal
      icon:'<i class="note-icon-pencil"/>',
      removeEmpty:false // true = remove attributes | false = leave empty if present
    },
    displayFields:{
      imageBasic:true,  // show/hide Title, Source, Alt fields
      imageExtra:false, // show/hide Alt, Class, Style, Role fields
      linkBasic:true,   // show/hide URL and Target fields for link
      linkExtra:false   // show/hide Class, Rel, Role fields for link
    }
  });


  var sendImage = function (file, editor, welEditable) {
    var data = new FormData();
    data.append("file", file);
    $.ajax({
      data: data,
      type: "POST",
      url: dataImgUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: function (url) {
        //var den = '<b>inserted html</b>';
        //$("#summernote").summernote('pasteHTML', den);
        textEditor.summernote('focus');
        textEditor.summernote('insertImage', url);
      }
    });
  };

  $('body').on('click', '.updateDetail', function () {
    var data = textEditor.summernote('code');
    postForm($(this), dataName, data, 'html');
  });

});
