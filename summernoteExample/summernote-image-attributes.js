/**
 * Summernote Image Attributes
 * https://github.com/StudioJunkyard/summernote-image-attributes
 */
(function(factory){
  if(typeof define==='function'&&define.amd){
    define(['jquery'],factory);
  }else if(typeof module==='object'&&module.exports){
    module.exports=factory(require('jquery'));
  }else{
    factory(window.jQuery);
  }
}(function($){
  var readFileAsDataURL=function(file){
    return $.Deferred(function(deferred){
      $.extend(new FileReader(),{
        onload:function(e){
          var sDataURL=e.target.result;
          deferred.resolve(sDataURL);
        },
        onerror:function(){
          deferred.reject(this);
        }
      }).readAsDataURL(file);
    }).promise();
  };
  $.extend(true,$.summernote.lang,{
    'en-US':{ /* English */
      imageAttributes:{
        dialogTitle:'Image Attributes',
        tooltip:'Image Attributes',
        pluginImageTitle:'Image Attributes',
        pluginLinkTitle:'Link Attributes',
        title:'Title',
        src:'Source',
        srcHelp:'Selecting an image will replace existing image with an Inlined Image.',
        alt:'Alt',
        class:'Class',
        classSelect:'Select Class',
        style:'Style',
        role:'Role',
        href:'URL',
        target:'Target',
        linkClass:'Class',
        linkRole:'Role',
        rel:'Rel',
        relBlank:'Do not use Rel Attribute',
        relAlternate:'Alternate: Links to an alternate version of the document',
        relAuthor:'Author: Links to the Author of the Document',
        relBookmark:'Bookmark: Permanent URL used for Bookmarking',
        relHelp:'Help: Links to a Help Document',
        relLicense:'License: Links to copyright information for the document',
        relNext:'Next: The next document in a selection',
        relNofollow:'NoFollow: Links to an unendorsed document, like a paid link, also stops Search Engines following this link',
        relNoreferrer:'NoReferrer: Specifies that the browser should not send a HTTP Header',
        relPrefetch:'PreFetch: Specifies that the target document should be cached',
        relPrev:'Prev: The previous document in a selection',
        relSearch:'Search: Links to a search tool for the document',
        relTag:'Tag: A tag (Keyword) for the current document'
      }
    },
    'es-ES':{ /* Spanish */
      imageAttributes:{
        dialogTitle:'Propiedades de la Imagen',
        tooltip:'Propiedades de la Imagen',
        pluginImageTitle:'Atributos de la Imagen',
        pluginLinkTitle:'Atributos del Enlace',
        title:'Titulo',
        src:'Fuente',
        srcHelp:'La selecci??n de una imagen reemplazar?? la imagen existente con una imagen Inline.',
        alt:'Alternativo',
        class:'Clases',
        classSelect:'Selecciona Forma',
        style:'Estilo',
        role:'Papel',
        href:'URL',
        target:'Destino',
        linkClass:'Clase',
        linkRole:'Papel',
        rel:'Rel',
        relBlank:'No usar atributo Rel',
        relAlternate:'Alternate: Enlaza a una versi??n alternativa del documento',
        relAuthor:'Author: Enlaza al autor del documento',
        relBookmark:'Bookmark: URL permanente utilizada para enlazar',
        relHelp:'Help: Enlaza a un documento de Ayuda',
        relLicense:'License: Enlaza a un documento de informaci??n de Copyright',
        relNext:'Next: Enlaza al siguiente documento en una selecci??n',
        relNofollow:'NoFollow: Enlaza a un documento no confirmado, como un enlace de pago, tambi??n evita que los buscadores sigan este enlace',
        relNoreferrer:'NoReferrer: Specifies that the browser should not send a HTTP Header',
        relPrefetch:'PreFetch: Specifies that the target document should be cached',
        relPrev:'Prev: Enlaza al documento anterior en una selecci??n',
        relSearch:'Search: Enlaza a una herramienta de b??squeda para el documento',
        relTag:'Tag: Un etiqueta (palabra clave) para el documento actual'
      }
    },
    'fr-FR':{ /* French */
      imageAttributes:{
        dialogTitle:'Attributs de l\'image',
        tooltip:'Attributs de l\'image',
        pluginImageTitle:'Attributs de l\'image',
        pluginLinkTitle:'Attributs du lien',
        title:'Titre',
        src:'La source',
        srcHelp:'La s??lection d\'une image remplacera l\'image existante par une Image Inline.',
        alt:'Alt',
        class:'Class CSS',
        classSelect:'Choisir une Class',
        style:'Style',
        role:'R??le',
        href:'URL',
        target:'Cible',
        linkClass:'Class CSS du lien',
        linkRole:'R??le',
        rel:'Lien Rel',
        relBlank:'Ne pas utiliser d\'attribut Rel',
        relAlternate:'Alternate: Lien vers une autre version du document',
        relAuthor:'Author: Lien vers l\'auteur du document',
        relBookmark:'Bookmark: Lien permant utilis?? pour les signets',
        relHelp:'Help: Lien vers un document d\'aide',
        relLicense:'License: Lien vers les informations de droits d\'auteur du document',
        relNext:'Next: La page suivante de ce document',
        relNofollow:'NoFollow: Emp??cher les moteurs de recherche de suivre ce lien',
        relNoreferrer:'NoReferrer: Pr??cise que le navigateur ne doit pas envoyer d\'ent??te HTTP',
        relPrefetch:'PreFetch: Pr??cise que le document cible doit ??tre mis en cache',
        relPrev:'Prev: La page pr??c??dente de ce document',
        relSearch:'Search: Lien vers un outil de recherche du document',
        relTag:'Tag: Mot-cl?? du document'
      }
    },
    'zh-TW':{ /* Chinese */
      imageAttributes:{
        dialogTitle:'????????????',
        tooltip:'????????????',
        pluginImageTitle:'????????????',
        pluginLinkTitle:'????????????',
        title:'??????',
        src:'??????',
        srcHelp:'????????????????????????????????????????????????.',
        alt:'????????????',
        class:'???',
        classSelect:'?????? ???',
        style:'??????',
        role:'??????',
        href:'URL',
        target:'??????',
        linkClass:'????????????',
        linkRole:'??????',
        rel:'??????',
        relBlank:'?????????????????????',
        rel:'?????????????????????',
        relBlank:'?????????????????????',
        relAlternate:'????????????: ????????????????????????',
        relAuthor:'??????: ??????????????????',
        relBookmark:'??????: ??????????????????',
        relHelp:'??????: ?????????????????????',
        relLicense:'??????: ???????????????????????????',
        relNext:'?????????: ????????????????????????????????????',
        relNofollow:'?????????: ??????????????????????????????, ??????????????????, ???????????????????????????????????????',
        relNoreferrer:'NoReferrer: ????????????????????? HTTP ?????????',
        relPrefetch:'??????: ?????????????????????????????????',
        relPrev:'?????????: ???????????????????????????',
        relSearch:'??????: ??????????????????',
        relTag:'??????: ????????????????????????(?????????)'
      }
    },
    'it-IT':{ /* Italian */
      imageAttributes:{
        dialogTitle:'Attributi Immagine',
        tooltip:'Attributi Immagine',
        pluginImageTitle:'Attributi Immagine',
        pluginLinkTitle:'Attributi Collegamento',
        title:'Titolo',
        src:'Fonte',
        srcHelp:'elezione di un\'immagine sostituir?? immagine esistente con un inline Immagine.',
        alt:'Alt',
        class:'Classe',
        classSelect:'Seleziona Classe',
        style:'Stile',
        role:'Ruolo',
        href:'URL',
        target:'Bersaglio',
        linkClass:'Classe per il collegamento',
        linkRole:'Ruolo',
        rel:'Link Rel',
        relBlank:'Non usare attributo Rel',
        relAlternate:'Alternate: Collegamento ad una versione alternativa del documento',
        relAuthor:'Author: Collegamento all\'autore del documento',
        relBookmark:'Bookmark: URL permanente per i preferiti',
        relHelp:'Help: Collegamento ad una pagina di aiuto per questo documento',
        relLicense:'License: Collegamento alle informazioni sul copyright di questo docuemnto',
        relNext:'Next: Pagina successiva di questo documento',
        relNofollow:'NoFollow: Impedisce ai motori di ricerca di seguire questo collegamento',
        relNoreferrer:'NoReferrer: Specifica al browser di non inviare Header HTTP',
        relPrefetch:'PreFetch: Specifica che il documento di destinazione deve essere memorizzato nella cache',
        relPrev:'Prev: Pagina precedente di questo documento',
        relSearch:'Search: Collegamenti a uno strumento di ricerca per questo documento',
        relTag:'Tag: Un tag (parola chiave) per questo documento'
      }
    },
    'de-DE':{ /* German */
      imageAttributes:{
        dialogTitle:'Bild Eigenschaften',
        tooltip:'Bild Eigenschaften',
        pluginImageTitle:'Bild Eigenschaften',
        pluginLinkTitle:'Link Eigenschaften',
        title:'Titel',
        src:'Quelle',
        srcHelp:'Wenn Sie ein Bild ausw??hlen, wird das bestehende Bild durch ein Inlined Image ersetzt.',
        alt:'Alt Tag',
        class:'CSS Klasse',
        classSelect:'w&auml;hle CSS Klasse',
        style:'Stil',
        role:'Rolle',
        href:'URL',
        target:'Ziel (target)',
        linkClass:'CSS Link Klasse',
        linkRole:'Ruolo',
        rel:'Link Beziehung (Relation)',
        relBlank:'Keine Link Beziehung',
        relAlternate:'Alternate: Link zu einer alternativen Version',
        relAuthor:'Author: Link zum Autor des Artikels',
        relBookmark:'Bookmark: Permanent URL f&uuml;r Lesezeichen',
        relHelp:'Help: Link zur Hilfe',
        relLicense:'License: Link zu Urheber und Lizenzinformationen',
        relNext:'Next: Die n&auml;chste aktive Seite',
        relNofollow:'NoFollow: Suchmaschinen sollen dem Link nicht folgen',
        relNoreferrer:'NoReferrer: Browser soll keinen HTTP Header senden',
        relPrefetch:'PreFetch: Gibt an, dass die Seite gecacht werden soll',
        relPrev:'Prev: Die zuletzt aktive Seite',
        relSearch:'Search: Link zur Dokumentsuche',
        relTag:'Tag: Ein Schl&uuml;sselwort (keyword) f&uuml;r diese Seite'
      }
    },
    'tr-TR':{ /* Turkish */
      imageAttributes:{
        dialogTitle:'Resim ??zellikleri',
        tooltip:'Resim ??zellikleri',
        pluginImageTitle:'Resim ??zellikleri',
        pluginLinkTitle:'Ba??lant?? ??zellikleri',
        title:'Ba??l??k',
        src:'Kaynak',
        srcHelp:'Bir g??r??nt??y?? se??mek, var olan resmi Inlined Image ile de??i??tirecektir.',
        alt:'Alt. Metin',
        class:'S??n??f',
        classSelect:'S??n??f Se??in',
        style:'Stil',
        role:'Rol',
        href:'URL',
        target:'Hedef',
        linkClass:'Ba??lant?? S??n??f??',
        linkRole:'Rol',
        rel:'Ba??lant?? ??li??kisi(Rel)',
        relBlank:'??li??ki ??zelli??ini kullanma',
        relAlternate:'Alternatif: Belgenin farkl?? bir versiyonuna ba??lant??',
        relAuthor:'Yazar: Belgenin yazar??na ba??lant??',
        relBookmark:'Yer ??mi: Yer ??mi eklemek i??in kal??c?? adres',
        relHelp:'Yard??m: Yard??m d??k??man??na giden ba??lant??',
        relLicense:'Lisans: Belgenin telif hakk?? bilgisine ba??lant??',
        relNext:'Sonraki: S??radaki belgeye giden ba??lant??',
        relNofollow:'Takip Etme (NoFollow): Arama motorlar??n??n bu ba??lant??y?? takip etmemesini sa??lar',
        relNoreferrer:'Referanss??z (NoReferrer): Taray??c??n??n bu ba??lant??ya referans adresi g??ndermemesi gerekti??ini belirtir',
        relPrefetch:'??nBellek(PreFetch): Hedef ba??lant??n??n ??n belle??e al??nmas?? gerekti??ini belirtir',
        relPrev:'??nceki: ??nceki belgeye giden ba??lant??',
        relSearch:'Arama: Belge i??in bir arama arac??na ba??lant?? oldu??unu belirtir.',
        relTag:'Etiket: Belge i??in bir etiket oldu??unu belirtir'
      }
    }
  });
  $.extend($.summernote.options,{
    imageDialogLayout:'default', /* default|horizontal */
    imageAttributes:{
      icon:'<i class="note-icon-pencil"/>',
      removeEmpty:true,
    },
    displayFields:{
      imageBasic:true,
      imageExtra:false,
      linkBasic:true,
      linkExtra:false
    }
  });
  $.extend($.summernote.plugins,{
    'imageAttributes':function(context){
      var self=this;
      var ui=$.summernote.ui;
      var $note=context.layoutInfo.note;
      var $editor=context.layoutInfo.editor;
      var $editable=context.layoutInfo.editable;
      var options=context.options;
      var lang=options.langInfo;
      var imageLimitation='';
      if(options.maximumImageFileSize){
        var unit=Math.floor(Math.log(options.maximumImageFileSize)/Math.log(1024));
        var readableSize=(options.maximumImageFileSize/Math.pow(1024,unit)).toFixed(2)*1+' '+' KMGTP'[unit]+'B';
        imageLimitation='<small>'+lang.image.maximumFileSize+' : '+readableSize+'</small>';
      }
      context.memo('button.imageAttributes',function(){
        var button=ui.button({
          contents:options.imageAttributes.icon,
          tooltip:lang.imageAttributes.tooltip,
          click:function(e){
            context.invoke('imageAttributes.show');
          }
        });
        return button.render();
      });
      this.initialize=function(){
        var $container=options.dialogsInBody?$(document.body):$editor;
        if(options.imageDialogLayout=='horizontal'){
          var body='<dl class="dl-horizontal">';
          if (options.displayFields.imageBasic) {
              body += '<dt><label for="note-image-attributes-title">'+lang.imageAttributes.title+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-title" class="note-image-attributes-title form-control"></dd>'+
              '<dt><label for="note-image-attributes-src">'+lang.imageAttributes.src+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-src" class="note-image-attributes-src form-control"></dd>'+
              '<dt><label for="note-group-select-from-files"></label></dt>'+
              '<dd><input type="file" id="note-group-select-from-files" name="file" accept="image/*" class="note-image-input form-control">'+imageLimitation+'</dd>'+
              '<dt></dt>'+
              '<dd><small class="help-block">'+lang.imageAttributes.srcHelp+'</small></dd>'+
              '<dt><label for="note-image-attributes-alt">'+lang.imageAttributes.alt+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-alt" class="note-image-attributes-alt form-control"></dd>';
          }
          if (options.displayFields.imageExtra) {
              body += '<dt><label for="note-image-attributes-class">'+lang.imageAttributes.class+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-class" class="note-image-attributes-class form-control"></dd>'+
              '<dt><label for="note-image-attributes-style">'+lang.imageAttributes.style+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-style" class="note-image-attributes-style form-control"></dd>'+
              '<dt><label for="note-image-attributes-role">'+lang.imageAttributes.role+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-role" class="note-image-attributes-role form-control"></dd>';
          }
          body += '</dl>'+
            '<hr>';
          if (options.displayFields.linkBasic) {
              body += '<h4>'+lang.imageAttributes.pluginLinkTitle+'</h4>'+
            '<dl class="dl-horizontal">'+
              '<dt><label for="note-image-attributes-link-href">'+lang.imageAttributes.href+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-link-href" class="note-image-attributes-href form-control"></dd>'+
              '<dt><label for="note-image-attributes-link-target">'+lang.imageAttributes.target+'</label></dt>'+
              '<dd><select id="note-image-attributes-link-target" class="note-image-attributes-target form-control">'+
                '<option value="_self">Self</option>'+
                '<option value="_blank">Blank</option>'+
                '<option value="_top">Top</option>'+
                '<option value="_parent">Parent</option>'+
              '</select></dd>';
          }
          if (options.displayFields.linkExtra) {
              body += '<dt><label for="note-image-attributes-link-class">'+lang.imageAttributes.linkClass+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-link-class" class="note-image-attributes-link-class form-control"></dd>'+
              '<dt><label for="note-image-attributes-link-rel">'+lang.imageAttributes.rel+'</label></dt>'+
              '<dd><select id="note-image-attributes-link-rel" class="note-image-attributes-link-rel form-control">'+
                '<option value="">'+lang.imageAttributes.relBlank+'</option>'+
                '<option value="alternate">'+lang.imageAttributes.relAlternate+'</option>'+
                '<option value="author">'+lang.imageAttributes.relAuthor+'</option>'+
                '<option value="bookmark">'+lang.imageAttributes.relBookmark+'</option>'+
                '<option value="help">'+lang.imageAttributes.relHelp+'</option>'+
                '<option value="license">'+lang.imageAttributes.relLicense+'</option>'+
                '<option value="next">'+lang.imageAttributes.relNext+'</option>'+
                '<option value="nofollow">'+lang.imageAttributes.relNofollow+'</option>'+
                '<option value="noreferrer">'+lang.imageAttributes.relNoreferrer+'</option>'+
                '<option value="prefetch">'+lang.imageAttributes.relPrefetch+'</option>'+
                '<option value="prev">'+lang.imageAttributes.relPrev+'</option>'+
                '<option value="search">'+lang.imageAttributes.relSearch+'</option>'+
                '<option value="tag">'+lang.imageAttributes.relTag+'</option>'+
              '</select></dd>'+
              '<dt><label for="note-image-attributes-link-role">'+lang.imageAttributes.linkRole+'</label></dt>'+
              '<dd><input type="text" id="note-image-attributes-link-role" class="note-image-attributes-link-role form-control"></dd>';
          }
          body += '</dl>';
        }else{
          var body='<div class="form-group">';
          if (options.displayFields.imageBasic) {
              body += '<label for="note-image-attributes-title" class="control-label col-xs-2">'+lang.imageAttributes.title+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-title" class="note-image-attributes-title form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-src" class="control-label col-xs-2">'+lang.imageAttributes.src+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-src" class="note-image-attributes-src form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group note-group-select-from-files">'+
              '<label class="control-label col-xs-2"></label>'+
              '<div class="input-group col-xs-10">'+
                '<input class="note-image-input form-control" type="file" name="file" accept="image/*" />'+imageLimitation+
                '<small class="help-block">'+lang.imageAttributes.srcHelp+'</small>'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-alt" class="control-label col-xs-2">'+lang.imageAttributes.alt+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-alt" class="note-image-attributes-alt form-control">'+
              '</div>'+
            '</div>';
          }
          if (options.displayFields.imageExtra) {
              body += '<div class="form-group">'+
              '<label for="note-image-attributes-class" class="control-label col-xs-2">'+lang.imageAttributes.class+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-class" class="note-image-attributes-class form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-style" class="control-label col-xs-2">'+lang.imageAttributes.style+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-style" class="note-image-attributes-style form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-role" class="control-label col-xs-2">'+lang.imageAttributes.role+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-role" class="note-image-attributes-role form-control">'+
              '</div>'+
            '</div>';
          }
          if (options.displayFields.linkBasic || options.displayFields.linkExtra) {
            body += '<h4>'+lang.imageAttributes.pluginLinkTitle+'</h4>'+
              '<hr>';
          }
          if (options.displayFields.linkBasic) {
              body += '<div class="form-group">'+
              '<label for="note-image-attributes-link-href" class="control-label col-xs-2">'+lang.imageAttributes.href+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-link-href" class="note-image-attributes-href form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-link-target" class="control-label col-xs-2">'+lang.imageAttributes.target+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<select id="note-image-attributes-link-target" class="note-image-attributes-target form-control">'+
                  '<option value="_self">Self</option>'+
                  '<option value="_blank">Blank</option>'+
                  '<option value="_top">Top</option>'+
                  '<option value="_parent">Parent</option>'+
                '</select>'+
              '</div>'+
            '</div>';
          }
          if (options.displayFields.linkExtra) {
              body += '<div class="form-group">'+
              '<label for="note-image-attributes-link-class" class="control-label col-xs-2">'+lang.imageAttributes.linkClass+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-link-class" class="note-image-attributes-link-class form-control">'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-link-rel" class="control-label col-xs-2">'+lang.imageAttributes.rel+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<select id="note-image-attributes-link-rel" class="note-image-attributes-link-rel form-control">'+
                  '<option value="">'+lang.imageAttributes.relBlank+'</option>'+
                  '<option value="alternate">'+lang.imageAttributes.relAlternate+'</option>'+
                  '<option value="author">'+lang.imageAttributes.relAuthor+'</option>'+
                  '<option value="bookmark">'+lang.imageAttributes.relBookmark+'</option>'+
                  '<option value="help">'+lang.imageAttributes.relHelp+'</option>'+
                  '<option value="license">'+lang.imageAttributes.relLicense+'</option>'+
                  '<option value="next">'+lang.imageAttributes.relNext+'</option>'+
                  '<option value="nofollow">'+lang.imageAttributes.relNofollow+'</option>'+
                  '<option value="noreferrer">'+lang.imageAttributes.relNoreferrer+'</option>'+
                  '<option value="prefetch">'+lang.imageAttributes.relPrefetch+'</option>'+
                  '<option value="prev">'+lang.imageAttributes.relPrev+'</option>'+
                  '<option value="search">'+lang.imageAttributes.relSearch+'</option>'+
                  '<option value="tag">'+lang.imageAttributes.relTag+'</option>'+
                '</select>'+
              '</div>'+
            '</div>'+
            '<div class="form-group">'+
              '<label for="note-image-attributes-link-role" class="control-label col-xs-2">'+lang.imageAttributes.linkRole+'</label>'+
              '<div class="input-group col-xs-10">'+
                '<input type="text" id="note-image-attributes-link-role" class="note-image-attributes-link-role form-control">'+
              '</div>'+
            '</div>';
          }
        }
        this.$dialog=ui.dialog({
          title:lang.imageAttributes.dialogTitle,
          body:body,
          footer:'<button href="#" class="btn btn-primary note-image-attributes-btn">OK</button>'
        }).render().appendTo($container);
      };
      this.destroy=function(){
        ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      };
      this.bindEnterKey=function($input,$btn){
        $input.on('keypress',function(event){
          if(event.keyCode===13)$btn.trigger('click');
        });
      };
      this.bindLabels=function(){
      	self.$dialog.find('.form-control:first').focus().select();
      	self.$dialog.find('label').on('click',function(){
      		$(this).parent().find('.form-control:first').focus();
      	});
      };
      this.show=function(){
        var $img=$($editable.data('target'));
        var imgInfo={
          imgDom:$img,
          title:$img.attr('title'),
          src:$img.attr('src'),
          alt:$img.attr('alt'),
          role:$img.attr('role'),
          class:$img.attr('class'),
          style:$img.attr('style'),
          imgLink:$($img.context).parent().is("a")?$($img.context).parent():null
        };
        this.showLinkDialog(imgInfo)
            .then(function(imgInfo){
              ui.hideDialog(self.$dialog);
              var $img=imgInfo.imgDom;
              if(options.imageAttributes.removeEmpty){
                if(imgInfo.alt)$img.attr('alt',imgInfo.alt);else $img.removeAttr('alt');
                if(imgInfo.title)$img.attr('title',imgInfo.title);else $img.removeAttr('title');
                if(imgInfo.src)$img.attr('src',imgInfo.src);else $img.attr('src', '#');
                if(imgInfo.class)$img.attr('class',imgInfo.class);else $img.removeAttr('class');
                if(imgInfo.style)$img.attr('style',imgInfo.style);else $img.removeAttr('style');
                if(imgInfo.role)$img.attr('role',imgInfo.role);else $img.removeAttr('role');
              }else{
                $img.attr('alt',imgInfo.alt);
                $img.attr('title',imgInfo.title);
                $img.attr('class',imgInfo.class);
                $img.attr('style',imgInfo.style);
                $img.attr('role',imgInfo.role);
              }
              if($img.parent().is("a"))$img.unwrap();
              var hrefRegex=new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi);
              if(imgInfo.href.match(hrefRegex)){
                var lnktxt='<a';
                if(imgInfo.linkClass)lnktxt+=' class="'+imgInfo.linkClass+'"';
                lnktxt+=' href="'+imgInfo.href+'" target="'+imgInfo.target+'"';
                if(imgInfo.linkRel)lnktxt+=' rel="'+imgInfo.linkRel+'"';
                if(imgInfo.linkRole)lnktxt+=' role="'+imgInfo.linkRole+'"';
                lnktxt+='></a>';
                $img.wrap(lnktxt);
              }
              $note.val(context.invoke('code'));
              $note.change();
            });
      };
      this.showLinkDialog=function(imgInfo){
        return $.Deferred(function(deferred){
          var $imageTitle=self.$dialog.find('.note-image-attributes-title'),
              $imageInput=self.$dialog.find('.note-image-input'),
              $imageSrc=self.$dialog.find('.note-image-attributes-src'),
              $imageAlt=self.$dialog.find('.note-image-attributes-alt'),
              $imageClass=self.$dialog.find('.note-image-attributes-class'),
              $imageStyle=self.$dialog.find('.note-image-attributes-style'),
              $imageRole=self.$dialog.find('.note-image-attributes-role'),
              $linkHref=self.$dialog.find('.note-image-attributes-href'),
              $linkTarget=self.$dialog.find('.note-image-attributes-target'),
              $linkClass=self.$dialog.find('.note-image-attributes-link-class'),
              $linkRel=self.$dialog.find('.note-image-attributes-link-rel'),
              $linkRole=self.$dialog.find('.note-image-attributes-link-role'),
              $editBtn=self.$dialog.find('.note-image-attributes-btn');
          if(imgInfo.imgLink){
            $linkHref.val(imgInfo.imgLink.attr('href'));
            $linkClass.val(imgInfo.imgLink.attr('class'));
            $linkRole.val(imgInfo.imgLink.attr('role'));
            $linkTarget.find('option').each(function(){
              if($(this).val()==imgInfo.imgLink.attr('target'))$(this).attr('selected','selected');
            });
            $linkRel.find('option').each(function(){
              if($(this).val()==imgInfo.imgLink.attr('rel'))$(this).attr('selected','selected');
            });
          }
          ui.onDialogShown(self.$dialog,function(){
            context.triggerEvent('dialog.shown');
            $imageInput.replaceWith(
              $imageInput.clone()
                         .on('change',function(){
                           var callbacks=options.callbacks;
                           if(callbacks.onImageUpload){
                             context.triggerEvent('image.upload',this.files[0]);
                           }else{
                             readFileAsDataURL(this.files[0]).then(function(dataURL){
                               $imageSrc.val(dataURL)
                             }).fail(function(){
                               context.triggerEvent('image.upload.error');
                             });
                           }
                         }).val('')
            );
            $editBtn.click(function(e){
              e.preventDefault();
              deferred.resolve({
                imgDom:imgInfo.imgDom,
                title:$imageTitle.val(),
                src:$imageSrc.val(),
                alt:$imageAlt.val(),
                class:$imageClass.val(),
                style:$imageStyle.val(),
                role:$imageRole.val(),
                href:$linkHref.val(),
                target:$linkTarget.val(),
                linkClass:$linkClass.val(),
                linkRel:$linkRel.val(),
                linkRole:$linkRole.val()
              });
            });
            $imageTitle.val(imgInfo.title).focus;
            $imageSrc.val(imgInfo.src)
            $imageAlt.val(imgInfo.alt);
            $imageClass.val(imgInfo.class);
            $imageStyle.val(imgInfo.style);
            $imageRole.val(imgInfo.role);
            self.bindEnterKey($editBtn);
            self.bindLabels();
          });
          ui.onDialogHidden(self.$dialog,function(){
            $editBtn.off('click');
            if(deferred.state()==='pending')deferred.reject();
          });
          ui.showDialog(self.$dialog);
        });
      };
    }
  });
}));
